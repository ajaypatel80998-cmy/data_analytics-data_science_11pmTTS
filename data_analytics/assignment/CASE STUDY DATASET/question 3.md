
Find all restaurants that offer online delivery but have a rating below 3.0, and suggest a marketing strategy to improve their ratings based on your findings.<br><br><em><strong>Hint:</strong> Look for patterns in location, cuisine, or price that might explain the low ratings.</em>

``` sql
SELECT
    restaurant_name,
    location,
    cuisines,
    rating,
    approx_cost_for_two,
    votes
FROM zomato
WHERE LOWER(TRIM(online_order)) = 'yes'
  AND rating < 3.0
ORDER BY rating ASC, votes DESC;
```