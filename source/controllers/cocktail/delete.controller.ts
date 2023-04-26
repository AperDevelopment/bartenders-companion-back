import { Request, Response, NextFunction } from 'express';

import logging from '../../config/logging.config';
import runQuery from '../../config/mysql.config';

import Query from '../../model/query.model';
import Cocktail from '../../model/cocktail.model';

import { NoContent } from '../../utils/HTTP_Code.utils';

const NAMESPACE = 'Cocktails';

const deleteCocktail = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    logging.info(NAMESPACE, `Deleting cocktail with id ${id}`);

    const query: Query = Cocktail.queryDelete(id);

    runQuery(NAMESPACE, query, res, (result) => res.status(NoContent).json({ result }));
};

export default deleteCocktail;
