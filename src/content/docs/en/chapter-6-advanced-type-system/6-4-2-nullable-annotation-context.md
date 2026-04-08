---
title: Nullable annotation context
sidebar:
  order: 152
  label: 6.4.2 Nullable annotation context
---

**Context**: The nullable annotation context is controlled by `#nullable` directives. It enables or disables nullable warnings and annotations.

## Directives

```csharp
#nullable enable   // Enables nullable annotations and warnings
#nullable disable  // Disables (default for legacy code)
#nullable restore  // Restores to project default
#nullable enable annotations  // Only annotations
#nullable enable warnings     // Only warnings
```

## Project‑level setting

In `.csproj`:

```xml
<PropertyGroup>
  <Nullable>enable</Nullable>
</PropertyGroup>
```

## Real-world usage example

**Migrating legacy code**: Use `#nullable disable` at the top of old files to temporarily disable warnings while you gradually enable nullable contexts.

**Example**: The [.NET runtime itself](https://github.com/dotnet/runtime) migrated to nullable reference types file by file using this technique.

## Related sections

- [6.4 Nullable reference types](/en/chapter-6-advanced-type-system/6-4-nullable-reference-types-c-8-and-later)
- [6.4.4 Nullable warnings](/en/chapter-6-advanced-type-system/6-4-4-nullable-warnings)
