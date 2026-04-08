---
title: switch avec motifs constants
sidebar:
  order: 7
  label: 3.2.1 switch avec motifs constants
---

Les motifs constants comparent l'expression à une valeur constante.

## Code

```csharp
char grade = 'B';
switch (grade)
{
    case 'A': Console.WriteLine("Excellent"); break;
    case 'B': Console.WriteLine("Good"); break;
    case 'C': Console.WriteLine("Fair"); break;
    default: Console.WriteLine("Needs improvement"); break;
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Good
```
