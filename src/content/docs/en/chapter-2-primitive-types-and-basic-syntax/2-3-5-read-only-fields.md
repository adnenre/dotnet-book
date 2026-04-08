---
title: Read‑only Fields
sidebar:
  order: 26
  label: 2.3.5 Read only fields
---

Read‑only fields can be assigned only in the constructor or at declaration.

## Code

```csharp
class Example {
public readonly int Value;
public Example(int v) { Value = v; }
}
var ex = new Example(42);
Console.WriteLine(ex.Value);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
42
```
