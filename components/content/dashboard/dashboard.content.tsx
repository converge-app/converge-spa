import {Link, makeStyles} from '@material-ui/core';
import React from 'react';
import NormalLink from '../../styles/links/link.normal';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'grid',
        gridTemplateAreas: `
        'leftside center rightside'
        `,
        gridTemplateColumns: '25% 50% 25%',
        gridGap: 20,
        padding: theme.spacing(8, 20),
    },
    leftSide: {
        gridArea: 'leftside',
    },
    center: {
        gridArea: 'center',
        textAlign: 'center',
    },
    rightSide: {
        gridArea: 'rightside',
        textAlign: 'right',
    },
}));

const DashboardContent: React.FunctionComponent = () => {

    const classes = useStyles();
    return <div className={classes.container}>
        <div className={classes.leftSide}>
            <div>
                <NormalLink href={'/projects/create'}>
                    <Link>Create a Project</Link>
                </NormalLink>
            </div>
            <br/>
            <div>
                <NormalLink href={'/projects'}>
                    <Link>Find a Project</Link>
                </NormalLink>
            </div>
        </div>
        <div className={classes.center}>
        </div>
        <div className={classes.rightSide}>
        </div>
    </div>;
};

export default DashboardContent;
