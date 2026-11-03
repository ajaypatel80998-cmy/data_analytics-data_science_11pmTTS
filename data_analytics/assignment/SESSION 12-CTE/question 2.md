Rewrite a query that finds all restaurants in 'Ahmedabad' with delivery charges under 50 from a 'Restaurants' table, first using a subquery and then using a CTE. Compare both queries for readability.<br><br><em><strong>Hint:</strong> Focus on making the CTE version cleaner and easier to understand.</em>



``` sql
SELECT *
FROM Restaurants
WHERE id IN (
    SELECT id
    FROM Restaurants
    WHERE city = 'Ahmedabad'
      AND delivery_charge < 50
);
```


``` sql
WITH AhmedabadRestaurants AS (
    SELECT id, name, city, delivery_charge
    FROM Restaurants
    WHERE city = 'Ahmedabad'
      AND delivery_charge < 50
)
SELECT *
FROM AhmedabadRestaurants;
```