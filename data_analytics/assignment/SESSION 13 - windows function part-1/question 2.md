Write a SQL query using ROW_NUMBER() and the OVER() clause to assign a unique row number to each playlist, ordered by total_likes in descending order.


``` sql
SELECT
    id,
    user_id,
    playlist_name,
    total_likes,
    ROW_NUMBER() OVER (
        ORDER BY total_likes DESC, id
    ) AS row_num
FROM Playlists;
```