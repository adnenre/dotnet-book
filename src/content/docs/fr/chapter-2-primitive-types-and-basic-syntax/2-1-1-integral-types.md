---
title: Types entiers
sidebar:
  order: 2
  label: 2.1.1 Types entiers
---

Les types entiers représentent des nombres entiers. Ils diffèrent par leur taille et leur plage.

## Code

```csharp
sbyte sb = 100;
byte b = 255;
short sh = 30000;
ushort us = 60000;
int i = 1234567890;
uint ui = 4000000000;
long l = 9223372036854775807;
ulong ul = 18446744073709551615;
Console.WriteLine($"int max: {int.MaxValue}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
int max: 2147483647
```
