// This script is used to fetch movies from the RapidAPI Streaming Availability API, for use of seeding the Movie table upfront. The genre_id is a constant that can be set equal to any valid genre id. For example, 10751 corresponds to the Family genre. The script is run in the terminal using the command node controllers/api/motn.js. The output is then copied and pasted into the seeds/moviesData.js file.

const axios = require('axios');

const genre_id = 10751;

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/filters',
  params: {
    country: 'us',
    services: 'peacock.free',
    show_type: 'movie',
    genres_relation: 'and',
    genres: genre_id,
    order_by: 'original_title',
    output_language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '3ee6abd259mshe4e3d4ce6055519p19b872jsn1cdfd945db55',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

async function fetchMovies() {
  try {
    const response = await axios.request(options);
    const movies = response.data.result;
    for (let movie of movies) {
      const year = movie.release_dates && movie.release_dates.US ? movie.release_dates.US.theater || movie.release_dates.US.digital : 'N/A';
      const link = movie.streaming_info && movie.streaming_info.us ? movie.streaming_info.us.link : 'N/A';
      console.log({
        title: movie.title,
        year: year,
        overview: movie.overview,
        link: link,
        poster_url: null, 
        genre_id: genre_id, 
        vote_count: 0,
        winner: false
      });
    }
  } catch (error) {
    console.error(error);
  }
}

fetchMovies();