---
title: Projet Système de gestion de bibliothèque (console)
sidebar:
  order: 104
  label: 4.7 Projet Système de gestion de bibliothèque (console)
---

**Contexte** : Construisez une application console qui gère des livres et des membres en utilisant les principes POO : classes, héritage, encapsulation, interfaces et membres statiques.

## Code complet

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// Classe de base abstraite
public abstract class ElementBibliotheque
{
    public string Titre { get; set; }
    public string Auteur { get; set; }
    public string Isbn { get; set; }
    public bool EstEmprunte { get; set; }
}

// Classe Livre
public class Livre : ElementBibliotheque
{
    public Livre(string titre, string auteur, string isbn)
    {
        Titre = titre;
        Auteur = auteur;
        Isbn = isbn;
        EstEmprunte = false;
    }
    public override string ToString() => $"{Titre} par {Auteur} (ISBN: {Isbn}) - {(EstEmprunte ? "Emprunté" : "Disponible")}";
}

// Classe Membre
public class Membre
{
    public string Nom { get; set; }
    public int MembreId { get; set; }
    public List<Livre> LivresEmpruntes { get; } = new List<Livre>();
    public Membre(string nom, int id)
    {
        Nom = nom;
        MembreId = id;
    }
}

// Interface
public interface IBibliotheque
{
    void AjouterLivre(Livre livre);
    bool SupprimerLivre(string isbn);
    bool EmprunterLivre(string isbn, Membre membre);
    bool RetournerLivre(string isbn, Membre membre);
    List<Livre> ObtenirTousLesLivres();
}

// Implémentation
public class Bibliotheque : IBibliotheque
{
    private static List<Livre> _livres = new List<Livre>();

    public void AjouterLivre(Livre livre) => _livres.Add(livre);
    public List<Livre> ObtenirTousLesLivres() => _livres.ToList();

    public bool SupprimerLivre(string isbn)
    {
        var livre = _livres.FirstOrDefault(l => l.Isbn == isbn);
        if (livre != null && !livre.EstEmprunte)
        {
            _livres.Remove(livre);
            return true;
        }
        return false;
    }

    public bool EmprunterLivre(string isbn, Membre membre)
    {
        var livre = _livres.FirstOrDefault(l => l.Isbn == isbn);
        if (livre != null && !livre.EstEmprunte)
        {
            livre.EstEmprunte = true;
            membre.LivresEmpruntes.Add(livre);
            return true;
        }
        return false;
    }

    public bool RetournerLivre(string isbn, Membre membre)
    {
        var livre = membre.LivresEmpruntes.FirstOrDefault(l => l.Isbn == isbn);
        if (livre != null)
        {
            livre.EstEmprunte = false;
            membre.LivresEmpruntes.Remove(livre);
            return true;
        }
        return false;
    }
}

// Application console
public class Program
{
    static Bibliotheque bibliotheque = new Bibliotheque();
    static Membre membreCourant;

    static void Main()
    {
        Console.WriteLine("=== Système de gestion de bibliothèque ===");
        Console.Write("Entrez votre nom : ");
        string nom = Console.ReadLine();
        membreCourant = new Membre(nom, new Random().Next(1000, 9999));
        Console.WriteLine($"Bienvenue {membreCourant.Nom} ! Votre ID membre est {membreCourant.MembreId}\n");

        bool quitter = false;
        while (!quitter)
        {
            Console.WriteLine("\nMenu :");
            Console.WriteLine("1. Ajouter un livre");
            Console.WriteLine("2. Lister tous les livres");
            Console.WriteLine("3. Emprunter un livre");
            Console.WriteLine("4. Retourner un livre");
            Console.WriteLine("5. Quitter");
            Console.Write("Choix : ");
            string choix = Console.ReadLine();

            switch (choix)
            {
                case "1": AjouterLivre(); break;
                case "2": ListerLivres(); break;
                case "3": EmprunterLivre(); break;
                case "4": RetournerLivre(); break;
                case "5": quitter = true; break;
                default: Console.WriteLine("Choix invalide."); break;
            }
        }
    }

    static void AjouterLivre()
    {
        Console.Write("Titre : "); string titre = Console.ReadLine();
        Console.Write("Auteur : "); string auteur = Console.ReadLine();
        Console.Write("ISBN : "); string isbn = Console.ReadLine();
        bibliotheque.AjouterLivre(new Livre(titre, auteur, isbn));
        Console.WriteLine("Livre ajouté.");
    }

    static void ListerLivres()
    {
        var livres = bibliotheque.ObtenirTousLesLivres();
        if (livres.Count == 0) Console.WriteLine("Aucun livre.");
        else foreach (var l in livres) Console.WriteLine(l);
    }

    static void EmprunterLivre()
    {
        Console.Write("Entrez l'ISBN à emprunter : ");
        string isbn = Console.ReadLine();
        if (bibliotheque.EmprunterLivre(isbn, membreCourant))
            Console.WriteLine("Livre emprunté.");
        else
            Console.WriteLine("Impossible d'emprunter (ISBN invalide ou déjà emprunté).");
    }

    static void RetournerLivre()
    {
        Console.Write("Entrez l'ISBN à retourner : ");
        string isbn = Console.ReadLine();
        if (bibliotheque.RetournerLivre(isbn, membreCourant))
            Console.WriteLine("Livre retourné.");
        else
            Console.WriteLine("Vous n'avez pas emprunté ce livre.");
    }
}
```

## Exemple d'exécution

```bash
=== Système de gestion de bibliothèque ===
Entrez votre nom : Alice
Bienvenue Alice ! Votre ID membre est 4567

Menu :
1. Ajouter un livre
2. Lister tous les livres
3. Emprunter un livre
4. Retourner un livre
5. Quitter
Choix : 1
Titre : Programmation C#
Auteur : John Doe
ISBN : 123
Livre ajouté.

Choix : 2
Programmation C# par John Doe (ISBN: 123) - Disponible

Choix : 3
Entrez l'ISBN à emprunter : 123
Livre emprunté.

Choix : 4
Entrez l'ISBN à retourner : 123
Livre retourné.
```

## Concepts POO utilisés

- **Classes** : `Livre`, `Membre`, `Bibliotheque`
- **Héritage** : `Livre` hérite de `ElementBibliotheque`
- **Abstraction** : classe abstraite `ElementBibliotheque`
- **Encapsulation** : liste privée static `_livres`
- **Interfaces** : contrat `IBibliotheque`
- **Membres static** : `_livres` (partagé entre toutes les instances de `Bibliotheque`)
