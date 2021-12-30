import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Hello from root!',
  })
);

let a;
const a = 'adasd';
a ??= a;

app.get('/hello', (req, res) =>
  res.status(200).json({
    message: 'Hello from path!',
  })
);

app.use((req, res) =>
  res.status(404).json({
    error: 'Not Found',
  })
);

export default serverless(app);
