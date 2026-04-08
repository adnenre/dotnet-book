---
title: Instruction switch
sidebar:
  order: 6
  label: 3.2 Instruction switch
---

L'instruction `switch` sélectionne un bloc de code parmi plusieurs.

## Code

```csharp
int day = 3;
string dayName;
switch (day)
{
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    default: dayName = "Unknown"; break;
}
Console.WriteLine(dayName);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Wednesday
```
