import { writeFile, existsSync, mkdirSync } from 'fs';

const folder = './logs';

const forceDoubleDigits = (n: number) =>
    n.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

const getToday = () => `${new Date().getUTCFullYear()}-${forceDoubleDigits(new Date().getUTCMonth() + 1)}-${forceDoubleDigits(new Date().getUTCDate())}`;

const getFileName = () => `${folder}/${getToday()}_Bartenders-Companion-Back.log`;

const logFile = (message: string) => {
    if (!existsSync(folder)) mkdirSync(folder);
    writeFile(getFileName(), `${message}\n`, { flag: 'a' }, (err) => {
        if (err) throw err;
    });
};

export default logFile;
