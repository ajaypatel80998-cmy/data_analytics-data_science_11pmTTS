Use a window function to rank restaurants by their average review rating within each cuisine type, showing the restaurant name, cuisine, average rating, and rank.<br><br><em><strong>Hint:</strong> Use the RANK() or DENSE_RANK() window function partitioned by cuisine.</em>

``` sql
SELECT
    restaurant_name,
    cuisine,
    average_rating,
    RANK() OVER (
        PARTITION BY cuisine
        ORDER BY average_rating DESC
    ) AS cuisine_rank
FROM (
    SELECT
        r.id,
        r.name AS restaurant_name,
        r.cuisine,
        AVG(rv.rating) AS average_rating
    FROM Restaurant r
    INNER JOIN Review rv
        ON r.id = rv.restaurant_id
    GROUP BY r.id, r.name, r.cuisine
) AS restaurant_ratings
ORDER BY cuisine, cuisine_rank;
```