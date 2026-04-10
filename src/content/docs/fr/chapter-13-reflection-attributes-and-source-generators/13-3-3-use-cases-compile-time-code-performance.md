---
title: Cas d'utilisation : code à la compilation, performance
sidebar:
  order: 612
  label: 13.3.3 Cas d'utilisation : code à la compilation, performance
---

**Contexte** : Les générateurs source sont utilisés pour la génération de code à la compilation afin d'améliorer les performances à l'exécution. Les cas d'utilisation courants incluent : génération de logique de sérialisation (JSON, protobuf), implémentation d'INotifyPropertyChanged, génération de proxies de journalisation, création de mocks pour les tests, et construction de conteneurs d'injection de dépendances. Ils éliminent la réflexion et la génération IL à l'exécution.

## Exemple d'utilisation (INotifyPropertyChanged)

```csharp
// Avec un générateur source, vous écrivez :
public partial class ViewModel : INotifyPropertyChanged
{
    [ObservableProperty]
    private string _nomUtilisateur;
}

// Le générateur produit la propriété avec notification de changement :
public partial class ViewModel
{
    public string NomUtilisateur { get => _nomUtilisateur; set { if (_nomUtilisateur != value) { _nomUtilisateur = value; OnPropertyChanged(); } } }
    private void OnPropertyChanged([CallerMemberName] string nom = null) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nom));
}
```

## Sortie console

```shell
// Pas de surcharge à l'exécution ; le code est déjà présent à la compilation.
```

## Remarques importantes

- Le code généré peut être vu et débogué.
- Pas de réflexion, pas de pénalité de performance.
- Fonctionne avec la compilation AOT (Native AOT, iOS, etc.).

## Exemple d'utilisation dans le monde réel

**CommunityToolkit.MVVM** – Utilise des générateurs source pour produire des propriétés et commandes observables.  
Voir [documentation MVVM Toolkit](https://learn.microsoft.com/fr-fr/dotnet/communitytoolkit/mvvm/).

## Sections connexes

- [13.3.2 Générateurs incrémentaux](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
- [13.3.4 Différence avec la réflexion : pas de surcharge à l'exécution](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-4-difference-from-reflection-no-runtime-overhead)
