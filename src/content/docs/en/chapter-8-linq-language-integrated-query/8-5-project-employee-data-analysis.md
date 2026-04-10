---
title: Project Employee Data Analysis
sidebar:
  order: 205
  label: 8.5 Project Employee Data Analysis
---

**Context**: Build a console application that analyzes a list of employees using LINQ queries. The project covers filtering, projection, grouping, aggregation, and ordering.

## Requirements

1. Create an `Employee` class with properties: `Id`, `Name`, `Department`, `Salary`, `HireDate`.
2. Create a list of sample employees.
3. Implement queries to:
   - List employees in a specific department
   - Calculate average salary per department
   - Find the highest paid employee
   - Group employees by department and sort by name
   - List employees hired after a certain date
   - Project employee names and salaries with formatting

## Complete Code

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
    public decimal Salary { get; set; }
    public DateTime HireDate { get; set; }

    public override string ToString() => $"{Name} ({Department}) - ${Salary} - Hired: {HireDate:yyyy-MM-dd}";
}

public class Program
{
    static List<Employee> GetEmployees() => new()
    {
        new Employee { Id = 1, Name = "Alice", Department = "IT", Salary = 75000, HireDate = new DateTime(2020, 1, 15) },
        new Employee { Id = 2, Name = "Bob", Department = "HR", Salary = 65000, HireDate = new DateTime(2019, 3, 10) },
        new Employee { Id = 3, Name = "Charlie", Department = "IT", Salary = 85000, HireDate = new DateTime(2021, 6, 1) },
        new Employee { Id = 4, Name = "Diana", Department = "Sales", Salary = 70000, HireDate = new DateTime(2018, 11, 20) },
        new Employee { Id = 5, Name = "Eve", Department = "Sales", Salary = 90000, HireDate = new DateTime(2022, 2, 14) },
        new Employee { Id = 6, Name = "Frank", Department = "IT", Salary = 95000, HireDate = new DateTime(2017, 9, 5) },
    };

    static void Main()
    {
        var employees = GetEmployees();

        Console.WriteLine("=== Employee Data Analysis ===\n");

        // 1. Filter employees in IT department
        var itEmployees = employees.Where(e => e.Department == "IT");
        Console.WriteLine("IT Department Employees:");
        foreach (var e in itEmployees) Console.WriteLine($"  {e}");

        // 2. Average salary per department
        var avgSalaryByDept = employees.GroupBy(e => e.Department)
                                        .Select(g => new { Department = g.Key, AverageSalary = g.Average(e => e.Salary) });
        Console.WriteLine("\nAverage Salary by Department:");
        foreach (var item in avgSalaryByDept)
            Console.WriteLine($"  {item.Department}: {item.AverageSalary:C}");

        // 3. Highest paid employee
        var highestPaid = employees.OrderByDescending(e => e.Salary).First();
        Console.WriteLine($"\nHighest Paid Employee: {highestPaid.Name} with {highestPaid.Salary:C}");

        // 4. Group employees by department, sort by name within each group
        var grouped = employees.GroupBy(e => e.Department)
                               .Select(g => new { Department = g.Key, Employees = g.OrderBy(e => e.Name) });
        Console.WriteLine("\nEmployees Grouped by Department (sorted by name):");
        foreach (var group in grouped)
        {
            Console.WriteLine($"  {group.Department}:");
            foreach (var e in group.Employees) Console.WriteLine($"    {e.Name}");
        }

        // 5. Employees hired after 2020-01-01
        var after2020 = employees.Where(e => e.HireDate > new DateTime(2020, 1, 1));
        Console.WriteLine("\nEmployees Hired After 2020-01-01:");
        foreach (var e in after2020) Console.WriteLine($"  {e.Name} - {e.HireDate:yyyy-MM-dd}");

        // 6. Projection: names and salaries with formatting
        var projected = employees.Select(e => new { e.Name, FormattedSalary = e.Salary.ToString("C") });
        Console.WriteLine("\nEmployee Salaries (Projected):");
        foreach (var p in projected) Console.WriteLine($"  {p.Name}: {p.FormattedSalary}");
    }
}
```

## Example Run

```bash
=== Employee Data Analysis ===

IT Department Employees:
  Alice (IT) - $75000.00 - Hired: 2020-01-15
  Charlie (IT) - $85000.00 - Hired: 2021-06-01
  Frank (IT) - $95000.00 - Hired: 2017-09-05

Average Salary by Department:
  IT: $85,000.00
  HR: $65,000.00
  Sales: $80,000.00

Highest Paid Employee: Frank with $95,000.00

Employees Grouped by Department (sorted by name):
  IT:
    Alice
    Charlie
    Frank
  HR:
    Bob
  Sales:
    Diana
    Eve

Employees Hired After 2020-01-01:
  Charlie - 2021-06-01
  Eve - 2022-02-14

Employee Salaries (Projected):
  Alice: $75,000.00
  Bob: $65,000.00
  Charlie: $85,000.00
  Diana: $70,000.00
  Eve: $90,000.00
  Frank: $95,000.00
```

## Real-world usage example

**HR analytics dashboard**: This project simulates real‑world employee reporting queries used in HR systems.

**Example**: In [Power BI](https://powerbi.microsoft.com/) or [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/) reporting, similar LINQ queries feed charts and tables.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.1 Query syntax vs method syntax](/en/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
