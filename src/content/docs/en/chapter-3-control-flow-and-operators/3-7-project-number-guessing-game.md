---
title: Project Number Guessing Game
sidebar:
  order: 33
  label: 3.7 Project Number Guessing Game
---

Create a game where the user guesses a random number between 1 and 100.

## Code

```csharp
Random random = new Random();
int secretNumber = random.Next(1, 101);
int guess = 0;
int attempts = 0;

Console.WriteLine("Guess the number (1-100):");

while (guess != secretNumber)
{
    Console.Write("Your guess: ");
    guess = int.Parse(Console.ReadLine());
    attempts++;

    if (guess < secretNumber)
        Console.WriteLine("Too low!");
    else if (guess > secretNumber)
        Console.WriteLine("Too high!");
    else
        Console.WriteLine($"Correct! It took you {attempts} attempts.");
}
```

## Run the Application

```bash
dotnet run
```

## Result (example)

```shell
Guess the number (1-100):
Your guess: 50
Too low!
Your guess: 75
Too high!
Your guess: 62
Correct! It took you 3 attempts.
```
