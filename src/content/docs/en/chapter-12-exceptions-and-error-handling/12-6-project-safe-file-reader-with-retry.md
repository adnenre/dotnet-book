---
title: "Project: Safe File Reader with Retry"
sidebar:
  order: 516
  label: 12.6 Project: Safe File Reader with Retry
---

**Context**: This project demonstrates robust exception handling by reading a file with automatic retry logic. It handles common I/O exceptions (file not found, access denied, locking), implements a retry policy with exponential backoff, and logs all errors. The user can specify the file path and the number of retries.

## Usage Example

```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

public class SafeFileReader
{
    private readonly int _maxRetries;
    private readonly int _initialDelayMs;

    public SafeFileReader(int maxRetries = 3, int initialDelayMs = 100)
    {
        _maxRetries = maxRetries;
        _initialDelayMs = initialDelayMs;
    }

    public async Task<string> ReadAllTextAsync(string filePath, CancellationToken token = default)
    {
        int attempt = 0;
        while (true)
        {
            try
            {
                return await File.ReadAllTextAsync(filePath, token);
            }
            catch (DirectoryNotFoundException ex)
            {
                throw new FileNotFoundException("Directory not found.", ex);
            }
            catch (FileNotFoundException)
            {
                throw; // Do not retry – file missing is permanent
            }
            catch (UnauthorizedAccessException)
            {
                throw; // Do not retry – permission issue
            }
            catch (IOException ex) when (IsTransient(ex))
            {
                attempt++;
                if (attempt > _maxRetries)
                    throw new TimeoutException("Max retries exceeded.", ex);

                int delay = _initialDelayMs * (int)Math.Pow(2, attempt - 1);
                Console.WriteLine($"Attempt {attempt} failed: {ex.Message}. Retrying in {delay}ms...");
                await Task.Delay(delay, token);
            }
        }
    }

    private static bool IsTransient(IOException ex)
    {
        // Common transient errors: sharing violation, lock conflict, etc.
        return ex.Message.Contains("being used by another process") ||
               ex.Message.Contains("lock") ||
               ex.HResult == -2147024864; // ERROR_SHARING_VIOLATION
    }
}

class Program
{
    static async Task Main(string[] args)
    {
        Console.Write("Enter file path: ");
        string path = Console.ReadLine();

        var reader = new SafeFileReader(maxRetries: 3, initialDelayMs: 200);
        using var cts = new CancellationTokenSource();

        Console.CancelKeyPress += (sender, e) =>
        {
            Console.WriteLine("\nCancellation requested.");
            cts.Cancel();
            e.Cancel = true;
        };

        try
        {
            string content = await reader.ReadAllTextAsync(path, cts.Token);
            Console.WriteLine($"File content length: {content.Length} characters");
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine("Error: File not found.");
        }
        catch (UnauthorizedAccessException)
        {
            Console.WriteLine("Error: Access denied.");
        }
        catch (TimeoutException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Operation cancelled.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

## Output console (example)

```shell
dotnet run
Enter file path: lockedfile.txt
Attempt 1 failed: The process cannot access the file... Retrying in 200ms...
Attempt 2 failed: The process cannot access the file... Retrying in 400ms...
File content length: 1234 characters
```

## How to run

1. Create a new console project: `dotnet new console -n SafeFileReader`
2. Replace `Program.cs` with the code above.
3. Run `dotnet run` and enter a path to a text file.

## Important notes

- The retry policy uses exponential backoff to avoid overwhelming the system.
- Transient errors (e.g., file locked) are retried; permanent errors (e.g., missing file) are not.
- Cancellation support allows the user to abort with Ctrl+C.

## Real-world usage example

**Reading configuration files** – In a long‑running service, use retry logic to handle temporary file locks during updates.  
See [.NET docs on I/O error handling](https://docs.microsoft.com/en-us/dotnet/standard/io/handling-io-errors).

## Related sections

- [12.1.1 Catching specific exception types](/en/chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types)
- [12.2.1 catch with when condition](/en/chapter-12-exceptions-and-error-handling/12-2-1-catch-with-when-condition)
- [12.5.3 TaskScheduler UnobservedTaskException](/en/chapter-12-exceptions-and-error-handling/12-5-3-taskscheduler-unobservedtaskexception)
