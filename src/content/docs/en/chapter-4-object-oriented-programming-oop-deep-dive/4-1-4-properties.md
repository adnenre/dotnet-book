---
title: Properties
sidebar:
  order: 78
  label: 4.1.4 Properties
---

**Context**: Properties provide controlled access to private fields using `get` and `set` accessors. They encapsulate validation and logic.

## Basic Property

```csharp
private int _age;
public int Age
{
    get { return _age; }
    set { _age = value; }
}
```

## Expression‑Bodied Syntax (C# 7+)

```csharp
public int Age
{
    get => _age;
    set => _age = value;
}
```

## Read‑Only Property (only getter)

```csharp
public string FullName => $"{FirstName} {LastName}";
```

## Write‑Only Property (only setter)

```csharp
private string _secret;
public string Secret { set => _secret = value; }
```

## Validation in Setter

```csharp
private int _score;
public int Score
{
    get => _score;
    set
    {
        if (value >= 0 && value <= 100)
            _score = value;
        else
            throw new ArgumentOutOfRangeException();
    }
}
```
