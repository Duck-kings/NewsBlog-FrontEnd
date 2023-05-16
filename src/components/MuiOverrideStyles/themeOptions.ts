import type { CSSObject } from '@mui/material';

interface Colors {
  primary: string;
  secondary: string;
  additional: string;
  additionalDark: string;
}

export const colors: Colors = {
  primary: '#F1DCC9',
  secondary: '#42313A',
  additional: '#9F4636',
  additionalDark: '#6C2D2C'
};

export const rootButtonStyle: CSSObject = {
  color: colors.primary,
  textTransform: 'none'
};

export const containedButtonStyle: CSSObject = {
  backgroundColor: colors.additional,
  ':hover': {
    backgroundColor: colors.additionalDark
  }
};

export const outlinedButtonStyle: CSSObject = {
  border: `1px solid ${colors.additional}`,
  ':hover': {
    backgroundColor: colors.additionalDark,
    border: `1px solid ${colors.additional}`
  }
};

export const textFieldStyle: CSSObject = {
  '& .MuiOutlinedInput-root': {
    color: colors.primary,
    '& fieldset': {
      borderColor: colors.additionalDark,
      borderRadius: '10px'
    },
    '&:hover fieldset': {
      borderColor: colors.additional
    },
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: colors.primary
      }
    }
  }
};

export const inputStyle: CSSObject = {
  color: colors.primary,
  ':before': {
    borderBottom: `1px solid ${colors.additional}`
  },
  ':after': {
    borderBottom: `1px solid ${colors.primary}`
  },
  ':hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottom: `1px solid ${colors.additional}`
  }
};

export const labelStyle: CSSObject = {
  color: colors.additional,
  '&.Mui-focused': {
    color: colors.primary
  }
};

export const svgIconStyle: CSSObject = {
  color: colors.additional
};

export const dropMenuStyle: CSSObject = {
  background: colors.secondary,
  color: colors.primary,
  marginTop: '10px'
};

export const menuItemStyle: CSSObject = {
  ':hover': {
    background: colors.additionalDark
  }
};
