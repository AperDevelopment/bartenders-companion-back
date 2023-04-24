import http from 'http';
import router from './app';
import config from './config/env.config';
import logging from './config/logging.config';

const NAMESPACE = 'Server';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Create the server //////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
    logging.lineBreak();
    logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`);
});
