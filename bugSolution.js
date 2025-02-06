const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.send('Hello, world!');
      }
    } catch (error) {
      console.error('Error during request processing:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));