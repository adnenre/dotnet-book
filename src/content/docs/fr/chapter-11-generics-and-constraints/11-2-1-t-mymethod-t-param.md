---
title: T MyMethod<T>(T param)
sidebar:
  order: 404
  label: 11.2.1 T MyMethod<T>(T param)
---

**Contexte** : Une méthode générique peut prendre un paramètre du type générique et retourner une valeur du même type. Cela garantit que le type d'entrée et de sortie sont cohérents, sans perte d'informations de type.

## Exemple d'utilisation

```csharp
using System;

public class Manipulateur
{
    public T Dupliquer<T>(T original)
    {
        // Pour les types référence, on retourne la même référence (exemple simplifié)
        return original;
    }

    public T Convertir<T>(object valeur)
    {
        return (T)Convert.ChangeType(valeur, typeof(T));
    }
}

class Program
{
    static void Main()
    {
        var manip = new Manipulateur();
        int nombre = manip.Dupliquer(100);
        Console.WriteLine(nombre);

        double decimalConverti = manip.Convertir<double>("123.45");
        Console.WriteLine(decimalConverti);
    }
}
```

## Sortie console

```shell
dotnet run
100
123.45
```

## Remarques importantes

- Le paramètre `T` peut apparaître comme type de retour et comme type de paramètre.
- Cela évite les casts explicites et améliore la sécurité de type.

## Exemple d'utilisation dans le monde réel

**`JsonSerializer.Deserialize<T>(string json)`** – Prend un paramètre de type `T` et retourne une instance de `T`.  
Voir [documentation .NET sur la désérialisation JSON](https://docs.microsoft.com/fr-fr/dotnet/standard/serialization/system-text-json/deserialization).

## Sections connexes

- [11.2 Méthodes génériques](/fr/chapter-11-generics-and-constraints/11-2-generic-methods)
- [11.2.2 Inférence de type](/fr/chapter-11-generics-and-constraints/11-2-2-type-inference-at-call-site)
