import * as React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
//icons
import AddIcon from '@mui/icons-material/Add';
//components
import HistoryTimeLine from '../../../components/User/HistoryTimeLine';
import LoadViews from '../../../components/Shared/Loaders/LoadViews';

//styled
import { ActivityWrapper, MainBoxPaper } from './styled';

export default function Activity(props = {}) {
  const { userId } = useParams();
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

  function renderActivity() {
    return (
      <MainBoxPaper>
        <Typography variant="h4" color="text.primary">Timeline</Typography>
        <Typography color="text.primary">Todo el historico de cambios</Typography>
        <Grid container>
          <Grid item xs={12}>
            <HistoryTimeLine />
          </Grid>
        </Grid>
      </MainBoxPaper>
    );
  }

  function renderFindActivity() {
    return (
      <MainBoxPaper>
        <Grid container >
          <Grid item xs={12} md={8}>
            <ActivityWrapper>
              <Typography variant="h4" color="text.primary">Activity</Typography>
              <Typography color="text.primary">Buscar historicos</Typography>
            </ActivityWrapper>
          </Grid>
        </Grid>
      </MainBoxPaper>
    );
  }

  function render() {
    if (loading) {
      return <LoadViews />;
    } else {
      if (userId) {
        return (
          <React.Fragment>
            {renderActivity()}
            <Fab color='success' sx={{ position: 'fixed', bottom: 38, right: 28, background: 'rgba(68,89,100,1)', color: 'white' }} >
              <AddIcon />
            </Fab>
          </React.Fragment>
        );
      } else {
        return renderFindActivity();
      }
    }
  }

  return render();
}

