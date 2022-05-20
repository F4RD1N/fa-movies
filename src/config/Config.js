//configuration for API
const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "9f1ffd64abd4bde18614fd9087d87d71"
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const TRAILER_LINK = "https://www.youtube.com/embed/"

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280"

// w92, w154, w185, w342, w500, w780, original
const GRID_IMAGE_SIZE = "w1280"

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500"

// w92, w154, w185, w342, w500, w780, original
const PROFILE_SIZE = "w185"

const MAIN_IMAGE = path => IMAGE_BASE_URL+POSTER_SIZE+path
const MAIN_BACKDROP = path =>IMAGE_BASE_URL+'original'+path
const MAIN_AVATAR = path => IMAGE_BASE_URL+PROFILE_SIZE+path
//genres list
const GENRES_ID = {
  animation: 16,
  action: 28,
  comedy: 35,
  crime: 80,
  drama: 18,
  documentary: 99,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  romance: 10749,
  theiller: 53,
  war: 10752
}


//home list
const HOME_LIST_TYPE = [
  {
    id: 1,
    title: 'Top Rated',
    path: 'movie/popular?',
    mode: 'horizontal',
    type: 'movie',
    page: 1
    },
  {
    id: 2,
    title: 'Popular',
    path: 'movie/popular?',
    mode: 'vertical',
    type: 'movie',
    page: 1
    },
  {
    id: 3,
    title: 'Up Coming',
    path: 'movie/upcoming?',
    mode: 'vertical',
    type: 'movie',
    page: 1
    },
    {
    id: 4,
    title: 'Animation',
    path: 'discover/movie?',
    mode: 'vertical',
    genre: 16,
    type: 'movie',
    page: 1
    },
    {
    id: 5,
    title: 'Action',
    path: 'discover/movie?',
    mode: 'vertical',
    genre: GENRES_ID.action,
    type: 'movie',
    page: 1
    },
    {
    id: 6,
    title: 'Romance',
    path: 'discover/movie?',
    mode: 'vertical',
    genre: GENRES_ID.romance,
    type: 'movie',
    page: 1
    },
    {
    id: 7,
    title: 'Fantasy',
    path: 'discover/movie?',
    mode: 'vertical',
    genre: GENRES_ID.fantasy,
    type: 'movie',
    page: 1
    },
    {
    id: 8,
    title: 'War',
    path: 'discover/movie?',
    mode: 'horizontal',
    genre: GENRES_ID.war,
    type: 'movie',
    page: 25
    },
    {
    id: 9,
    title: 'History',
    path: 'discover/movie?',
    mode: 'vertical',
    genre: GENRES_ID.history,
    type: 'movie',
    page: 1
    },
    {
    id: 10,
    title: 'Horror',
    path: 'discover/movie?',
    mode: 'horizontal',
    genre: GENRES_ID.horror,
    type: 'movie',
    page: 1
    },
    {
    id: 11,
    title: 'Spider Man Collection',
    path: 'search/multi?',
    mode: 'vertical',
    query: 'Spider Man',
    type: 'movie',
    page: 1
    },
    {
    id: 12,
    title: 'Persian Series',
    path: 'discover/tv?',
    mode: 'vertical',
    originalLanguage: 'fa',
    type: 'tv',
    page: 1
    },
    {
    id: 13,
    title: 'Popular Series',
    path: 'discover/tv?sort_by=popularity.desc&',
    mode: 'horizontal',
    page: 11,
    type: 'tv'
    }
    ]
    
    
  const MOVIE_DETAILS = [
    {
     id: 1,
     name: 'mainDetails',
     type: ''
    },
    {
     id: 2,
     name: 'similarMovies',
     type: '/similar'
    },
    {
     id: 3,
     name: 'credits',
     type: '/credits'
    },
    {
     id: 4,
     name: 'reviews',
     type: '/reviews'
    },
    {
     id: 5,
     name: 'videos',
     type: '/videos'
    },
    {
     id: 6,
     name: 'recommendations',
     type: '/recommendations'
    },
]

/*
https://api.themoviedb.org/3/discover/tv?api_key=9f1ffd64abd4bde18614fd9087d87d71&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York

*/
export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  GRID_IMAGE_SIZE,
  POSTER_SIZE,
  PROFILE_SIZE,
  TRAILER_LINK,
  MAIN_IMAGE,
  MAIN_BACKDROP,
  MAIN_AVATAR,
  HOME_LIST_TYPE,
  MOVIE_DETAILS,
  GENRES_ID
}