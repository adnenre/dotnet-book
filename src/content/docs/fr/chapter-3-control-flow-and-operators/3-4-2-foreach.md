---
title: foreach
sidebar:
  order: 16
  label: 3.4.2 foreach
---

`foreach` itère sur chaque élément d'une collection.

## Code

```csharp
string[] fruits = { "apple", "banana", "cherry" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
apple
banana
cherry
```
