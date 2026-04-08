---
title: if imbriqué
sidebar:
  order: 5
  label: 3.1.4 if imbriqué
---

Vous pouvez imbriquer des instructions `if` à l'intérieur d'un autre `if`.

## Code

```csharp
bool hasTicket = true;
bool isVIP = false;
if (hasTicket)
{
    if (isVIP)
        Console.WriteLine("Welcome VIP!");
    else
        Console.WriteLine("Welcome regular guest.");
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Welcome regular guest.
```
