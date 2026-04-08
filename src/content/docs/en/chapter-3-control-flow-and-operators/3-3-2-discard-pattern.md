---
title: Discard Pattern (_)
sidebar:
  order: 13
  label: 3.3.2 discard pattern
---

The discard pattern `_` matches any value and is used as a default.

## Code

```csharp
int score = 85;
string grade = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    _ => "F"
};
Console.WriteLine(grade);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
B
```
