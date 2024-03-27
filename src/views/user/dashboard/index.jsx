import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LoadViews from '../../../components/Shared/Loaders/LoadViews';
//images
import dobleCheck from '../../../images/dobleCheck.png';
import mecanico from '../../../images/mecanico.png';
//styled
import { DashboardWrapper, ImageLogo, MainBoxPaper, BoxPaper } from './styled';

export default function Dashboard(props = {}) {
  const [loading, setLoading] = React.useState(true);
  const timer = React.useRef();

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function renderDashboard() {
    return (
      <MainBoxPaper sx={{ background: { xs: 'none', md: `url(${mecanico})` } }}>
        <Grid container >
          <Grid item xs={12} md={8}>
            <DashboardWrapper>
              <ImageLogo src={dobleCheck} alt="" />
              <Typography variant="h4" color="text.primary">Dashboard</Typography>
              <Typography color="text.primary">Bienvenido al panel de control de <em>Double Check</em></Typography>
              <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
                <Grid item xs={6} sm={4} lg={3}>
                  <BoxPaper elevation={3} >
                    <Typography color="text.primary">Actividades</Typography>
                    <Typography
                      variant="h2"
                      color="text.primary"
                      sx={{ textAlign: 'center' }}
                    >5</Typography>
                  </BoxPaper>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <BoxPaper elevation={3} >
                    <Typography color="text.primary">Usuarios</Typography>
                    <Typography
                      variant="h2"
                      color="text.primary"
                      sx={{ textAlign: 'center' }}
                    >14</Typography>
                  </BoxPaper>
                </Grid>
              </Grid>
            </DashboardWrapper>
          </Grid>
        </Grid>
      </MainBoxPaper>
    );
  }

  function render() {
    if (loading) {
      return <LoadViews />;
    } else {
      return renderDashboard();
    }
  }

  return render();
}

