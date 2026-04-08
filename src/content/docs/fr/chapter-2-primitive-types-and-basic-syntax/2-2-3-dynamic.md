---
title: dynamic
sidebar:
  order: 20
  label: 2.2.3 dynamic
---

`dynamic` ignore la vérification de type à la compilation et résout les types à l'exécution.

## Code

```csharp
dynamic data = 10;
Console.WriteLine(data + 5);
data = "Hello";
Console.WriteLine(data.Length);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
15
5
```
