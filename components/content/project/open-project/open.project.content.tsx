import {Container, Grid, makeStyles, Typography} from '@material-ui/core';
import {lighten} from '@material-ui/core/styles';
import React from 'react';
import {IProject} from '../../../../lib/models/project.model';
import {services} from '../../../../services';
import OpenProjectBid from './bid/open.project.bid';
import {OpenProjectChooseBid} from './bid/open.project.choose-bid';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
    },
    leftContainer: {},
    rightContainer: {
        borderLeftColor: lighten(theme.palette.background.default, 0.05),
        borderLeftWidth: 1.5,
        borderLeftStyle: 'solid',
    },
    indent: {
        marginTop: theme.spacing(1),
        paddingLeft: theme.spacing(4),
    },
}));

interface IProps {
    project: IProject;
}

const OpenProjectContent: React.FunctionComponent<IProps> = props => {
    const classes = useStyles();

    const renderFiles = (files: string[] | undefined) => {
        if (files != null && files.length > 0) {
            return (
                <Grid item xs={12}>
                    <Typography variant={'h5'} color='primary'>
                        files
                    </Typography>
                    <Typography variant={'body1'} className={classes.indent}>
                        {files}
                    </Typography>
                </Grid>
            );
        }
    };

    const renderBidding = () => {
        if (props.project.ownerId != null) {
            if (props.project.ownerId === services.authentication.getId()) {
                return <div>Is owner</div>;
                return (
                    <Grid item xs={12}>
                        <OpenProjectChooseBid/>
                    </Grid>
                );
            } else {
                return (
                    <Grid item xs={12}>
                        <OpenProjectBid/>
                    </Grid>
                );
            }
        }
    };

    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.leftContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={'h4'} color='primary'>
                                {props.project.projectContent.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={'h5'} color='primary'>
                                Description
                            </Typography>
                            <Typography variant={'body1'} className={classes.indent}>
                                {props.project.projectContent.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={'h5'} color='primary'>
                                Category
                            </Typography>
                            <Typography variant={'body1'} className={classes.indent}>
                                {props.project.projectContent.category}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={'h5'} color='primary'>
                                Sub Category
                            </Typography>
                            <Typography variant={'body1'} className={classes.indent}>
                                {props.project.projectContent.subCategory}
                            </Typography>
                        </Grid>
                        {renderFiles(props.project.projectContent.files)}
                        {renderBidding()}
                    </Grid>
                </Grid>
                <Grid item xs={4} className={classes.rightContainer}>
                    Profile
                </Grid>
            </Grid>
        </Container>
    );
};

export default OpenProjectContent;
