import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import MoreTwoToneIcon from '@mui/icons-material/MoreTwoTone';
//components
import DialogContainer from "../../components/Shared/Modals/DialogContainer";
import Register from "../../components/Authentication/Register";
import LogIn from "../../components/Authentication/LogIn";
//images
import robot from '../../images/robot.png';
//styled
import { CenterWrapper, HomeWrapper, Image, BoxPaper } from './styled';

export default function Homepage() {
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogIn, setOpenLogIn] = React.useState(false);

  function handleClickOpenRegister() {
    setOpenLogIn(false);
    setOpenRegister(true);
  }

  function handleCloseRegister() {
    setOpenRegister(false);
  }

  function handleClickOpenLogIn() {
    setOpenRegister(false);
    setOpenLogIn(true);
  }

  function handleCloseLogIn() {
    setOpenLogIn(false);
  }

  return (
    <React.Fragment>
      <Grid container >
        <Grid xs={12} md={6}>
          <CenterWrapper>
            <HomeWrapper>
              <Typography variant="h2" component="h1" color="#2e7d32" sx={{ fontWeight: 'bold' }}>Asegura el control</Typography>
              <Typography variant="h4" component="h1" color="#677767">Sistema de bitacoras <strong>dataLIST</strong></Typography>
              <Typography variant="h5" component="h2" color="#8c8c8c"><em>Registra tus operaciones de forma fácil y eficiente.</em></Typography>
              <Stack direction="row" spacing={2} sx={{ marginTop: '2rem', width: `80%`, height: `3.2rem` }}>
                <Button onClick={() => handleClickOpenRegister()} variant="contained" color="success" size="large" sx={{ width: `50%` }} startIcon={<HowToRegTwoToneIcon />}>Regístrate</Button>
                <Button variant="outlined" color="success" size="large" sx={{ width: `50%` }} startIcon={<MoreTwoToneIcon />}>Conoce más</Button>
              </Stack>
            </HomeWrapper>
          </CenterWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CenterWrapper>
            <Image src={robot} alt="" />
          </CenterWrapper>
        </Grid>
        <Grid item xs={12}>
          <BoxPaper>
            Hola homepage
          </BoxPaper>
        </Grid>
      </Grid>
      <DialogContainer
        openHandle={openRegister}
        handleClose={() => handleCloseRegister()}
      >
        <Register handleClose={() => handleCloseRegister()} handleOpenLogin={() => handleClickOpenLogIn()} />
      </DialogContainer>

      <DialogContainer
        openHandle={openLogIn}
        handleClose={() => handleCloseLogIn()}
      >
        <LogIn handleClose={() => handleCloseLogIn()} handleOpenRegister={() => handleClickOpenRegister()} />
      </DialogContainer>
    </React.Fragment >
  );
}

