Create a table called Orders with columns: order_id, user_id, order_date, and total_amount. Insert at least 7 sample rows representing different users and dates, similar to how food orders appear in Zomato or Swiggy.

``` sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL
);
```



``` sql
INSERT INTO Orders (order_id, user_id, order_date, total_amount) VALUES
(1, 101, '2026-01-01', 250.00),
(2, 102, '2026-01-02', 400.00),
(3, 101, '2026-01-05', 180.00),
(4, 103, '2026-01-06', 320.00),
(5, 102, '2026-01-08', 150.00),
(6, 101, '2026-01-10', 500.00),
(7, 103, '2026-01-12', 280.00),
(8, 102, '2026-01-15', 600.00);
```