---
title: Projet Analyse de données employés
sidebar:
  order: 205
  label: 8.5 Projet Analyse de données employés
---

**Contexte** : Construisez une application console qui analyse une liste d’employés à l’aide de requêtes LINQ. Le projet couvre le filtrage, la projection, le regroupement, l’agrégation et le tri.

## Code complet

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

        Console.WriteLine("=== Analyse des données employés ===\n");

        // 1. Filtrer les employés du département IT
        var itEmployees = employees.Where(e => e.Department == "IT");
        Console.WriteLine("Employés du département IT :");
        foreach (var e in itEmployees) Console.WriteLine($"  {e}");

        // 2. Salaire moyen par département
        var avgSalaryByDept = employees.GroupBy(e => e.Department)
                                        .Select(g => new { Department = g.Key, AverageSalary = g.Average(e => e.Salary) });
        Console.WriteLine("\nSalaire moyen par département :");
        foreach (var item in avgSalaryByDept)
            Console.WriteLine($"  {item.Department}: {item.AverageSalary:C}");

        // 3. Employé le mieux payé
        var highestPaid = employees.OrderByDescending(e => e.Salary).First();
        Console.WriteLine($"\nEmployé le mieux payé : {highestPaid.Name} avec {highestPaid.Salary:C}");

        // 4. Regrouper les employés par département, trier par nom dans chaque groupe
        var grouped = employees.GroupBy(e => e.Department)
                               .Select(g => new { Department = g.Key, Employees = g.OrderBy(e => e.Name) });
        Console.WriteLine("\nEmployés regroupés par département (triés par nom) :");
        foreach (var group in grouped)
        {
            Console.WriteLine($"  {group.Department}:");
            foreach (var e in group.Employees) Console.WriteLine($"    {e.Name}");
        }

        // 5. Employés embauchés après le 2020-01-01
        var after2020 = employees.Where(e => e.HireDate > new DateTime(2020, 1, 1));
        Console.WriteLine("\nEmployés embauchés après le 2020-01-01 :");
        foreach (var e in after2020) Console.WriteLine($"  {e.Name} - {e.HireDate:yyyy-MM-dd}");

        // 6. Projection : noms et salaires formatés
        var projected = employees.Select(e => new { e.Name, FormattedSalary = e.Salary.ToString("C") });
        Console.WriteLine("\nSalaires des employés (projetés) :");
        foreach (var p in projected) Console.WriteLine($"  {p.Name}: {p.FormattedSalary}");
    }
}
```

## Exemple d’exécution

```bash
=== Analyse des données employés ===

Employés du département IT :
  Alice (IT) - $75000.00 - Hired: 2020-01-15
  Charlie (IT) - $85000.00 - Hired: 2021-06-01
  Frank (IT) - $95000.00 - Hired: 2017-09-05

Salaire moyen par département :
  IT: $85,000.00
  HR: $65,000.00
  Sales: $80,000.00

Employé le mieux payé : Frank with $95,000.00

Employés regroupés par département (triés par nom) :
  IT:
    Alice
    Charlie
    Frank
  HR:
    Bob
  Sales:
    Diana
    Eve

Employés embauchés après le 2020-01-01 :
  Charlie - 2021-06-01
  Eve - 2022-02-14

Salaires des employés (projetés) :
  Alice: $75,000.00
  Bob: $65,000.00
  Charlie: $85,000.00
  Diana: $70,000.00
  Eve: $90,000.00
  Frank: $95,000.00
```

## Exemple d'utilisation dans le monde réel

**Tableau de bord analytique RH** : Ce projet simule des requêtes de reporting sur les employés utilisées dans les systèmes RH réels.

**Exemple** : Dans [Power BI](https://powerbi.microsoft.com/) ou [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/), des requêtes LINQ similaires alimentent des graphiques et des tableaux.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.1 Syntaxe de requête vs syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
