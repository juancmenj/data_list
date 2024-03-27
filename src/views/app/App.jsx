import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter } from "react-router-dom";
//router
import Router from "../../routes/allRoutes";
//components
import { NavBar } from '../../components/AppBar/NavBar';
import SearchInput from '../../components/Shared/Searchs/SearchInput';

const RouterOutlet = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(0),
  paddingTop: theme.spacing(8),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(3)
}));

export default function App() {
  //breakpoint
  const xs = useMediaQuery(useTheme().breakpoints.up('xs'));
  const sm= useMediaQuery(useTheme().breakpoints.up('sm'));

  //init states
  const [isAuth, setIsAuth] = React.useState();

  React.useEffect(() => {
    setIsAuth(true);
  }, []);

  return (
    <RouterOutlet isAuth={isAuth}>
      <BrowserRouter>
        <NavBar isAuth={isAuth} />
        {xs && !sm && <div><SearchInput /></div>}
        <Router />
      </BrowserRouter>
    </RouterOutlet>
  );
}
