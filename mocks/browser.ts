import { setupWorker } from 'msw/browser';

import { AuthHandlers } from './handler/authHandler';
import { PostHandlers } from './handler/postHandler';

const worker = setupWorker(...AuthHandlers, ...PostHandlers);

export default worker;
