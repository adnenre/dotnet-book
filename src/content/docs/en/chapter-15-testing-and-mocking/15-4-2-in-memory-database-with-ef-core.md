---
title: In memory database with EF Core
sidebar:
  order: 814
  label: 15.4.2 In memory database with EF Core
---

**Context**: Entity Framework Core provides an in‑memory database provider (`Microsoft.EntityFrameworkCore.InMemory`) that allows you to test data access code without a real SQL Server. The in‑memory database behaves like a relational database but is stored in memory, making tests fast and isolated. It is ideal for integration tests that involve data persistence.

## Setup

```bash
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

## Usage Example

```csharp
using Microsoft.EntityFrameworkCore;
using Xunit;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

public class ProductRepository
{
    private readonly AppDbContext _context;
    public ProductRepository(AppDbContext context) => _context = context;
    public async Task AddProductAsync(Product p) => await _context.Products.AddAsync(p);
    public async Task<Product> GetProductAsync(int id) => await _context.Products.FindAsync(id);
}

public class InMemoryTest
{
    [Fact]
    public async Task AddProduct_CanRetrieveIt()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;
        using var context = new AppDbContext(options);
        var repo = new ProductRepository(context);
        var product = new Product { Id = 1, Name = "Laptop" };
        await repo.AddProductAsync(product);
        await context.SaveChangesAsync();
        var retrieved = await repo.GetProductAsync(1);
        Assert.Equal("Laptop", retrieved.Name);
    }
}
```

## Output console

```shell
dotnet test
Passed! - Failed: 0, Passed: 1, Skipped: 0
```

## Important notes

- Use a unique database name per test to avoid test pollution (`Guid.NewGuid().ToString()`).
- The in‑memory provider does not enforce referential integrity like a real database.
- For true integration tests, consider using a test container (e.g., Testcontainers for SQL Server).

## Real-world usage example

**Testing repository methods** – Use in‑memory database to test `Add`, `Update`, `Delete`, and complex queries without a real database.  
See [EF Core in‑memory docs](https://docs.microsoft.com/en-us/ef/core/testing/in-memory).

## Related sections

- [15.4.1 WebApplicationFactory<TStartup>](/en/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.3 HttpClient for testing endpoints](/en/chapter-15-testing-and-mocking/15-4-3-httpclient-for-testing-endpoints)
