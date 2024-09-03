import express from 'express';

const app = express();

const PORT = 4000;

app.get('/', (_req, res) => {
  res.send('This is a root URL');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${PORT}`);
});
