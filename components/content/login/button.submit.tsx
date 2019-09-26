import { Button } from '@material-ui/core';
import React from 'react';

export function SubmitButton(props: {
  className?: any;
  disabled: boolean;
  onClick: () => void;
  buttonText: string;
}) {
  return (
    <Button
      variant='outlined'
      color='secondary'
      size='large'
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.buttonText.toUpperCase()}
    </Button>
  );
}
