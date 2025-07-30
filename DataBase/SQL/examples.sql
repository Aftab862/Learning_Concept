-- 1. ✅ SQL Schema

CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(id)
);
-- ✅ This creates a foreign key from employees.dept_id → departments.id.



-- 2. ✅ Prisma Schema (SQL)

model Department {
  id        Int        @id @default(autoincrement())
  name      String
  employees Employee[] // one-to-many
}

model Employee {
  id         Int        @id @default(autoincrement())
  name       String
  deptId     Int?
  department Department? @relation(fields: [deptId], references: [id])
}



-- 3. ✅ MongoDB Schema (Mongoose)

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});



const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
});


--------------------------------------------------------------------------------------------------------
✅ 1. SELECT – Fetch data

📌 SQL:
SELECT * FROM employees;

🔄 Prisma:
await prisma.employee.findMany();

🍃 Mongoose:
await Employee.find();

---

✅ 2. INSERT – Add new data

📌 SQL:
INSERT INTO employees (name, dept_id) VALUES ('Alice', 1);

🔄 Prisma:
await prisma.employee.create({
  data: { name: 'Alice', deptId: 1 }
});

🍃 Mongoose:
await Employee.create({ name: 'Alice', deptId: '60f...' });

---

✅ 3. UPDATE – Modify data

📌 SQL:
UPDATE employees SET name = 'Bob' WHERE id = 2;

🔄 Prisma:
await prisma.employee.update({
  where: { id: 2 },
  data: { name: 'Bob' },
});

🍃 Mongoose:
await Employee.findByIdAndUpdate('60f...', { name: 'Bob' });

---

✅ 4. DELETE – Remove data

📌 SQL:
DELETE FROM employees WHERE id = 3;

🔄 Prisma:
await prisma.employee.delete({
  where: { id: 3 },
});

🍃 Mongoose:
await Employee.findByIdAndDelete('60f...');

---

✅ 5. WHERE – Filter data

📌 SQL:
SELECT * FROM employees WHERE dept_id = 2;

🔄 Prisma:
await prisma.employee.findMany({
  where: { deptId: 2 },
});

🍃 Mongoose:
await Employee.find({ deptId: '60f...' });

---

✅ 6. JOIN – Relations

📌 SQL:
SELECT employees.name, departments.name
FROM employees
JOIN departments ON employees.dept_id = departments.id;

🔄 Prisma:
await prisma.employee.findMany({
  include: { department: true },
});

🍃 Mongoose:
await Employee.find().populate('deptId', 'name');

---

✅ 7. ORDER BY – Sort results

📌 SQL:
SELECT * FROM employees ORDER BY name ASC;

🔄 Prisma:
await prisma.employee.findMany({
  orderBy: { name: 'asc' },
});

🍃 Mongoose:
await Employee.find().sort({ name: 1 });

---

✅ 8. LIMIT – Limit results

📌 SQL:
SELECT * FROM employees LIMIT 5;

🔄 Prisma:
await prisma.employee.findMany({
  take: 5,
});

🍃 Mongoose:
await Employee.find().limit(5);






✅ 9. DISTINCT – Select unique values

📌 SQL:
SELECT DISTINCT dept_id FROM employees;

🔄 Prisma:
await prisma.employee.findMany({
  distinct: ['deptId'],
  select: { deptId: true },
});

🍃 Mongoose:
await Employee.distinct('deptId');

---

✅ 10. COUNT – Count rows

📌 SQL:
SELECT COUNT(*) FROM employees;

🔄 Prisma:
await prisma.employee.count();

🍃 Mongoose:
await Employee.countDocuments();

---

✅ 11. GROUP BY – Group rows

📌 SQL:
SELECT dept_id, COUNT(*) as total FROM employees GROUP BY dept_id;

🔄 Prisma:
await prisma.employee.groupBy({
  by: ['deptId'],
  _count: { _all: true },
});

🍃 Mongoose:
await Employee.aggregate([
  { $group: { _id: "$deptId", total: { $sum: 1 } } }
]);

---

✅ 12. LIKE – Pattern matching

📌 SQL:
SELECT * FROM employees WHERE name LIKE 'A%';

🔄 Prisma:
await prisma.employee.findMany({
  where: { name: { startsWith: 'A' } },
});

🍃 Mongoose:
await Employee.find({ name: { $regex: '^A', $options: 'i' } });

---

✅ 13. BETWEEN – Range filter

📌 SQL:
SELECT * FROM employees WHERE id BETWEEN 1 AND 5;

🔄 Prisma:
await prisma.employee.findMany({
  where: { id: { gte: 1, lte: 5 } },
});

🍃 Mongoose:
await Employee.find({ id: { $gte: 1, $lte: 5 } });

---

✅ 14. IS NULL – Check for null

📌 SQL:
SELECT * FROM employees WHERE dept_id IS NULL;

🔄 Prisma:
await prisma.employee.findMany({
  where: { deptId: null },
});

🍃 Mongoose:
await Employee.find({ deptId: null });

---

✅ 15. EXISTS – Check existence (SQL subquery)

📌 SQL:
SELECT * FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);

🔄 Prisma:
// No direct Prisma exists query, use manual or raw query.

🍃 Mongoose:
await Department.find({
  _id: { $in: await Employee.distinct('deptId') }
});
