---
title: Task<T> for returning value
sidebar:
  order: 216
  label: 9.3.2 Task<T> for returning value
---

**Context**: When an async method needs to return a value, use `Task<T>`. The `await` expression yields the value of type `T`.

```csharp
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;

public class UserRepository
{
    private string connectionString = "Server=.;Database=MyDb;Trusted_Connection=true;";

    public async Task<int> GetUserCountAsync()
    {
        using var connection = new SqlConnection(connectionString);
        return await connection.QueryFirstAsync<int>("SELECT COUNT(*) FROM Users");
    }
}

// Usage
// int count = await new UserRepository().GetUserCountAsync();
```

## Best practices

- Name the method with `Async` suffix.
- Avoid using `.Result` or `.Wait()` on the returned task.

## Real-world usage example

**API calls**: `HttpClient.GetStringAsync` returns `Task<string>`. `JsonSerializer.DeserializeAsync` returns `Task<T>`.

**Example**: [HttpClient documentation](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.getstringasync)

## Related sections

- [9.3 Return types of async methods](/en/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.1.2 Task<T> (result)](/en/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
