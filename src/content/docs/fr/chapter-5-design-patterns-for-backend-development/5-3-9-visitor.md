---
title: Visitor
sidebar:
  order: 128
  label: 5.3.9 Visitor
---

**Contexte** : Représenter une opération à effectuer sur les éléments d’une structure d’objets. Visitor permet de définir une nouvelle opération sans changer les classes des éléments.

```csharp
public interface IElement
{
    void Accept(IVisitor visitor);
}

public class ConcreteElementA : IElement
{
    public void Accept(IVisitor visitor) => visitor.VisitConcreteElementA(this);
}

public interface IVisitor
{
    void VisitConcreteElementA(ConcreteElementA element);
}

public class ConcreteVisitor : IVisitor
{
    public void VisitConcreteElementA(ConcreteElementA element) => Console.WriteLine("Visited A");
}
```

## Exemple d'utilisation dans le monde réel

**Traitement d’arbre syntaxique abstrait (AST)** : Un compilateur définit différents visiteurs (vérificateur de type, générateur de code, optimiseur) qui parcourent l’AST sans modifier les classes des nœuds.

**Exemple** : Dans .NET, [`System.Linq.Expressions.ExpressionVisitor`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.expressions.expressionvisitor) permet de visiter les arbres d’expressions. [Roslyn](https://github.com/dotnet/roslyn) utilise abondamment les visiteurs pour l’analyse et la transformation des arbres syntaxiques.

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.8 Template Method](/fr/chapter-5-design-patterns-for-backend-development/5-3-8-template-method)
- [5.4 Patrons architecturaux pour le backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
