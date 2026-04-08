---
title: Bridge
sidebar:
  order: 116
  label: 5.2.5 Bridge
---

**Contexte** : Découpler une abstraction de son implémentation afin que les deux puissent varier indépendamment.

```csharp
public interface IImplementation
{
    void OperationImpl();
}

public class ConcreteImplA : IImplementation
{
    public void OperationImpl() => Console.WriteLine("Impl A");
}

public abstract class Abstraction
{
    protected IImplementation _impl;
    protected Abstraction(IImplementation impl) => _impl = impl;
    public abstract void Operation();
}

public class RefinedAbstraction : Abstraction
{
    public RefinedAbstraction(IImplementation impl) : base(impl) { }
    public override void Operation() => _impl.OperationImpl();
}
```

## Exemple d'utilisation dans le monde réel

**Pilotes de périphériques et télécommandes** : Une abstraction de télécommande peut fonctionner avec différentes implémentations de périphérique (TV, radio, projecteur). L’ajout d’une nouvelle télécommande (par exemple, vocale) n’affecte pas les classes de périphérique.

**Exemple** : Dans .NET, [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream) est une abstraction ; [`FileStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.filestream), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.memorystream) sont des implémentations. [`GZipStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.compression.gzipstream) est une autre abstraction qui utilise une implémentation de flux – pattern Bridge.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.4 Facade](/fr/chapter-5-design-patterns-for-backend-development/5-2-4-facade)
- [5.2.6 Composite](/fr/chapter-5-design-patterns-for-backend-development/5-2-6-composite)
