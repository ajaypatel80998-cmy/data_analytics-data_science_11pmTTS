Design and create a 'users' table for a Flipkart-style app with columns: user_id (primary key), username, email, phone_number, and created_at (date/time). Pick appropriate data types for each column.<br><br><em><strong>Hint:</strong> Think about which columns should be unique and which data types best fit email and phone numbers.</em>


``` sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```


``` sql
INSERT INTO users (username, email, phone_number)
VALUES
('rahul', 'rahul@gmail.com', '9876543210'),
('priya', 'priya@gmail.com', '9876501234'),
('amit', 'amit@gmail.com', '+919876501235');
```

Data જોવા માટે:

``` sql
SELECT * FROM users;
```
