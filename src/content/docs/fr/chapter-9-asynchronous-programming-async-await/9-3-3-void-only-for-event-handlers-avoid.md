---
title: void uniquement pour les gestionnaires d’événements (à éviter)
sidebar:
  order: 217
  label: 9.3.3 void uniquement pour les gestionnaires d’événements (à éviter)
---

**Contexte** : `async void` ne devrait être utilisé que pour les gestionnaires d’événements. Pour toutes les autres méthodes asynchrones, retournez `Task` ou `Task<T>`.

```csharp
using System;
using System.Threading.Tasks;
using System.Windows.Forms; // Exemple WinForms

public partial class MyForm : Form
{
    // Acceptable : gestionnaire d’événement
    private async void Button_Click(object sender, EventArgs e)
    {
        await LoadDataAsync();
    }

    private async Task LoadDataAsync()
    {
        await Task.Delay(100);
    }
}
```

## Pourquoi éviter `async void`

- Les exceptions ne peuvent pas être capturées par l’appelant ; elles font planter le processus.
- Difficile à tester (pas de tâche à attendre).
- L’appelant ne peut pas savoir quand la méthode se termine.

## Exemple d'utilisation dans le monde réel

**Gestionnaires d’événements UI** : WPF, WinForms et Blazor autorisent `async void` pour les événements car le framework gère l’exception.

**Exemple** : [Pièges de async void](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming#avoid-async-void)

## Sections connexes

- [9.3 Types de retour des méthodes async](/fr/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.5 Éviter async void](/fr/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
