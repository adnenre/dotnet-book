---
title: Marking method async
sidebar:
  order: 211
  label: 9.2.1 Marking method async
---

**Context**: Add the `async` modifier to any method that uses `await`. The method must return `Task`, `Task<T>`, `ValueTask`, `ValueTask<T>`, or `void`.

```csharp
using System.Threading.Tasks;

public class Example
{
    public async Task DoWorkAsync()
    {
        await Task.Delay(100);
    }

    public async Task<int> GetNumberAsync()
    {
        await Task.Delay(100);
        return 42;
    }
}
```

## Rules

- `async` methods can have `await` inside.
- The compiler transforms the method into a state machine.
- Parameter names cannot be `await` (unless escaped with `@await`).

## Real-world usage example

**Console application**: Mark `Main` as `async Task` (C# 7.1+).

```csharp
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        await DownloadAsync();
    }

    static async Task DownloadAsync() => await Task.Delay(100);
}
```

**Example**: [async Main in C#](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/main-command-line#async-main-return-types)

## Related sections

- [9.2 async and await](/en/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.2.2 await unwraps the result](/en/chapter-9-asynchronous-programming-async-await/9-2-2-await-unwraps-the-result)
