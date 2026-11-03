Write an SQL INNER JOIN query to display each dish along with its restaurant name and city, similar to how Zomato shows dish details with the restaurant info.


``` sql
SELECT
    dishes.dish_name,
    dishes.price,
    restaurants.name AS restaurant_name,
    restaurants.city
FROM restaurants
INNER JOIN dishes
    ON restaurants.id = dishes.restaurant_id;
```