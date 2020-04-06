import React from 'react'
import { Box, Badge, Image, Icon, Button } from '@chakra-ui/core'

const MovieCard = ({ movie }) => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            {movie.runtime} min
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {movie.tagline}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {movie.overview}
        </Box>

        <Box>
          ${movie.budget}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon
                key={i}
                name="star"
                color={
                  i < Math.ceil(movie.vote_average / 2)
                    ? 'teal.500'
                    : 'gray.300'
                }
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {movie.vote_count} votes
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieCard
