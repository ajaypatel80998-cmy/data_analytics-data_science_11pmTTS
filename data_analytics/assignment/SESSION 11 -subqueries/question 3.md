Given a 'Movies' table and a 'Reviews' table, write a SQL query using IN with a subquery to list all movies that have at least one review with a rating of 5 stars, as seen in BookMyShow's top-rated section.

``` sql
CREATE TABLE Movies (
    id INT PRIMARY KEY,
    movie_name VARCHAR(150)
);

CREATE TABLE Reviews (
    id INT PRIMARY KEY,
    movie_id INT,
    rating INT
);
```

### SQL Query

``` sql
SELECT m.id, m.movie_name
FROM Movies AS m
WHERE m.id IN (
    SELECT r.movie_id
    FROM Reviews AS r
    WHERE r.rating = 5
);
```