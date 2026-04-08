---
title: Nested if
sidebar:
  order: 5
  label: 3.1.4 nested if
---

You can nest `if` statements inside another `if`.

## Code

```csharp
bool hasTicket = true;
bool isVIP = false;
if (hasTicket)
{
if (isVIP)
Console.WriteLine("Welcome VIP!");
else
Console.WriteLine("Welcome regular guest.");
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Welcome regular guest.
```
