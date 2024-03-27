import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
//images
import CoffieMaker from "../../images/coffee-maker.png";

const Img = styled("img")(() => ({
  width: '10rem',
  height: '10rem'
}));

const Centered = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh'
}
));

export default function NotFound() {
  return (
    <Centered>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Img src={CoffieMaker} alt="" />
        <Box>
          <Typography variant="h1" sx={{ fontWeight: '500' }}>404</Typography>
          <Typography variant="h6">Página no encontrada</Typography>
        </Box>
      </Stack>
    </Centered>
  );
}

