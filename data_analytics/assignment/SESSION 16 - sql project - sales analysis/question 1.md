Import a CSV file of food delivery orders (with columns like order_id, restaurant_name, customer_name, order_amount, order_date) into a new SQL table named FoodOrders using your database tool of choice.

CSVમાં આ columns છે: `order_id`, `restaurant_name`, `customer_name`,
`order_amount`, `order_date`.

``` sql
CREATE TABLE FoodOrders (
    order_id INTEGER PRIMARY KEY,
    restaurant_name VARCHAR(100) NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    order_amount DECIMAL(10,2) NOT NULL,
    order_date DATE NOT NULL
);
```





