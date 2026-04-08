---
title: Template Method
sidebar:
  order: 127
  label: 5.3.8 Template Method
---

**Contexte** : Définir le squelette d’un algorithme dans une opération, en reportant certaines étapes aux sous‑classes. Template Method permet aux sous‑classes de redéfinir certaines étapes sans changer la structure de l’algorithme.

```csharp
public abstract class AbstractClass
{
    public void TemplateMethod()
    {
        Step1();
        Step2();
    }
    protected abstract void Step1();
    protected virtual void Step2() => Console.WriteLine("Default step2");
}

public class ConcreteClass : AbstractClass
{
    protected override void Step1() => Console.WriteLine("Step1 implemented");
}
```

## Exemple d'utilisation dans le monde réel

**Importateurs de données** : Une classe de base `DataImporter` définit les étapes : `OpenSource()`, `ParseData()`, `ValidateData()`, `SaveToDatabase()`. Les sous‑classes ne remplacent que les étapes nécessaires (importateur CSV, XML, JSON).

**Exemple** : Dans .NET, [`Stream.Read`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream.read) est abstrait ; les flux concrets le remplacent. Le pattern [`IDisposable`](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose) avec `Dispose(bool)` est une méthode template. De même, les méthodes du cycle de vie [`System.Web.UI.Page`](<https://docs.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)>).

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.7 State](/fr/chapter-5-design-patterns-for-backend-development/5-3-7-state)
- [5.3.9 Visitor](/fr/chapter-5-design-patterns-for-backend-development/5-3-9-visitor)
