---
title: Projet Async Weather Fetcher (Récupérateur météo asynchrone)
sidebar:
  order: 233
  label: 9.8 Projet Async Weather Fetcher
---

**Contexte** : Construisez une application console qui récupère des données météo à partir de l'[API OpenWeather One Call 3.0](https://openweathermap.org/api/one-call-3) de manière asynchrone, en utilisant le géocodage direct pour convertir un nom de ville en coordonnées. La clé API est stockée de manière sécurisée avec `appsettings.json` + User Secrets (développement) ou variables d'environnement (production). Ce projet illustre async/await, les jetons d'annulation et la gestion sécurisée de la configuration.

## Implémentation pas à pas depuis VS Code

Suivez ces étapes pour créer le projet à partir de zéro.

### 1. Créer une nouvelle application console

Ouvrez un terminal dans VS Code et exécutez :

```bash
dotnet new console -n AsyncWeatherFetcher
cd AsyncWeatherFetcher
```

### 2. Ajouter les paquets NuGet nécessaires

Vous avez besoin de trois paquets pour la configuration :

```bash
dotnet add package Microsoft.Extensions.Configuration.Json
dotnet add package Microsoft.Extensions.Configuration.UserSecrets
dotnet add package Microsoft.Extensions.Configuration.EnvironmentVariables
```

> Le troisième paquet fournit la méthode d'extension `AddEnvironmentVariables()` utilisée dans `Program.cs`.

### 3. Créer le fichier `appsettings.json`

Créez un fichier `appsettings.json` à la racine du projet avec :

```json
{
  "OpenWeather": {
    "ApiKey": "" // Laissez vide – sera rempli via User Secrets
  },
  "TimeoutSeconds": 15
}
```

### 4. Obtenir votre clé API OpenWeather gratuite

