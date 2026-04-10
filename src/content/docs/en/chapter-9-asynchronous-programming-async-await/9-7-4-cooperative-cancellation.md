---
title: Cooperative cancellation
sidebar:
  order: 232
  label: 9.7.4 Cooperative cancellation
---

**Context**: Cancellation in .NET is cooperative: the called code must periodically check the token and respond. It is not forced or immediate.

```csharp
using System.Threading;
using System.Threading.Tasks;

public class LongRunningTask
{
    public async Task RunAsync(CancellationToken token)
    {
        for (int i = 0; i < 1000000; i++)
        {
            if (token.IsCancellationRequested)
            {
                // Perform any cleanup
                return;
            }
            await Task.Delay(1);
        }
    }
}
```

## Best practices

- Check the token at logical points (loop start, after long operations).
- Use `ThrowIfCancellationRequested` for simple cancellation.
- Do not ignore cancellation requests.

## Real-world usage example

**File processing**: Cancel reading a large file when the user aborts the operation.

**Example**: [Cooperative cancellation sample](https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-cancellation)

## Related sections

- [9.7 Cancellation tokens](/en/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.3 ThrowIfCancellationRequested](/en/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
