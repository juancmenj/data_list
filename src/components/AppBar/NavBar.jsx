import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
//icons
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
//components
import NavMenu from './NavMenu';
import AccountMenu from "../User/AccountMenu";
import Register from "../Authentication/Register";
import LogIn from "../Authentication/LogIn";
import DialogContainer from "../Shared/Modals/DialogContainer";
import SearchInput from '../Shared/Searchs/SearchInput';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const Logo = styled(Typography)(({ theme }) => ({
  marginRight: '2rem',
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.06rem',
  color: 'inherit',
  textDecoration: 'none',
  flexGrow: 1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    letterSpacing: '0.1rem',
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  }
}
));

const FabIcon = styled(Fab)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0),
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.09)
  },
  '&:active': {
    backgroundColor: alpha(theme.palette.common.black, 0.01)
  },
  marginRight: '0.4rem'
}
));

NavBar.propTypes = {
  isAuth: PropTypes.bool
}

export function NavBar(props = {}) {
  //breakpoint
  const sm = useMediaQuery(useTheme().breakpoints.up('sm'));
  //init states
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

  function renderIcon(iconName) {
    const icons = {
      "DashboardTwoToneIcon": DashboardTwoToneIcon,
      "AccountTreeTwoToneIcon": AccountTreeTwoToneIcon,
      "VpnKeyTwoToneIcon": VpnKeyTwoToneIcon
    };

    const Component = icons[iconName];
    return <Component />;
  }

  function renderMenuAuth() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ background: 'rgba(68,89,100,1)' }}>
          <Toolbar>
            <CreateNewFolderIcon sx={{ mr: 1 }} />
            <Logo noWrap>dataLIST</Logo>
            {sm && <SearchInput />}
            <NavMenu />
            <AccountMenu />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  function renderMenu() {
    const staticLink = [
      { label: 'Inicia sesión', icon: 'VpnKeyTwoToneIcon', route: "/user/dashboard" }
    ];
    return (
      <Box>
        <AppBar position="fixed" sx={{ background: '#445964' }}>
          <Toolbar disableGutters>
            <CreateNewFolderIcon sx={{ mr: 1 }} />
            <Logo variant="h6" noWrap >dataLIST</Logo>
            <Box sx={{ mr: 1 }}>
              {
                staticLink?.map((el, index) => {
                  return (
                    <Tooltip title={el.label}>
                      <FabIcon
                        key={index}
                        color="inherit"
                        variant="circular"
                        size="small"
                        component={RouterLink}
                        to={el.route}
                        onClick={() => handleClickOpenLogIn()}
                      >
                        {renderIcon(el.icon)}
                      </FabIcon>
                    </Tooltip>
                  );
                })
              }
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

  function render() {
    if (props.isAuth) {
      return renderMenuAuth();
    } else {
      return renderMenu();
    }
  }

  return render();
}
