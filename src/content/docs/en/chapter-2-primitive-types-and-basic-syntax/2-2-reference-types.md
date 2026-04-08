---
title: Reference Types
sidebar:
  order: 17
  label: 2.2 Reference types
---

Reference types store a reference to the data on the heap. Assignment copies the reference, not the data.

## Code

```csharp
class Person { public string Name; }
Person p1 = new Person();
p1.Name = "Alice";
Person p2 = p1; // p2 references same object
p2.Name = "Bob";
Console.WriteLine(p1.Name); // Bob
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Bob
```
