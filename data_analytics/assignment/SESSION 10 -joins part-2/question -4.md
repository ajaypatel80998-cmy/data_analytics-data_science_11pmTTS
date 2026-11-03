You notice that your JOIN query between Zomato's Restaurants and Reviews tables is returning duplicate rows for some restaurants. Modify your query to eliminate duplicates and explain in one line why the duplicates were happening.<br><br><em><strong>Hint:</strong> Use DISTINCT or GROUP BY and consider the relationship between restaurants and reviews.</em>


### Example query

``` sql
SELECT DISTINCT
    r.id,
    r.name,
    r.city
FROM Restaurants AS r
INNER JOIN Reviews AS rev
    ON r.id = rev.restaurant_id;
```


``` sql
SELECT
    r.id,
    r.name,
    r.city
FROM Restaurants AS r
WHERE EXISTS (
    SELECT 1
    FROM Reviews AS rev
    WHERE rev.restaurant_id = r.id
);
```