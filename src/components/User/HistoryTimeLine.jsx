import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';

export default function HistoryTimeLine() {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        }
      }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">Eat</Typography>
          <Typography>Because you need strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength</Typography>
        </TimelineContent>

      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HotelIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">Code</Typography>
          <Typography>Because you need strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength strength</Typography>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}