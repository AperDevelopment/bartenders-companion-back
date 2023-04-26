import { Response } from 'express';
import mysql from 'mysql';

import config from './env.config';
import logging from './logging.config';

import Query from '../model/query.model';

import { InternalServerError } from '../utils/HTTP_Code.utils';

const params = {
    user: config.mysql.user,
    password: config.mysql.password,
    host: config.mysql.host,
    database: config.mysql.database
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Database exchange methods //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection(params);

        connection.connect((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(connection);
        });
    });

const Fetch = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });

///////////////////////////////////////////////////////////////////////////////////////////////////
// Database query methods /////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const runQuery = (namespace: string, query: Query, res: Response, callback: (results: any) => void) => {
    const logISError = (error: any) => {
        logging.error(namespace, error.message, error);
        return res.status(InternalServerError).json({
            message: error.message,
            error: error
        });
    };

    if (!query.query) {
        logging.error(namespace, 'Internal server error');
        return res.status(InternalServerError).json({ message: 'Internal server error' });
    }

    Connect()
        .then((connection) => {
            Fetch(connection, query.query!)
                .then(callback)
                .catch(logISError)
                .finally(() => {
                    connection.end();
                });
        })
        .catch(logISError);
};

export default runQuery;
