---
title: Moq Mock Setup Verify
sidebar:
  order: 805
  label: 15.2.1 Moq Mock Setup Verify
---

**Context**: Moq is a popular mocking library. Create a mock with `new Mock<T>()`, set up behavior using `Setup` (and `Returns`, `Throws`), and verify method calls with `Verify`. Moq uses lambda expressions for a fluent syntax.

## Setup

```bash
dotnet add package Moq
```

## Usage Example

```csharp
using Moq;
using Xunit;

public interface ILogger
{
    void Log(string message);
    int GetLevel();
}

public class Processor
{
    private readonly ILogger _logger;
    public Processor(ILogger logger) => _logger = logger;
    public void Process() => _logger.Log("Processing");
    public int GetLogLevel() => _logger.GetLevel();
}

public class MoqTests
{
    [Fact]
    public void Process_CallsLog()
    {
        var mock = new Mock<ILogger>();
        var processor = new Processor(mock.Object);
        processor.Process();
        mock.Verify(x => x.Log("Processing"), Times.Once);
    }

    [Fact]
    public void GetLogLevel_ReturnsMockedValue()
    {
        var mock = new Mock<ILogger>();
        mock.Setup(x => x.GetLevel()).Returns(3);
        var processor = new Processor(mock.Object);
        Assert.Equal(3, processor.GetLogLevel());
    }
}
```

## Output console

```shell
dotnet test
Starting test execution...
Passed! - Failed: 0, Passed: 2, Skipped: 0
```

## Important notes

- Use `It.IsAny<T>()` to match any argument.
- `Verify` can check exact arguments or use `It.Is<T>(predicate)`.
- `Setup` can also throw exceptions with `Throws<TException>()`.

## Real-world usage example

**Testing error handling** – Mock a repository to throw an exception and verify that your service logs the error.  
See [Moq documentation](https://github.com/moq/moq4/wiki/Quickstart).

## Related sections

- [15.2 Mocking libraries](/en/chapter-15-testing-and-mocking/15-2-mocking-libraries)
- [15.2.2 NSubstitute Substitute.For](/en/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
