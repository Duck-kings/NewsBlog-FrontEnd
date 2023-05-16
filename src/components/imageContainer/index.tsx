import React from 'react';
import { Box } from '@mui/material';

import styles from './imageContainer.module.scss';

interface Props {
  image: string;
}

export const ImageContainer: React.FC<Props> = ({ image }) => (
  <Box>
    <img src={image} alt='someImage' className={styles.picture} />
  </Box>
);
