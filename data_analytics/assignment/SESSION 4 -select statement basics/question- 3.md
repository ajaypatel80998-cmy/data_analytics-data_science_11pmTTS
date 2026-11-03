Suppose you have a table named FoodOrders with columns: id, restaurant, food_item, and order_date. Write a SQL query to list all unique restaurant names where you have placed orders, using the DISTINCT keyword. 

# Question 3: Display Unique Restaurant Names Using DISTINCT

### SQL Query

```sql
SELECT DISTINCT restaurant
FROM FoodOrders;
```

### Explanation

- `SELECT` – Used to retrieve data from a table.
- `DISTINCT` – Removes duplicate values and displays only unique values.
- `restaurant` – Displays only restaurant names.
- `FROM FoodOrders` – Retrieves data from the FoodOrders table.

### Output (Example)

| restaurant |
|---|
| Domino's |
| McDonald's |
| Pizza Hut |
| Subway |

### Conclusion

The `DISTINCT` keyword is used to display only unique values and remove duplicate records from the result.