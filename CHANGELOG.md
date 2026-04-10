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

## [Version 1.1.3] - 2024-04-08

### Added

- **Chapter 5 : Design Patterns for Backend Development**
  - 5.1 Creational patterns
  - 5.1.1 Factory Method
  - 5.1.2 Abstract Factory
  - 5.1.3 Singleton
  - 5.1.4 Builder
  - 5.1.5 Prototype
  - 5.2 Structural patterns
  - 5.2.1 Adapter
  - 5.2.2 Proxy
  - 5.2.3 Decorator
  - 5.2.4 Facade
  - 5.2.5 Bridge
  - 5.2.6 Composite
  - 5.2.7 Flyweight
  - 5.3 Behavioural patterns
  - 5.3.1 Strategy
  - 5.3.2 Command
  - 5.3.3 Observer
  - 5.3.4 Chain of Responsibility
  - 5.3.5 Mediator
  - 5.3.6 Memento
  - 5.3.7 State
  - 5.3.8 Template Method
  - 5.3.9 Visitor
  - 5.4 Architectural patterns for backend
  - 5.4.1 Repository
  - 5.4.2 Middleware
  - 5.4.3 Dependency Injection
  - 5.5 Project Discount Strategy System

## [Version 1.1.4] - 2024-04-08

### Added

- **Chapter 6 : Advanced Type System**
  - 6.1 Records
  - 6.1.1 record class
  - 6.1.2 record struct
  - 6.1.3 Positional records
  - 6.1.4 with expressions
  - 6.1.5 Value based equality
  - 6.2 Structs
  - 6.2.1 struct
  - 6.2.2 readonly struct
  - 6.2.3 ref struct
  - 6.2.4 When to use struct vs class
  - 6.3 Enums
  - 6.3.1 enum definition
  - 6.3.2 Underlying type
  - 6.3.3 Flags enum
  - 6.3.4 Enum Parse and Enum GetValues
  - 6.4 Nullable reference types C# 8 and later
  - 6.4.1 string question mark nullable reference
  - 6.4.2 Nullable annotation context
  - 6.4.3 Null forgiving operator
  - 6.4.4 Nullable warnings
  - 6.5 Pattern matching
  - 6.5.1 Constant pattern
  - 6.5.2 Type pattern
  - 6.5.3 Property pattern
  - 6.5.4 Positional pattern
  - 6.5.5 List patterns C# 11
  - 6.5.6 var pattern
  - 6.6 Project Immutable Person Record with Validation

## [Version 1.1.5] - 2024-04-08

### Added

- **Chapter 7 : Delegates Events and Lambdas**
  - 7.1 Delegates
  - 7.1.1 Declaration
  - 7.1.2 Instantiation and invocation
  - 7.1.3 Multicast delegates
  - 7.1.4 Generic delegates Action Func Predicate
  - 7.2 Events
  - 7.2.1 event keyword
  - 7.2.2 Subscribing and unsubscribing
  - 7.2.3 Event invocation
  - 7.2.4 Standard pattern EventHandler and EventArgs
  - 7.3 Lambda expressions
  - 7.3.1 Syntax
  - 7.3.2 Statement lambdas
  - 7.3.3 Capturing outer variables closures
  - 7.3.4 Expression trees
  - 7.4 Anonymous functions
  - 7.4.1 delegate keyword pre lambda
  - 7.4.2 Comparison with lambdas
  - 7.5 Project Button Click Simulator Event

## [Version 1.1.6] - 2024-04-08

### Added

- **Chapter 9 : Asynchronous Programming async await**
  - 9.1 Task based Asynchronous Pattern TAP
  - 9.1.1 Task no result
  - 9.1.2 Task T result
  - 9.1.3 ValueTask and ValueTask T for performance
  - 9.2 async and await
  - 9.2.1 Marking method async
  - 9.2.2 await unwraps the result
  - 9.2.3 Compiler transformation into state machine
  - 9.3 Return types of async methods
  - 9.3.1 Task for void async
  - 9.3.2 Task T for returning value
  - 9.3.3 void only for event handlers avoid
  - 9.4 Asynchronous streams
  - 9.4.1 IAsyncEnumerable T
  - 9.4.2 await foreach
  - 9.4.3 await using asynchronous disposable
  - 9.5 Avoiding async void
  - 9.5.1 Exceptions cannot be caught
  - 9.5.2 Hard to test
  - 9.6 ConfigureAwait false
  - 9.6.1 Avoid capturing original SynchronizationContext
  - 9.6.2 Use in library code
  - 9.7 Cancellation tokens
  - 9.7.1 CancellationTokenSource
  - 9.7.2 CancellationToken
  - 9.7.3 ThrowIfCancellationRequested
  - 9.7.4 Cooperative cancellation
  - 9.8 Project Async Weather Fetcher
- **Chapter 10 : Memory Management and Performance**
  - 10.1 Garbage collection
  - 10.1.1 Generations 0, 1, 2
  - 10.1.2 Workstation GC vs Server GC
  - 10.1.3 Background GC
  - 10.1.4 Large Object Heap LOH
  - 10.1.5 Pinned objects
  - 10.2 IDisposable
  - 10.2.1 Unmanaged resources
  - 10.2.2 Dispose pattern
  - 10.2.3 using statement
  - 10.2.4 await using and IAsyncDisposable
  - 10.3 Span T and Memory T
  - 10.3.1 Stack only Span T
  - 10.3.2 Memory T for heap or async
  - 10.3.3 ArrayPool T for renting buffers
  - 10.4 Benchmarking
  - 10.4.1 BenchmarkDotNet
  - 10.4.2 Benchmark and MemoryDiagnoser attributes
  - 10.4.3 Running benchmarks avoiding common pitfalls
  - 10.5 Project Benchmark String Concatenation vs StringBuilder
- **Chapter 11 : Generics and Constraints**
  - 11.1 Generic classes
  - 11.1.1 Syntax
  - 11.1.2 Type parameters naming T, TKey, TValue
  - 11.2 Generic methods
  - 11.2.1 T MyMethod T param
  - 11.2.2 Type inference at call site
  - 11.3 Generic interfaces
  - 11.3.1 interface IRepository T
  - 11.3.2 Covariance out T and contravariance in T
  - 11.4 Constraints
  - 11.4.1 where T struct value type
  - 11.4.2 where T class reference type
  - 11.4.3 where T new parameterless constructor
  - 11.4.4 where T BaseClass base class constraint
  - 11.4.5 where T IMyInterface interface constraint
  - 11.4.6 where T unmanaged no references
  - 11.4.7 Multiple constraints
  - 11.5 Project Generic Repository Simulator
