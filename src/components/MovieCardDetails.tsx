import { useLoaderData, useLocation } from 'react-router-dom'
import { MovieResponse } from '../types/types'
import MoviePagination from './MoviePagination'

const MovieCardDetails = () => {
    const movie:MovieResponse = useLoaderData() as MovieResponse
    const location = useLocation();
   

  return (
    <div>
        <MoviePagination movies={movie.results} activeLink={location.pathname}/>
    </div>
  )
}

export default MovieCardDetails