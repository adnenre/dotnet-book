---
title: dynamic
sidebar:
  order: 20
  label: 2.2.3 dynamic
---

`dynamic` bypasses compile‑time type checking and resolves types at runtime.

## Code

```csharp
dynamic data = 10;
Console.WriteLine(data + 5);
data = "Hello";
Console.WriteLine(data.Length);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
15
5
```
