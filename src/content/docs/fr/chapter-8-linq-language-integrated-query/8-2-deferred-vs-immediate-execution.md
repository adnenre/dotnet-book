---
title: Exécution différée vs immédiate
sidebar:
  order: 186
  label: 8.2 Exécution différée vs immédiate
---

**Contexte** : Les requêtes LINQ ne sont pas exécutées lors de leur définition, mais lors de leur itération (exécution différée). Certains opérateurs forcent l’exécution immédiate.

```csharp
int[] numbers = { 1, 2, 3 };
var query = numbers.Where(n => n > 1); // pas encore exécutée
numbers[0] = 10; // modifie la source
foreach (var n in query) // exécutée maintenant, utilise les données mises à jour
{
    Console.WriteLine(n); // 10,2,3
}
```

## Exemple d'utilisation dans le monde réel

**Vues de données en direct** : L’exécution différée permet de définir une requête qui reflète toujours les dernières données (par exemple, filtrer une collection en direct).

**Exemple** : Dans [Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/), vous pouvez lier une liste d’interface utilisateur à une requête différée qui se met à jour lorsque la source change.

## Sections connexes

- [8.2.1 Opérateurs différés](/fr/chapter-8-linq-language-integrated-query/8-2-1-deferred-operators)
- [8.2.2 Opérateurs immédiats](/fr/chapter-8-linq-language-integrated-query/8-2-2-immediate-operators)
- [8.2.3 Opérateurs streaming vs buffering](/fr/chapter-8-linq-language-integrated-query/8-2-3-streaming-vs-buffering-operators)
