# Question 5: Identify and Fix the LIMIT Keyword Mistake

### Incorrect SQL Query

```sql
SELECT DISTINCT food_item, restaurant
FROM FoodOrders
LIMIT 2,
```

### Correct SQL Query

```sql
SELECT DISTINCT food_item, restaurant
FROM FoodOrders
LIMIT 2;
```

### Explanation

- `SELECT DISTINCT` – Displays only unique combinations of food_item and restaurant.
- `FROM FoodOrders` – Retrieves data from the FoodOrders table.
- `LIMIT 2` – Displays only the first 2 records.
- `;` – Ends the SQL statement.

### What Was the Mistake?

The mistake was using an extra comma (`,`) after `LIMIT 2`.

The correct syntax is:

```sql
SELECT column_name
FROM table_name
LIMIT number;
```

### Conclusion

The `LIMIT` keyword restricts the number of records returned by a query. Do not add an unnecessary comma after the limit value.