---
title: await unwraps the result
sidebar:
  order: 212
  label: 9.2.2 await unwraps the result
---

**Context**: `await` extracts the result from a `Task<T>` or `ValueTask<T>`, returning the underlying value. For `Task`, it waits for completion without returning a value.

```csharp
using System.Threading.Tasks;

public class Example
{
    public async Task<int> GetNumberAsync() => 42;

    public async Task UseAsync()
    {
        Task<int> task = GetNumberAsync();
        int result = await task; // unwraps the int
        // result == 42
    }
}
```

## Without `await`

You would need to check `IsCompleted`, use continuations, or block with `.Result`.

```csharp
Task<int> task = GetNumberAsync();
int result = task.Result; // blocks, dangerous
```

## Real-world usage example

**Chaining async calls**: `await` makes sequential async calls natural.

```csharp
var user = await GetUserAsync();
var orders = await GetOrdersAsync(user.Id);
```

## Related sections

- [9.2 async and await](/en/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.2.3 Compiler transformation into state machine](/en/chapter-9-asynchronous-programming-async-await/9-2-3-compiler-transformation-into-state-machine)
