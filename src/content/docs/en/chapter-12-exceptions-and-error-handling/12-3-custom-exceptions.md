---
title: Custom exceptions
sidebar:
  order: 506
  label: 12.3 Custom exceptions
---

**Context**: Custom exceptions allow you to define application-specific error types. They should inherit from `Exception` (or a derived class) and follow standard conventions: provide constructors that call the base constructors, implement serialization for cross‑domain scenarios, and add custom properties when needed. Custom exceptions make error handling more expressive and maintainable.

## Usage Example

```csharp
using System;

public class InsufficientFundsException : Exception
{
    public decimal Amount { get; }
    public decimal Balance { get; }

    public InsufficientFundsException() { }

    public InsufficientFundsException(string message) : base(message) { }

    public InsufficientFundsException(string message, Exception inner) : base(message, inner) { }

    public InsufficientFundsException(decimal amount, decimal balance)
        : base($"Insufficient funds: requested {amount:C}, balance {balance:C}")
    {
        Amount = amount;
        Balance = balance;
    }
}

class BankAccount
{
    public decimal Balance { get; private set; }

    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
            throw new InsufficientFundsException(amount, Balance);
        Balance -= amount;
    }
}

class Program
{
    static void Main()
    {
        var account = new BankAccount();
        try
        {
            account.Withdraw(100);
        }
        catch (InsufficientFundsException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```

## Output console

```shell
dotnet run
Insufficient funds: requested $100.00, balance $0.00
```

## Important notes

- Avoid inheriting from `ApplicationException` (it is no longer recommended).
- Provide at least the three standard constructors.
- Mark the exception as `[Serializable]` if you need cross‑AppDomain or cross‑process support.

## Real-world usage example

**Validation framework** – Create `ValidationException` with a collection of validation errors.  
See [.NET docs on creating custom exceptions](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-user-defined-exceptions).

## Related sections

- [12.3.1 Derive from Exception](/en/chapter-12-exceptions-and-error-handling/12-3-1-derive-from-exception-or-applicationexception)
- [12.3.2 Serialisation constructor](/en/chapter-12-exceptions-and-error-handling/12-3-2-serialisation-constructor)
- [12.3.3 Adding custom properties](/en/chapter-12-exceptions-and-error-handling/12-3-3-adding-custom-properties)
