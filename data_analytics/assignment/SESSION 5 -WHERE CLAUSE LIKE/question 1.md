Create a table called Restaurants with columns: id, name, cuisine, rating, and city. Insert at least 5 sample records representing real or fictional restaurants you might find on Zomato.

```sql
CREATE TABLE Restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cuisine VARCHAR(50),
    rating DECIMAL(2,1),
    city VARCHAR(50)
);
```

### Insert Sample Records

```sql
INSERT INTO Restaurants (id, name, cuisine, rating, city)
VALUES
(1, 'Swagat', 'North Indian', 4.5, 'Ahmedabad'),
(2, 'Swadisht', 'Gujarati', 4.2, 'Surat'),
(3, 'Dragon House', 'Chinese', 4.3, 'Ahmedabad'),
(4, 'Pizza Palace', 'Italian', 3.8, 'Rajkot'),
(5, 'Madras Cafe', 'South Indian', 4.6, 'Surat');
```

### Display All Records

```sql
SELECT * FROM Restaurants;
```