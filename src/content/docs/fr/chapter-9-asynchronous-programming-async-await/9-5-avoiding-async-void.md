---
title: Éviter async void
sidebar:
  order: 222
  label: 9.5 Éviter async void
---

**Contexte** : Les méthodes `async void` posent des problèmes de gestion d’erreurs et de composition. Elles ne devraient être utilisées que pour les gestionnaires d’événements.

## Sections connexes

- [9.5.1 Les exceptions ne peuvent pas être capturées](/fr/chapter-9-asynchronous-programming-async-await/9-5-1-exceptions-cannot-be-caught)
- [9.5.2 Difficile à tester](/fr/chapter-9-asynchronous-programming-async-await/9-5-2-hard-to-test)
