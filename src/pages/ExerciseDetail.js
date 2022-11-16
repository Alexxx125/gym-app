import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material'

import { apiOptions, fetchData } from '../ApiHelper/fetchData.js'
import Detail from '../components/Detail.js'
import ExerciseVideos from '../components/ExerciseVideos.js'
import SimilarExercises from '../components/SimilarExercises.js'



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail]=useState({});
  const { id } = useParams()

  useEffect(()=>{
    console.log('hello')
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeDbUrl = `ttps://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,apiOptions)
      console.log("🚀 ~ file: ExerciseDetail.js ~ line 22 ~ fetchExercisesData ~ exerciseDetailData", exerciseDetailData)

      setExerciseDetail(exerciseDetailData)

    }
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default ExerciseDetail