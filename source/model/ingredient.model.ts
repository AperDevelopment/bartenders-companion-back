const TABLE_NAME = 'm_ingredient';

type Ingredient = {
    name: string;
    barcode?: string;
    price_euro?: number;
    quantity_bought?: number;
    is_alcoholic: boolean;
    is_vegan: boolean;
};

const queryCreateFromBody = ({ name, barcode, price_euro, quantity_bought, is_alcoholic, is_vegan }: Ingredient): string => {
    if (!name || is_alcoholic == null || is_vegan == null) return 'ERROR';

    let keys: string[] = ['name', 'is_alcoholic', 'is_vegan'];
    let values: string[] = [`"${name}"`, `${is_alcoholic}`, `${is_vegan}`];

    if (barcode) {
        keys.push('barcode');
        values.push(`"${barcode}"`);
    }

    if (price_euro) {
        keys.push('price_euro');
        values.push(`${price_euro}`);
    }

    if (quantity_bought) {
        keys.push('quantity_bought');
        values.push(`${quantity_bought}`);
    }

    return `INSERT INTO ${TABLE_NAME} (${keys.join(', ')}) VALUES (${values.join(', ')})`;
};

const queryAll = () => `SELECT * FROM ${TABLE_NAME}`;

export default {
    queryCreateFromBody,
    queryAll
};
