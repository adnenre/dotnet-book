---
title: Chargement et analyse d'assembly
sidebar:
  order: 602
  label: 13.1.2 Chargement et analyse d'assembly
---

**Contexte** : Les assemblys sont les unités compilées des applications .NET (EXE et DLL). La réflexion permet de charger dynamiquement des assemblys à l'exécution (depuis un chemin de fichier, un tableau d'octets, ou le domaine actuel) et d'analyser tous les types qu'ils contiennent. C'est la base pour les architectures de plugins, les conteneurs d'injection de dépendances et les outils d'analyse de code.

## Exemple d'utilisation

```csharp
using System;
using System.IO;
using System.Linq;
using System.Reflection;

class Program
{
    static void Main()
    {
        // Charger un assembly depuis le répertoire courant
        Assembly assembly = Assembly.LoadFrom("MaBibliotheque.dll");
        Type[] types = assembly.GetTypes();
        foreach (var type in types)
        {
            Console.WriteLine(type.FullName);
        }
    }
}
```

## Sortie console

```shell
dotnet run
MaBibliotheque.MaClasse1
MaBibliotheque.MaClasse2
```

## Remarques importantes

- Utilisez `Assembly.Load` pour charger par nom fort, `Assembly.LoadFrom` par chemin.
- Analyser tous les types peut être coûteux ; mettez en cache les résultats.
- Attention aux contextes de chargement et aux conflits de version.

## Exemple d'utilisation dans le monde réel

**Système de plugins** – Chargez toutes les DLL d'un dossier plugins, analysez les types implémentant `IPlugin`, et instanciez-les.  
Voir [documentation .NET sur Assembly](https://docs.microsoft.com/fr-fr/dotnet/api/system.reflection.assembly).

## Sections connexes

- [13.1.1 Classe Type](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-1-type-class)
- [13.1.3 MemberInfo MethodInfo PropertyInfo](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
