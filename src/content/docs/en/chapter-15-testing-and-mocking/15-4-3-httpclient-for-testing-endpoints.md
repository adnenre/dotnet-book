---
title: HttpClient for testing endpoints
sidebar:
  order: 815
  label: 15.4.3 HttpClient for testing endpoints
---

**Context**: In integration tests, you use an `HttpClient` obtained from `WebApplicationFactory.CreateClient()` to send HTTP requests to your in‑memory test server. This allows you to test your API endpoints exactly as a real client would, including routing, serialization, authentication, and middleware. The `HttpClient` does not require a network port; it communicates directly with the test host.

## Usage Example

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Xunit;

public class EndpointTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    public EndpointTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task PostProduct_ReturnsCreated()
    {
        var product = new { Name = "Mouse", Price = 29.99 };
        var response = await _client.PostAsJsonAsync("/api/products", product);
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        var returned = await response.Content.ReadFromJsonAsync<Product>();
        Assert.Equal("Mouse", returned.Name);
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 1, Skipped: 0
```

## Important notes

- `CreateClient()` automatically follows redirects and handles cookies.
- You can add default headers (e.g., `Authorization`) by overriding `CreateClient`.
- For authenticated endpoints, you may need to inject a fake authentication handler.

## Real-world usage example

**Testing a controller action** – Send a `GET` request to `/api/orders/5` and verify the JSON response contains the expected fields.  
See [Integration tests with HttpClient](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests#test-with-httpclient).

## Related sections

- [15.4.1 WebApplicationFactory<TStartup>](/en/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.2 In memory database with EF Core](/en/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
