import React from 'react'
import { movie } from '../../tests/mock-data/movie'
import { Box, Grid } from '@chakra-ui/core'
import MovieCard from './MovieCard'

const MovieCollection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <MovieCard movie={movie} />
      <MovieCard movie={movie} />
      <MovieCard movie={movie} />
    </Grid>
  )
}

export default MovieCollection
