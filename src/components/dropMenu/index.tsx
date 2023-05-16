import React from 'react';
import { NavLink } from 'react-router-dom';

import { Autocomplete, TextField } from '@mui/material';

import styles from './dropMenu.module.scss';
import { useArticlesStore } from '../../stores/articles';

export const DropMenu: React.FC = () => {
  const articles = useArticlesStore((state) => state.initialState);

  return (
    <Autocomplete
      className={styles.search}
      disablePortal
      options={articles}
      clearOnEscape
      getOptionLabel={(option) => option.title}
      renderOption={({ className, ...other }, { _id, title }) => (
        <li key={_id} {...other} className={styles.listItem}>
          <NavLink to={`/article/${_id}`}>{title}</NavLink>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label='Title of Article...' variant='outlined' />
      )}
    />
  );
};
