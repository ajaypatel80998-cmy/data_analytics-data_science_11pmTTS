Write a nested SQL query to find the names of all sellers from a 'Sellers' table on a Flipkart-style platform who have sold products in every category listed in a 'Categories' table.<br><br><em><strong>Hint:</strong> Use nested subqueries to compare seller's categories with the complete list of categories.</em>

``` sql
CREATE TABLE Sellers (
    id INT PRIMARY KEY,
    seller_name VARCHAR(100)
);

CREATE TABLE Categories (
    id INT PRIMARY KEY,
    category_name VARCHAR(100)
);

CREATE TABLE Products (
    id INT PRIMARY KEY,
    seller_id INT,
    category_id INT,
    product_name VARCHAR(150)
);
```

### SQL Query (Nested NOT EXISTS)

``` sql
SELECT s.seller_name
FROM Sellers AS s
WHERE NOT EXISTS (
    SELECT 1
    FROM Categories AS c
    WHERE NOT EXISTS (
        SELECT 1
        FROM Products AS p
        WHERE p.seller_id = s.id
          AND p.category_id = c.id
    )
);
```