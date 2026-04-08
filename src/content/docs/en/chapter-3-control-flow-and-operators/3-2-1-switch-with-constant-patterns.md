---
title: switch with Constant Patterns
sidebar:
  order: 7
  label: 3.2.1 switch with constant patterns
---

Constant patterns match the expression against a constant value.

## Code

```csharp
char grade = 'B';
switch (grade)
{
    case 'A': Console.WriteLine("Excellent"); break;
    case 'B': Console.WriteLine("Good"); break;
    case 'C': Console.WriteLine("Fair"); break;
    default: Console.WriteLine("Needs improvement"); break;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Good
```
