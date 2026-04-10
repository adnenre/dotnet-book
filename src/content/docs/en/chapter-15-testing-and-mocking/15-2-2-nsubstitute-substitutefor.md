---
title: NSubstitute Substitute.For
sidebar:
  order: 806
  label: 15.2.2 NSubstitute Substitute.For
---

**Context**: NSubstitute is a mocking library with a more concise, readable syntax. Create a substitute with `Substitute.For<T>()`, set up behavior by directly assigning return values (e.g., `sub.GetValue().Returns(42)`), and verify calls with `Received()`.

## Setup

```bash
dotnet add package NSubstitute
```

## Usage Example

```csharp
using NSubstitute;
using Xunit;

public interface IRepository
{
    Task<User> GetByIdAsync(int id);
    void Save(User user);
}

public class UserService
{
    private readonly IRepository _repo;
    public UserService(IRepository repo) => _repo = repo;
    public async Task<User> FindUserAsync(int id) => await _repo.GetByIdAsync(id);
    public void CreateUser(User user) => _repo.Save(user);
}

public class NSubstituteTests
{
    [Fact]
    public async Task FindUserAsync_ReturnsUser()
    {
        var repo = Substitute.For<IRepository>();
        var expected = new User { Id = 1, Name = "Alice" };
        repo.GetByIdAsync(1).Returns(Task.FromResult(expected));
        var service = new UserService(repo);
        var result = await service.FindUserAsync(1);
        Assert.Equal("Alice", result.Name);
        await repo.Received(1).GetByIdAsync(1);
    }

    [Fact]
    public void CreateUser_CallsSave()
    {
        var repo = Substitute.For<IRepository>();
        var service = new UserService(repo);
        var user = new User { Name = "Bob" };
        service.CreateUser(user);
        repo.Received(1).Save(user);
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 2, Skipped: 0
```

## Important notes

- `Returns()` works for sync and async methods (use `Task.FromResult` for async).
- Use `Received(count)` to verify call count.
- No `Setup` or `Verify` methods; the syntax is more natural.

## Real-world usage example

**Testing API clients** – Substitute `HttpClient` wrapper to simulate responses without real network calls.  
See [NSubstitute documentation](https://nsubstitute.github.io/).

## Related sections

- [15.2.1 Moq Mock Setup Verify](/en/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.3 FakeItEasy](/en/chapter-15-testing-and-mocking/15-2-3-fakeiteasy)
