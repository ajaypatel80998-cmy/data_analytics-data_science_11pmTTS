Write a SQL query on the FoodOrders table to select food_item as 'Dish' and order_date as 'Date Ordered', displaying only these two columns with the column aliases in the output.

# Question 4: Display Columns Using Aliases

### SQL Query

```sql
SELECT
    food_item AS 'Dish',
    order_date AS 'Date Ordered'
FROM FoodOrders;
```

### Explanation

- `SELECT` – Used to retrieve data from a table.
- `food_item AS 'Dish'` – Displays the food_item column with the alias name `Dish`.
- `order_date AS 'Date Ordered'` – Displays the order_date column with the alias name `Date Ordered`.
- `FROM FoodOrders` – Retrieves data from the FoodOrders table.

### Output (Example)

| Dish | Date Ordered |
|---|---|
| Pizza | 2026-10-20 |
| Burger | 2026-10-21 |
| Sandwich | 2026-10-22 |

### Conclusion

The `AS` keyword is used to give a temporary name (alias) to a column in the output without changing the actual column name in the table.