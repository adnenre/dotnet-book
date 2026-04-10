---
title: void only for event handlers avoid
sidebar:
  order: 217
  label: 9.3.3 void only for event handlers avoid
---

**Context**: `async void` should be used only for event handlers. For all other async methods, return `Task` or `Task<T>`.

```csharp
using System;
using System.Threading.Tasks;
using System.Windows.Forms; // WinForms example

public partial class MyForm : Form
{
    // Acceptable: event handler
    private async void Button_Click(object sender, EventArgs e)
    {
        await LoadDataAsync();
    }

    private async Task LoadDataAsync()
    {
        await Task.Delay(100);
    }
}
```

## Why avoid `async void`

- Exceptions cannot be caught by the caller; they crash the process.
- Hard to test (no task to await).
- Caller cannot know when the method completes.

## Real-world usage example

**UI event handlers**: WPF, WinForms, and Blazor allow `async void` for events because the framework handles the exception.

**Example**: [Async void pitfalls](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming#avoid-async-void)

## Related sections

- [9.3 Return types of async methods](/en/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.5 Avoiding async void](/en/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
