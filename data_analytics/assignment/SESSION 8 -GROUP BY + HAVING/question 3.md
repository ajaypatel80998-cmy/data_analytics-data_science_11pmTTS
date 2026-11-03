Write an SQL query to find the total amount spent by each user_id in the Orders table. Display user_id and their total spend.

```sql
SELECT
    user_id,
    SUM(amount) AS total_spend
FROM Orders
GROUP BY user_id;
```