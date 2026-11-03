Explain the difference between WHERE and HAVING by giving one example query for each, using the Orders table. Your examples should show a scenario where WHERE and HAVING filter different things.

```sql
SELECT
    user_id,
    SUM(amount) AS total_spend
FROM Orders
WHERE amount > 300
GROUP BY user_id;
```