---
title: ASP.NET Core middleware
sidebar:
  order: 513
  label: 12.5.1 ASP.NET Core middleware
---

**Context**: In ASP.NET Core, global exception handling is typically implemented as custom middleware. The middleware catches exceptions thrown by subsequent middleware and pipeline components, logs them, and returns a consistent error response (e.g., a JSON error object or a custom error page). This keeps API responses uniform and avoids exposing internal details.

## Usage Example

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unhandled exception occurred.");
            context.Response.StatusCode = 500;
            await context.Response.WriteAsJsonAsync(new { error = "Internal server error." });
        }
    }
}

// Extension method to register the middleware
public static class ExceptionHandlingExtensions
{
    public static IApplicationBuilder UseGlobalExceptionHandler(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ExceptionHandlingMiddleware>();
    }
}

// In Program.cs: app.UseGlobalExceptionHandler();
```

## Output console (when an exception occurs)

```shell
HTTP/1.1 500 Internal Server Error
{"error":"Internal server error."}
```

## Important notes

- Middleware order matters; place exception middleware early.
- For development, use `UseDeveloperExceptionPage` for detailed errors.
- Can differentiate between API and UI responses.

## Real-world usage example

**Production APIs** – Return RFC 7807 Problem Details for errors.  
See [.NET docs on exception middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/error-handling).

## Related sections

- [12.5 Global exception handling](/en/chapter-12-exceptions-and-error-handling/12-5-global-exception-handling)
- [12.5.2 AppDomain UnhandledException](/en/chapter-12-exceptions-and-error-handling/12-5-2-appdomain-unhandledexception)
