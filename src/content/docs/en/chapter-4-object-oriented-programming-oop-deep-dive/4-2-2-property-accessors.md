---
title: Property accessors
sidebar:
  order: 82
  label: 4.2.2 Property accessors
---

**Context**: Property accessors (`get` and `set`) control how values are read and written. You can apply different access modifiers to each accessor.

## Different Accessibility

```csharp
private int _value;
public int Value
{
    get => _value;
    private set => _value = value;  // only class can set
}
```

## Getter‑Only Property

```csharp
public string Name { get; }  // can be set only in constructor
```

## Setter‑Only Property

```csharp
public string Password { set => /* store */ ; } // no getter
```

## Init Accessor (C# 9+)

Allows setting only during object initialization.

```csharp
public class Person
{
    public string Name { get; init; }
}
var p = new Person { Name = "Alice" };
// p.Name = "Bob"; // error
```

## Required Properties (C# 11+)

```csharp
public class User
{
    public required string UserName { get; set; }
}
```
