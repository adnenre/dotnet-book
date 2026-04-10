---
title: Que sont les générateurs source
sidebar:
  order: 610
  label: 13.3.1 Que sont les générateurs source
---

**Contexte** : Les générateurs source sont des composants qui s'exécutent pendant la compilation pour inspecter votre code et produire des fichiers source C# supplémentaires. Ils ont accès aux arbres syntaxiques et aux modèles sémantiques de votre projet. Le code généré est compilé avec le code original, ce qui permet d'ajouter du code répétitif, d'implémenter automatiquement des interfaces ou d'optimiser des motifs qui nécessiteraient autrement de la réflexion à l'exécution.

## Exemple d'utilisation (sortie d'un générateur)

```csharp
// Un générateur source pourrait prendre ceci :
public partial class Personne { public string Nom { get; set; } }

// Et générer ceci :
public partial class Personne : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;
    private string _nom;
    public string Nom { get => _nom; set { if (_nom != value) { _nom = value; PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Nom))); } } }
}
```

## Sortie console

```shell
// Pas de sortie à l'exécution ; le code généré est compilé et fonctionne normalement.
```

## Remarques importantes

- Les générateurs ne peuvent pas modifier le code existant ; ils ajoutent uniquement de nouveaux fichiers.
- Ils sont idéaux pour le code répétitif basé sur des motifs.
- Les générateurs source sont déterministes et peuvent être mis en cache.

## Exemple d'utilisation dans le monde réel

**Générateur source System.Text.Json** – Génère le code de sérialisation à la compilation, éliminant la réflexion à l'exécution.  
Voir [documentation .NET sur les générateurs source](https://docs.microsoft.com/fr-fr/dotnet/csharp/roslyn-sdk/source-generators-overview).

## Sections connexes

- [13.3 Générateurs source](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-source-generators)
- [13.3.2 Générateurs incrémentaux](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
