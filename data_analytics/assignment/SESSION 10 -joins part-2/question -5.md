
Write two different JOIN queries on a Products and Categories table (like Flipkart) to list all products with their category names, but use different join conditions in each. Briefly explain which join condition is more efficient and why

``` sql
CREATE TABLE Categories (
    id INT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE Products (
    id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category_id INT
);
```

### Query 1 -- JOIN with category ID

``` sql
SELECT
    p.product_name,
    c.category_name
FROM Products AS p
LEFT JOIN Categories AS c
    ON p.category_id = c.id;
```

### Query 2 -- JOIN with matching ID and category name

``` sql
SELECT
    p.product_name,
    c.category_name
FROM Products AS p
LEFT JOIN Categories AS c
    ON p.category_id = c.id
   AND c.category_name IS NOT NULL;
```