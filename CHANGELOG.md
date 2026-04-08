# Changelog

All notable changes to this Java book are documented in this file. Each chapter represents a major feature release, adding comprehensive coverage of Java concepts.

---

## [Version 1.1.0] - 2024-04-08

### UPDATE

FileTree accept a props to add translation

### Added

- **Chapter 1 : Introduction Understanding C#, .Net, and Your First Setup**
  - 1.1 What is .Net
  - 1.1.1 The .Net Framework Windows only legacy
  - 1.1.2 The .Net Core cross platform modern
  - 1.1.3 The .Net 5, 6, 7, 8 unified platform
  - 1.1.4 The .Net Standard API compatibility contract
  - 1.2 Installing the .Net SDK
  - 1.2.1 Download from dotnet.microsoft.com
  - 1.2.2 Verify installation with dotnet info
  - 1.2.3 SDK vs Runtime
  - 1.3 Project structure
  - 1.3.1 csproj file XML format package references
  - 1.3.2 Program.cs entry point
  - 1.3.3 appsettings.json configuration
  - 1.3.4 obj and bin folders
  - 1.4 The dotnet CLI
  - 1.4.1 dotnet new create project from template
  - 1.4.2 dotnet build compile
  - 1.4.3 dotnet run build and execute
  - 1.4.4 dotnet test run unit tests
  - 1.4.5 dotnet publish create deployable output
  - 1.5 Top level statements C# 9 and later
  - 1.5.1 No explicit Main method
  - 1.5.2 Implicit using directives
  - 1.5.3 When to use vs traditional Main
  - 1.6 Your first console app Hello World
  - 1.6.1 Create project dotnet new console n HelloWorld
  - 1.6.2 Write Console.WriteLine Hello World
  - 1.6.3 Run and observe output
  - 1.7 Project Command Line Greeting Tool
  - 1.7.1 Idea ask name and favourite colour print greeting
  - 1.7.2 Folder structure GreetingTool Program.cs
  - 1.7.3 Steps ask name ask colour print personalised greeting

## [Version 1.1.1] - 2024-04-08

### Added

- **Chapter 2 : Primitive Types and Basic Syntax**
  - 2.1 Value types
  - 2.1.1 Integral types
    - 2.1.1.1 sbyte
    - 2.1.1.2 byte
    - 2.1.1.3 short
    - 2.1.1.4 ushort
    - 2.1.1.5 int
    - 2.1.1.6 uint
    - 2.1.1.7 long
    - 2.1.1.8 ulong
    - 2.1.2 Floating point types
    - 2.1.2.1 float
    - 2.1.2.2 double
    - 2.1.2.3 decimal
    - 2.1.3 bool
    - 2.1.4 char
  - 2.2 Reference types
  - 2.2.1 string
  - 2.2.2 object
  - 2.2.3 dynamic
  - 2.3 Variables and constants
  - 2.3.1 Declaration type variableName
  - 2.3.2 Initialisation int x = 5
  - 2.3.3 Type inference with var
  - 2.3.4 Constants const double Pi = 3.14
  - 2.3.5 Read only fields
  - 2.4 String interpolation
  - 2.4.1 Syntax Hello name
  - 2.4.2 Formatting value format
  - 2.4.3 Escape sequences for literal brace
  - 2.5 Basic IO
  - 2.5.1 Console.WriteLine line
  - 2.5.2 Console.Write no newline
  - 2.5.3 Console.ReadLine returns string
  - 2.5.4 Console.ReadKey single character
  - 2.6 Type conversion
  - 2.6.1 Implicit conversion
  - 2.6.2 Explicit cast
  - 2.6.3 Convert class
  - 2.6.4 Parse and TryParse
  - 2.7 Project Simple Calculator

## [Version 1.1.2] - 2024-04-08

### Added

- **Chapter 3 : Control Flow and Operators**
  - 3.1 Conditional statements
  - 3.1.1 if statement
  - 3.1.2 else if chain
  - 3.1.3 else clause
  - 3.1.4 nested if
  - 3.2 switch statement
  - 3.2.1 switch with constant patterns
  - 3.2.2 switch with pattern matching C# 7 and later
  - 3.2.3 when guards
  - 3.2.4 goto case rare
  - 3.3 Switch expressions C# 8 and later
  - 3.3.1 syntax
  - 3.3.2 discard pattern
  - 3.4 Loops
  - 3.4.1 for loop
  - 3.4.2 foreach
  - 3.4.3 while
  - 3.4.4 do while
  - 3.5 Loop control
  - 3.5.1 break
  - 3.5.2 continue
  - 3.5.3 return
  - 3.5.4 goto avoid
  - 3.6 Operators
  - 3.6.1 Arithmetic
  - 3.6.2 Assignment
  - 3.6.3 Logical
  - 3.6.4 Comparison
  - 3.6.5 Null coalescing
  - 3.6.6 Null conditional
  - 3.6.7 Ternary
  - 3.6.8 Bitwise
  - 3.7 Project Number Guessing Game
