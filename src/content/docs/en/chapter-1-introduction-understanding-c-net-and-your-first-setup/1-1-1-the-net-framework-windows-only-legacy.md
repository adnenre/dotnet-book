---
title: The .Net Framework Windows only legacy
sidebar:
  order: 2
  label: 1.1.1 The .Net Framework Windows only legacy
---

.NET Framework is the original .NET implementation, first released in 2002. It is **Windows-only** and considered **legacy**, with version 4.8.1 being the final release.

## Limitations

- Cannot run on Linux or macOS
- Tightly integrated with Windows components (Registry, COM, Windows Forms, WPF)
- Slower release cycle (major updates every few years)
- Not included in modern cloud-native strategies

## When to Use

- Maintaining existing Windows desktop applications (WinForms, WPF)
- ASP.NET WebForms applications
- Windows-specific services

> **Note**: For new development, use .NET 8 or later instead.

```bash

# Check installed .NET Framework versions

reg query "HKLM\SOFTWARE\Microsoft\NET Framework Setup\NDP"
```
