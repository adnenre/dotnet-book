---
title: Projet Calculatrice simple
sidebar:
  order: 41
  label: 2.7 Projet Calculatrice simple
---

Créez une calculatrice simple prenant en charge l'addition, la soustraction, la multiplication, la division et le modulo.  
Elle utilise `decimal` pour des calculs décimaux précis (évitant les erreurs de virgule flottante comme `0.1 + 0.2`).

## Code

```csharp
Console.WriteLine("Simple Calculator");
Console.WriteLine("Operations: +, -, _, /, %");
Console.Write("Enter first number: ");
decimal a = decimal.Parse(Console.ReadLine());
Console.Write("Enter operator (+, -, _, /, %): ");
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
case "_":
result = a _ b;
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

## Exécution de l'application

```bash
dotnet run
```

## Résultat (exemple : 10 + 5)

```shell
Simple Calculator
Operations: +, -, _, /, %
Enter first number: 10
Enter operator (+, -, _, /, %): +
Enter second number: 5
Result: 10 + 5 = 15
```

## Résultat (exemple : 0.1 + 0.2 – pas d'erreur de virgule flottante)

```shell
Simple Calculator
Operations: +, -, _, /, %
Enter first number: 0.1
Enter operator (+, -, _, /, %): +
Enter second number: 0.2
Result: 0.1 + 0.2 = 0.3
```

## Résultat (exemple : division par zéro)

```shell
Simple Calculator
Operations: +, -, _, /, %
Enter first number: 7
Enter operator (+, -, _, /, %): /
Enter second number: 0
Error: Division by zero
```
