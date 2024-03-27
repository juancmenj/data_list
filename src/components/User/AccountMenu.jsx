import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
//icon
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderIcon(iconName) {
    const icons = {
      "DashboardTwoToneIcon": DashboardTwoToneIcon,
      "RecentActorsTwoToneIcon": RecentActorsTwoToneIcon,
      "AccountTreeTwoToneIcon": AccountTreeTwoToneIcon,
      "PersonAddAltTwoToneIcon": PersonAddAltTwoToneIcon,
      "SettingsIcon": SettingsIcon,
      "LogoutIcon": LogoutIcon
    };

    const Component = icons[iconName];
    return <Component />;
  }

  const dinamicLink01 = [
    { label: 'Dashboard', icon: 'DashboardTwoToneIcon', route: "/user/dashboard" },
    { label: 'Perfil', icon: 'RecentActorsTwoToneIcon', route: "/user/profile" },
    { label: 'Actividades', icon: 'AccountTreeTwoToneIcon', route: "/user/activity" },
    { label: 'Administrador de usuarios', icon: 'PersonAddAltTwoToneIcon', route: "/user/management" } 
  ];

  const dinamicLink02 = [
    { label: 'Configuraciones', icon: 'SettingsIcon', route: "/user/settings" },
    { label: 'Cerrar sesión', icon: 'LogoutIcon', route: "/user/logout" }
  ];

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="José Menjivar">
          <FabIcon
            color="inherit"
            variant="circular"
            size="small"
            onClick={handleClick}
          >
            <Avatar sx={{ width: 34, height: 34 }} src='https://mui.com/static/images/avatar/1.jpg' alt="☰"></Avatar>
          </FabIcon>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ padding: '1rem 4rem 1rem 1rem' }}>
          <Typography variant="h5" color="text.primary">José Menjivar</Typography>
          <Typography variant="h5" color="text.primary" sx={{fontSize: '0.8rem'}}>Administrador</Typography>
        </Box>
        {
          dinamicLink01?.map((el, index) => {
            return (
              <MenuItem
                key={index}
                onClick={handleClose}
                component={RouterLink}
                to={el.route}
              >
                <ListItemIcon> {renderIcon(el.icon)}</ListItemIcon>
                {el.label}
              </MenuItem>
            );
          })
        }
        <Divider />
        {
          dinamicLink02?.map((el, index) => {
            return (
              <MenuItem
                key={index}
                onClick={handleClose}
                component={RouterLink}
                to={el.route}
              >
                <ListItemIcon> {renderIcon(el.icon)}</ListItemIcon>
                {el.label}
              </MenuItem>
            );
          })
        }
      </Menu>
    </React.Fragment>
  );
}