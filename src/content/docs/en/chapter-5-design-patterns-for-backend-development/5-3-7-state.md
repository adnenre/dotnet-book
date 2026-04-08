---
title: State
sidebar:
  order: 126
  label: 5.3.7 State
---

**Context**: Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

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

## Real-world usage example

**Document workflow**: A document can be in Draft, Review, Approved, or Published states. Each state defines allowed operations (edit, approve, reject) and transitions.

**Example**: In .NET, [state machine in `System.Threading.Tasks`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task) (async state machine) – though not classic pattern. Also, [`StateMachine` in Unity](https://docs.unity3d.com/ScriptReference/Animations.AnimatorStateMachine.html) and [Workflow Foundation](https://docs.microsoft.com/en-us/dotnet/framework/windows-workflow-foundation/state-machine-workflows).

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.6 Memento](/en/chapter-5-design-patterns-for-backend-development/5-3-6-memento)
- [5.3.8 Template Method](/en/chapter-5-design-patterns-for-backend-development/5-3-8-template-method)
