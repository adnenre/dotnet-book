---
title: Integration testing
sidebar:
  order: 812
  label: 15.4 Integration testing
---

**Context**: Integration tests verify that multiple components work together correctly (e.g., database + API + business logic). They are slower than unit tests but provide higher confidence. In ASP.NET Core, the `WebApplicationFactory<TStartup>` class allows you to create an in‑memory test server and make HTTP requests. You can also replace real dependencies (e.g., database) with test doubles like an in‑memory database.

## Setup

```bash
dotnet new xunit -n MyIntegrationTests
cd MyIntegrationTests
dotnet add reference ../MyWebApp/MyWebApp.csproj
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

## Usage Example

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

public class IntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    public IntegrationTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetWeather_ReturnsOk()
    {
        var response = await _client.GetAsync("/weatherforecast");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("temperature", content);
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 1, Skipped: 0
```

## Important notes

- Integration tests run slower; use them for critical paths only.
- Use a separate test database or in‑memory database to avoid side effects.
- `WebApplicationFactory` starts your app in memory, no real HTTP port needed.

## Real-world usage example

**Testing a REST API** – Send requests to your API endpoints and verify HTTP status codes, response structure, and database changes.  
See [.NET integration tests docs](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests).

## Related sections

- [15.4.1 WebApplicationFactory<TStartup>](/en/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.2 In memory database with EF Core](/en/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
- [15.4.3 HttpClient for testing endpoints](/en/chapter-15-testing-and-mocking/15-4-3-httpclient-for-testing-endpoints)
