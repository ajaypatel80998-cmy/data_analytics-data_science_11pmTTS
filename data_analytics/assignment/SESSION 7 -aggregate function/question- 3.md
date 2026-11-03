Write a SQL query to calculate the average total_amount of all orders in the Orders table, making sure to ignore any NULL values.


```sql
SELECT
    AVG(total_amount) AS average_amount
FROM Orders;
```