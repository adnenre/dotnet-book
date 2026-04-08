---
title: ref struct
sidebar:
  order: 143
  label: 6.2.3 ref struct
---

**Contexte** : `ref struct` est une structure qui réside uniquement sur la pile et ne peut pas être allouée sur le tas. Utilisée pour les scénarios haute performance (ex. `Span<T>`).

```csharp
public ref struct Buffer
{
    private Span<byte> _data;
    public Buffer(Span<byte> data) => _data = data;
    public void Write(byte value) => _data[0] = value;
}
```

## Restrictions

- Ne peut pas être boxée (pas de conversion `object`)
- Ne peut pas être utilisée comme champ dans une classe ou une structure non ref
- Ne peut pas implémenter d’interface
- Ne peut pas être utilisée dans des méthodes async (ne peut pas être capturée par une lambda ou une machine à états async)

## Exemple d'utilisation dans le monde réel

**Analyse syntaxique sans allocation** : Utilisez `ref struct` avec `Span<char>` pour analyser du CSV ou du JSON sans allouer de chaînes sur le tas.

**Exemple** : [`System.Span<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.span-1) est lui‑même une `ref struct`. De même, [`Utf8JsonReader`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.utf8jsonreader) dans `System.Text.Json` est une `ref struct` pour l’analyse JSON haute performance.

## Sections connexes

- [6.2 Structures](/fr/chapter-6-advanced-type-system/6-2-structs)
- [6.2.2 readonly struct](/fr/chapter-6-advanced-type-system/6-2-2-readonly-struct)
