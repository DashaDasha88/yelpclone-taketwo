CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) VALUES ('Saigon Lotus', 'Toronto', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Chipotle', 'Toronto', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Tealand', 'Toronto', 2);