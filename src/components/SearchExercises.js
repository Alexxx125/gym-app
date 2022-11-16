import React,{useState,useEffect} from 'react';
import {Box,Stack,Typography,Button,TextField} from '@mui/material';
import { apiOptions, fetchData } from '../ApiHelper/fetchData.js'
import HorizontalScrollbar from './HorizontalScrollbar.js'


const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [ search,setSearch ]=useState('')
  const [ bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
      const bodyPartsData  = await fetchData(url,apiOptions)

      setBodyParts(['all',...bodyPartsData])
    }

    fetchExercisesData()

  }, [])

  const handleSearch = async ()=> {
      const url = 'https://exercisedb.p.rapidapi.com/exercises'
      if(search) {
        const exerciseData = await fetchData(url,apiOptions)

        const searchedExercises = exerciseData.filter(exercise =>
          exercise.target.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        )
        console.log("🚀 ~ file: SearchExercises.js ~ line 19 ~ handleSearch ~ searchedExercises", searchedExercises)

        setSearch('')
        setExercises(searchedExercises)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }
  }

  return (
    <Stack alignItems='center' mt={5} justifyContent='center' p='20px' >
      <Typography fontWeight={700} sx={{
        fontSize:{ lg:'44px', xs:'30px'}
      }} mb='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px' border='none'>
          <input
          className='searchInput'
          onChange={e=>setSearch(e.target.value.toLowerCase())}
          value={search}
          placeholder="Search Exercises"
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform: 'none',
            width:{ lg:'175px', xs:'80px'},
            fontSize: { lg:'20px', xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises