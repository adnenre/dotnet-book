---
title: dotnet new create project from template
sidebar:
  order: 16
  label: 1.4.1 dotnet new create project from template
---

`dotnet new` creates a new project, configuration file, or solution based on a template.

## Common Templates

| Template      | Command                        |
| ------------- | ------------------------------ |
| Console app   | `dotnet new console -n MyApp`  |
| Web API       | `dotnet new webapi -n MyApi`   |
| Class library | `dotnet new classlib -n MyLib` |
| xUnit test    | `dotnet new xunit -n MyTests`  |
| Solution file | `dotnet new sln -n MySolution` |

## List Available Templates

````bash
# List all templates
dotnet new list

# List console-specific templates
dotnet new list console ```
````

## Template Options

```bash

Create with specific framework
dotnet new console -n MyApp -f net8.0

Create with top-level statements disabled
dotnet new console -n MyApp --use-program-main
```
