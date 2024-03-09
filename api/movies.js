const fs = require('fs');
const path = require('path');
const dbPath = path.resolve('../db.json');


const getMovies = () => {
  const dbData = fs.readFileSync(dbPath);
  const data = JSON.parse(dbData);
  return data.movies;
};

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.json(getMovies());
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
};