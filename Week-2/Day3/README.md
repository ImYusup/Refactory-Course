### Here's basic use SQL

This is Exercises 2 for basic how use to SQL
```link
https://gist.github.com/mul14/c800fe7ce0e5b80686ec66775bb8523f#file-01-online_store-sql
```

1. Update item price with SKU AROG-001 to 14000000.
```sql
mysql root@localhost:tugas2> SELECT * from items
+------+----------+----------------------------------+----------+-----------------+------------------+---------------------+---------------------+--------------+
|   id | sku      | name                             |    price | discount_type   |   discount_value | created_at          | updated_at          |   deleted_at |
|------+----------+----------------------------------+----------+-----------------+------------------+---------------------+---------------------+--------------|
|    1 | MBA-001  | Macbook Air 11 inch              | 11000000 | <null>          |           <null> | 2018-03-27 11:14:59 | 2018-03-27 11:14:59 |       <null> |
|    2 | MBA-002  | Macbook AIr 13 inch              | 13000000 | nominal         |           200000 | 2018-03-27 11:15:37 | 2018-03-27 11:15:37 |       <null> |
|    3 | MBP-001  | Macbook Pro 13 inch 2015 256GB   | 14000000 | <null>          |           <null> | 2018-03-27 11:16:20 | 2018-03-27 12:10:07 |       <null> |
|    4 | IPHX-001 | iPhone X 256GB                   | 21000000 | <null>          |           <null> | 2018-03-27 11:17:01 | 2018-03-27 11:17:01 |       <null> |
|    5 | AROG-001 | Asus ROG Stryx                   | 14000000 | <null>          |           <null> | 2018-03-27 11:17:49 | 2018-03-28 16:40:19 |       <null> |
|    6 | IMAC-001 | iMac 5K 27 inch 1TB Fusion Drive | 27000000 | <null>          |           <null> | 2018-03-27 11:19:24 | 2018-03-27 12:12:25 |       <null> |
+------+----------+----------------------------------+----------+-----------------+------------------+---------------------+---------------------+--------------+
6 rows in set
Time: 0.009s
```

2. Find all users who have never logged in.

// check the user first
```sql
mysql root@localhost:tugas2> DESCRIBE users
+------------+------------------+--------+-------+-------------------+-----------------------------+
| Field      | Type             | Null   | Key   | Default           | Extra                       |
|------------+------------------+--------+-------+-------------------+-----------------------------|
| id         | int(11) unsigned | NO     | PRI   | <null>            | auto_increment              |
| username   | varchar(255)     | YES    |       | <null>            |                             |
| email      | varchar(255)     | YES    |       | <null>            |                             |
| name       | varchar(255)     | YES    |       | <null>            |                             |
| password   | char(60)         | YES    |       | <null>            |                             |
| phone      | varchar(16)      | YES    |       | <null>            |                             |
| last_login | timestamp        | YES    |       | <null>            |                             |
| created_at | timestamp        | YES    |       | CURRENT_TIMESTAMP |                             |
| updated_at | timestamp        | YES    |       | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
| deleted_at | timestamp        | YES    |       | <null>            |                             |
+------------+------------------+--------+-------+-------------------+-----------------------------+
10 rows in set
Time: 0.007s
```
```sql
mysql root@localhost:tugas2> SELECT * from users where last_login is NULL
+------+------------+------------------------+--------------------+--------------------------------------------------------------+-------------+--------------+---------------------+---------------------+--------------+
|   id | username   | email                  | name               | password                                                     |       phone |   last_login | created_at          | updated_at          |   deleted_at |
|------+------------+------------------------+--------------------+--------------------------------------------------------------+-------------+--------------+---------------------+---------------------+--------------|
|    8 | gintama    | gintama@example.com    | Gintama            | $2y$10$ZN59at3SM1nPW8hcvn3LFuTYWhMxkNTwiro3k3JyKUPlU6vlTRrcO | 08123872282 |       <null> | 2018-03-27 13:20:59 | 2018-03-27 13:21:06 |       <null> |
|    9 | kurama     | kurama@jinchuuriki.org | Kurama Jinchuuriki | $2y$10$ZN59at3SM1nPW8hcvn3LFuTYWhMxkNTwiro3k3JyKUPlU6vlTRrcO | 02737673733 |       <null> | 2018-03-27 13:20:59 | 2018-03-27 13:22:31 |       <null> |
+------+------------+------------------------+--------------------+--------------------------------------------------------------+-------------+--------------+---------------------+---------------------+--------------+
2 rows in set
Time: 0.005s
```

