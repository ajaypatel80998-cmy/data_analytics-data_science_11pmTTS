Write an SQL query to count how many orders were placed using each payment_method in the Orders table, similar to how Zomato shows payment breakdown in analytics.


```sql
SELECT
    payment_method,
    COUNT(order_id) AS order_count
FROM Orders
GROUP BY payment_method;
```