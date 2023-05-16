import { Backdrop } from '@mui/material';
import React from 'react';
import { Loader } from '../loader';

interface Props {
  open: boolean;
}

export const BackDrop: React.FC<Props> = ({ open }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Backdrop open={isOpen}>
      <Loader />
    </Backdrop>
  );
};
