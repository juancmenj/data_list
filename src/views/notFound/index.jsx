import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//images
import CoffieMaker from "../../images/coffee-maker.png";

const Img = styled("img")(() => ({
  width: '10rem',
  height: '10rem'
}));

const ImgBox = styled(Box)(() => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center'
}));

export default function NotFound() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <ImgBox>
            <Img src={CoffieMaker} alt="" />
          </ImgBox>
          <Typography variant="h1">404</Typography>
          <p>Página no encontrada</p>
        </Box>
      </Grid>
    </Grid>
  );
}

