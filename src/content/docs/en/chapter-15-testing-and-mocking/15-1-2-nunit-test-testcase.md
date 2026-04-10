---
title: NUnit Test TestCase
sidebar:
  order: 802
  label: 15.1.2 NUnit Test TestCase
---

**Context**: NUnit uses `[Test]` for parameterless tests and `[TestCase]` for data‑driven tests. It also provides `[TestCaseSource]` for external data sources, `[SetUp]` and `[TearDown]` for test lifecycle hooks, and a rich set of assertions.

## Setup

```bash
dotnet new nunit -n MyNUnitTests
cd MyNUnitTests
dotnet add reference ../MyApp/MyApp.csproj
```

## Usage Example

```csharp
using NUnit.Framework;

public class StringUtilsTests
{
    [Test]
    public void Reverse_ReturnsReversedString()
    {
        string result = StringUtils.Reverse("abc");
        Assert.That(result, Is.EqualTo("cba"));
    }

    [TestCase("abc", "cba")]
    [TestCase("", "")]
    [TestCase("a", "a")]
    public void Reverse_MultipleCases(string input, string expected)
    {
        Assert.That(StringUtils.Reverse(input), Is.EqualTo(expected));
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

- NUnit uses constraint‑based assertions (`Is.EqualTo`, `Is.True`, `Contains.Substring`).
- `[TestCase]` can also specify `ExpectedResult` for methods that return values.
- NUnit supports parallel test execution with `[NonParallelizable]`.

## Real-world usage example

**Database repository tests** – Use `[TestCase]` to test different query parameters without duplicating test methods.  
See [NUnit documentation](https://nunit.org/).

## Related sections

- [15.1.1 xUnit Fact Theory InlineData](/en/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.3 MSTest](/en/chapter-15-testing-and-mocking/15-1-3-mstest)
