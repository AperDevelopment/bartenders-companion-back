import dotenv from 'dotenv';

dotenv.config();

///////////////////////////////////////////////////////////////////////////////////////////////////
// MySQL configuration ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'bartenders-companion';
const MYSQL_USER = process.env.MYSQL_USER || 'bartenders-companion';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Server configuration ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Misc. configuration ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const FILE_LOG = process.env.FILE_LOG === 'true' || false;

const config = {
    mysql: MYSQL,
    server: SERVER,
    shouldLogToFile: FILE_LOG
};

export default config;