1. Allez sur [OpenWeather](https://openweathermap.org/) et cliquez sur **Sign Up**.
2. Complétez l'inscription (le niveau gratuit suffit).
3. Dans votre tableau de bord, allez dans l'onglet **API keys**.
4. Copiez votre clé API par défaut (une longue chaîne de lettres/chiffres).

### 5. Configurer User Secrets et stocker votre clé API (développement local)

Initialisez User Secrets et stockez la clé API de manière sécurisée :

```bash
dotnet user-secrets init
dotnet user-secrets set "OpenWeather:ApiKey" "votre_clé_api_réelle"
```

> Remplacez `votre_clé_api_réelle` par la clé que vous avez copiée depuis OpenWeather.

### 6. Configurer le projet pour copier `appsettings.json` dans la sortie

Modifiez `AsyncWeatherFetcher.csproj` et ajoutez à l'intérieur d'un `<ItemGroup>` :

```xml
<Content Include="appsettings.json">
  <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
</Content>
```

### 7. Architecture des dossiers après configuration complète

```bash
AsyncWeatherFetcher/
├── Program.cs                 # Code principal (ci-dessous)
├── appsettings.json           # Fichier de configuration (sans secrets)
├── AsyncWeatherFetcher.csproj
├── obj/                       # Objets compilés (ignorés par Git)
├── bin/                       # Sortie de build (ignorée par Git)
└── .gitignore                 # Ignore bin/, obj/ et appsettings.Development.json
```

> Les secrets sont stockés en dehors du dossier du projet (`%APPDATA%\Microsoft\UserSecrets\` sous Windows, `~/.microsoft/usersecrets/` sous Linux/macOS).

### 8. Code complet (remplacez `Program.cs`)

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

// Modèles pour la réponse de l’API de géocodage
public class GeocodingResponse
{
    public string Name { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public string Country { get; set; }
    public string State { get; set; }
}

// Modèles pour la réponse One Call API 3.0 (champs nécessaires uniquement)
public class WeatherApiResponse
{
    public double Lat { get; set; }
    public double Lon { get; set; }
    public string Timezone { get; set; }
    public CurrentWeather Current { get; set; }
}

public class CurrentWeather
{
    public long Dt { get; set; }
    public double Temp { get; set; }
    public double Feels_like { get; set; }
    public int Pressure { get; set; }
    public int Humidity { get; set; }
    public double Wind_speed { get; set; }
    public int Wind_deg { get; set; }
    public WeatherDescription[] Weather { get; set; }
}

public class WeatherDescription
{
    public string Main { get; set; }
    public string Description { get; set; }
    public string Icon { get; set; }
}

public class WeatherData
{
    public string LocationName { get; set; }
    public string Country { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string Timezone { get; set; }
    public double TemperatureCelsius { get; set; }
    public double FeelsLikeCelsius { get; set; }
    public int Pressure { get; set; }
    public int Humidity { get; set; }
    public double WindSpeed { get; set; }
    public string WindDirection { get; set; }
    public string Condition { get; set; }
    public string Description { get; set; }
}

public class WeatherService
{
    private readonly HttpClient _httpClient = new HttpClient();
    private readonly string _apiKey;
    private readonly int _timeoutSeconds;
    private const string GeocodeUrl = "http://api.openweathermap.org/geo/1.0/direct";
    private const string WeatherUrl = "https://api.openweathermap.org/data/3.0/onecall";

    public WeatherService(IConfiguration config)
    {
        // Lire la clé API depuis la configuration (user secrets ou variable d'environnement)
        _apiKey = config["OpenWeather:ApiKey"];
        _timeoutSeconds = int.TryParse(config["TimeoutSeconds"], out int t) ? t : 15;

        if (string.IsNullOrEmpty(_apiKey))
            throw new InvalidOperationException(
                "Clé API OpenWeather manquante. Définissez‑la via user secrets (développement) ou variable d'environnement OPENWEATHER__APIKEY (production).");
    }

    public async Task<WeatherData> GetWeatherByCityAsync(string cityName, CancellationToken token)
    {
        using var cts = CancellationTokenSource.CreateLinkedTokenSource(token);
        cts.CancelAfter(TimeSpan.FromSeconds(_timeoutSeconds));

        // Étape 1 : Géocodage – obtenir les coordonnées à partir du nom de la ville
        string geocodeRequest = $"{GeocodeUrl}?q={cityName}&limit=1&appid={_apiKey}";
        var geocodeResponse = await _httpClient.GetAsync(geocodeRequest, cts.Token).ConfigureAwait(false);
        geocodeResponse.EnsureSuccessStatusCode();

        string geocodeJson = await geocodeResponse.Content.ReadAsStringAsync(cts.Token).ConfigureAwait(false);
        var locations = JsonSerializer.Deserialize<List<GeocodingResponse>>(geocodeJson);

        if (locations == null || locations.Count == 0)
            throw new Exception($"Emplacement '{cityName}' introuvable.");

        var location = locations[0];
        double lat = location.Lat;
        double lon = location.Lon;

        // Étape 2 : Obtenir la météo avec l’API One Call 3.0
        string weatherRequest = $"{WeatherUrl}?lat={lat}&lon={lon}&units=metric&exclude=minutely&appid={_apiKey}";
        var weatherResponse = await _httpClient.GetAsync(weatherRequest, cts.Token).ConfigureAwait(false);
        weatherResponse.EnsureSuccessStatusCode();

        string weatherJson = await weatherResponse.Content.ReadAsStringAsync(cts.Token).ConfigureAwait(false);
        var apiResponse = JsonSerializer.Deserialize<WeatherApiResponse>(weatherJson);

        if (apiResponse == null || apiResponse.Current == null || apiResponse.Current.Weather == null)
            throw new Exception("Réponse météo invalide");

        var weather = apiResponse.Current.Weather[0];
        string windDirection = DegreesToCardinal(apiResponse.Current.Wind_deg);

        return new WeatherData
        {
            LocationName = location.Name,
            Country = location.Country,
            Latitude = apiResponse.Lat,
            Longitude = apiResponse.Lon,
            Timezone = apiResponse.Timezone,
            TemperatureCelsius = apiResponse.Current.Temp,
            FeelsLikeCelsius = apiResponse.Current.Feels_like,
            Pressure = apiResponse.Current.Pressure,
            Humidity = apiResponse.Current.Humidity,
            WindSpeed = apiResponse.Current.Wind_speed,
            WindDirection = windDirection,
            Condition = weather.Main,
            Description = weather.Description
        };
    }

    // Convertit la direction du vent en degrés en direction cardinale (N, NE, E, etc.)
    private string DegreesToCardinal(int degrees)
    {
        string[] directions = { "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
                                "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW" };
        int index = (int)Math.Round((double)degrees / 22.5) % 16;
        return directions[index];
    }
}

public class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("=== Async Weather Fetcher (OpenWeather) ===");
        Console.WriteLine("Appuyez sur 'C' pour annuler à tout moment.\n");

        // Construction de la configuration : lit appsettings.json + secrets utilisateur + variables d'environnement
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddUserSecrets<Program>(optional: true)
            .AddEnvironmentVariables()
            .Build();

        using var cts = new CancellationTokenSource();

        // Gestion de Ctrl+C ou de la touche 'C'
        Console.CancelKeyPress += (sender, e) =>
        {
            Console.WriteLine("\nAnnulation demandée...");
            cts.Cancel();
            e.Cancel = true;
        };

        Console.Write("Entrez le nom de la ville (ex. Paris ou Paris,FR) : ");
        string city = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(city))
        {
            Console.WriteLine("Le nom de la ville ne peut pas être vide.");
            return;
        }

        try
        {
            var service = new WeatherService(config);
            var weather = await service.GetWeatherByCityAsync(city, cts.Token);

            Console.WriteLine($"\nMétéo à {weather.LocationName}, {weather.Country} ({weather.Timezone}) :");
            Console.WriteLine($"  Coordonnées : {weather.Latitude}, {weather.Longitude}");
            Console.WriteLine($"  Température : {weather.TemperatureCelsius:F1}°C (ressenti {weather.FeelsLikeCelsius:F1}°C)");
            Console.WriteLine($"  Condition : {weather.Condition} – {weather.Description}");
            Console.WriteLine($"  Pression : {weather.Pressure} hPa");
            Console.WriteLine($"  Humidité : {weather.Humidity}%");
            Console.WriteLine($"  Vent : {weather.WindSpeed:F1} m/s depuis {weather.WindDirection}");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("\nOpération annulée par l’utilisateur ou délai d’expiration.");
        }
        catch (HttpRequestException ex) when (ex.Message.Contains("401"))
        {
            Console.WriteLine("\nHTTP 401 Non autorisé. Votre clé API OpenWeather est invalide ou manquante.");
            Console.WriteLine("Définissez‑la avec : dotnet user-secrets set \"OpenWeather:ApiKey\" \"votre_clé\"");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Erreur HTTP : {ex.Message}");
        }
        catch (JsonException)
        {
            Console.WriteLine("Erreur d’analyse des données. Vérifiez la clé API ou le nom de la ville.");
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine($"\nErreur de configuration : {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erreur : {ex.Message}");
        }

        Console.WriteLine("\nAppuyez sur une touche pour quitter.");
        Console.ReadKey();
    }
}
```

### 9. Exécuter l'application

```bash
dotnet run
```

## Déploiement en production

Pour la production (ex. Azure, Docker, CI/CD), n'utilisez pas les secrets utilisateur. Définissez plutôt la variable d'environnement :

```bash
# Linux/macOS
export OPENWEATHER__APIKEY="votre_clé_réelle"

# Windows (Invité de commandes)
set OPENWEATHER__APIKEY=votre_clé_réelle

# Windows (PowerShell)
$env:OPENWEATHER__APIKEY="votre_clé_réelle"
```

Le code lit `AddEnvironmentVariables()` et le double underscore `__` permet la hiérarchie.

## Sections connexes

- [9.2 async et await](/fr/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.7 Jetons d'annulation](/fr/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.6 ConfigureAwait false](/fr/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
