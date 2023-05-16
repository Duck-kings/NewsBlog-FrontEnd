import type { SxProps } from '@mui/material';
import { colors } from './themeOptions';

export const sxEditArticleFile: SxProps = {
  width: 'fit-content',
  padding: '10px 15px',
  border: `1px solid ${colors.additional}`,
  borderRadius: '10px',
  transition: 'all .2s ease-in',

  ':hover': {
    cursor: 'pointer',
    color: colors.primary,
    background: colors.additional
  }
};

export const sxCardArticle: SxProps = {
  display: 'block',
  borderRadius: '5px',
  boxShadow: `0 0 1px 1px ${colors.secondary}, 0 1px 2px 1px ${colors.secondary}`,
  transition: 'all .2s ease-in',
  textDecoration: 'none',
  marginBottom: '15px',

  ':hover': {
    boxShadow: `0 0 1px 1px ${colors.secondary}, 0 1px 10px 1px ${colors.secondary}`
  }
};

export const sxOutlinedTextField: SxProps = {
  '& .MuiOutlinedInput-root': {
    color: colors.secondary,
    '& fieldset': {
      borderColor: colors.secondary,
      borderRadius: '10px'
    },
    '&:hover fieldset': {
      borderColor: colors.additional,
      boxShadow: `0 0 5px 1px ${colors.additional}`
    },
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: colors.secondary
      }
    }
  }
};

export const sxOutlinedLabel: SxProps = {
  '& .MuiFormLabel-root': {
    color: colors.additional,
    '&.Mui-focused': {
      color: colors.additional
    }
  }
};

export const sxUserInfo: SxProps = {
  display: {
    lg: 'block',
    xs: 'none'
  }
};

export const sxDrawer: SxProps = {
  width: {
    sm: '300px',
    xs: '250px'
  },
  '& .MuiPaper-root': {
    color: colors.primary,
    backgroundColor: colors.secondary,
    width: {
      sm: '300px',
      xs: '250px'
    }
  }
};

export const sxLogOutBtn: SxProps = {
  border: '1px solid #e60b0b',

  ':hover': {
    border: '1px solid #e60b0b',
    backgroundColor: '#b50909'
  }
};
