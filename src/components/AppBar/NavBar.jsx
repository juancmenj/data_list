import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
//icons
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
//components
import NavMenu from './Menu';
import AccountMenu from "../User/AccountMenu";
import LeftDrawer from './LeftDrawer';
import SearchHistory from './SearchHistory';
import Register from "../Authentication/Register";
import LogIn from "../Authentication/LogIn";
import DialogContainer from "../Shared/Modals/DialogContainer";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Logo = styled(Typography)(() => ({
  marginRight: '2rem',
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
  flexGrow: 1
}
));

NavBar.propTypes = {
  isAuth: PropTypes.bool,
  isOpenDrawer: PropTypes.func
}

export function NavBar(props = {}) {
  //breakpoint
  const md = useMediaQuery(useTheme().breakpoints.up('md'));
  //init states
  const [openDrawer, setOpenDrawer] = React.useState(md ? true : false);
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

  function handleDrawerOpen() {
    setOpenDrawer(true);
    props.isOpenDrawer(true);
  };

  function handleDrawerClose(isClose) {
    setOpenDrawer(isClose);
    props.isOpenDrawer(isClose);
  };

  if (props.isAuth) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" open={openDrawer} sx={{ background: 'rgba(68,89,100,1)' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerOpen()}
              edge="start"
              sx={{ marginRight: 1, ...(openDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            {
              !openDrawer ?
                <React.Fragment>
                  <CreateNewFolderIcon sx={{ mr: 1 }} />
                  <Logo variant="h6" noWrap>dataLIST</Logo>
                </React.Fragment>
                : <Logo />
            }
            <SearchHistory />
            <AccountMenu />
          </Toolbar>
        </AppBar>
        <LeftDrawer
          openHandle={openDrawer}
          closeHandle={(isClose) => handleDrawerClose(isClose)}
        />
      </Box>
    );
  } else {
    return (
      <Box>
        <AppBar position="fixed" sx={{ background: '#445964' }}>
          <Toolbar>
            <CreateNewFolderIcon sx={{ mr: 1 }} />
            <Logo variant="h6" noWrap >dataLIST</Logo>
            <Box sx={{ mr: 1 }}>
              <Button onClick={() => handleClickOpenLogIn()} color="inherit" sx={{ textTransform: `none` }}>Inicia sesión</Button>
            </Box>
            <NavMenu />
          </Toolbar>
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
        </AppBar>
      </Box>
    );
  }

}
