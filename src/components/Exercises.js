import React,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';

import { apiOptions, fetchData } from '../ApiHelper/fetchData.js'
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises,  setExercises, bodyPart}) => {
  console.log("🚀 ~ file: Exercises.js ~ line 9 ~ Exercises ~ exercises", exercises)
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(()=>{
    const fetchExercisesData = async ()=>{

      if(bodyPart==='all'){
        const url = `https://exercisedb.p.rapidapi.com/exercises`
        const exerciseData  = await fetchData(url,apiOptions)
        console.log("🚀 ~ file: Exercises.js ~ line 20 ~ fetchExercisesData ~ exerciseData", exerciseData)


        setExercises(exerciseData)
      }else{
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}`
        const exerciseData  = await fetchData(url,apiOptions)
        console.log("🚀 ~ file: Exercises.js ~ line 27 ~ fetchExercisesData ~ exerciseData", exerciseData)

        setExercises(exerciseData)
      }
    }
    fetchExercisesData()
  },[bodyPart])


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: {lg: '110px', xs:'50px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index)=> {
          return (
            <ExerciseCard exercise={exercise} key={index}/>
          )
        })}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 1 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises