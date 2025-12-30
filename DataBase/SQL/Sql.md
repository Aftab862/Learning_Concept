1. INNER JOIN
Returns only matching rows from both tables base on condition like ids.

example: 

SELECT employees.name, departments.name
FROM employees
INNER JOIN departments ON employees.dept_id = departments.id;

➡️ Returns employees only if they belong to a department.




2. LEFT JOIN (or LEFT OUTER JOIN)
Returns all rows from the left table, and the matched rows from the right table.

If there’s no match, the right-side columns will be NULL.

Example:

SELECT employees.name, departments.name
FROM employees
LEFT JOIN departments ON employees.dept_id = departments.id;


➡️ Shows all employees, even if they aren’t in a department.





3. RIGHT JOIN (or RIGHT OUTER JOIN)
Returns all rows from the right table, and the matched rows from the left table.

If there’s no match, the left-side columns will be NULL.

Example:

SELECT employees.name, departments.name
FROM employees
RIGHT JOIN departments ON employees.dept_id = departments.id;


➡️ Shows all departments, even if no employee belongs to them.



4. FULL JOIN (or FULL OUTER JOIN)
Returns all rows from both tables.

If there's no match on either side, NULL is shown for the missing values.

Example:

SELECT employees.name, departments.name
FROM employees
FULL JOIN departments ON employees.dept_id = departments.id;


➡️ Combines all employees and all departments, showing NULL where there is no match.


 <!-- First Normal Form (1NF): A relation is said to be in 1NF only when all the entities of the
table contain unique or atomic values.

Second Normal Form (2NF): A relation is said to be in 2NF only if it is in 1NF and all
the non-key attributes of the table are fully dependent on the primary key.

Third Normal Form (3NF): A relation is said to be in 3NF only if it is in 2NF and every
non-key attribute of the table is not transitively dependent on the primary key. -->