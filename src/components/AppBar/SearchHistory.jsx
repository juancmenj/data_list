import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import SearchInput from "../../components/Shared/Searchs/SearchInput";
import SearchModal from "../../components/Shared/Searchs/SearchModal";

const XsOnly = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

const MdUp = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

export default function SearchHistory() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MdUp>
        <SearchInput />
      </MdUp>
      <XsOnly>
        <IconButton onClick={handleClickOpen} size="large" aria-label="search" color="inherit" sx={{ mr: 2 }}>
          <SearchIcon />
        </IconButton>
        <SearchModal open={open} handleClose={handleClose} />
      </XsOnly>
    </React.Fragment>
  );
}