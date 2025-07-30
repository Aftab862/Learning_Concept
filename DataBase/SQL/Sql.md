🔹 1NF – First Normal Form
👉 Rule: No multiple values in a single field. One value per box/field/column.

❌ Bad Table (Not in 1NF):
StudentID	Name	Subjects
1	        Ali	    Math, Science
2	        Sana	English, History

Problem: Subjects are comma-separated (multiple values in one column).

✅ Fixed Table (In 1NF):
StudentID	Name	Subject
1	        Ali	    Math
1	        Ali 	Science
2	        Sana    English
2	        Sana    History

✔️ Now each cell has only one value.
1NF is done.













🔹 2NF – Second Normal Form
👉 Rule: All non-key data must depend on the whole key.

Let’s say you now include the class section:

❌ Still Problem (Not in 2NF):
StudentID	Subject	ClassSection	StudentName
1	        Math          	A	        Ali
1	        Science       	A	        Ali
2	        English       	B	        Sana

The StudentName and ClassSection depend only on StudentID, not the combination of StudentID + Subject.

This violates 2NF.

✅ Fixed Tables (In 2NF):
Table 1: Students

StudentID	StudentName	ClassSection
1           	Ali     	A
2           	Sana        B

Table 2: Subjects

StudentID	Subject
1	Math
1	Science
2	English

✔️ Now every non-key column depends on the entire key.
2NF is done.




🔹 3NF – Third Normal Form
👉 Rule: No column should depend on another non-ID column.

Let’s say you include city and zip code now:

❌ Bad Table (Not in 3NF):
StudentID	Name	City	ZipCode
1	        Ali	    Lahore	 54000
2	        Sana	Karachi	 74000

Problem: ZipCode depends on City, not StudentID.

That breaks 3NF — because ZipCode is dependent on another non-key column.

✅ Fixed Tables (In 3NF):
Table 1: Students

StudentID	Name	City
1	        Ali 	Lahore
2	        Sana    Karachi

Table 2: Cities

City	 ZipCode
Lahore	 54000
Karachi	 74000

✔️ Now there’s no indirect dependency.
3NF is done.









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


