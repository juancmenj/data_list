import * as React from 'react';
//import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//components
import HistoryTimeLine from '../../../components/User/HistoryTimeLine';
//images
import dobleCheck from '../../../images/dobleCheck.png';
import mecanico from '../../../images/mecanico.png';
//styled
import { DashboardWrapper, ImageLogo, MainBoxPaper, BoxPaper } from './styled';

//Dashboard.propTypes = {};

export default function Dashboard(props = {}) {
  return (
    <React.Fragment>
      <MainBoxPaper sx={{ background: { xs: 'none', md: `url(${mecanico})` } }}>
        <Grid container >
          <Grid xs={12} md={8}>
            <DashboardWrapper>
              <ImageLogo src={dobleCheck} alt="" />
              <Typography variant="h4" color="text.primary">Dashboard</Typography>
              <Typography color="text.primary">Bienvenido al panel de control de <em>Double Check</em></Typography>
              <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
                <Grid xs={6} sm={4} lg={3}>
                  <BoxPaper elevation={3} >
                    <Typography color="text.primary">Actividades</Typography>
                    <Typography
                      variant="h2"
                      color="text.primary"
                      sx={{ textAlign: 'center'}}
                    >5</Typography>
                  </BoxPaper>
                </Grid>
                <Grid xs={6} sm={4} lg={3}>
                  <BoxPaper elevation={3} >
                    <Typography color="text.primary">Pendientes</Typography>
                    <Typography
                      variant="h2"
                      color="text.primary"
                      sx={{ textAlign: 'center' }}
                    >8</Typography>
                  </BoxPaper>
                </Grid>
                <Grid xs={6} sm={4} lg={3}>
                  <BoxPaper elevation={3} >
                    <Typography color="text.primary">Usuarios</Typography>
                    <Typography
                      variant="h2"
                      color="text.primary"
                      sx={{ textAlign: 'center'}}
                    >14</Typography>
                  </BoxPaper>
                </Grid>
              </Grid>
            </DashboardWrapper>
          </Grid>
        </Grid>
      </MainBoxPaper>
      <MainBoxPaper>
        <Typography variant="h4" color="text.primary">Timeline</Typography>
        <Typography color="text.primary">Todo el historico de cambios</Typography>
        <Grid container>
          <Grid xs={12}>
            <HistoryTimeLine />
          </Grid>
        </Grid>
      </MainBoxPaper>
    </React.Fragment>
  );
}

