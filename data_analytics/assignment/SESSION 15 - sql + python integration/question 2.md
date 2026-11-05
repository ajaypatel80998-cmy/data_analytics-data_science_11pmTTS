Using sqlite3 in Python, insert three sample restaurants into the Restaurants table in foodie.db and write a query to fetch all restaurants with a rating above 4.0, then print their names.


``` sql
INSERT INTO Restaurants (id, name, cuisine, rating)
VALUES
    (1, 'La Pinoz', 'Italian', 4.3),
    (2, 'Honest', 'Indian', 4.5),
    (3, 'Dominos', 'Italian', 4.1);
```



``` sql
SELECT name
FROM Restaurants
WHERE rating > 4.0;
```