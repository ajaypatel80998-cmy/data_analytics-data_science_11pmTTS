Intentionally make a mistake in your CREATE TABLE statement (such as missing a comma or using an unsupported data type), run it, and then fix the error based on the message you receive.<br><br><em><strong>Hint:</strong> Take a screenshot of the error and the corrected SQL statement for your records.</em>

``` sql
CREATE TABLE wrong_restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100)
    cuisine VARCHAR(50),
    rating DECIMAL(2,1)
);
```



``` sql
CREATE TABLE corrected_restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cuisine VARCHAR(50),
    rating DECIMAL(2,1)
);
```



``` sql
SHOW TABLES;
```



``` sql
DESCRIBE corrected_restaurants;
```