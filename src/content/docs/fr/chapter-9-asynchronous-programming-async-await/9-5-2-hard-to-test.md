---
title: Difficile à tester
sidebar:
  order: 224
  label: 9.5.2 Difficile à tester
---

**Contexte** : Les méthodes `async void` sont difficiles à tester unitairement car il n’y a pas de `Task` à attendre. Vous ne pouvez pas savoir quand la méthode se termine ou si elle a levé une exception.

```csharp
using System.Threading.Tasks;
using Xunit;

public class MyService
{
    // Mauvaise : difficile à tester
    public async void DoAsyncVoid()
    {
        await Task.Delay(10);
    }

    // Bonne : retourne Task
    public async Task DoAsyncTask()
    {
        await Task.Delay(10);
    }
}

public class MyServiceTests
{
    [Fact]
    public async Task TestAsyncVoid_Problem()
    {
        var service = new MyService();
        service.DoAsyncVoid(); // ne peut pas attendre, ni vérifier la fin
        // Vous devriez ajouter des délais arbitraires...
        await Task.Delay(100); // test fragile
    }

    [Fact]
    public async Task TestAsyncTask_Good()
    {
        var service = new MyService();
        await service.DoAsyncTask(); // peut attendre, test fiable
    }
}
```

## Solution

Changez la méthode pour qu’elle retourne `Task`.

## Exemple d'utilisation dans le monde réel

**Tests unitaires avec xUnit** : xUnit ne supporte pas les tests `async void` ; ils doivent retourner `Task`.

**Exemple** : [Tests asynchrones xUnit](https://xunit.net/docs/getting-started/netframework/visual-studio#write-first-tests)

## Sections connexes

- [9.5 Éviter async void](/fr/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
- [9.5.1 Les exceptions ne peuvent pas être capturées](/fr/chapter-9-asynchronous-programming-async-await/9-5-1-exceptions-cannot-be-caught)
