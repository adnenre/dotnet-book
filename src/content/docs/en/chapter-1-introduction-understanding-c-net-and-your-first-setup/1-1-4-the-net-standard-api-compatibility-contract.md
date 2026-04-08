---
title: The .Net Standard API compatibility contract
sidebar:
  order: 5
  label: 1.1.4 The .Net Standard API compatibility contract
---

.NET Standard is a formal specification of .NET APIs that are available on all .NET implementations. It enables code sharing across different .NET platforms.

## How It Works

Different .NET implementations (Framework, Core, Xamarin, Unity) implement specific .NET Standard versions. Code compiled against a .NET Standard version can run on any implementation that supports that version.

## .NET Standard Versions

| Version   | Latest Supporting Implementation             |
| --------- | -------------------------------------------- |
| 1.0 - 1.6 | .NET Framework 4.6+                          |
| 2.0       | .NET Framework 4.6.1+, .NET Core 2.0+        |
| 2.1       | .NET Core 3.0+, .NET 5+ (not .NET Framework) |

> **Note**: Modern .NET (5+) no longer needs .NET Standard. Use `net8.0` target framework directly.

```csharp
// Example: Creating a .NET Standard library
// In .csproj file:
// <TargetFramework>netstandard2.0</TargetFramework>
```
