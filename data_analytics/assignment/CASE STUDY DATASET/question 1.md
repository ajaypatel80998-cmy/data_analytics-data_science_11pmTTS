Write an SQL query to find the top 5 highest-rated restaurants in Koramangala that serve North Indian cuisine, using the Zomato Bangalore dataset.

``` sql
SELECT
    restaurant_name,
    location,
    cuisines,
    rating,
    votes
FROM zomato
WHERE location = 'Koramangala'
  AND cuisines LIKE '%North Indian%'
  AND rating IS NOT NULL
ORDER BY rating DESC, votes DESC
LIMIT 5;
```