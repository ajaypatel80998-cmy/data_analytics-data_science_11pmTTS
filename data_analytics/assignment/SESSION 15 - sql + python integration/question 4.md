Add a new column 'delivery_charge' to your DataFrame, setting it to 50 for all restaurants, and then calculate a new column 'final_rating' as rating + (0.1 if cuisine is 'Italian').<br><br><em><strong>Hint:</strong> Use DataFrame.apply() or a lambda function for the conditional logic.</em>

``` sql
ALTER TABLE Restaurants
ADD COLUMN delivery_charge INTEGER DEFAULT 50;
```


``` sql
UPDATE Restaurants
SET delivery_charge = 50;
```


``` sql
SELECT
    id,
    name,
    cuisine,
    rating,
    delivery_charge,
    rating + CASE
        WHEN cuisine = 'Italian' THEN 0.1
        ELSE 0
    END AS final_rating
FROM Restaurants;
```


``` sql
ALTER TABLE Restaurants
ADD COLUMN final_rating REAL;
```



``` sql
UPDATE Restaurants
SET final_rating = rating + CASE
    WHEN cuisine = 'Italian' THEN 0.1
    ELSE 0
END;
```