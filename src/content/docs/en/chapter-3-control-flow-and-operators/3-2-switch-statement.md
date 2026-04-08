---
title: switch Statement
sidebar:
  order: 6
  label: 3.2 switch statement
---

The `switch` statement selects one of many code blocks to execute.

## Code

```csharp
int day = 3;
string dayName;
switch (day)
{
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    default: dayName = "Unknown"; break;
}
Console.WriteLine(dayName);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Wednesday
```
