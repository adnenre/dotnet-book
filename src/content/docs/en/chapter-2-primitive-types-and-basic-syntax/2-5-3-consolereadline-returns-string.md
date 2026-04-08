---
title: Console.ReadLine
sidebar:
  order: 34
  label: 2.5.3 Console.ReadLine returns string
---

`Console.ReadLine` reads a line of input and returns it as a string.

## Code

```csharp
Console.Write("Enter text: ");
string input = Console.ReadLine();
Console.WriteLine($"You entered: {input}");
```

## Run the Application

```bash
dotnet run
```

## Result (example input "test")

```shell
Enter text: test
You entered: test
```
