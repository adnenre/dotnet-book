---
title: CallerMemberName
sidebar:
  order: 711
  label: 14.5.1 CallerMemberName
---

**Contexte** : `[CallerMemberName]` fournit le nom de la méthode ou de la propriété qui a appelé la méthode courante. Il est couramment utilisé dans les implémentations de `INotifyPropertyChanged` pour éviter de coder en dur les noms de propriétés, et dans la journalisation pour capturer la méthode qui a déclenché un événement.

## Exemple d'utilisation

```csharp
using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;

public class ViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    private string _nom;
    public string Nom
    {
        get => _nom;
        set => SetField(ref _nom, value);
    }

    protected void SetField<T>(ref T champ, T valeur, [CallerMemberName] string nomPropriete = null)
    {
        if (!EqualityComparer<T>.Default.Equals(champ, valeur))
        {
            champ = valeur;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nomPropriete));
        }
    }
}

class Program
{
    static void Main()
    {
        var vm = new ViewModel();
        vm.Nom = "Alice";
    }
}
```

## Sortie console

```shell
// L'événement PropertyChanged est déclenché avec propertyName = "Nom"
```

## Remarques importantes

- Le compilateur substitue automatiquement le nom du membre appelant.
- Fonctionne avec les méthodes, propriétés, événements, constructeurs et finaliseurs.
- Évitez de l'utiliser dans des boucles critiques pour la performance (la chaîne est allouée).

## Exemple d'utilisation dans le monde réel

**Callbacks de propriétés de dépendance** – Utilisez `CallerMemberName` pour associer automatiquement des callbacks de validation à la propriété modifiée.  
Voir [documentation .NET sur CallerMemberName](https://docs.microsoft.com/fr-fr/dotnet/api/system.runtime.compilerservices.callermembernameattribute).

## Sections connexes

- [14.5 Attributs d'information appelant](/fr/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.2 CallerArgumentExpression](/fr/chapter-14-modern-csharp-features-for-backend/14-5-2-callerargumentexpression)
