---
title: Parse and TryParse
sidebar:
  order: 40
  label: 2.6.4 Parse and TryParse
---

`Parse` throws an exception on failure; `TryParse` returns false.

## Code

```csharp
string input = "456";
if (int.TryParse(input, out int result))
Console.WriteLine($"Parsed: {result}");
else
Console.WriteLine("Invalid");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Parsed: 456
```
