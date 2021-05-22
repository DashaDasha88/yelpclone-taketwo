CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) VALUES ('Saigon Lotus', 'Toronto', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Chipotle', 'Toronto', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Tealand', 'Toronto', 2);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (4, 'Bobby', 'Best meal of my life', 5);
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (4, 'Kitty', 'Service was great', 4);
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (4, 'Lulu', 'The soup was too spicy', 3);