---
title: when Guards
sidebar:
  order: 9
  label: 3.2.3 when guards
---

Use `when` to add additional conditions to a case.

## Code

```csharp
int number = 15;
switch (number)
{
    case int n when n < 10:
        Console.WriteLine("Less than 10");
        break;
    case int n when n >= 10 && n <= 20:
        Console.WriteLine("Between 10 and 20");
        break;
    default:
        Console.WriteLine("Other");
        break;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Between 10 and 20
```
