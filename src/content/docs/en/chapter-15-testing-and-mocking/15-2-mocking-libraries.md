---
title: Mocking libraries
sidebar:
  order: 804
  label: 15.2 Mocking libraries
---

**Context**: Mocking libraries create fake implementations of dependencies (interfaces, abstract classes) for unit testing. They allow you to verify that certain methods were called, return specific values, throw exceptions, and more. The most popular .NET mocking libraries are Moq, NSubstitute, and FakeItEasy. They help isolate the code under test from external dependencies.

## Usage Example (Moq)

```csharp
using Moq;
using Xunit;

public interface IEmailService
{
    bool Send(string to, string body);
}

public class NotificationService
{
    private readonly IEmailService _email;
    public NotificationService(IEmailService email) => _email = email;
    public bool Notify(string user) => _email.Send(user, "Hello");
}

public class NotificationTests
{
    [Fact]
    public void Notify_CallsSend()
    {
        var mock = new Mock<IEmailService>();
        mock.Setup(x => x.Send(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
        var service = new NotificationService(mock.Object);
        bool result = service.Notify("alice@example.com");
        Assert.True(result);
        mock.Verify(x => x.Send("alice@example.com", "Hello"), Times.Once);
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

- Mock objects replace real dependencies (database, HTTP, file system).
- They enable testing of interactions and error scenarios.
- Choose a library based on syntax preference and project requirements.

## Real-world usage example

**Testing a payment gateway** – Mock the payment API to simulate success, failure, and timeout responses without real network calls.  
See [Moq documentation](https://github.com/moq/moq4).

## Related sections

- [15.2.1 Moq Mock Setup Verify](/en/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.2 NSubstitute Substitute.For](/en/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
- [15.2.3 FakeItEasy](/en/chapter-15-testing-and-mocking/15-2-3-fakeiteasy)
