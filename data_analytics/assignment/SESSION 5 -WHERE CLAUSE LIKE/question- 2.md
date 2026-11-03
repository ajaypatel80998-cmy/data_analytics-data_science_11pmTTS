Write a SQL query to find all restaurants in the Restaurants table that have a rating greater than 4.0 and are located in either 'Ahmedabad' or 'Surat'.

```sql
SELECT *
FROM Restaurants
WHERE rating > 4.0
  AND city IN ('Ahmedabad', 'Surat');
```