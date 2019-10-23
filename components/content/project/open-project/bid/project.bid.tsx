import {Button, Grid, Link, Typography} from '@material-ui/core';
import React, {useEffect} from 'react';
import {IBid} from '../../../../../lib/models/bid.model';
import {IUser} from '../../../../../lib/models/user.model';
import {services} from '../../../../../services';
import {UserService} from '../../../../../services/user.service';

export function Bid(props: { ownerId: string, item: IBid, onClick: () => void }) {

    const [email, setEmail] = React.useState('')

    const getEmail = async (bid: IBid) => {
        if (bid.freelancerId) {
            const user: IUser = await UserService.getByUserId(bid.freelancerId);
            setEmail(user.email);
        }
    }

    useEffect(() => {
        getEmail(props.item).finally(() => {
            console.log('Was called')
        });
    }, [])

    return <Grid
        container
        direction={'row'}
        spacing={2}
        justify='center'
        alignItems='center'
    >
        {props.ownerId === services.authentication.getId() ? (
            <>
                <Grid item xs={9}>
                    <Link href={'/users/' + props.item.freelancerId}>
                        <Typography variant={'h6'} color='primary'>
                            {email}
                        </Typography>
                    </Link>
                    <Typography variant='body1'>
                        <strong>Amount: </strong>
                        {props.item.amount}$
                    </Typography>
                    {props.item.message ? (
                        <Typography variant='body2'>
                            <strong>Message: </strong>
                            {props.item.message}
                        </Typography>
                    ) : null}
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onClick={props.onClick}
                    >
                        Choose
                    </Button>
                </Grid>
            </>
        ) : (
            <>
                {props.item.freelancerId === services.authentication.getId() ? (
                    <div>Is owner of bid</div>
                ) : null}
                <Grid item xs={12}>
                    <Link>
                        <Typography variant={'h6'} color='primary'>
                            {email}
                        </Typography>
                    </Link>
                    <Typography variant='body1'>
                        <strong>Amount: </strong>
                        {props.item.amount}$
                    </Typography>
                    {props.item.message ? (
                        <Typography variant='body2'>
                            <strong>Message: </strong>
                            {props.item.message}
                        </Typography>
                    ) : null}
                </Grid>
            </>
        )}
    </Grid>;
}
