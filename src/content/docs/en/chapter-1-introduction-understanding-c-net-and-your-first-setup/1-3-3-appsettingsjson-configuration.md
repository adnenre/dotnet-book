---
title: appsettings.json configuration
sidebar:
  order: 13
  label: 1.3.3 appsettings.json configuration
---

`appsettings.json` is the standard configuration file for .NET applications, using JSON format.

## Basic Example

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=MyDb;"
  },
  "AppSettings": {
    "ApplicationName": "MyApp",
    "Version": "1.0.0"
  }
}
```

## Reading Configuration

```csharp
using Microsoft.Extensions.Configuration;

var config = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

string appName = config["AppSettings:ApplicationName"];
Console.WriteLine($"App: {appName}");
```

## Environment-Specific Files

- `appsettings.Development.json`
- `appsettings.Production.json`
