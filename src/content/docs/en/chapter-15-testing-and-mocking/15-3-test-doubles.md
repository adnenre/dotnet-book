---
title: Test doubles
sidebar:
  order: 808
  label: 15.3 Test doubles
---

**Context**: Test doubles are generic terms for objects that replace real dependencies in tests. The main types are: **Stub** (provides canned answers), **Mock** (verifies interactions), **Fake** (a lightweight working implementation), **Dummy** (passed around but never used), and **Spy** (records calls for later verification). Understanding these helps design better tests.

## Usage Example (conceptual)

```csharp
// Stub: returns fixed data
var stub = new Mock<IRepository>();
stub.Setup(r => r.GetById(1)).Returns(new User { Id = 1 });

// Mock: verifies a method was called
mock.Verify(r => r.Save(It.IsAny<User>()), Times.Once);

// Fake: simple working implementation
public class FakeUserRepository : IRepository
{
    private List<User> _users = new();
    public User GetById(int id) => _users.FirstOrDefault(u => u.Id == id);
    public void Save(User u) => _users.Add(u);
}
```

## Output console

```shell
// No direct output; concepts used in tests.
```

## Important notes

- Stubs focus on state; mocks focus on behavior verification.
- Fakes are often used for in‑memory databases or test doubles that have real logic.
- Choose the right test double to avoid over‑specifying tests.

## Real-world usage example

**Testing a shopping cart** – Use a stub for product pricing (always returns fixed prices) and a mock to verify that the payment gateway is called exactly once.  
See [Martin Fowler's article on Test Doubles](https://martinfowler.com/bliki/TestDouble.html).

## Related sections

- [15.3.1 Stub](/en/chapter-15-testing-and-mocking/15-3-1-stub)
- [15.3.2 Mock](/en/chapter-15-testing-and-mocking/15-3-2-mock)
- [15.3.3 Fake](/en/chapter-15-testing-and-mocking/15-3-3-fake)
