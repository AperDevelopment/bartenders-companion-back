import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { NoContent, Unauthorized } from '../../utils/HTTP_Code.utils';
import getPermissionLevel, { ADMIN } from '../../utils/authentication.utils';

const NAMESPACE = 'Cocktails';

const deleteCocktail = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const permission_level = getPermissionLevel(req.body.api_key);

    if (permission_level !== ADMIN) return res.status(Unauthorized).json({ result: null, error: 'You are not allowed to use this method with these credentials.' });

    logging.info(NAMESPACE, `Deleting cocktail with id ${id}`);

    const query: Query = Cocktail.queryDelete(id);

    runQuery(NAMESPACE, query, res, (result) => res.status(NoContent).json({ result }));
};

export default deleteCocktail;
