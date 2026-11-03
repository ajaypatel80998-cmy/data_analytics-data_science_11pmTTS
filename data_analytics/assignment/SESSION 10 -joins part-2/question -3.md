Given three tables: Users (id, username), Orders (id, user_id, order_date), and Payments (id, order_id, amount), write a SQL query using multiple JOINs to display each username, their order date, and payment amount, showing all users even if they have no orders or payments


``` sql
CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    id INT PRIMARY KEY,
    user_id INT,
    order_date DATE
);

CREATE TABLE Payments (
    id INT PRIMARY KEY,
    order_id INT,
    amount DECIMAL(10,2)
);
```

### Query

``` sql
SELECT
    u.username,
    o.order_date,
    p.amount AS payment_amount
FROM Users AS u
LEFT JOIN Orders AS o
    ON u.id = o.user_id
LEFT JOIN Payments AS p
    ON o.id = p.order_id;
```