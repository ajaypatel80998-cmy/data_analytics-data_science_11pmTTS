Create a SQL table called Restaurant with columns: id, name, cuisine, location, and average_rating. Insert at least 5 sample rows representing popular restaurants from Zomato.

``` sql
CREATE TABLE Restaurant (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cuisine VARCHAR(50),
    location VARCHAR(100),
    average_rating DECIMAL(2,1)
);
```

``` sql
INSERT INTO Restaurant (id, name, cuisine, location, average_rating)
VALUES
    (1, 'Theobroma', 'Cafe', 'Ahmedabad', 4.4),
    (2, 'Honest', 'Indian', 'Rajkot', 4.2),
    (3, 'Dominos', 'Italian', 'Ahmedabad', 4.1),
    (4, 'Havmor Restaurant', 'Indian', 'Ahmedabad', 4.3),
    (5, 'Subway', 'Fast Food', 'Rajkot', 4.0);
```