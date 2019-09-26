import React from 'react';
import ConvergeIcon from '../../styles/converge-icon';

interface INavBarIconProps {
  className?: any;
  height: number;
  width: number;
}

export const NavBarIcon = (props: INavBarIconProps) => (
  <div className={props.className}>
    <ConvergeIcon height={props.height} width={props.width} />
  </div>
);
