---
title: xUnit Fact Theory InlineData
sidebar:
  order: 801
  label: 15.1.1 xUnit Fact Theory InlineData
---

**Context**: xUnit uses `[Fact]` for parameterless tests and `[Theory]` with `[InlineData]` for data‑driven tests. `[Fact]` marks a test method that takes no parameters. `[Theory]` indicates a test that should be run with multiple sets of data provided by `[InlineData]`, `[MemberData]`, or `[ClassData]`.

## Setup

```bash
dotnet new xunit -n MyTests
cd MyTests
dotnet add reference ../MyApp/MyApp.csproj
```

## Usage Example

```csharp
using Xunit;

public class MathTests
{
    [Fact]
    public void Fact_AlwaysTrue()
    {
        Assert.True(true);
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(-1, 1, 0)]
    [InlineData(0, 0, 0)]
    public void Add_ReturnsSum(int a, int b, int expected)
    {
        int result = a + b;
        Assert.Equal(expected, result);
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

- `[Theory]` tests are executed once per `[InlineData]` attribute.
- Use `[MemberData(nameof(Property))]` to share data across multiple tests.
- `[Fact]` is simpler for tests that don't need input variations.

## Real-world usage example

**Validation logic** – Test a `IsValidEmail` method with multiple valid and invalid email addresses using `[Theory]` and `[InlineData]`.  
See [xUnit documentation](https://xunit.net/).

## Related sections

- [15.1 Unit testing frameworks](/en/chapter-15-testing-and-mocking/15-1-unit-testing-frameworks)
- [15.2 Mocking libraries](/en/chapter-15-testing-and-mocking/15-2-mocking-libraries)
