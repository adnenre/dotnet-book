---
title: Flags enum
sidebar:
  order: 148
  label: 6.3.3 Flags enum
---

**Context**: Apply the `[Flags]` attribute to an enum to indicate that its members can be combined using bitwise operations.

```csharp
[Flags]
public enum Permissions
{
    None   = 0,
    Read   = 1,
    Write  = 2,
    Execute = 4,
    ReadWrite = Read | Write
}
```

## Usage

```csharp
Permissions perms = Permissions.Read | Permissions.Write;
Console.WriteLine(perms.HasFlag(Permissions.Read)); // True
Console.WriteLine(perms); // Read, Write

// Bitwise operations
perms |= Permissions.Execute; // add flag
perms &= ~Permissions.Write;  // remove flag
```

## Real-world usage example

**File access permissions**: Use `[Flags]` enum for `FileAccess` (`Read`, `Write`, `ReadWrite`) and `FileShare` (`None`, `Read`, `Write`, `ReadWrite`, `Delete`).

**Example**: In .NET, [`FileAccess`](https://docs.microsoft.com/en-us/dotnet/api/system.io.fileaccess) and [`FileShare`](https://docs.microsoft.com/en-us/dotnet/api/system.io.fileshare) are flags enums. Also [`RegexOptions`](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regexoptions).

## Related sections

- [6.3 Enums](/en/chapter-6-advanced-type-system/6-3-enums)
- [6.3.2 Underlying type](/en/chapter-6-advanced-type-system/6-3-2-underlying-type)
