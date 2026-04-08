---
title: State
sidebar:
  order: 126
  label: 5.3.7 State
---

**Contexte** : Permettre à un objet de modifier son comportement lorsque son état interne change. L’objet semblera changer de classe.

```csharp
public interface IState
{
    void Handle(Context context);
}

public class ConcreteStateA : IState
{
    public void Handle(Context context) => context.State = new ConcreteStateB();
}

public class Context
{
    public IState State { get; set; }
    public void Request() => State.Handle(this);
}
```

## Exemple d'utilisation dans le monde réel

**Flux de travail de documents** : Un document peut être dans les états Brouillon, Relecture, Approuvé ou Publié. Chaque état définit les opérations autorisées (modifier, approuver, rejeter) et les transitions.

**Exemple** : Dans .NET, [la machine à états dans `System.Threading.Tasks`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task) (machine à états asynchrone) – bien que ce ne soit pas le pattern classique. Également, [`StateMachine` dans Unity](https://docs.unity3d.com/ScriptReference/Animations.AnimatorStateMachine.html) et [Workflow Foundation](https://docs.microsoft.com/en-us/dotnet/framework/windows-workflow-foundation/state-machine-workflows).

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.6 Memento](/fr/chapter-5-design-patterns-for-backend-development/5-3-6-memento)
- [5.3.8 Template Method](/fr/chapter-5-design-patterns-for-backend-development/5-3-8-template-method)
