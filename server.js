import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', (request, response) => {
  response.json({
    message: 'Welcome to the beginning of awesomeness.'
  });
});

app.listen(3000, () => {
  console.log('We are live on this shii');
});

export default app;
