Use ChatGPT or Copilot to help you write an SQL query that lists the top 10 most popular restaurant chains (by number of outlets) in the dataset, then run and validate the query yourself.<br><br><em><strong>Hint:</strong> Search for 'SQL group by count example' if you get stuck.</em>


``` sql
SELECT
    TRIM(restaurant_name) AS restaurant_chain,
    COUNT(*) AS outlet_count,
    COUNT(DISTINCT location) AS location_count,
    ROUND(AVG(rating), 2) AS average_rating
FROM zomato
WHERE restaurant_name IS NOT NULL
  AND TRIM(restaurant_name) <> ''
GROUP BY LOWER(TRIM(restaurant_name)), TRIM(restaurant_name)
HAVING COUNT(*) > 1
ORDER BY outlet_count DESC, average_rating DESC
LIMIT 10;
```
