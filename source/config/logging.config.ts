import config from './env.config';
import logFile from './file-logging.config';

const shouldLogToFile = config.shouldLogToFile;

///////////////////////////////////////////////////////////////////////////////////////////////////
// Utility functions //////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const getTimeStamp = (): string => new Date().toISOString();

const getMessage = (level: string, namespace: string, message: string, object?: any): string => `[${getTimeStamp()}] [${level}] [${namespace}] ${message}` + (object ? ` ${object}` : '');

const getInfoMessage = (namespace: string, message: string, object?: any): string => getMessage('INFO', namespace, message, object);
const getWarnMessage = (namespace: string, message: string, object?: any): string => getMessage('WARN', namespace, message, object);
const getErrorMessage = (namespace: string, message: string, object?: any): string => getMessage('ERROR', namespace, message, object);
const getDebugMessage = (namespace: string, message: string, object?: any): string => getMessage('DEBUG', namespace, message, object);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Logging functions //////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const lineBreak = () => {
    const log = '====================================================================================================';
    if (shouldLogToFile) logFile(log);
    console.info(log);
};

const info = (namespace: string, message: string, object?: any) => {
    const log = getInfoMessage(namespace, message, object);
    if (shouldLogToFile) logFile(log);
    console.info(log);
};

const warn = (namespace: string, message: string, object?: any) => {
    const log = getWarnMessage(namespace, message, object);
    if (shouldLogToFile) logFile(log);
    console.warn(log);
};

const error = (namespace: string, message: string, object?: any) => {
    const log = getErrorMessage(namespace, message, object);
    if (shouldLogToFile) logFile(log);
    console.error(log);
};

const debug = (namespace: string, message: string, object?: any) => {
    const log = getDebugMessage(namespace, message, object);
    if (shouldLogToFile) logFile(log);
    console.debug(log);
};

export default { lineBreak, info, warn, error, debug };
