import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' }, padding: '20px' }}>
      <Typography 
        sx={{ fontSize: { lg: '44px', xs: '25px' } }} 
        fontWeight={700} 
        color="#000" 
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ 
          flexDirection: 'row', 
          gap: '20px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ 
              flexBasis: 'calc(33.33% - 20px)', 
              marginBottom: '20px' 
            }}
          >
            <img 
              style={{ 
                borderTopLeftRadius: '20px', 
                width: '100%', 
                height: 'auto' 
              }} 
              src={item.video.thumbnails[0].url} 
              alt={item.video.title} 
            />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: { lg: '28px', xs: '18px' },
                  fontWeight: 600, 
                  color: '#000',
                  whiteSpace: 'nowrap', // Keeps the text on one line
                  overflow: 'hidden',  // Hides overflow text
                  textOverflow: 'ellipsis'  // Adds "..." at the end of overflow text
                }} 
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
