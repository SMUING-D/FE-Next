import { setupWorker } from 'msw/browser';

import { StudyHandlers } from './handler/StudyHandler';
import { AuthHandlers } from './handler/authHandler';
import { handlers } from './handler/handlers';
import { PostHandlers } from './handler/postHandler';

const worker = setupWorker(...handlers, ...AuthHandlers, ...StudyHandlers, ...PostHandlers);

export default worker;
