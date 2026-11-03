Create a SQL query using a subquery in the WHERE clause to find all restaurants from a 'Restaurants' table whose average rating is higher than the average rating of all restaurants in the city.

``` sql
CREATE TABLE Restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    rating DECIMAL(2,1)
);
```

### SQL Query

``` sql
SELECT r.id, r.name, r.city, r.rating
FROM Restaurants AS r
WHERE r.rating > (
    SELECT AVG(r2.rating)
    FROM Restaurants AS r2
    WHERE r2.city = r.city
);
```