import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { BadRequest, Created, Unauthorized } from '../../utils/HTTP_Code.utils';
import getPermissionLevel, { ADMIN } from '../../utils/authentication.utils';

const NAMESPACE = 'Cocktails';

const createCocktail = (req: Request, res: Response, next: NextFunction) => {
    const permission_level = getPermissionLevel(req.body.api_key);

    if (permission_level !== ADMIN) return res.status(Unauthorized).json({ result: null, error: 'You are not allowed to use this method with these credentials.' });

    logging.info(NAMESPACE, 'Creating cocktail');

    const query: Query = Cocktail.queryCreateFromBody(req.body);

    if (query.response === BadRequest) {
        logging.error(NAMESPACE, query.query!);
        return res.status(BadRequest).json({ message: query.query! });
    }

    runQuery(NAMESPACE, query, res, (result) => res.status(Created).json({ result }));
};

export default createCocktail;
