---
title: Invocation dynamique de méthodes
sidebar:
  order: 604
  label: 13.1.4 Invocation dynamique de méthodes
---

**Contexte** : En utilisant `MethodInfo.Invoke`, vous pouvez appeler une méthode sur un objet (ou une méthode statique) à l'exécution, même si le nom de la méthode est déterminé dynamiquement. Cela est utile pour les scripts, les plugins ou lorsque la signature de la méthode n'est pas connue à la compilation. Les performances sont plus lentes que les appels directs, mais acceptables dans de nombreux scénarios.

## Exemple d'utilisation

```csharp
using System;
using System.Reflection;

public class ServiceMath
{
    public int Multiplier(int x, int y) => x * y;
}

class Program
{
    static void Main()
    {
        Type t = typeof(ServiceMath);
        object instance = Activator.CreateInstance(t);
        MethodInfo method = t.GetMethod("Multiplier");
        object result = method.Invoke(instance, new object[] { 5, 6 });
        Console.WriteLine($"Résultat : {result}");
    }
}
```

## Sortie console

```shell
dotnet run
Résultat : 30
```

## Remarques importantes

- Pour les méthodes statiques, passez `null` comme instance.
- Les paramètres sont passés sous forme de tableau d'objets.
- Les exceptions levées par la méthode invoquée sont encapsulées dans `TargetInvocationException`.

## Exemple d'utilisation dans le monde réel

**Analyseur de ligne de commande** – Invoque dynamiquement une méthode sur un contrôleur en fonction du nom de la commande.  
Voir [documentation .NET sur MethodInfo.Invoke](https://docs.microsoft.com/fr-fr/dotnet/api/system.reflection.methodbase.invoke).

## Sections connexes

- [13.1.3 MemberInfo MethodInfo PropertyInfo](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
- [13.2.3 Lecture des attributs par réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
