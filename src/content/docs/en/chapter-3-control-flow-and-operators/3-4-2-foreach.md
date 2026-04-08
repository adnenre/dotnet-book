---
title: foreach
sidebar:
  order: 16
  label: 3.4.2 foreach
---

`foreach` iterates over each element in a collection.

## Code

```csharp
string[] fruits = { "apple", "banana", "cherry" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
apple
banana
cherry
```
