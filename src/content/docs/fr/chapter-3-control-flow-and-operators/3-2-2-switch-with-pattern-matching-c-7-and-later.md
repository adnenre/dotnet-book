---
title: switch avec filtrage par motif (C# 7+)
sidebar:
  order: 8
  label: 3.2.2 switch avec critères de correspondance C# 7 et ultérieur
---

Le filtrage par motif permet de basculer sur le type et d'autres motifs.

## Code

```csharp
object obj = 42;
switch (obj)
{
    case int i:
        Console.WriteLine($"Integer: {i}");
        break;
    case string s:
        Console.WriteLine($"String: {s}");
        break;
    default:
        Console.WriteLine("Unknown type");
        break;
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Integer: 42
```
