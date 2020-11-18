import './env';

import logger from 'morgan';
import { GraphQLServer } from 'graphql-yoga';

import './passport';
import schema from './schema';
import { authenticateJwt } from './passport';
import { isAuthenticated } from './middlewares';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
}); //그래프큐엘서버 받아옴. props=schema ===> schema는 쿼리 뮤테이션, 리졸버들이 포함되있음

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ server starting http://localhost:${PORT}`)
); //서버온
