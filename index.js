import express from 'express';
import router from './routes/router.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('assets'));
app.use('/', router);

app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
  );
  
  app.get(`*`, (req, res) => {
    res.send(`<center><h1>🌵PÁGINA NO ENCONTRADA O NO EXISTE🦖</h1></center>`);
  });