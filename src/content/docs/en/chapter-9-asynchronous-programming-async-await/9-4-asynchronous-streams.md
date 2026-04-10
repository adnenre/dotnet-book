---
title: Asynchronous streams
sidebar:
  order: 218
  label: 9.4 Asynchronous streams
---

**Context**: Asynchronous streams (C# 8.0) allow you to produce and consume sequences of data asynchronously using `IAsyncEnumerable<T>` and `await foreach`.

```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class DataProducer
{
    public async IAsyncEnumerable<int> GetDataAsync()
    {
        for (int i = 0; i < 10; i++)
        {
            await Task.Delay(100);
            yield return i;
        }
    }
}

// Consumer
public class Program
{
    public static async Task Main()
    {
        var producer = new DataProducer();
        await foreach (var item in producer.GetDataAsync())
        {
            Console.WriteLine(item);
        }
    }
}
```

## Real-world usage example

**Reading large files line by line**: Process each line asynchronously without loading the entire file.

**Example**: [System.IO.Stream](https://docs.microsoft.com/en-us/dotnet/standard/io/async-file-io) can be wrapped in an async stream.

## Related sections

- [9.4.1 IAsyncEnumerable<T>](/en/chapter-9-asynchronous-programming-async-await/9-4-1-iasyncenumerable-t)
- [9.4.2 await foreach](/en/chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach)
- [9.4.3 await using asynchronous disposable](/en/chapter-9-asynchronous-programming-async-await/9-4-3-await-using-asynchronous-disposable)
