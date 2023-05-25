import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const CenterWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  marginTop: '7rem'
}));

export const HomeWrapper = styled('div')(() => ({
  width: '100%',
  marginTop: '-6rem'
}));

export const Image = styled('img')(() => ({
  maxWidth: '100%'
}));

export const BoxPaper = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.4rem', 
  margin: '1rem',
  backgroundColor: 'rgba(200, 200, 200,0.2)'
}));
