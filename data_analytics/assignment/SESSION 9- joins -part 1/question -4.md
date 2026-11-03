Write an SQL RIGHT JOIN query to display all dishes and their restaurant names, including any dishes that might not be linked to a restaurant (simulate a data error where a dish has a restaurant_id that doesn't match any restaurant).

``` sql
ALTER TABLE dishes
DROP FOREIGN KEY dishes_ibfk_1;
```

``` sql
INSERT INTO dishes (id, restaurant_id, dish_name, price)
VALUES (8, 999, 'Unknown Restaurant Dish', 180.00);
``
``` sql
SELECT
    dishes.dish_name,
    dishes.price,
    restaurants.name AS restaurant_name,
    restaurants.city
FROM restaurants
RIGHT JOIN dishes
    ON restaurants.id = dishes.restaurant_id;
```