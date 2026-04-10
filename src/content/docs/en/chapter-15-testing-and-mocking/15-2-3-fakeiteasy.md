---
title: FakeItEasy
sidebar:
  order: 807
  label: 15.2.3 FakeItEasy
---

**Context**: FakeItEasy is another mocking library with a focus on simplicity and readability. Create a fake with `A.Fake<T>()`, configure calls with `A.CallTo(() => fake.Method()).Returns(value)`, and verify with `A.CallTo(() => fake.Method()).MustHaveHappened()`.

## Setup

```bash
dotnet add package FakeItEasy
```

## Usage Example

```csharp
using FakeItEasy;
using Xunit;

public interface IEmailSender
{
    Task SendEmailAsync(string to, string subject);
    bool IsValidEmail(string email);
}

public class NotificationService
{
    private readonly IEmailSender _sender;
    public NotificationService(IEmailSender sender) => _sender = sender;
    public async Task NotifyAsync(string email) => await _sender.SendEmailAsync(email, "Welcome");
    public bool ValidateEmail(string email) => _sender.IsValidEmail(email);
}

public class FakeItEasyTests
{
    [Fact]
    public async Task NotifyAsync_CallsSendEmail()
    {
        var fake = A.Fake<IEmailSender>();
        var service = new NotificationService(fake);
        await service.NotifyAsync("test@example.com");
        A.CallTo(() => fake.SendEmailAsync("test@example.com", "Welcome")).MustHaveHappenedOnceExactly();
    }

    [Fact]
    public void ValidateEmail_ReturnsMockedValue()
    {
        var fake = A.Fake<IEmailSender>();
        A.CallTo(() => fake.IsValidEmail(A<string>.Ignored)).Returns(true);
        var service = new NotificationService(fake);
        Assert.True(service.ValidateEmail("any@example.com"));
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 2, Skipped: 0
```

## Important notes

- `A<T>.Ignored` matches any argument (similar to `It.IsAny<T>`).
- `MustHaveHappened()` verifies calls; can specify number with `Once`, `Twice`, etc.
- FakeItEasy has excellent error messages.

## Real-world usage example

**Testing a caching layer** – Fake the distributed cache to test cache‑miss and cache‑hit scenarios.  
See [FakeItEasy documentation](https://fakeiteasy.github.io/).

## Related sections

- [15.2.1 Moq Mock Setup Verify](/en/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.2 NSubstitute Substitute.For](/en/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
