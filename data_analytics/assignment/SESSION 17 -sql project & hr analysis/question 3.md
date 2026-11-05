Add a new table called Review with columns: id, restaurant_id, user_name, rating, and review_date. Insert at least 10 sample reviews, linking them to restaurants using restaurant_id.

``` sql
CREATE TABLE Review (
    id INT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    review_date DATE,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);
```

``` sql
INSERT INTO Review (id, restaurant_id, user_name, rating, review_date)
VALUES
    (1, 1, 'Amit', 4.5, '2026-01-05'),
    (2, 1, 'Neha', 4.0, '2026-01-06'),
    (3, 2, 'Rahul', 4.2, '2026-01-07'),
    (4, 2, 'Priya', 4.6, '2026-01-08'),
    (5, 3, 'Karan', 4.1, '2026-01-09'),
    (6, 3, 'Meera', 4.3, '2026-01-10'),
    (7, 4, 'Jay', 4.8, '2026-01-11'),
    (8, 4, 'Riya', 4.4, '2026-01-12'),
    (9, 5, 'Dev', 3.9, '2026-01-13'),
    (10, 5, 'Pooja', 4.2, '2026-01-14');
```