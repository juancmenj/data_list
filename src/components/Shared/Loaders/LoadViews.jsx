import * as React from 'react';
//import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh'
}
));

const BoxLoader = styled(Box)(() => ({
  display: 'flex',
  padding: '1rem 2rem',
  borderRadius: '1rem',
  //background: 'rgba(255, 255, 255,0.8)'
}
));

LoadViews.propTypes = {};

export default function LoadViews(props = {}) {
  return (
    <Backdrop open={true}>
      <Loader>
        <BoxLoader>
          <CircularProgress sx={{ marginRight: '1rem', color: 'white' }} />
          <Typography variant="h4" sx={{ color: 'white' }} >loading...</Typography>
        </BoxLoader>
      </Loader>
    </Backdrop>
  );
}