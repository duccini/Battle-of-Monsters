import express from 'express';
import router from './router';
import cors from 'cors';

// import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';

const app = express();
app.use(cors());

app.disable('etag');
app.use(express.json());

// app.get('/', (req: Request, res: Response): Promise<Response> => {
//   return res.status(StatusCodes.ACCEPTED).send('ola mundo');
// });

app.use(router);

export default app;
