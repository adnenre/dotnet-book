---
title: obj and bin folders
sidebar:
  order: 14
  label: 1.3.4 obj and bin folders
---

These folders are automatically generated during build and contain compiled output and intermediate files.

## /bin Folder

- **bin/Debug/net8.0/**: Debug build output
- **bin/Release/net8.0/**: Release build output
- Contains: .exe, .dll, .pdb (debug symbols), .runtimeconfig.json

## /obj Folder

- **Intermediate build artifacts**
- **obj/Debug/net8.0/**: Object files, temporary assemblies
- **obj/project.assets.json**: NuGet dependency cache

## Best Practices

- **Add to .gitignore**: Never commit bin/ or obj/ folders
- **Clean builds**: `dotnet clean` removes these folders
- **Do not edit manually**: Files are generated automatically

````bash
# Clean build artifacts
dotnet clean

# Delete folders manually (Windows)
rmdir /s /q bin obj

# Delete folders manually (Linux/macOS)
rm -rf bin obj ```
````
