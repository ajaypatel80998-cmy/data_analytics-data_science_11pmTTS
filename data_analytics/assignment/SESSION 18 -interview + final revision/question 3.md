Write a SQL subquery to find the names of all restaurants from a 'restaurants' table (id, name, rating) whose rating is higher than the average rating of all restaurants.

``` sql
SELECT
    name,
    rating
FROM restaurants
WHERE rating > (
    SELECT AVG(rating)
    FROM restaurants
);
```