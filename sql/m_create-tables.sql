-- Basic stock management types

CREATE TABLE IF NOT EXISTS m_glass_type (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO m_glass_type (name) VALUES
    ("Highball"),
    ("Tumbler"),
    ("Coupe"),
    ("Mug"),
    ("Flute");

CREATE TABLE IF NOT EXISTS m_glass (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    glass_type INTEGER,
    volume_ml INTEGER,
    CONSTRAINT fk_glass_type FOREIGN KEY (glass_type) REFERENCES m_glass_type (id)
);

CREATE TABLE IF NOT EXISTS m_ingredient (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    barcode TEXT,
    price_euro DECIMAL(10,2),
    quantity_bought INTEGER,
    is_alcoholic BOOLEAN NOT NULL,
    is_vegan BOOLEAN NOT NULL
);