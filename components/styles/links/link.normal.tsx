import {makeStyles} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

interface INavBarLinkProps {
    className?: any;
    href: string;
    hrefAs?: string;
    children?: any;
}

const useStyles = makeStyles(theme => ({
    link: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 16,
        color: theme.palette.primary.dark,
    },
}));

const NormalLink: React.FunctionComponent<INavBarLinkProps> = props => {
    const classes = useStyles();

    const {className, href, hrefAs, children} = props;
    return (
        <div className={className}>
            <div className={classes.link}>
                <Link href={href} as={hrefAs}>
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default NormalLink;
