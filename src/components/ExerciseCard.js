import React from 'react';
import { Link } from 'react-router-dom'
import {Box,Stack,Typography,Button,TextField} from '@mui/material';



const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'></img>
      <Stack direction='row'>
        <Typography sx={{ml:'21px',color:'#fff',background:'#ffa9a9',alignItems:'center',p:'10px', fontSize:'14px',borderRadius:'40px',textTransform:'capitalize'}}>
          {exercise.bodyPart}
        </Typography>
        <Typography sx={{ml:'21px',color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'40px',textTransform:'capitalize',alignItems:'center',p:'10px'}}>
          {exercise.target}
        </Typography>
      </Stack>
      <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='18px'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard