import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { NotFound, OK } from '../../utils/HTTP_Code.utils';
import getPermissionLevel from '../../utils/authentication.utils';

const NAMESPACE = 'Cocktails';

const getCocktailById = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const permission_level = getPermissionLevel(req.body.api_key);

    logging.info(NAMESPACE, `Getting cocktail with id ${id}`);

    const query: Query = Cocktail.queryById(id);

    runQuery(NAMESPACE, query, res, (result) => {
        if (result?.length > 0) {
            res.status(OK).json({ result: Cocktail.parseCocktailFromResult(permission_level, result[0]) });
        } else
            res.status(NotFound).json({
                result: null,
                message: 'No cocktail with that id'
            });
    });
};

export default getCocktailById;
