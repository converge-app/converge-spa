import { Typography } from '@material-ui/core';
import NavBarLink from '../../../styles/links/nav-bar.link';
import { INavBarLinkProps } from './nav-bar-link.props';

export function NavBarLinkFreelancers(props: INavBarLinkProps) {
  return (
    <NavBarLink href='/freelancers'>
      <Typography
        variant='body1'
        className={props.className}
        color='textPrimary'
        noWrap
      >
        Freelancers
      </Typography>
    </NavBarLink>
  );
}
