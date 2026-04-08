---
title: Verify installation with dotnet info
sidebar:
  order: 8
  label: 1.2.2 Verify installation with dotnet info
---

After installation, verify that .NET is properly installed using the `dotnet --info` command.

## What to Check

- **Version**: Current SDK version
- **Runtime**: Installed runtime versions
- **Path**: Installation directory
- **OS**: Operating system and architecture

```bash
# Verify .NET installation
dotnet --info

# Simplified version check
dotnet --version
```

## Expected Output

```bash
.NET SDK:
 Version:   8.0.100
 Commit:    xxxxxxxx

Runtime Environment:
 OS Name:     Windows
 OS Version:  10.0.22621
 OS Platform: Windows
```

> If the command fails, restart your terminal or reinstall the SDK.
