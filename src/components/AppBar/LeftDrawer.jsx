import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//icons
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CarCrashTwoToneIcon from '@mui/icons-material/CarCrashTwoTone';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '0rem'
});

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 0rem 0rem 1.2rem',
  color: 'white',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#ebebeb !important',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const ScrollBox = styled(Box)(() => ({
  overflow: 'auto',
  background: '#e0e6e2',
  height: '100%',
  '&::-webkit-scrollbar-thumb': {
    '-webkit-appearance': 'none',
    width: '10px',
    background: 'rgba(68,89,100,1)'
  },
  '&::-webkit-scrollbar': {
    width: '10px'
  }
}));

LeftDrawer.propTypes = {
  openHandle: PropTypes.bool,
  closeHandle: PropTypes.func,
};

export default function LeftDrawer(props = {}) {
  function render() {
    const { openHandle, closeHandle } = props;

    return (
      <React.Fragment>
        <Drawer
          variant="permanent"
          open={openHandle}
          sx={{ background: '#ebebeb' }}
        >
          <DrawerHeader onClick={() => closeHandle(false)} sx={{ background: 'rgba(68,89,100,1)' }}>
            <CreateNewFolderIcon sx={{ mr: 1 }} />
            <Logo variant="h6" noWrap >dataLIST</Logo>
            <IconButton sx={{ mr: 2 }}>
              <ChevronLeftIcon sx={{ color: '#FFFFFF' }} />
            </IconButton>
          </DrawerHeader>
          <ScrollBox>
            <Divider />
            <List>
              {['P123456', 'P127321', 'P123478', 'P123456', 'P127321', 'P123478', 'P123456', 'P127321', 'P123478', 'P123456', 'P127321', 'P123478', 'P123456', 'P127321', 'P123478', 'P123456', 'P127321', 'P123478'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: openHandle ? 'block' : 'none' }}>
                  <ListItemButton component={RouterLink} to={`/user/activity/${index}`} sx={{ px: 2.5 }}>
                    <ListItemIcon>
                      <CarCrashTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} secondary="Juan Menjivar" sx={{ opacity: openHandle ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </ScrollBox>
        </Drawer>
      </React.Fragment>
    );
  }
  return render();
}