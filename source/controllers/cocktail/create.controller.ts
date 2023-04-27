import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { BadRequest, Created } from '../../utils/HTTP_Code.utils';

const NAMESPACE = 'Cocktails';

const createCocktail = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Creating cocktail');

    const query: Query = Cocktail.queryCreateFromBody(req.body);

    if (query.response === BadRequest) {
        logging.error(NAMESPACE, query.query!);
        return res.status(BadRequest).json({ message: query.query! });
    }

    runQuery(NAMESPACE, query, res, (result) => res.status(Created).json({ result }));
};

export default createCocktail;
