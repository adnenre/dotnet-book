---
title: WebApplicationFactory<TStartup>
sidebar:
  order: 813
  label: 15.4.1 WebApplicationFactory<TStartup>
---

**Context**: `WebApplicationFactory<TStartup>` (from `Microsoft.AspNetCore.Mvc.Testing`) creates an in‑memory test server for ASP.NET Core applications. It automatically finds the `Program` or `Startup` class and configures the test host. You can override services (e.g., replace the real database with a test double) by calling `ConfigureWebHost` on the factory.

## Setup

```bash
dotnet add package Microsoft.AspNetCore.Mvc.Testing
```

## Usage Example

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using Xunit;

public class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // Replace real DbContext with in‑memory version
            var descriptor = services.SingleOrDefault(d => d.ServiceType == typeof(DbContextOptions<AppDbContext>));
            if (descriptor != null) services.Remove(descriptor);
            services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("TestDb"));
        });
    }
}

public class Tests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client;
    public Tests(CustomWebApplicationFactory factory) => _client = factory.CreateClient();

    [Fact]
    public async Task GetProducts_ReturnsOk()
    {
        var response = await _client.GetAsync("/api/products");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 1, Skipped: 0
```

## Important notes

- The factory reuses the same `Program` class as your real application.
- You can override any service (authentication, HTTP clients, database).
- The test server runs in the same process, making debugging easy.

## Real-world usage example

**Testing authentication** – Override `AuthenticationHandler` to simulate logged‑in users without real credentials.  
See [Customize WebApplicationFactory](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests#customize-webapplicationfactory).

## Related sections

- [15.4 Integration testing](/en/chapter-15-testing-and-mocking/15-4-integration-testing)
- [15.4.2 In memory database with EF Core](/en/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
