import { IContact } from "../../../lib/models/contact.model";
import React, { useEffect } from "react";
import { IUser } from "../../../lib/models/user.model";
import { IProfile } from "../../../lib/models/profile.model";
import { UserService } from "../../../services/user.service";
import { ProfileService } from "../../../services/profile.service";
import { AxiosResponse } from "axios";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import Spinner from "../../styles/utility/spinner";
import { services } from "../../../services";

const Contact = (props: {
  contact: IContact;
  index: number;
  onClick: () => void;
}) => {
  const [user, setUser] = React.useState<IUser>();
  const [profile, setProfile] = React.useState<IProfile>();

  useEffect(() => {
    let userId = "";

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
      }
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
    return <Spinner></Spinner>;
  }
};

export default Contact;
