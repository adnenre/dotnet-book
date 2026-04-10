---
title: Unit testing frameworks
sidebar:
  order: 800
  label: 15.1 Unit testing frameworks
---

**Context**: Unit testing frameworks provide the infrastructure to write and run automated tests for individual units of code (methods, classes). They offer attributes to mark test methods, assertions to verify results, and test runners to execute tests. The three most popular frameworks in .NET are xUnit, NUnit, and MSTest. Each has similar capabilities but different syntax and extensibility.

## Usage Example (xUnit)

```csharp
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_ReturnsSum()
    {
        var calc = new Calculator();
        int result = calc.Add(2, 3);
        Assert.Equal(5, result);
    }
}
```

## Output console

```shell
dotnet test
Starting test execution...
Passed! - Failed: 0, Passed: 1, Skipped: 0
```

## Important notes

- xUnit is the default for modern .NET projects (created with `dotnet new xunit`).
- NUnit has a more descriptive syntax (`[Test]`, `[TestCase]`).
- MSTest is included with Visual Studio and has similar attributes (`[TestMethod]`).

## Real-world usage example

**CI/CD pipelines** – Run unit tests automatically on every commit using GitHub Actions, Azure DevOps, or Jenkins.  
See [.NET docs on unit testing](https://docs.microsoft.com/en-us/dotnet/core/testing/).

## Related sections

- [15.1.1 xUnit Fact Theory InlineData](/en/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.2 NUnit Test TestCase](/en/chapter-15-testing-and-mocking/15-1-2-nunit-test-testcase)
- [15.1.3 MSTest](/en/chapter-15-testing-and-mocking/15-1-3-mstest)
