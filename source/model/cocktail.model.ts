import { BadRequest, Created, NoContent, OK } from '../utils/HTTP_Code.utils';
import Query, { error } from './query.model';

const TABLE_NAME = 'e_cocktail';

type Cocktail = {
    name: string;
    description?: string;
    volume_ml: number;
    is_alcoholic: boolean;
    is_vegan: boolean;
    is_hot: boolean;
    ingredients: string[];
    instructions: string[];
};

const queryCreateFromBody = ({ name, description, volume_ml, is_alcoholic, is_vegan, is_hot, ingredients, instructions }: Cocktail): Query => {
    if (!name) return error('Missing key parameter name', BadRequest);
    if (volume_ml == null) return error('Missing key parameter volume_ml', BadRequest);
    if (is_alcoholic == null) return error('Missing key parameter is_alcoholic', BadRequest);
    if (is_vegan == null) return error('Missing key parameter is_vegan', BadRequest);
    if (is_hot == null) return error('Missing key parameter is_hot', BadRequest);
    if (ingredients == null || ingredients.length == 0) return error('Missing key parameter ingredients', BadRequest);
    if (instructions == null || instructions.length == 0) return error('Missing key parameter instructions', BadRequest);

    let keys: string[] = ['cocktail_name', 'volume_ml', 'is_alcoholic', 'is_vegan', 'is_hot', 'ingredients', 'instructions'];
    let values: string[] = [`"${name}"`, `${volume_ml}`, `${is_alcoholic}`, `${is_vegan}`, `${is_hot}`, `"${ingredients.join('\n')}"`, `"${instructions.join('\n')}"`];

    if (description) {
        keys.push('cocktail_description');
        values.push(`"${description}"`);
    }

    return {
        query: `INSERT INTO ${TABLE_NAME} (${keys.join(', ')}) VALUES (${values.join(', ')})`,
        response: Created
    };
};

const queryAll = (): Query => ({
    query: `SELECT * FROM ${TABLE_NAME}`,
    response: OK
});

const queryById = (id: number): Query => ({
    query: `SELECT * FROM ${TABLE_NAME} WHERE cocktail_id = ${id}`,
    response: OK
});

const queryUpdateById = (id: number, { name, description, volume_ml, is_alcoholic, is_vegan, is_hot, ingredients, instructions }: Cocktail): Query => {
    if (!name) return error('Missing key parameter name', BadRequest);
    if (volume_ml == null) return error('Missing key parameter volume_ml', BadRequest);
    if (is_alcoholic == null) return error('Missing key parameter is_alcoholic', BadRequest);
    if (is_vegan == null) return error('Missing key parameter is_vegan', BadRequest);
    if (is_hot == null) return error('Missing key parameter is_hot', BadRequest);
    if (ingredients == null || ingredients.length == 0) return error('Missing key parameter ingredients', BadRequest);
    if (instructions == null || instructions.length == 0) return error('Missing key parameter instructions', BadRequest);

    let update: string[] = [
        `cocktail_name = "${name}"`,
        `volume_ml = ${volume_ml}`,
        `is_alcoholic = ${is_alcoholic}`,
        `is_vegan = ${is_vegan}`,
        `is_hot = ${is_hot}`,
        `ingredients = "${ingredients.join('\n')}"`,
        `instructions = "${instructions.join('\n')}"`
    ];

    if (description) update.push(`cocktail_description = "${description}"`);

    return {
        query: `UPDATE ${TABLE_NAME} SET ${update.join(', ')} WHERE cocktail_id = ${id}`,
        response: Created
    };
};

const queryDelete = (id: number): Query => ({
    query: `DELETE FROM ${TABLE_NAME} WHERE cocktail_id = ${id}`,
    response: NoContent
});

export default {
    queryCreateFromBody,
    queryAll,
    queryById,
    queryUpdateById,
    queryDelete
};
