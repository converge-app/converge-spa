import React from 'react';

interface IconPropTypes {
  height: number;
  width: number;
}

const ConvergeIcon: React.FunctionComponent<IconPropTypes> = (
  props: IconPropTypes,
) => {
  return (
    <div>
      <img
        src='/static/images/converge-icon.svg'
        width={props.width}
        height={props.height}
        alt='Converge icon'
      />
    </div>
  );
};

export default ConvergeIcon;
