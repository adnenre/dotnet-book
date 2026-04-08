---
title: Basic I/O
sidebar:
  order: 31
  label: 2.5 Basic IO
---

Basic console input and output using `Console` methods.

## Code

```csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");
```

## Run the Application

```bash
dotnet run
```

## Result (example input "Alice")

```shell
Enter your name: Alice
Hello, Alice!
```
