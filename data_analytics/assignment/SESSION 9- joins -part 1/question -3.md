Write an SQL LEFT JOIN query to list all restaurants and their dishes, showing restaurants even if they currently have no dishes on the menu.<br><br><em><strong>Hint:</strong> Use LEFT JOIN so restaurants without dishes still appear in the results with NULL for dish columns.</em>


``` sql
SELECT
    restaurants.name AS restaurant_name,
    restaurants.city,
    dishes.dish_name,
    dishes.price
FROM restaurants
LEFT JOIN dishes
    ON restaurants.id = dishes.restaurant_id;
```