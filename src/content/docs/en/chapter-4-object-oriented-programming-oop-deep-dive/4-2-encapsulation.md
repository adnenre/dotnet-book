---
title: Encapsulation
sidebar:
  order: 80
  label: 4.2 Encapsulation
---

**Context**: Encapsulation hides internal state and requires interaction through public methods/properties. It protects data integrity and reduces coupling.

Encapsulation is achieved using access modifiers (`private`, `protected`, `internal`, `public`) and properties.

```csharp
public class BankAccount
{
    private decimal _balance;  // hidden

    public void Deposit(decimal amount)
    {
        if (amount > 0) _balance += amount;
    }

    public decimal GetBalance() => _balance;  // controlled access
}
```

## Related Topics

- 4.2.1 Access modifiers
- 4.2.2 Property accessors
- 4.2.3 Auto implemented properties
