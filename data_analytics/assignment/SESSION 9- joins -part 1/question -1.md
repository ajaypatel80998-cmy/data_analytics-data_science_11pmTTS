
Create two tables in your database: 'restaurants' (id, name, city) and 'dishes' (id, restaurant_id, dish_name, price). Insert at least 3 restaurants and 2-3 dishes for each restaurant.

``` sql
CREATE DATABASE food_app;
USE food_app;
```

### Restaurants table

``` sql
CREATE TABLE restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);
```

### Dishes table

``` sql
CREATE TABLE dishes (
    id INT PRIMARY KEY,
    restaurant_id INT,
    dish_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
```



``` sql
INSERT INTO restaurants (id, name, city) VALUES
(1, 'The Food Hub', 'Rajkot'),
(2, 'Spice Garden', 'Ahmedabad'),
(3, 'Pizza Corner', 'Surat'),
(4, 'Royal Cafe', 'Vadodara');
```


``` sql
INSERT INTO dishes (id, restaurant_id, dish_name, price) VALUES
(1, 1, 'Paneer Tikka', 220.00),
(2, 1, 'Veg Burger', 120.00),
(3, 1, 'Masala Dosa', 100.00),

(4, 2, 'Paneer Butter Masala', 250.00),
(5, 2, 'Dal Fry', 160.00),

(6, 3, 'Margherita Pizza', 299.00),
(7, 3, 'Farmhouse Pizza', 399.00);
```
