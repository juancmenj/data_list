import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter } from "react-router-dom";
//router
import Router from "../../routes/allRoutes";
//components
import { NavBar } from '../../components/AppBar/NavBar';

const RouterOutlet = styled('div', { shouldForwardProp: (prop) => prop })(({ theme, openDrawer, isAuth }) => ({
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(4),
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    marginLeft: openDrawer && isAuth ? theme.spacing(30) : theme.spacing(0)
  }
}));

export default function App() {
  //breakpoint
  const md = useMediaQuery(useTheme().breakpoints.up('md'));
  //init states
  const [isAuth, setIsAuth] = React.useState();
  const [openDrawer, setOpenDrawer] = React.useState(md ? true : false);

  React.useEffect(() => {
    setIsAuth(true);
  }, []);

  function isOpenDrawer(open) {
    setOpenDrawer(open);
  }

  return (
    <RouterOutlet isAuth={isAuth} openDrawer={openDrawer}>
      <BrowserRouter>
        <NavBar isAuth={isAuth} isOpenDrawer={(open) => isOpenDrawer(open)} />
        <Router />
      </BrowserRouter>
    </RouterOutlet>
  );
}
