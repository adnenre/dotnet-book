---
title: "Project: Testing a Calculator Service with Moq"
sidebar:
  order: 816
  label: 15.5 Project: Testing a Calculator Service with Moq
---

**Context**: This project demonstrates unit testing a calculator service using Moq and xUnit. We follow **Test‑Driven Development (TDD)** – writing tests before implementation. TDD cycles: Red (write failing test), Green (implement minimal code to pass), Refactor (improve code). We'll test a `Calculator` class that depends on an `ILogger` and `IConfiguration`.

## Setup (TDD approach)

1. Create a class library and a test project.
2. Add Moq and xUnit packages.

```bash
mkdir CalculatorApp
cd CalculatorApp
dotnet new classlib -n CalculatorLib
dotnet new xunit -n CalculatorTests
cd CalculatorTests
dotnet add reference ../CalculatorLib/CalculatorLib.csproj
dotnet add package Moq
dotnet add package Microsoft.Extensions.Logging.Abstractions
```

## Step 1: Write a failing test (Red)

```csharp
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;

public class CalculatorTests
{
    [Fact]
    public void Add_ValidInputs_ReturnsSum()
    {
        // Arrange
        var loggerMock = new Mock<ILogger<Calculator>>();
        var configMock = new Mock<IConfiguration>();
        var calc = new Calculator(loggerMock.Object, configMock.Object);
        // Act
        int result = calc.Add(3, 5);
        // Assert
        Assert.Equal(8, result);
    }
}
```

At this point, `Calculator` does not exist → compilation error (Red).

## Step 2: Minimal implementation (Green)

Create `CalculatorLib/Calculator.cs`:

```csharp
using Microsoft.Extensions.Logging;

public class Calculator
{
    private readonly ILogger<Calculator> _logger;
    private readonly IConfiguration _config;
    public Calculator(ILogger<Calculator> logger, IConfiguration config)
    {
        _logger = logger;
        _config = config;
    }
    public int Add(int a, int b) => a + b;
}
```

Now the test passes (Green).

## Step 3: Add more tests (Edge cases)

```csharp
[Theory]
[InlineData(-1, -2, -3)]
[InlineData(0, 0, 0)]
[InlineData(1000000, 2000000, 3000000)]
public void Add_VariousInputs_ReturnsExpected(int a, int b, int expected)
{
    var loggerMock = new Mock<ILogger<Calculator>>();
    var configMock = new Mock<IConfiguration>();
    var calc = new Calculator(loggerMock.Object, configMock.Object);
    Assert.Equal(expected, calc.Add(a, b));
}
```

All pass.

## Step 4: Test logging interaction (Mock verification)

```csharp
[Fact]
public void Add_LogsInformation()
{
    var loggerMock = new Mock<ILogger<Calculator>>();
    var configMock = new Mock<IConfiguration>();
    var calc = new Calculator(loggerMock.Object, configMock.Object);
    calc.Add(2, 2);
    loggerMock.Verify(
        x => x.Log(
            LogLevel.Information,
            It.IsAny<EventId>(),
            It.Is<It.IsAnyType>((v, t) => v.ToString().Contains("Add called")),
            It.IsAny<Exception>(),
            It.IsAny<Func<It.IsAnyType, Exception, string>>()),
        Times.Once);
}
```

Now implement logging in `Add`:

```csharp
public int Add(int a, int b)
{
    _logger.LogInformation($"Add called with {a} and {b}");
    return a + b;
}
```

Test passes.

## Step 5: Test configuration dependency (Stub)

```csharp
[Fact]
public void Add_UsesMaxFromConfig_ThrowsIfExceeds()
{
    var configMock = new Mock<IConfiguration>();
    configMock.Setup(c => c["MaxValue"]).Returns("100");
    var loggerMock = new Mock<ILogger<Calculator>>();
    var calc = new Calculator(loggerMock.Object, configMock.Object);
    // Assume Add checks config and throws if sum > MaxValue
    Assert.Throws<InvalidOperationException>(() => calc.Add(60, 50));
}
```

Implement the check:

```csharp
public int Add(int a, int b)
{
    int sum = a + b;
    int max = int.TryParse(_config["MaxValue"], out int m) ? m : int.MaxValue;
    if (sum > max) throw new InvalidOperationException($"Sum {sum} exceeds max {max}");
    _logger.LogInformation($"Add called with {a} and {b}");
    return sum;
}
```

## Complete test class

```csharp
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

public class CalculatorTests
{
    private readonly Mock<ILogger<Calculator>> _loggerMock;
    private readonly Mock<IConfiguration> _configMock;
    public CalculatorTests()
    {
        _loggerMock = new Mock<ILogger<Calculator>>();
        _configMock = new Mock<IConfiguration>();
    }

    [Fact]
    public void Add_ValidInputs_ReturnsSum()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("1000");
        var calc = new Calculator(_loggerMock.Object, _configMock.Object);
        Assert.Equal(8, calc.Add(3, 5));
    }

    [Theory]
    [InlineData(-1, -2, -3)]
    [InlineData(0, 0, 0)]
    [InlineData(1000000, 2000000, 3000000)]
    public void Add_VariousInputs_ReturnsExpected(int a, int b, int expected)
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("10000000");
        var calc = new Calculator(_loggerMock.Object, _configMock.Object);
        Assert.Equal(expected, calc.Add(a, b));
    }

    [Fact]
    public void Add_LogsInformation()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("1000");
        var calc = new Calculator(_loggerMock.Object, _configMock.Object);
        calc.Add(2, 2);
        _loggerMock.Verify(
            x => x.Log(
                LogLevel.Information,
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString().Contains("Add called")),
                It.IsAny<Exception>(),
                It.IsAny<Func<It.IsAnyType, Exception, string>>()),
            Times.Once);
    }

    [Fact]
    public void Add_WhenSumExceedsMax_Throws()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("100");
        var calc = new Calculator(_loggerMock.Object, _configMock.Object);
        var ex = Assert.Throws<InvalidOperationException>(() => calc.Add(60, 50));
        Assert.Equal("Sum 110 exceeds max 100", ex.Message);
    }
}
```

## Output console (after successful implementation)

```shell
dotnet test
Starting test execution...
Passed! - Failed: 0, Passed: 5, Skipped: 0
```

## TDD Summary

- **Red**: Write a failing test first.
- **Green**: Implement the simplest code to make it pass.
- **Refactor**: Improve code quality without changing behavior.
- Benefits: Fewer bugs, better design, regression safety.

## Important notes

- Mock `ILogger<T>` to verify logging calls without writing to console.
- Stub `IConfiguration` to control configuration values.
- Use `[Theory]` and `[InlineData]` for parameterized tests.

## Real-world usage example

**Testing a business service** – Similar approach for `OrderService` that depends on `IRepository`, `IEmailSender`, and `ILogger`.  
See [Microsoft TDD guidance](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices).

## Related sections

- [15.2.1 Moq Mock Setup Verify](/en/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.1.1 xUnit Fact Theory InlineData](/en/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.3.2 Mock](/en/chapter-15-testing-and-mocking/15-3-2-mock)
