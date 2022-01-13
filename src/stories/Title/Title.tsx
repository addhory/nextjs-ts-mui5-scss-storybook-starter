import { Typography } from '@mui/material';
import * as React from 'react';

export type Props = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  children: React.ReactNode;
};

const Title = (props: Props) => {
  return <Typography variant={props.variant}>{props.children}</Typography>;
};

export default Title;
