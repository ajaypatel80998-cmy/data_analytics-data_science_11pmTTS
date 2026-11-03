1. Create a table called Orders with columns: order_id, user_name, total_amount, and order_date. Insert 5 sample rows with different users and order amounts, including at least one NULL value for total_amount.

ans -

# SQL Query – Create Orders Table and Insert 5 Records

## 1. Create the Orders Table

```sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_name VARCHAR(100),
    total_amount DECIMAL(10,2),
    order_date DATE
);
```

## 2. Insert 5 Sample Records

```sql
INSERT INTO Orders (order_id, user_name, total_amount, order_date)
VALUES
(1, 'Ajay', 1500.00, '2026-11-01'),
(2, 'Rahul', 2500.50, '2026-11-02'),
(3, 'Amit', NULL, '2026-11-03'),
(4, 'Priya', 3500.00, '2026-11-04'),
(5, 'Mansi', 1200.75, '2026-11-05');
```

## 3. Display All Records

```sql
SELECT * FROM Orders;
```






