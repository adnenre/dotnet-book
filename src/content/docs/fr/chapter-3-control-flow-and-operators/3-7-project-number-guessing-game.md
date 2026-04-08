---
title: Projet Jeu du nombre mystère
sidebar:
  order: 33
  label: 3.7 Projet Jeu du nombre mystère
---

Créez un jeu où l'utilisateur doit deviner un nombre aléatoire entre 1 et 100.

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

## Exécution de l'application

```bash
dotnet run
```

## Résultat (exemple)

```shell
Guess the number (1-100):
Your guess: 50
Too low!
Your guess: 75
Too high!
Your guess: 62
Correct! It took you 3 attempts.
```
