const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db', 'db.json');


const getMovies = () => {
  const dbData = fs.readFileSync(dbPath);
  const data = JSON.parse(dbData);
  return data.movies;
};
const getMovieById = (id) => {
    const dbData = fs.readFileSync(dbPath);
    const movie = data.movies.find(movie => movie.id === id);
    return movie;
  };

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.json(getMovies());
      break;
    case 'GET':
        const movie = getMovieById(id);
        res.json(movie);
        break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
};
