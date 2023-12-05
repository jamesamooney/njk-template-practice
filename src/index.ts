import express, { Request, Response } from 'express';
import { portNumber } from './config';

const port = portNumber()

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Server listening on port 3000')
})