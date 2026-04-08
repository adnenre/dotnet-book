---
title: The .Net 5, 6, 7, 8 unified platform
sidebar:
  order: 4
  label: 1.1.3 The .Net 5, 6, 7, 8 unified platform
---

Starting with .NET 5 (November 2020), Microsoft unified .NET Framework and .NET Core into a single platform. This eliminates confusion and provides a single codebase for all scenarios.

## Version Timeline

| Version | Release Date | Support Type | Key Features                        |
| ------- | ------------ | ------------ | ----------------------------------- |
| .NET 5  | Nov 2020     | STS (ended)  | Single unified platform             |
| .NET 6  | Nov 2021     | LTS          | ARM64 support, hot reload           |
| .NET 7  | Nov 2022     | STS          | Native AOT, rate limiting           |
| .NET 8  | Nov 2023     | LTS          | Blazor improvements, AI integration |

## LTS vs STS

- **LTS (Long Term Support)** : 3 years support (.NET 6, .NET 8)
- **STS (Standard Term Support)** : 18 months support (.NET 5, .NET 7)

```bash
# Check your current .NET version
dotnet --version

# List all installed .NET versions
dotnet --list-sdks

```
