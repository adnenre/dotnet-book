---
title: Project Button Click Simulator Event
sidebar:
  order: 181
  label: 7.5 Project Button Click Simulator Event
---

**Context**: Build a console application that simulates a button with a `Click` event. Subscribers (e.g., a logger and a message box) will respond to the click.

## Requirements

1. Create a `Button` class with a `Click` event (using `EventHandler` pattern).
2. Provide a `SimulateClick()` method that raises the event.
3. Create two subscriber classes: `LoggingSubscriber` and `NotificationSubscriber`.
4. Subscribe both to the button's `Click` event.
5. Simulate clicks and observe output.

## Complete Code

```csharp
using System;

// Custom EventArgs (optional, but follows pattern)
public class ButtonClickEventArgs : EventArgs
{
    public DateTime ClickTime { get; set; }
    public string ButtonName { get; set; }
}

// Button class
public class Button
{
    public string Name { get; set; }

    // Event declaration using standard EventHandler<T>
    public event EventHandler<ButtonClickEventArgs> Click;

    public Button(string name) => Name = name;

    // Protected virtual method to raise the event
    protected virtual void OnClick(ButtonClickEventArgs e)
    {
        Click?.Invoke(this, e);
    }

    // Simulate a button click
    public void SimulateClick()
    {
        Console.WriteLine($"[{Name}] Button clicked!");
        var args = new ButtonClickEventArgs
        {
            ClickTime = DateTime.Now,
            ButtonName = Name
        };
        OnClick(args);
    }
}

// Subscriber 1: Logging
public class LoggingSubscriber
{
    public void Subscribe(Button button)
    {
        button.Click += OnButtonClick;
    }

    private void OnButtonClick(object sender, ButtonClickEventArgs e)
    {
        Console.WriteLine($"[LOG] Button '{e.ButtonName}' clicked at {e.ClickTime:HH:mm:ss}");
    }
}

// Subscriber 2: Notification
public class NotificationSubscriber
{
    public void Subscribe(Button button)
    {
        button.Click += OnButtonClick;
    }

    private void OnButtonClick(object sender, ButtonClickEventArgs e)
    {
        Console.WriteLine($"[NOTIFY] You clicked {e.ButtonName}!");
    }
}

// Main program
public class Program
{
    static void Main()
    {
        Console.WriteLine("=== Button Click Simulator with Events ===\n");

        // Create button
        Button myButton = new Button("Submit");

        // Create subscribers
        var logger = new LoggingSubscriber();
        var notifier = new NotificationSubscriber();

        // Subscribe
        logger.Subscribe(myButton);
        notifier.Subscribe(myButton);

        // Simulate clicks
        myButton.SimulateClick();
        Console.WriteLine();
        myButton.SimulateClick();
    }
}
```

## Example Run

```bash
=== Button Click Simulator with Events ===

[Submit] Button clicked!
[LOG] Button 'Submit' clicked at 14:23:05
[NOTIFY] You clicked Submit!

[Submit] Button clicked!
[LOG] Button 'Submit' clicked at 14:23:06
[NOTIFY] You clicked Submit!
```

## Real-world usage example

**GUI frameworks**: This project mimics how actual buttons work in WinForms, WPF, or MAUI. The `Click` event notifies multiple subscribers (e.g., update UI, save data, play sound).

**Example**: [Windows Forms Button.Click](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.control.click) event works exactly this way.

## Related sections

- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.4 Standard pattern EventHandler and EventArgs](/en/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
