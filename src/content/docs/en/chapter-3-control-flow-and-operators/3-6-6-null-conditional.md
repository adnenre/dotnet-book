---
title: Null Conditional Operator
sidebar:
  order: 30
  label: 3.6.6 Null conditional
---

The null conditional operator `?.` accesses a member only if the object is not null.

## Code

```csharp
string text = null;
int? length = text?.Length;
Console.WriteLine(length ?? 0);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
0
```
