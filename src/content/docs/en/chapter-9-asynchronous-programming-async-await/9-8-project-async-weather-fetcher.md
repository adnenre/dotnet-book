---
title: Project Async Weather Fetcher
sidebar:
  order: 233
  label: 9.8 Project Async Weather Fetcher
---

**Context**: Build a console application that fetches weather data from the [OpenWeather One Call API 3.0](https://openweathermap.org/api/one-call-3) asynchronously, using Direct Geocoding to convert a city name into coordinates. The API key is stored securely using `appsettings.json` + User Secrets (development) or environment variables (production). This project demonstrates async/await, cancellation tokens, and secure configuration management.

## Step‑by‑step implementation from VS Code

Follow these steps to create the project from scratch.

### 1. Create a new console app

Open a terminal in VS Code and run:

```bash
dotnet new console -n AsyncWeatherFetcher
cd AsyncWeatherFetcher
```

### 2. Add required NuGet packages

You need three packages for configuration:

```bash
dotnet add package Microsoft.Extensions.Configuration.Json
dotnet add package Microsoft.Extensions.Configuration.UserSecrets
dotnet add package Microsoft.Extensions.Configuration.EnvironmentVariables
```

> The third package provides the `AddEnvironmentVariables()` extension method used in `Program.cs`.

### 3. Create `appsettings.json` file

Create a file named `appsettings.json` in the project root with:

```json
{
  "OpenWeather": {
    "ApiKey": "" // Leave empty – will be filled via User Secrets
  },
  "TimeoutSeconds": 15
}
```

### 4. Get your free OpenWeather API key

1. Go to [OpenWeather](https://openweathermap.org/) and click **Sign Up**.
2. Complete registration (free tier is sufficient).
3. In your account dashboard, go to the **API keys** tab.
4. Copy your default API key (a long string of letters/numbers).

### 5. Set up User Secrets and store your API key (local development)

Initialize User Secrets and store the API key securely:

```bash
dotnet user-secrets init
dotnet user-secrets set "OpenWeather:ApiKey" "your_actual_api_key"
```

> Replace `your_actual_api_key` with the key you copied from OpenWeather.

### 6. Configure the project to copy `appsettings.json` to output

Edit `AsyncWeatherFetcher.csproj` and add inside an `<ItemGroup>`:

```xml
<Content Include="appsettings.json">
  <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
</Content>
```

### 7. Folder architecture after full setup

```bash
AsyncWeatherFetcher/
├── Program.cs                 # Main application code (below)
├── appsettings.json           # Configuration file (no secrets)
├── AsyncWeatherFetcher.csproj
├── obj/                       # Compiled objects (ignored by Git)
├── bin/                       # Build output (ignored by Git)
└── .gitignore                 # Ignore bin/, obj/, and appsettings.Development.json
```

> Secrets are stored outside the project folder (`%APPDATA%\Microsoft\UserSecrets\` on Windows, `~/.microsoft/usersecrets/` on Linux/macOS).

### 8. Complete code (replace `Program.cs`)

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

// Models for Geocoding API response
public class GeocodingResponse
{
    public string Name { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public string Country { get; set; }
    public string State { get; set; }
}

// Models for One Call API 3.0 response (only needed fields)
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
        // Read API key from configuration (user secrets or env var)
        _apiKey = config["OpenWeather:ApiKey"];
        _timeoutSeconds = int.TryParse(config["TimeoutSeconds"], out int t) ? t : 15;

        if (string.IsNullOrEmpty(_apiKey))
            throw new InvalidOperationException(
                "OpenWeather API key is missing. Set it via user secrets (development) or environment variable OPENWEATHER__APIKEY (production).");
    }

    public async Task<WeatherData> GetWeatherByCityAsync(string cityName, CancellationToken token)
    {
        using var cts = CancellationTokenSource.CreateLinkedTokenSource(token);
        cts.CancelAfter(TimeSpan.FromSeconds(_timeoutSeconds));

        // Step 1: Geocoding – get coordinates from city name
        string geocodeRequest = $"{GeocodeUrl}?q={cityName}&limit=1&appid={_apiKey}";
        var geocodeResponse = await _httpClient.GetAsync(geocodeRequest, cts.Token).ConfigureAwait(false);
        geocodeResponse.EnsureSuccessStatusCode();

        string geocodeJson = await geocodeResponse.Content.ReadAsStringAsync(cts.Token).ConfigureAwait(false);
        var locations = JsonSerializer.Deserialize<List<GeocodingResponse>>(geocodeJson);

        if (locations == null || locations.Count == 0)
            throw new Exception($"Location '{cityName}' not found.");

        var location = locations[0];
        double lat = location.Lat;
        double lon = location.Lon;

        // Step 2: Get weather using One Call API 3.0
        string weatherRequest = $"{WeatherUrl}?lat={lat}&lon={lon}&units=metric&exclude=minutely&appid={_apiKey}";
        var weatherResponse = await _httpClient.GetAsync(weatherRequest, cts.Token).ConfigureAwait(false);
        weatherResponse.EnsureSuccessStatusCode();

        string weatherJson = await weatherResponse.Content.ReadAsStringAsync(cts.Token).ConfigureAwait(false);
        var apiResponse = JsonSerializer.Deserialize<WeatherApiResponse>(weatherJson);

        if (apiResponse == null || apiResponse.Current == null || apiResponse.Current.Weather == null)
            throw new Exception("Invalid weather response");

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

    // Convert wind direction in degrees to cardinal direction (N, NE, E, etc.)
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
        Console.WriteLine("Press 'C' to cancel at any time.\n");

        // Build configuration: read appsettings.json + user secrets + environment variables
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddUserSecrets<Program>(optional: true)
            .AddEnvironmentVariables()
            .Build();

        using var cts = new CancellationTokenSource();

        // Handle Ctrl+C or manual 'C' key
        Console.CancelKeyPress += (sender, e) =>
        {
            Console.WriteLine("\nCancellation requested...");
            cts.Cancel();
            e.Cancel = true;
        };

        Console.Write("Enter city name (e.g., London or London,GB): ");
        string city = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(city))
        {
            Console.WriteLine("City name cannot be empty.");
            return;
        }

        try
        {
            var service = new WeatherService(config);
            var weather = await service.GetWeatherByCityAsync(city, cts.Token);

            Console.WriteLine($"\nWeather in {weather.LocationName}, {weather.Country} ({weather.Timezone}):");
            Console.WriteLine($"  Coordinates: {weather.Latitude}, {weather.Longitude}");
            Console.WriteLine($"  Temperature: {weather.TemperatureCelsius:F1}°C (feels like {weather.FeelsLikeCelsius:F1}°C)");
            Console.WriteLine($"  Condition: {weather.Condition} – {weather.Description}");
            Console.WriteLine($"  Pressure: {weather.Pressure} hPa");
            Console.WriteLine($"  Humidity: {weather.Humidity}%");
            Console.WriteLine($"  Wind: {weather.WindSpeed:F1} m/s from {weather.WindDirection}");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("\nOperation was cancelled by user or timeout.");
        }
        catch (HttpRequestException ex) when (ex.Message.Contains("401"))
        {
            Console.WriteLine("\nHTTP 401 Unauthorized. Your OpenWeather API key is invalid or missing.");
            Console.WriteLine("Set it via: dotnet user-secrets set \"OpenWeather:ApiKey\" \"your_key\"");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"HTTP error: {ex.Message}");
        }
        catch (JsonException)
        {
            Console.WriteLine("Error parsing data. Check API key or city name.");
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine($"\nConfiguration error: {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }

        Console.WriteLine("\nPress any key to exit.");
        Console.ReadKey();
    }
}
```

### 9. Run the application

```bash
dotnet run
```

## Production deployment

For production (e.g., Azure, Docker, CI/CD), do not use user secrets. Instead, set the environment variable:

```bash
# Linux/macOS
export OPENWEATHER__APIKEY="your_actual_key"

# Windows (Command Prompt)
set OPENWEATHER__APIKEY=your_actual_key

# Windows (PowerShell)
$env:OPENWEATHER__APIKEY="your_actual_key"
```

The code reads `AddEnvironmentVariables()` and the double underscore `__` is used for hierarchy.

## Related sections

- [9.2 async and await](/en/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.7 Cancellation tokens](/en/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.6 ConfigureAwait false](/en/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
