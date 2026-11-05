Using SQL, calculate the average cost for two people for each cuisine type and list the 3 most expensive cuisines to eat in Bangalore.

``` sql
SELECT
    cuisines,
    ROUND(AVG(approx_cost_for_two), 2) AS average_cost_for_two
FROM zomato
WHERE cuisines IS NOT NULL
  AND approx_cost_for_two IS NOT NULL
GROUP BY cuisines
ORDER BY average_cost_for_two DESC
LIMIT 3;
```