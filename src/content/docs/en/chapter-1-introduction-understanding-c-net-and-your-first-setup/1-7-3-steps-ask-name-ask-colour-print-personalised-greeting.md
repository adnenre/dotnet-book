---
title: Steps ask name ask colour print personalised greeting
sidebar:
  order: 32
  label: 1.7.3 Steps ask name ask colour print personalised greeting
---

**Context**: Step-by-step implementation of the Greeting Tool using .NET 10.

Implement the Greeting Tool step by step.

## Complete Program.cs

```csharp
// Greeting Tool - Ask for name and favorite color

// Step 1: Ask for name
Console.Write("What is your name? ");
string name = Console.ReadLine();

// Step 2: Ask for favorite color
Console.Write("What is your favorite color? ");
string favoriteColor = Console.ReadLine();

// Step 3: Print personalized greeting
Console.WriteLine();
Console.WriteLine($"Hello {name}!");
Console.WriteLine($"Your favorite color, {favoriteColor}, is beautiful!");

// Optional: Add a colored output
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine("Have a great day!");
Console.ResetColor();
```

## Run the Application

```bash
dotnet run
```

## Example Output

```shell
What is your name? Maria
What is your favorite color? Blue

Hello Maria!
Your favorite color, Blue, is beautiful!
Have a great day!

```

## Code Explanation

| Line                                  | Purpose                   |
| ------------------------------------- | ------------------------- |
| `Console.Write()`                     | Prompt without newline    |
| `Console.ReadLine()`                  | Read user input as string |
| `string name`                         | Variable to store input   |
| `Console.WriteLine($"Hello {name}!")` | String interpolation      |
| `Console.ForegroundColor`             | Change text color         |

## Challenge Extensions

1. Add input validation (prevent empty responses)
2. Use `Console.Beep()` for sound effects
3. Loop until user types "exit"
4. Save greetings to a file using `File.WriteAllText()`

```csharp
// Extension: Validate non-empty input
string name;
do
{
Console.Write("What is your name? ");
name = Console.ReadLine();
} while (string.IsNullOrWhiteSpace(name));
```
