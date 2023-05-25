import * as React from 'react';
//import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import SearchAutocomplete from "./SearchAutocomplete";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white !important',
  width: '100% !important',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4),
    width: '100%',
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
  [theme.breakpoints.up('md')]: {
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