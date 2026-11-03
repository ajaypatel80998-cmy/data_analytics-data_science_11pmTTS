Create a table called Orders with columns: order_id, user_id, payment_method, and amount. Insert at least 8 sample records representing different users and payment methods (like UPI, Card, Wallet, COD).

```sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    payment_method VARCHAR(20),
    amount DECIMAL(10,2)
);
```

### Insert Sample Records

```sql
INSERT INTO Orders (order_id, user_id, payment_method, amount)
VALUES
(1, 101, 'UPI', 250.00),
(2, 102, 'Card', 450.00),
(3, 101, 'Wallet', 150.00),
(4, 103, 'COD', 500.00),
(5, 102, 'UPI', 350.00),
(6, 104, 'Card', 700.00),
(7, 103, 'UPI', 200.00),
(8, 101, 'COD', 400.00);
```

### Display All Records

```sql
SELECT * FROM Orders;
```