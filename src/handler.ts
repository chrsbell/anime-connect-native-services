import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Hello from root!',
  })
);

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
