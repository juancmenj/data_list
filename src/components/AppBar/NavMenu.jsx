import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
//icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ClassIcon from '@mui/icons-material/Class';
import GavelIcon from '@mui/icons-material/Gavel';

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

export default function NavMenu() {
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
      "ClassIcon": ClassIcon,
      "GavelIcon": GavelIcon
    };

    const Component = icons[iconName];
    return <Component />;
  }

  const dinamicLink0 = [
    { label: '¿Quienes somos?', icon: 'ClassIcon', route: "/about-us" },
    { label: 'Terminos y condiciones', icon: 'GavelIcon', route: "/term-conditions" }
  ];

  return (
    <div>
      <Tooltip title={"Menu"}>
        <FabIcon
          color="inherit"
          variant="circular"
          size="small"
          onClick={handleClick}
        >
          <MenuOpenIcon />
        </FabIcon>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="nav-menu"
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
        {
          dinamicLink0?.map((el, index) => {
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
    </div>
  );
}