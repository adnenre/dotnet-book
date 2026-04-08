---
title: Project Library Management System console
sidebar:
  order: 104
  label: 4.7 Project Library Management System console
---

**Context**: Build a console application that manages books and members using OOP principles: classes, inheritance, encapsulation, interfaces, and static members.

## Requirements

1. **Book** class: Title, Author, ISBN, IsBorrowed.
2. **LibraryItem** abstract base class with common properties.
3. **Member** class: Name, MemberId, List of borrowed books.
4. **ILibrary** interface: AddBook, RemoveBook, BorrowBook, ReturnBook.
5. **Library** class implementing ILibrary, using a static list of books.
6. Console menu: Add book, list books, borrow, return, exit.

## Complete Code

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// Abstract base class
public abstract class LibraryItem
{
    public string Title { get; set; }
    public string Author { get; set; }
    public string Isbn { get; set; }
    public bool IsBorrowed { get; set; }
}

// Book class
public class Book : LibraryItem
{
    public Book(string title, string author, string isbn)
    {
        Title = title;
        Author = author;
        Isbn = isbn;
        IsBorrowed = false;
    }
    public override string ToString() => $"{Title} by {Author} (ISBN: {Isbn}) - {(IsBorrowed ? "Borrowed" : "Available")}";
}

// Member class
public class Member
{
    public string Name { get; set; }
    public int MemberId { get; set; }
    public List<Book> BorrowedBooks { get; } = new List<Book>();
    public Member(string name, int id)
    {
        Name = name;
        MemberId = id;
    }
}

// Interface
public interface ILibrary
{
    void AddBook(Book book);
    bool RemoveBook(string isbn);
    bool BorrowBook(string isbn, Member member);
    bool ReturnBook(string isbn, Member member);
    List<Book> GetAllBooks();
}

// Library implementation
public class Library : ILibrary
{
    private static List<Book> _books = new List<Book>();

    public void AddBook(Book book) => _books.Add(book);
    public List<Book> GetAllBooks() => _books.ToList();

    public bool RemoveBook(string isbn)
    {
        var book = _books.FirstOrDefault(b => b.Isbn == isbn);
        if (book != null && !book.IsBorrowed)
        {
            _books.Remove(book);
            return true;
        }
        return false;
    }

    public bool BorrowBook(string isbn, Member member)
    {
        var book = _books.FirstOrDefault(b => b.Isbn == isbn);
        if (book != null && !book.IsBorrowed)
        {
            book.IsBorrowed = true;
            member.BorrowedBooks.Add(book);
            return true;
        }
        return false;
    }

    public bool ReturnBook(string isbn, Member member)
    {
        var book = member.BorrowedBooks.FirstOrDefault(b => b.Isbn == isbn);
        if (book != null)
        {
            book.IsBorrowed = false;
            member.BorrowedBooks.Remove(book);
            return true;
        }
        return false;
    }
}

// Console application
public class Program
{
    static Library library = new Library();
    static Member currentMember;

    static void Main()
    {
        Console.WriteLine("=== Library Management System ===");
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        currentMember = new Member(name, new Random().Next(1000, 9999));
        Console.WriteLine($"Welcome {currentMember.Name}! Your member ID is {currentMember.MemberId}\n");

        bool exit = false;
        while (!exit)
        {
            Console.WriteLine("\nMenu:");
            Console.WriteLine("1. Add a book");
            Console.WriteLine("2. List all books");
            Console.WriteLine("3. Borrow a book");
            Console.WriteLine("4. Return a book");
            Console.WriteLine("5. Exit");
            Console.Write("Choose: ");
            string choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    AddBook();
                    break;
                case "2":
                    ListBooks();
                    break;
                case "3":
                    BorrowBook();
                    break;
                case "4":
                    ReturnBook();
                    break;
                case "5":
                    exit = true;
                    break;
                default:
                    Console.WriteLine("Invalid choice.");
                    break;
            }
        }
    }

    static void AddBook()
    {
        Console.Write("Title: "); string title = Console.ReadLine();
        Console.Write("Author: "); string author = Console.ReadLine();
        Console.Write("ISBN: "); string isbn = Console.ReadLine();
        library.AddBook(new Book(title, author, isbn));
        Console.WriteLine("Book added.");
    }

    static void ListBooks()
    {
        var books = library.GetAllBooks();
        if (books.Count == 0) Console.WriteLine("No books.");
        else foreach (var b in books) Console.WriteLine(b);
    }

    static void BorrowBook()
    {
        Console.Write("Enter ISBN to borrow: ");
        string isbn = Console.ReadLine();
        if (library.BorrowBook(isbn, currentMember))
            Console.WriteLine("Book borrowed.");
        else
            Console.WriteLine("Cannot borrow (invalid ISBN or already borrowed).");
    }

    static void ReturnBook()
    {
        Console.Write("Enter ISBN to return: ");
        string isbn = Console.ReadLine();
        if (library.ReturnBook(isbn, currentMember))
            Console.WriteLine("Book returned.");
        else
            Console.WriteLine("You haven't borrowed that book.");
    }
}
```

## Example Run

```bash
=== Library Management System ===
Enter your name: Alice
Welcome Alice! Your member ID is 4567

Menu:

Add a book

List all books

Borrow a book

Return a book

Exit
Choose: 1
Title: C# Programming
Author: John Doe
ISBN: 123
Book added.

Choose: 2
C# Programming by John Doe (ISBN: 123) - Available

Choose: 3
Enter ISBN to borrow: 123
Book borrowed.

Choose: 4
Enter ISBN to return: 123
Book returned.
```

## OOP Concepts Used

- **Classes**: `Book`, `Member`, `Library`
- **Inheritance**: `Book` inherits `LibraryItem`
- **Abstraction**: `LibraryItem` abstract class
- **Encapsulation**: private static `_books` list
- **Interfaces**: `ILibrary` contract
- **Static members**: `_books` (shared across all library instances)
