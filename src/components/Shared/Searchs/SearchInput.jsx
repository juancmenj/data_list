import * as React from 'react';
//import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import SearchAutocomplete from "./SearchAutocomplete";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white !important',
  width: '100%',
  marginRight: '0rem',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    marginRight: '1rem'
  },
  [theme.breakpoints.up('md')]: {
    marginRight: '2rem'
  }
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const SearchIconColor = styled(SearchIcon)(({ theme }) => ({
  color: 'black !important',
  [theme.breakpoints.up('sm')]: {
    color: 'white !important',
  }
}));

SearchInput.propTypes = {}

export default function SearchInput(props = {}) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIconColor />
      </SearchIconWrapper>
      <SearchAutocomplete />
    </Search>
  );
}