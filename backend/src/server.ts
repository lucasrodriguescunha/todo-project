import express from 'express';
import { todoRoutes } from './routes/todo.routes';

const app = express();

app.use(express.json());
app.use(todoRoutes);

app.listen(3333, () => {
  console.log('🚀 Server running on http://localhost:3333');
});
