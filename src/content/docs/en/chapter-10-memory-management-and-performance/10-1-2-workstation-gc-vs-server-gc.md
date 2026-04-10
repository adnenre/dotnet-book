---
title: Workstation GC vs Server GC
sidebar:
  order: 302
  label: 10.1.2 Workstation GC vs Server GC
---

**Context**: .NET offers two GC modes optimized for different application types. **Workstation GC** is designed for client applications (WPF, WinForms, Console) where UI responsiveness is critical; it uses a single GC thread and prefers lower latency. **Server GC** is for server applications (ASP.NET, services) that need high throughput and scalability; it creates one GC thread per CPU core and collects heaps in parallel.

| Mode               | Usage       | Characteristics                               |
| ------------------ | ----------- | --------------------------------------------- |
| **Workstation GC** | Client apps | Single GC thread, optimized for low latency   |
| **Server GC**      | Server apps | Multiple GC threads, optimized for throughput |

## Usage Example

```xml
<!-- Configuration in .csproj or runtimeconfig.json -->
<PropertyGroup>
  <ServerGarbageCollection>true</ServerGarbageCollection>
</PropertyGroup>
```

```csharp
// Check current mode
using System;
using System.Runtime;

Console.WriteLine($"GC mode: {(GCSettings.IsServerGC ? "Server" : "Workstation")}");
```

## Output console

```shell
dotnet run
GC mode: Workstation
```

## Important notes

- **Workstation** is the default for client applications.
- **Server** is recommended for backend applications with many threads and high memory allocation.

## Real‑world usage example

**ASP.NET Core web API** – By default, it runs on Server GC to handle many concurrent requests efficiently. You can override this in the project file.  
See [.NET docs on GC modes](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/workstation-server-gc).

## Related sections

- [10.1.1 Generations 0, 1, 2](/en/chapter-10-memory-management-and-performance/10-1-1-generations-0-1-2)
- [10.1.3 Background GC](/en/chapter-10-memory-management-and-performance/10-1-3-background-gc)
