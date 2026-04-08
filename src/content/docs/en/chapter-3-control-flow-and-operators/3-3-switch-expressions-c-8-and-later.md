---
title: Switch Expressions (C# 8+)
sidebar:
  order: 11
  label: 3.3 Switch expressions C# 8 and later
---

Switch expressions provide a more concise syntax.

## Code

```csharp
int day = 2;
string dayType = day
switch
{
    1 or 7 => "Weekend",
    _ => "Weekday"
};
Console.WriteLine(dayType);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Weekday
```
