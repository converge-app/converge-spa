import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { IContact } from '../../../lib/models/contact.model';
import { IProfile } from '../../../lib/models/profile.model';
import { IUser } from '../../../lib/models/user.model';
import { services } from '../../../services';
import { ProfileService } from '../../../services/profile.service';
import { UserService } from '../../../services/user.service';

const Contact = (props: {
  contact: IContact;
  index: number;
  onClick: () => void;
}) => {
  const [user, setUser] = React.useState<IUser>();
  const [profile, setProfile] = React.useState<IProfile>();

  useEffect(() => {
    let userId = '';

    if (props.contact.senderId === services.authentication.getId()) {
      userId = props.contact.receiverId;
    } else {
      userId = props.contact.senderId;
    }

    UserService.getByUserId(userId)
      .then((user: IUser) => {
        setUser(user);
      })
      .catch(err => {
        throw err;
      });

    ProfileService.getByUserId(userId).then(
      (response: AxiosResponse<IProfile>) => {
        setProfile(response.data);
      },
    );
  }, []);

  if (user && profile) {
    return (
      <div key={props.index} onClick={props.onClick}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={profile.profilePictureUrl}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
          ></ListItemText>
        </ListItem>
        <Divider></Divider>
      </div>
    );
  } else {
    return null;
  }
};

export default Contact;
