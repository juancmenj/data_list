import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const ActivityWrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}));


export const MainBoxPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  marginTop: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
  backgroundRepeat: 'no-repeat !important',
  backgroundPosition: 'center center !important',
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    minHeight: '64vh',
    padding: '4rem',
    backgroundPosition: 'center right !important',
    backgroundColor: 'rgba(255, 255, 255, 0.4) !important'
  }
}));

export const BoxPaper = styled(MainBoxPaper)(({ theme }) => ({
  height: 'auto',
  padding: '0.6rem',
  margin: '0.5rem',
  '&:first-child': {
    margin: '0.2rem 1rem 1rem',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '1rem'
  }
}));


