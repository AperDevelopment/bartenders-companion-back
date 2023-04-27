import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { BadRequest, OK } from '../../utils/HTTP_Code.utils';

const NAMESPACE = 'Cocktails';

const updateCocktail = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    logging.info(NAMESPACE, `Updating cocktail with id ${id}`);

    const query: Query = Cocktail.queryUpdateById(id, req.body);

    if (query.response === BadRequest) {
        logging.error(NAMESPACE, 'Missing key parameters');
        return res.status(BadRequest).json({ message: 'Key parameters missing' });
    }

    runQuery(NAMESPACE, query, res, (result) => res.status(OK).json({ result }));
};

export default updateCocktail;
