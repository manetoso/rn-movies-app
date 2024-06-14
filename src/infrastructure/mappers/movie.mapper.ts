import type { FullMovie, Movie } from '@/core/entities/movie.entity';
import type { MovieDBResponse, Result } from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResponseToMovie(result: Result): Movie {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      description: result.overview,
      id: result.id,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
    };
  }

  static fromMovieDBResponseToFullMovie(movieFromDB: MovieDBResponse): FullMovie {
    return {
      id: movieFromDB.id,
      title: movieFromDB.title,
      description: movieFromDB.overview,
      releaseDate: new Date(movieFromDB.release_date),
      rating: movieFromDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieFromDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieFromDB.backdrop_path}`,
      genres: movieFromDB.genres.map(genre => genre.name),
      duration: movieFromDB.runtime,
      budget: movieFromDB.budget,
      originalTitle: movieFromDB.original_title,
      productionCompanies: movieFromDB.production_companies.map(company => company.name),
    };
  }
}
