Create a CTE using the WITH clause to select all products with a rating above 4.5 from a 'Products' table, similar to how Flipkart or Myntra might highlight top-rated items.


``` sql
CREATE TABLE Products (
    id INT PRIMARY KEY,
    product_name VARCHAR(150),
    rating DECIMAL(2,1)
);
```

### SQL Query

``` sql
WITH TopRatedProducts AS (
    SELECT id, product_name, rating
    FROM Products
    WHERE rating > 4.5
)
SELECT *
FROM TopRatedProducts;
```