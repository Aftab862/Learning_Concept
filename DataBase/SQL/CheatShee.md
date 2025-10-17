This comprehensive SQL cheat sheet is designed to help you quickly recall syntax and apply common SQL commands.

## 📖 SQL Cheat Sheet

We'll use a small reference schema for the examples:

| Table | Columns | Purpose |
| :--- | :--- | :--- |
| **`Employees`** | `employee_id` (PK), `first_name`, `last_name`, `department_id` (FK), `salary`, `hire_date` | Employee information |
| **`Departments`** | `department_id` (PK), `department_name`, `location` | Department information |

-----

### 1\. Data Query Language (DQL)

This category focuses on retrieving data from the database.

| Command | Syntax | Usage | Example Query |
| :--- | :--- | :--- | :--- |
| **`SELECT`** | `SELECT column1, column2 FROM table_name;` | Retrieves data from one or more tables. Use `*` to select all columns. | `SELECT first_name, last_name, salary FROM Employees;` |
| **`WHERE`** | `SELECT * FROM table_name WHERE condition;` | Filters records based on a specified condition. | `SELECT * FROM Employees WHERE salary > 60000;` |
| **`DISTINCT`** | `SELECT DISTINCT column1 FROM table_name;` | Returns only unique (different) values in a column. | `SELECT DISTINCT location FROM Departments;` |
| **`ORDER BY`** | `SELECT * FROM table_name ORDER BY column1 [ASC/DESC];` | Sorts the result set by one or more columns. Default is **`ASC`** (ascending). | `SELECT * FROM Employees ORDER BY last_name ASC, salary DESC;` |
| **`LIMIT`** / **`FETCH`** | `SELECT * FROM table LIMIT number;` **(MySQL, PostgreSQL)**<br>`SELECT TOP number * FROM table;` **(SQL Server)** | Restricts the number of rows returned by the query. | `SELECT * FROM Employees ORDER BY salary DESC LIMIT 5;` |
| **`BETWEEN`** | `WHERE column BETWEEN value1 AND value2;` | Filters values within a given range (inclusive). | `SELECT * FROM Employees WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';` |
| **`LIKE`** | `WHERE column LIKE pattern;` | Searches for a specified pattern in a column. Use `%` (any string of zero or more characters) or `_` (any single character). | `SELECT * FROM Employees WHERE last_name LIKE 'Smi%';` |
| **`IN`** | `WHERE column IN (value1, value2, ...);` | Filters for rows where a column's value is in a list of specified values. | `SELECT * FROM Employees WHERE department_id IN (101, 102);` |
| **`IS NULL`** | `WHERE column IS NULL;` | Checks for **`NULL`** values. **Note**: Do not use `=` for `NULL` checks. | `SELECT * FROM Employees WHERE department_id IS NULL;` |

-----

### 2\. Data Manipulation Language (DML)

These commands are used for modifying the data in the database.

| Command | Syntax | Usage | Example Query |
| :--- | :--- | :--- | :--- |
| **`INSERT INTO`** | `INSERT INTO table (col1, col2) VALUES (val1, val2);` | Adds new rows of data into a table. | `INSERT INTO Departments (department_id, department_name) VALUES (103, 'Marketing');` |
| **`UPDATE`** | `UPDATE table SET col1 = val1, col2 = val2 WHERE condition;` | Modifies existing data in a table. **Always use a `WHERE` clause\!** | `UPDATE Employees SET salary = 65000 WHERE employee_id = 201;` |
| **`DELETE FROM`** | `DELETE FROM table WHERE condition;` | Removes existing rows from a table. **Always use a `WHERE` clause\!** | `DELETE FROM Employees WHERE salary < 30000;` |

-----

### 3\. Data Definition Language (DDL)

DDL commands are used to define the database structure or schema.

| Command | Syntax | Usage | Example Query |
| :--- | :--- | :--- | :--- |
| **`CREATE TABLE`** | `CREATE TABLE table_name (col1 datatype PRIMARY KEY, col2 datatype, ...);` | Creates a new table in the database. | `CREATE TABLE Projects (project_id INT PRIMARY KEY, project_name VARCHAR(100));` |
| **`ALTER TABLE`** | `ALTER TABLE table_name ADD column_name datatype;` | Modifies an existing table structure (e.g., add, drop, or modify columns). | `ALTER TABLE Employees ADD email VARCHAR(100);` |
| **`DROP TABLE`** | `DROP TABLE table_name;` | Deletes a table and all its data, indexes, and constraints from the database. **Irreversible\!** | `DROP TABLE Projects;` |
| **`TRUNCATE TABLE`** | `TRUNCATE TABLE table_name;` | Deletes all rows from a table, but keeps the table structure and its columns, constraints, etc. (Often faster than `DELETE` without `WHERE`). | `TRUNCATE TABLE AuditLogs;` |

-----

### 4\. Joins

Joins combine rows from two or more tables based on a related column between them.

