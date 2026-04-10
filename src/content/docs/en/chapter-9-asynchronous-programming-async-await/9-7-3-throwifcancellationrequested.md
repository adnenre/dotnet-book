---
title: ThrowIfCancellationRequested
sidebar:
  order: 231
  label: 9.7.3 ThrowIfCancellationRequested
---

**Context**: `ThrowIfCancellationRequested` checks if the token has been cancelled and, if so, throws an `OperationCanceledException`.

```csharp
using System.Threading;

public class Example
{
    public void Work(CancellationToken token)
    {
        token.ThrowIfCancellationRequested(); // throws if cancelled
        // More work...
    }
}
```

## Manual checking

```csharp
if (token.IsCancellationRequested)
{
    // cleanup before throwing
    token.ThrowIfCancellationRequested();
}
```

## Real-world usage example

**Responsive UI**: Cancel a long‑running operation when the user clicks a "Cancel" button.

**Example**: [Cancellation in managed threads](https://docs.microsoft.com/en-us/dotnet/standard/threading/cancellation-in-managed-threads)

## Related sections

- [9.7 Cancellation tokens](/en/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.2 CancellationToken](/en/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
