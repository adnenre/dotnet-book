---
title: Configuration appsettings.json
sidebar:
  order: 13
  label: 1.3.3 Configuration appsettings.json
---

**Contexte** : appsettings.json est le fichier de configuration standard pour les applications .NET, au format JSON. Fonctionne de la même manière dans .NET 10.

`appsettings.json` est le fichier de configuration standard pour les applications .NET, au format JSON.

## Exemple basique

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=MaBase;"
  },
  "AppSettings": {
    "ApplicationName": "MonApp",
    "Version": "1.0.0"
  }
}
```

## Lecture de la configuration

```csharp
using Microsoft.Extensions.Configuration;

var config = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

string appName = config["AppSettings:ApplicationName"];
Console.WriteLine($"App : {appName}");
```
