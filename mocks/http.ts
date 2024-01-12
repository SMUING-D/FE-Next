import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express from 'express';

import { handlers } from './handlers';

const app = express();
// 서버포트
const port = 9090;

// 클라이언트 포트 번호
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => {});
