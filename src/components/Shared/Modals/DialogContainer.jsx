import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
//icon
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

DialogContainer.propTypes = {
  openHandle: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.object
}

export default function DialogContainer(props = {}) {
  const { openHandle, handleClose, children } = props;

  return (
    <BootstrapDialog
      open={openHandle}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      scroll={"body"}
    >
      {children}
      {handleClose ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

    </BootstrapDialog>
  );
}