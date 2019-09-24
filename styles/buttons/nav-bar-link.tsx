import Link from 'next/link';
import React from 'react';

interface NavBarLinkProps {
  className?: any;
  href: string;
  hrefAs?: string;
  children?: any;
}

const NavBarLink: React.FunctionComponent<NavBarLinkProps> = props => {
  const { className, href, hrefAs, children } = props;
  return (
    <div className={className}>
      <Link href={href} as={hrefAs}>
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default NavBarLink;
