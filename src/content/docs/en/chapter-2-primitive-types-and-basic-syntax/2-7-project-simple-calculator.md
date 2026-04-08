---
title: Project Simple Calculator
sidebar:
  order: 41
  label: 2.7 Project Simple Calculator
---

Create a simple calculator that supports addition, subtraction, multiplication, division, and modulus.  
It uses `decimal` for precise decimal arithmetic (avoiding floating‑point errors like `0.1 + 0.2`).

## Code

```csharp
Console.WriteLine("Simple Calculator");
Console.WriteLine("Operations: +, -, *, /, %");
Console.Write("Enter first number: ");
decimal a = decimal.Parse(Console.ReadLine());
Console.Write("Enter operator (+, -, *, /, %): ");
string op = Console.ReadLine();
Console.Write("Enter second number: ");
decimal b = decimal.Parse(Console.ReadLine());

decimal result = 0;
bool valid = true;

switch (op)
{
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b != 0)
            result = a / b;
        else
        {
            Console.WriteLine("Error: Division by zero");
            valid = false;
        }
        break;
    case "%":
        result = a % b;
        break;
    default:
        Console.WriteLine("Invalid operator");
        valid = false;
        break;
}

if (valid)
    Console.WriteLine($"Result: {a} {op} {b} = {result}");
```

## Run the Application

```bash
dotnet run
```

## Result (example: 10 + 5)

```shell
Simple Calculator
Operations: +, -, *, /, %
Enter first number: 10
Enter operator (+, -, *, /, %): +
Enter second number: 5
Result: 10 + 5 = 15
```

## Result (example: 0.1 + 0.2 – no floating‑point error)

```shell
Simple Calculator
Operations: +, -, *, /, %
Enter first number: 0.1
Enter operator (+, -, *, /, %): +
Enter second number: 0.2
Result: 0.1 + 0.2 = 0.3
```

## Result (example: division by zero)

```shell
Simple Calculator
Operations: +, -, *, /, %
Enter first number: 7
Enter operator (+, -, *, /, %): /
Enter second number: 0
Error: Division by zero
```
