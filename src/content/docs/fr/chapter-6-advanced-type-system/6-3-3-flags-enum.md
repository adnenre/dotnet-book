---
title: Enum Flags
sidebar:
  order: 148
  label: 6.3.3 Enum Flags
---

**Contexte** : Appliquez l’attribut `[Flags]` à une énumération pour indiquer que ses membres peuvent être combinés à l’aide d’opérations bit à bit.

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

## Utilisation

```csharp
Permissions perms = Permissions.Read | Permissions.Write;
Console.WriteLine(perms.HasFlag(Permissions.Read)); // True
Console.WriteLine(perms); // Read, Write

// Opérations bit à bit
perms |= Permissions.Execute; // ajouter un flag
perms &= ~Permissions.Write;  // supprimer un flag
```

## Exemple d'utilisation dans le monde réel

**Autorisations d’accès aux fichiers** : Utilisez une énumération `[Flags]` pour `FileAccess` (`Read`, `Write`, `ReadWrite`) et `FileShare` (`None`, `Read`, `Write`, `ReadWrite`, `Delete`).

**Exemple** : Dans .NET, [`FileAccess`](https://docs.microsoft.com/en-us/dotnet/api/system.io.fileaccess) et [`FileShare`](https://docs.microsoft.com/en-us/dotnet/api/system.io.fileshare) sont des énumérations Flags. Également [`RegexOptions`](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regexoptions).

## Sections connexes

- [6.3 Énumérations](/fr/chapter-6-advanced-type-system/6-3-enums)
- [6.3.2 Type sous‑jacent](/fr/chapter-6-advanced-type-system/6-3-2-underlying-type)
