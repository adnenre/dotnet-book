---
title: Console.ReadKey
sidebar:
  order: 35
  label: 2.5.4 Console.ReadKey single character
---

`Console.ReadKey` reads a single key press without waiting for Enter.

## Code

```csharp
Console.Write("Press any key: ");
var key = Console.ReadKey();
Console.WriteLine($"\nYou pressed: {key.KeyChar}");
```

## Run the Application

```bash
dotnet run
```

## Result (example pressing 'A')

```shell
Press any key: A
You pressed: A
```