| Join Type | Description | Example Query |
| :--- | :--- | :--- |
| **`INNER JOIN`** | Returns rows when there is a match in both tables. (Most common join) | `SELECT e.first_name, d.department_name FROM Employees e INNER JOIN Departments d ON e.department_id = d.department_id;` |
| **`LEFT JOIN`** | Returns all rows from the *left* table, and the matched rows from the *right* table. Returns `NULL` for the right side where no match exists. | `SELECT e.first_name, d.department_name FROM Employees e LEFT JOIN Departments d ON e.department_id = d.department_id;` |
| **`RIGHT JOIN`** | Returns all rows from the *right* table, and the matched rows from the *left* table. Returns `NULL` for the left side where no match exists. | `SELECT e.first_name, d.department_name FROM Employees e RIGHT JOIN Departments d ON e.department_id = d.department_id;` |
| **`FULL (OUTER) JOIN`** | Returns all rows when there is a match in one of the tables. Returns `NULL` on both sides where there is no match. **(MySQL often uses `UNION` of `LEFT` and `RIGHT` joins to achieve this)** | `SELECT * FROM Employees e FULL OUTER JOIN Departments d ON e.department_id = d.department_id;` |

-----

### 5\. Aggregation and Grouping (Functions)

Used to calculate a single result from multiple rows.

| Command | Syntax / Usage | Example Query |
| :--- | :--- | :--- |
| **`GROUP BY`** | `SELECT aggregate_function(col) FROM table GROUP BY col;` | Groups rows that have the same values into summary rows. **Must be used with aggregate functions.** | `SELECT department_id, COUNT(employee_id) AS total_employees FROM Employees GROUP BY department_id;` |
| **`HAVING`** | `... GROUP BY col HAVING condition;` | Filters the result of the `GROUP BY` clause. **Cannot use `WHERE` on aggregate results.** | `SELECT department_id, AVG(salary) FROM Employees GROUP BY department_id HAVING AVG(salary) > 60000;` |
| **`COUNT()`** | `COUNT(column)` or `COUNT(*)` | Returns the number of rows. `COUNT(*)` counts all rows; `COUNT(col)` counts non-NULL values in the column. | `SELECT COUNT(employee_id) FROM Employees;` |
| **`SUM()`** | `SUM(numeric_column)` | Calculates the total sum of a numeric column. | `SELECT SUM(salary) FROM Employees;` |
| **`AVG()`** | `AVG(numeric_column)` | Calculates the average value of a numeric column. | `SELECT AVG(salary) FROM Employees;` |
| **`MIN()`** | `MIN(column)` | Returns the smallest value in the selected column. | `SELECT MIN(hire_date) FROM Employees;` |
| **`MAX()`** | `MAX(column)` | Returns the largest value in the selected column. | `SELECT MAX(salary) FROM Employees;` |

-----

### 6\. Subqueries and Set Operations

| Command | Usage | Example Query |
| :--- | :--- | :--- |
| **Subquery** | A `SELECT` statement nested within another SQL query. Used to return data that will be used in the main query. | `SELECT * FROM Employees WHERE department_id IN (SELECT department_id FROM Departments WHERE location = 'New York');` |
| **`UNION`** | Combines the result sets of two or more `SELECT` statements (must have the same number of columns and compatible data types). **Removes duplicate rows.** | `(SELECT first_name FROM Employees) UNION (SELECT department_name FROM Departments);` |
| **`UNION ALL`** | Combines the result sets of two or more `SELECT` statements (similar to `UNION`), but **retains duplicate rows.** | `(SELECT employee_id FROM Employees WHERE salary > 50000) UNION ALL (SELECT employee_id FROM Employees WHERE hire_date > '2024-01-01');` |

-----

### 7\. SQL Best Practices

Following these practices leads to more readable, efficient, and maintainable SQL code.

  * **Capitalization:** Use **uppercase** for SQL keywords (`SELECT`, `FROM`, `WHERE`, etc.). This is a common convention that improves readability by clearly distinguishing commands from table/column names.
  * **Aliasing:** Use **aliases** (`AS`) for tables and columns, especially in joins or complex queries, to shorten names and prevent ambiguity.
      * *Example:* `SELECT e.first_name, d.department_name FROM Employees AS e JOIN Departments AS d ...`
  * **Avoid `SELECT *`:** Explicitly list the columns you need. This reduces network traffic, improves query performance (especially on large tables), and prevents issues if table schemas change.
  * **Filter Early:** Use the **`WHERE`** clause to filter rows before aggregation or sorting. This significantly reduces the data the database has to process.
  * **Indexing:** Create **Indexes** on columns frequently used in `WHERE` clauses, `JOIN` conditions, and `ORDER BY` clauses to speed up data retrieval. (But don't over-index, as it slows down `INSERT`/`UPDATE`/`DELETE` operations).
  * **Use Prepared Statements:** For applications, use **prepared statements** or parameterized queries to prevent **SQL Injection** attacks and often improve performance by reusing execution plans.

-----

### 8\. Vendor-Specific Notes

| Feature | MySQL | PostgreSQL | SQL Server |
| :--- | :--- | :--- | :--- |
| **Top N Rows** | `LIMIT` | `LIMIT` | `TOP` or `FETCH FIRST n ROWS ONLY` |
| **Date Functions** | `NOW()`, `CURDATE()` | `NOW()`, `CURRENT_DATE` | `GETDATE()`, `CURRENT_TIMESTAMP` |
| **Auto-Increment** | `AUTO_INCREMENT` | `SERIAL` or `GENERATED AS IDENTITY` | `IDENTITY(1,1)` |
| **Case Sensitivity** | Typically **case-insensitive** for table/column names on Windows/macOS (but dependent on file system and collation). | **Case-sensitive** by default for table/column names. | Typically **case-insensitive** (dependent on collation). |
| **String Concatenation** | `CONCAT(str1, str2)` | `str1 \|\| str2` | `str1 + str2` |
















