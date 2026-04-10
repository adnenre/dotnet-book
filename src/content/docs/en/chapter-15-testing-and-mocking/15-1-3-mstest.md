---
title: MSTest
sidebar:
  order: 803
  label: 15.1.3 MSTest
---

**Context**: MSTest is Microsoft's unit testing framework, integrated with Visual Studio. It uses `[TestMethod]` for tests, `[DataTestMethod]` with `[DataRow]` for data‑driven tests, and attributes like `[TestInitialize]` and `[TestCleanup]`. It is a solid choice for projects already using the Microsoft ecosystem.

## Setup

```bash
dotnet new mstest -n MyMSTestTests
cd MyMSTestTests
dotnet add reference ../MyApp/MyApp.csproj
```

## Usage Example

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatorTests
{
    [TestMethod]
    public void Multiply_ReturnsProduct()
    {
        var calc = new Calculator();
        int result = calc.Multiply(4, 5);
        Assert.AreEqual(20, result);
    }

    [DataTestMethod]
    [DataRow(1, 2, 3)]
    [DataRow(-1, 1, 0)]
    [DataRow(0, 0, 0)]
    public void Add_ReturnsSum(int a, int b, int expected)
    {
        var calc = new Calculator();
        Assert.AreEqual(expected, calc.Add(a, b));
    }
}
```

## Output console

```shell
dotnet test
Starting test execution...
Passed! - Failed: 0, Passed: 4, Skipped: 0
```

## Important notes

- Test classes must be marked with `[TestClass]`.
- MSTest supports `Assert.ThrowsException<T>` for exception testing.
- `[TestInitialize]` runs before each test, `[ClassInitialize]` runs once per class.

## Real-world usage example

**Legacy enterprise applications** – Many corporate projects use MSTest because of its deep Visual Studio integration.  
See [MSTest documentation](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest).

## Related sections

- [15.1.1 xUnit Fact Theory InlineData](/en/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.2 NUnit Test TestCase](/en/chapter-15-testing-and-mocking/15-1-2-nunit-test-testcase)
