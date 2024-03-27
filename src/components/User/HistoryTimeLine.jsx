import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
//icon
import IconButton from '@mui/material/IconButton';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import OilBarrelTwoToneIcon from '@mui/icons-material/OilBarrelTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import CarCrashTwoToneIcon from '@mui/icons-material/CarCrashTwoTone';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

const TimelineHeader = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export default function HistoryTimeLine() {
  //breakpoint
  const sm = useMediaQuery(useTheme().breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Timeline
      position="right"
      sx={{
        padding: { xs: 0, sm: '2rem' },
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0
        },
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        }
      }}>
      <TimelineItem>
        {
          sm && <TimelineOppositeContent
            sx={{ mt: '0.3rem' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <div>12 de agosto 2023</div>
            <div>12:30 am</div>
          </TimelineOppositeContent>
        }
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <OilBarrelTwoToneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineHeader>
            <Box><Typography variant="h6" color="secondary" component="span">Cambio de aceite</Typography></Box>
            {
              sm && <Box>
                <IconButton aria-label="fingerprint" color="secondary">
                  <Tooltip title={"Editar"}><EditTwoToneIcon /></Tooltip>
                </IconButton>
                <IconButton aria-label="fingerprint" color="secondary">
                  <Tooltip title={"Imprimir"}><PrintTwoToneIcon /></Tooltip>
                </IconButton>
                <IconButton aria-label="fingerprint" color="secondary">
                  <Tooltip title={"Ocultar"}><VisibilityOffTwoToneIcon /></Tooltip>
                </IconButton>
              </Box>
            }
            {
              !sm &&
              <Box>
                <IconButton aria-label="fingerprint" color="secondary" onClick={handleClick}>
                  <Tooltip title={"Más opciones"}><MoreVertTwoToneIcon /></Tooltip>
                </IconButton>
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
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemIcon>
                      <EditTwoToneIcon />
                    </ListItemIcon>
                    Editar
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemIcon>
                      <PrintTwoToneIcon />
                    </ListItemIcon>
                    Imprimir
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemIcon>
                      <VisibilityOffTwoToneIcon />
                    </ListItemIcon>
                    Ocultar
                  </MenuItem>
                </Menu>
              </Box>
            }
          </TimelineHeader >
          {
            !sm &&
            <React.Fragment>
              <Typography sx={{ fontSize: '0.8rem', mb: 1 }}>12 de agosto 2023, 12:30 am</Typography>
              <Divider sx={{ mb: 2 }} />
            </React.Fragment>
          }

          <Typography sx={{ mb: 2 }}>Because you need strength use you need strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline >
  );
}