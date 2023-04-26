CREATE TABLE IF NOT EXISTS e_cocktail (
    cocktail_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cocktail_name VARCHAR(255) NOT NULL,
    cocktail_description TEXT,
    volume_ml INTEGER NOT NULL,
    is_alcoholic BOOLEAN NOT NULL,
    is_vegan BOOLEAN NOT NULL,
    is_hot BOOLEAN NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);