const express = require('express');
const path = require('path');
const movies = require('./api/movies'); 
const tvs = require('./api/tvs');     

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/api/movies/:id?', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === parseInt(id));
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send('Movie not found');
    }
  });
  
  app.get('/api/tvs/:id?', (req, res) => {
    const { id } = req.params;
  const tv = tvs.find(tv => tv.id === parseInt(id));
  if (tv) {
    res.json(tv);
  } else {
    res.status(404).send('Movie not found');
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
