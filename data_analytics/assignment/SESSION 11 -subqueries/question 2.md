
Write a SQL query that uses a subquery in the SELECT statement to display each user's name from a 'Users' table along with the total number of orders they have placed from an 'Orders' table, like a summary you might see in a Zomato user profile.


``` sql
CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Orders (
    id INT PRIMARY KEY,
    user_id INT,
    order_date DATE
);
```

### SQL Query

``` sql
SELECT
    u.name,
    (
        SELECT COUNT(*)
        FROM Orders AS o
        WHERE o.user_id = u.id
    ) AS total_orders
FROM Users AS u;
```