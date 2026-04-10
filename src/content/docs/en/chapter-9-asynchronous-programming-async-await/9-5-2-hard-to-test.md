---
title: Hard to test
sidebar:
  order: 224
  label: 9.5.2 Hard to test
---

**Context**: `async void` methods are difficult to unit test because there is no `Task` to await. You cannot know when the method completes or whether it threw an exception.

```csharp
using System.Threading.Tasks;
using Xunit;

public class MyService
{
    // Bad: cannot be tested easily
    public async void DoAsyncVoid()
    {
        await Task.Delay(10);
    }

    // Good: returns Task
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
        service.DoAsyncVoid(); // cannot await, cannot verify completion
        // You would need to add arbitrary delays...
        await Task.Delay(100); // fragile test
    }

    [Fact]
    public async Task TestAsyncTask_Good()
    {
        var service = new MyService();
        await service.DoAsyncTask(); // can await, test is reliable
    }
}
```

## Solution

Change the method to return `Task`.

## Real-world usage example

**Unit testing with xUnit**: xUnit does not support `async void` tests; they must return `Task`.

**Example**: [xUnit async tests](https://xunit.net/docs/getting-started/netframework/visual-studio#write-first-tests)

## Related sections

- [9.5 Avoiding async void](/en/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
- [9.5.1 Exceptions cannot be caught](/en/chapter-9-asynchronous-programming-async-await/9-5-1-exceptions-cannot-be-caught)
