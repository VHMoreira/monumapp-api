import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

// app.use(cors())
app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333');
});
