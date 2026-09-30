# Session 1 - Database Introduction & SQL Basics

## Task 1 - Database Creation

Created a database named `music_streaming_app`.

## Task 2 - Create Playlists Table

Created a `playlists` table with the following columns:

- id - INT PRIMARY KEY
- name - VARCHAR(100)
- created_by - VARCHAR(100)

## Task 3 - Insert Sample Data

Inserted three playlists:

1. Bollywood Hits - Amit
2. Chill Vibes - Rahul
3. Workout Mix - Priya

## Task 4 - Display Amit's Playlists

Used the WHERE clause to display playlists created by Amit.

```sql
SELECT *
FROM playlists
WHERE created_by = 'Amit';

## Task 5 - Difference Between Table, Row and Column

## Difference Between Table, Row and Column in SQL

Suppose we have a food delivery app like **Zomato**. The app stores restaurant information in an SQL table.

### Table

A **table** is used to store data in a structured format. It contains rows and columns.

For example, a `restaurants` table can store information about different restaurants.

### Row

A **row** represents one complete record in a table.

For example, one row in the `restaurants` table can contain information about one restaurant:

**101 | Pizza Palace | Rajkot | 4.5**

This is one complete restaurant record.

### Column

A **column** represents a specific type of information stored in a table.

For example, the `restaurants` table may have these columns:

- `restaurant_id` – stores the restaurant ID
- `restaurant_name` – stores the restaurant name
- `city` – stores the restaurant's city
- `rating` – stores the restaurant's rating

### Example

| restaurant_id | restaurant_name  | city      | rating |
|---|---|---|---:|
| 101 | Pizza Palace | Rajkot | 4.5 |
| 102 | Burger House | Ahmedabad | 4.2 |
| 103 | South Indian Hub | Rajkot | 4.7 |

Here:

- **Table** = The complete `restaurants` table
- **Row** = One complete restaurant record, such as `101 | Pizza Palace | Rajkot | 4.5`
- **Column** = One type of information, such as `restaurant_name`

So, a **table contains rows, and rows contain values organized according to columns**.