3. Find all items that contains "mac".
```sql
mysql root@localhost:tugas2> SELECT name FROM items WHERE items.name LIKE '%MAC%'  
+----------------------------------+
| name                             |
|----------------------------------|
| Macbook Air 11 inch              |
| Macbook AIr 13 inch              |
| Macbook Pro 13 inch 2015 256GB   |
| iMac 5K 27 inch 1TB Fusion Drive |
+----------------------------------+
4 rows in set
Time: 0.003s
```

4. Count all paid orders with SKU IPHX-001.
```sql
mysql root@localhost:tugas2>  SELECT status,item FROM orders WHERE orders.status='paid' AND orders.item LIKE '%IPHX-001%';
+----------+------------------------------------------------------------------------------+
| status   | item                                                                         |
|----------+------------------------------------------------------------------------------|
| paid     | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} |
| paid     | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} |
+----------+------------------------------------------------------------------------------+
2 rows in set
Time: 0.003s
```

5. Find lowest price of all items.
```sql
mysql root@localhost:tugas2> SELECT name,price from items where items.price=(select MIN(items.price) from items)
+---------------------+----------+
| name                |    price |
|---------------------+----------|
| Macbook Air 11 inch | 11000000 |
+---------------------+----------+
1 row in set
Time: 0.004s
```

6. Find highest price of all items.
```sql
mysql root@localhost:tugas2> SELECT name,price from items where items.price=(select MAX(items.price) from items)
+----------------------------------+----------+
| name                             |    price |
|----------------------------------+----------|
| iMac 5K 27 inch 1TB Fusion Drive | 27000000 |
+----------------------------------+----------+
1 row in set
Time: 0.003s
```

7. Find average price of all items.
```sql
mysql root@localhost:tugas2> select AVG(price) from items
+--------------+
|   AVG(price) |
|--------------|
|    1.675e+07 |
+--------------+
1 row in set
Time: 0.003s
```

8. Find all orders made in February 2018.
```sql
mysql root@localhost:tugas2> SELECT item,created_at from orders where orders.created_at like '2018-02%'
+--------------------------------------------------------------------------------+---------------------+
| item                                                                           | created_at          |
|--------------------------------------------------------------------------------+---------------------|
| {"qty": 1, "sku": "MBA-001", "name": "Macbook Air 11 inch", "price": 11000000} | 2018-02-11 11:22:57 |
| {"qty": 1, "sku": "MBA-001", "name": "Macbook Air 11 inch", "price": 11000000} | 2018-02-12 11:49:09 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}   | 2018-02-13 12:03:04 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}   | 2018-02-20 12:03:04 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}   | 2018-02-24 12:03:04 |
+--------------------------------------------------------------------------------+---------------------+
5 rows in set
Time: 0.005s
```

9. Find all orders made between 1st March to 15th March.
```sql
mysql root@localhost:tugas2> SELECT item, created_at from orders where orders.created_at >= DATE '2018-03-01' and orders.created_at <= DATE '2018-03-15'
                          
+-------------------------------------------------------------------------------+---------------------+
| item                                                                          | created_at          |
|-------------------------------------------------------------------------------+---------------------|
| {"qty": 1, "sku": "IMAC-001", "name": "iMac 5K 27 inch", "price": "23000000"} | 2018-03-11 12:03:04 |
| {"qty": 1, "sku": "IMAC-001", "name": "iMac 5K 27 inch", "price": "23000000"} | 2018-03-12 12:03:04 |
| {"qty": 1, "sku": "IMAC-001", "name": "iMac 5K 27 inch", "price": "23000000"} | 2018-03-14 12:03:04 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}  | 2018-03-01 12:03:04 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}  | 2018-03-04 12:03:04 |
| {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}  | 2018-03-09 12:03:04 |
+-------------------------------------------------------------------------------+---------------------+
6 rows in set
Time: 0.005s
```

10. Find all items was sold in February 2018.
```sql
mysql root@localhost:tugas2> SELECT * from orders where status='paid' and orders.created_at >= DATE '2018-02-01' and orders.created_at <= DATE '2018-02-
                          -> 28'
+------+-----------+--------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
|   id |   user_id | item                                                                           | shipping_address   |   notes | payments   |    total | status   |   courier_id | created_at          | updated_at          |   deleted_at |
|------+-----------+--------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------|
|    1 |         3 | {"qty": 1, "sku": "MBA-001", "name": "Macbook Air 11 inch", "price": 11000000} | {}                 |  <null> | {}         | 11000000 | paid     |            1 | 2018-02-11 11:22:57 | 2018-03-27 12:18:44 |       <null> |
|   10 |         1 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}   | {}                 |  <null> | {}         | 21000000 | paid     |            1 | 2018-02-20 12:03:04 | 2018-03-27 12:15:40 |       <null> |
+------+-----------+--------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
2 rows in set
Time: 0.005s
```

