
Write a CREATE TABLE statement to define a 'restaurants' table in the 'foodie_app' database with the following columns: id (integer, primary key), name (varchar/character, max 100), cuisine (varchar/character, max 50), rating (decimal, e.g., 4.5), and location (varchar/character, max 100).

``` sql
CREATE TABLE restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    cuisine VARCHAR(50) NOT NULL,
    rating DECIMAL(2,1),
    location VARCHAR(100) NOT NULL
);
```


``` sql
INSERT INTO restaurants (name, cuisine, rating, location)
VALUES
('Pizza Palace', 'Italian', 4.5, 'Rajkot'),
('Spice Garden', 'Indian', 4.2, 'Ahmedabad'),
('Sushi House', 'Japanese', 4.7, 'Surat');
```

Data જોવા માટે:

``` sql
SELECT * FROM restaurants;
```