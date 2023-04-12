const consoleLog = process.env.CONSOLE_LOG || true;

const getTimeStamp = (): string => new Date().toISOString();

const getMessage = (level: string, namespace: string, message: string, object?: any): string => `[${getTimeStamp()}] [${level}] [${namespace}] ${message}` + object ?? '';

const getInfoMessage = (namespace: string, message: string, object?: any): string => getMessage('INFO', namespace, message, object);
const getWarnMessage = (namespace: string, message: string, object?: any): string => getMessage('WARN', namespace, message, object);
const getErrorMessage = (namespace: string, message: string, object?: any): string => getMessage('ERROR', namespace, message, object);
const getDebugMessage = (namespace: string, message: string, object?: any): string => getMessage('DEBUG', namespace, message, object);

const info = (namespace: string, message: string, object?: any) => {
    console.info(getInfoMessage(namespace, message, object));
};

const warn = (namespace: string, message: string, object?: any) => {
    console.warn(getWarnMessage(namespace, message, object));
};

const error = (namespace: string, message: string, object?: any) => {
    console.error(getErrorMessage(namespace, message, object));
};

const debug = (namespace: string, message: string, object?: any) => {
    console.debug(getDebugMessage(namespace, message, object));
};

export default { info, warn, error, debug };