11. Find all paid orders in March 2018.
```sql
mysql root@localhost:tugas2> SELECT * from orders where status='paid' and orders.created_at >= DATE '2018-03-01' and orders.created_at <= DATE '2018-03-
                          -> 31'
+------+-----------+-------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
|   id |   user_id | item                                                                          | shipping_address   |   notes | payments   |    total | status   |   courier_id | created_at          | updated_at          |   deleted_at |
|------+-----------+-------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------|
|   11 |         2 | {"qty": 1, "sku": "AROG-001", "name": "Asus ROG Stryx", "price": "14500000"}  | {}                 |  <null> | {}         | 14500000 | paid     |            2 | 2018-03-27 12:03:04 | 2018-03-27 12:19:00 |       <null> |
|   14 |         7 | {"qty": 1, "sku": "IMAC-001", "name": "iMac 5K 27 inch", "price": "27000000"} | {}                 |  <null> | {}         | 27000000 | paid     |            2 | 2018-03-24 12:03:04 | 2018-03-27 12:18:57 |       <null> |
|   31 |         7 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"}  | {}                 |  <null> | {}         | 21000000 | paid     |            1 | 2018-03-09 12:03:04 | 2018-03-27 12:16:01 |       <null> |
+------+-----------+-------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
3 rows in set
Time: 0.006s
```

12. Sum all total orders, with status canceled – made by user with ID 1.
```sql
mysql root@localhost:tugas2> SELECT sum(total) from orders where orders.user_id=1 and orders.status='canceled'
+--------------+
|   sum(total) |
|--------------|
|     27000000 |
+--------------+
1 row in set
Time: 0.003s
```

13. Sum all total orders, with status paid – made by user with ID 3.
```sql
mysql root@localhost:tugas2> SELECT sum(total) from orders where orders.user_id=3 and orders.status='paid'
+--------------+
|   sum(total) |
|--------------|
|     11000000 |
+--------------+
1 row in set
Time: 0.002s
```

14. Find all paid orders with courier ID 2 made by user ID 1.
```sql
mysql root@localhost:tugas2> select * from orders where status='paid' and courier_id=2 and user_id=1;
+------+-----------+--------+--------------------+---------+------------+---------+----------+--------------+--------------+--------------+--------------+
| id   | user_id   | item   | shipping_address   | notes   | payments   | total   | status   | courier_id   | created_at   | updated_at   | deleted_at   |
|------+-----------+--------+--------------------+---------+------------+---------+----------+--------------+--------------+--------------+--------------|
+------+-----------+--------+--------------------+---------+------------+---------+----------+--------------+--------------+--------------+--------------+
0 rows in set
Time: 0.003s
```

15. Find all orders that contains SKU IPHX-001. 

//using json here
```sql
mysql root@localhost:tugas2> select * from orders where item -> "$.sku" = "IPHX-001";
+------+-----------+------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
|   id |   user_id | item                                                                         | shipping_address   |   notes | payments   |    total | status   |   courier_id | created_at          | updated_at          |   deleted_at |
|------+-----------+------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------|
|    7 |         3 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | unpaid   |            1 | 2018-02-13 12:03:04 | 2018-03-27 12:15:36 |       <null> |
|   10 |         1 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | paid     |            1 | 2018-02-20 12:03:04 | 2018-03-27 12:15:40 |       <null> |
|   23 |         1 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | unpaid   |            2 | 2018-02-24 12:03:04 | 2018-03-27 12:18:49 |       <null> |
|   27 |         1 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | unpaid   |            1 | 2018-03-01 12:03:04 | 2018-03-27 12:15:54 |       <null> |
|   30 |         1 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | unpaid   |            3 | 2018-03-04 12:03:04 | 2018-03-27 12:18:50 |       <null> |
|   31 |         7 | {"qty": 1, "sku": "IPHX-001", "name": "iPhone X 256GB", "price": "21000000"} | {}                 |  <null> | {}         | 21000000 | paid     |            1 | 2018-03-09 12:03:04 | 2018-03-27 12:16:01 |       <null> |
+------+-----------+------------------------------------------------------------------------------+--------------------+---------+------------+----------+----------+--------------+---------------------+---------------------+--------------+
6 rows in set
Time: 0.009s
```