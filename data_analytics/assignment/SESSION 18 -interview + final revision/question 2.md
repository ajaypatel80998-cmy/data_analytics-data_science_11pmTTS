Given two tables, 'orders' (order_id, user_id, amount) and 'users' (user_id, username), write a SQL JOIN query to display each username along with their total order amount.


``` sql
SELECT
    u.username,
    SUM(o.amount) AS total_order_amount
FROM users u
INNER JOIN orders o
    ON u.user_id = o.user_id
GROUP BY u.user_id, u.username;
```


``` sql
SELECT
    u.username,
    COALESCE(SUM(o.amount), 0) AS total_order_amount
FROM users u
LEFT JOIN orders o
    ON u.user_id = o.user_id
GROUP BY u.user_id, u.username;
```