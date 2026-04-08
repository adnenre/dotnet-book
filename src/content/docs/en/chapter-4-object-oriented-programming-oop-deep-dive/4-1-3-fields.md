---
title: Fields
sidebar:
  order: 77
  label: 4.1.3 Fields
---

**Context**: Fields are variables declared directly inside a class. They hold the state of an object.

## Declaration

```csharp
[access modifier] type fieldName;
```

## Example

```csharp
public class Order
{
    private int _id;
    public string CustomerName;
    protected double _totalAmount;
}
```

## Field Initialization

Fields can be initialized at declaration or in the constructor.

```csharp
public class Product
{
    private int _stock = 100;   // initialized
    private readonly string _sku; // must be set in constructor
    public Product(string sku) => _sku = sku;
}
```

## Readonly Fields

`readonly` fields can only be set in the constructor or at declaration.

```csharp
public class Config
{
    public readonly string AppName = "MyApp";
}
```

## Accessing Fields

Use the dot operator.

```csharp
Order order = new Order();
order.CustomerName = "Acme Inc.";
```
