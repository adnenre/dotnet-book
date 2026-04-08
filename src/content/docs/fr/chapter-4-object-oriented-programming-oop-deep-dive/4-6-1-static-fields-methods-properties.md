---
title: Champs, méthodes, propriétés static
sidebar:
  order: 101
  label: 4.6.1 Champs, méthodes, propriétés static
---

**Contexte** : Les membres statiques sont partagés entre toutes les instances d'une classe. On y accède via le nom de la classe.

## Champ static

```csharp
public class Compteur
{
    public static int Nombre = 0;
    public Compteur() => Nombre++;
}
Console.WriteLine(Compteur.Nombre); // 2 après deux instanciations
```

## Méthode static

```csharp
public class AideMath
{
    public static int Carre(int x) => x * x;
}
int resultat = AideMath.Carre(5);
```
