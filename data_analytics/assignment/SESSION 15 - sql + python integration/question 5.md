Automate a daily summary: Write a Python script that connects to foodie.db, fetches all restaurants with rating above 4.5, loads them into a DataFrame, and saves the result as a CSV file named top_rated_restaurants.csv


``` text
.headers on
.mode csv
.output top_rated_restaurants.csv
SELECT *
FROM Restaurants
WHERE rating > 4.5;
.output stdout
```
