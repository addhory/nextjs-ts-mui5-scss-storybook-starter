import { Button } from '@mui/material';
import * as React from 'react';

import styles from './_button.module.scss';

function MyButton() {
  return (
    <Button variant='contained' className={styles.blackButton}>
      Sass Button
    </Button>
  );
}

export default MyButton;
