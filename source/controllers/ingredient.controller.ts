import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging.config';
import { Connect, Query } from '../config/mysql.config';
import ingredient from '../model/ingredient.model';

const NAMESPACE = 'Ingredients';

const createIngredient = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Creating ingredient.');

    logging.debug(NAMESPACE, 'Request body', req.body);

    const query = ingredient.queryCreateFromBody(req.body);

    if (query === 'ERROR') {
        logging.error(NAMESPACE, 'Missing key parameters');
        return res.status(400).json({
            message: 'Key parameters missing'
        });
    }

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        error: error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error: error
            });
        });
};

const getAllIngredients = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Getting all ingredients.`);

    let query = ingredient.queryAll();

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        error: error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error: error
            });
        });
};

export default { createIngredient, getAllIngredients };
