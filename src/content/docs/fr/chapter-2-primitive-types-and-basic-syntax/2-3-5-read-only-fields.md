---
title: Champs readonly
sidebar:
  order: 26
  label: 2.3.5 Champs readonly
---

Les champs `readonly` ne peuvent être assignés que dans le constructeur ou lors de la déclaration.

## Code

```csharp
class Example {
public readonly int Value;
public Example(int v) { Value = v; }
}
var ex = new Example(42);
Console.WriteLine(ex.Value);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
42
```
