Write an SQL query to segment restaurants into three market segments based on average cost for two: budget (below 400), mid-range (400-800), and premium (above 800). Count how many restaurants fall into each segment.

``` sql
SELECT
    CASE
        WHEN approx_cost_for_two < 400 THEN 'Budget'
        WHEN approx_cost_for_two BETWEEN 400 AND 800 THEN 'Mid-range'
        WHEN approx_cost_for_two > 800 THEN 'Premium'
    END AS market_segment,
    COUNT(*) AS restaurant_count
FROM zomato
WHERE approx_cost_for_two IS NOT NULL
GROUP BY
    CASE
        WHEN approx_cost_for_two < 400 THEN 'Budget'
        WHEN approx_cost_for_two BETWEEN 400 AND 800 THEN 'Mid-range'
        WHEN approx_cost_for_two > 800 THEN 'Premium'
    END
ORDER BY
    CASE
        WHEN market_segment = 'Budget' THEN 1
        WHEN market_segment = 'Mid-range' THEN 2
        WHEN market_segment = 'Premium' THEN 3
    END;
```