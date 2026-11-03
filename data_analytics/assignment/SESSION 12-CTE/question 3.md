Using two CTEs in a single query, find the top 3 most-followed users and the top 3 most-liked posts from a 'Users' and 'Posts' table (think Instagram-style data). Output both lists in the same result set.


``` sql
CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(100),
    followers_count INT
);

CREATE TABLE Posts (
    id INT PRIMARY KEY,
    user_id INT,
    post_text VARCHAR(255),
    likes_count INT
);
```

### SQL Query

``` sql
WITH TopUsers AS (
    SELECT
        id,
        username AS item_name,
        followers_count AS total_count
    FROM Users
    ORDER BY followers_count DESC, id
    LIMIT 3
),
TopPosts AS (
    SELECT
        id,
        post_text AS item_name,
        likes_count AS total_count
    FROM Posts
    ORDER BY likes_count DESC, id
    LIMIT 3
)
SELECT
    'Top User' AS item_type,
    item_name,
    total_count
FROM TopUsers

UNION ALL

SELECT
    'Top Post' AS item_type,
    item_name,
    total_count
FROM TopPosts;
```