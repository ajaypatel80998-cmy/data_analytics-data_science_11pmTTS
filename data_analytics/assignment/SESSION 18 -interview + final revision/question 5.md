List two optimizations you would apply to speed up a query that filters Flipkart products by category and price, and briefly explain how each helps.<br><br><em><strong>Hint:</strong> Think about indexes and query structure.</em>

``` sql
SELECT
    product_id,
    product_name,
    price
FROM products
WHERE category = 'Electronics'
  AND price BETWEEN 1000 AND 50000;
```