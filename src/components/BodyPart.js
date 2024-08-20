import React from 'react';
import { Stack, Typography } from '@mui/material';
import NeckIcon from '../assets/icons/exercise.png';
import ShouldersIcon from '../assets/icons/shoulder.png';
import UpperArmsIcon from '../assets/icons/upperArms.png';
import UpperLegsIcon from '../assets/icons/upperLegs.png';
import LowerLegsIcon from '../assets/icons/anterior.png'
import BackIcon from '../assets/icons/back.png'
import ChestIcon from '../assets/icons/chest.png'
import CardioIcon from '../assets/icons/cardio.png'
import LowerArmsIcon from '../assets/icons/hand.png'
import WaistIcon from '../assets/icons/waist.png'
import AllIcon from '../assets/icons/check-all.png'

const bodyPartIcons = {
  'all': AllIcon,
  'back': BackIcon,
  'cardio': CardioIcon,
  'chest': ChestIcon,
  'lower arms': LowerArmsIcon,
  'lower legs': LowerLegsIcon,
  'neck': NeckIcon,
  'shoulders': ShouldersIcon,
  'upper arms': UpperArmsIcon,
  'upper legs': UpperLegsIcon,
  'waist': WaistIcon

};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const icon = bodyPartIcons[item]; // Get the appropriate icon based on the body part

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #FF2625',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={icon} alt={item} style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
