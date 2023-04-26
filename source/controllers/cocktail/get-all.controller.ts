import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { OK } from '../../utils/HTTP_Code.utils';

const NAMESPACE = 'Cocktails';

const getAllCocktails = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all cocktails');

    const query: Query = Cocktail.queryAll();

    runQuery(NAMESPACE, query, res, (results) => res.status(OK).json({ results }));
};

export default getAllCocktails;