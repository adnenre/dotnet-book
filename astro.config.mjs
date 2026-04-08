// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: "https://adnenre.github.io/dotnet-book",
  base: ".",

  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: { en: ".Net Book", fr: ".Net Livre" },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/dotnet-book/" }],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: "1 - Introduction Understanding C#, .Net, and Your First Setup",
          translations: {
            fr: "1 - Introduction Comprendre C#, .NET et votre premier environnement",
          },
          items: [
            {
              label: "1.1 What is .Net",
              translations: {
                fr: "1.1 Qu’est-ce que .NET",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-1-what-is-net",
            },
            {
              label: "1.1.1 The .Net Framework Windows only legacy",
              translations: {
                fr: "1.1.1 .NET Framework Windows seulement hérité",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-1-1-the-net-framework-windows-only-legacy",
            },
            {
              label: "1.1.2 The .Net Core cross platform modern",
              translations: {
                fr: "1.1.2 .NET Core multiplateforme moderne",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-1-2-the-net-core-cross-platform-modern",
            },
            {
              label: "1.1.3 The .Net 5, 6, 7, 8 unified platform",
              translations: {
                fr: "1.1.3 .NET 5, 6, 7, 8 plateforme unifiée",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-1-3-the-net-5-6-7-8-unified-platform",
            },
            {
              label: "1.1.4 The .Net Standard API compatibility contract",
              translations: {
                fr: "1.1.4 .NET Standard contrat de compatibilité API",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-1-4-the-net-standard-api-compatibility-contract",
            },
            {
              label: "1.2 Installing the .Net SDK",
              translations: {
                fr: "1.2 Installer le SDK .NET",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-2-installing-the-net-sdk",
            },
            {
              label: "1.2.1 Download from dotnet.microsoft.com",
              translations: {
                fr: "1.2.1 Télécharger depuis dotnet.microsoft.com",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-2-1-download-from-dotnetmicrosoftcom",
            },
            {
              label: "1.2.2 Verify installation with dotnet info",
              translations: {
                fr: "1.2.2 Vérifier l’installation avec dotnet info",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-2-2-verify-installation-with-dotnet-info",
            },
            {
              label: "1.2.3 SDK vs Runtime",
              translations: {
                fr: "1.2.3 SDK vs Runtime",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-2-3-sdk-vs-runtime",
            },
            {
              label: "1.3 Project structure",
              translations: {
                fr: "1.3 Structure d’un projet",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-3-project-structure",
            },
            {
              label: "1.3.1 Csproj file XML format package references",
              translations: {
                fr: "1.3.1 Fichier csproj format XML références de paquets",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-3-1-csproj-file-xml-format-package-references",
            },
            {
              label: "1.3.2 Program.cs entry point",
              translations: {
                fr: "1.3.2 Program.cs point d’entrée",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-3-2-programcs-entry-point",
            },
            {
              label: "1.3.3 Appsettings.JSON configuration",
              translations: {
                fr: "1.3.3 Appsettings.JSON configuration",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-3-3-appsettingsjson-configuration",
            },
            {
              label: "1.3.4 Obj and bin folders",
              translations: {
                fr: "1.3.4 Dossiers obj et bin",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-3-4-obj-and-bin-folders",
            },
            {
              label: "1.4 The dotnet CLI",
              translations: {
                fr: "1.4 L’interface de ligne de commande dotnet",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-the-dotnet-cli",
            },
            {
              label: "1.4.1 Dotnet new create project from template",
              translations: {
                fr: "1.4.1 Dotnet new créer un projet à partir d’un modèle",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-1-dotnet-new-create-project-from-template",
            },
            {
              label: "1.4.2 Dotnet build compile",
              translations: {
                fr: "1.4.2 Dotnet build compiler",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-2-dotnet-build-compile",
            },
            {
              label: "1.4.3 Dotnet run build and execute",
              translations: {
                fr: "1.4.3 Dotnet run compiler et exécuter",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-3-dotnet-run-build-and-execute",
            },
            {
              label: "1.4.4 Dotnet test run unit tests",
              translations: {
                fr: "1.4.4 Dotnet test exécuter les tests unitaires",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-4-dotnet-test-run-unit-tests",
            },
            {
              label: "1.4.5 Dotnet publish create deployable output",
              translations: {
                fr: "1.4.5 Dotnet publish produire une sortie déployable",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-4-5-dotnet-publish-create-deployable-output",
            },
            {
              label: "1.5 Top level statements C# 9 and later",
              translations: {
                fr: "1.5 Instructions de niveau supérieur C# 9 et ultérieur",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-5-top-level-statements-c-9-and-later",
            },
            {
              label: "1.5.1 No explicit Main method",
              translations: {
                fr: "1.5.1 Pas de méthode Main explicite",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-5-1-no-explicit-main-method",
            },
            {
              label: "1.5.2 Implicit using directives",
              translations: {
                fr: "1.5.2 Directives using implicites",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-5-2-implicit-using-directives",
            },
            {
              label: "1.5.3 When to use vs traditional Main",
              translations: {
                fr: "1.5.3 Quand utiliser vs Main traditionnel",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-5-3-when-to-use-vs-traditional-main",
            },
            {
              label: "1.6 Your first console app Hello World",
              translations: {
                fr: "1.6 Votre première application console Bonjour le monde",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-6-your-first-console-app-hello-world",
            },
            {
              label: "1.6.1 Create project dotnet new console n HelloWorld",
              translations: {
                fr: "1.6.1 Créer le projet dotnet new console n HelloWorld",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-6-1-create-project-dotnet-new-console-n-helloworld",
            },
            {
              label: "1.6.2 Write Console.WriteLine Hello World",
              translations: {
                fr: "1.6.2 ÉCrire Console.WriteLine Bonjour le monde",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-6-2-write-consolewriteline-hello-world",
            },
            {
              label: "1.6.3 Run and observe output",
              translations: {
                fr: "1.6.3 Exécuter et observer la sortie",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-6-3-run-and-observe-output",
            },
            {
              label: "1.7 Project Command Line Greeting Tool",
              translations: {
                fr: "1.7 Projet Outil de salutation en ligne de commande",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-7-project-command-line-greeting-tool",
            },
            {
              label: "1.7.1 Idea ask name and favourite colour print greeting",
              translations: {
                fr: "1.7.1 Idée : demander le nom et la couleur préférée, afficher un message",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-7-1-idea-ask-name-and-favourite-colour-print-greeting",
            },
            {
              label: "1.7.2 Folder structure GreetingTool Program.cs",
              translations: {
                fr: "1.7.2 Structure de dossiers GreetingTool Program.cs",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-7-2-folder-structure-greetingtool-programcs",
            },
            {
              label: "1.7.3 Steps ask name ask colour print personalised greeting",
              translations: {
                fr: "1.7.3 ÉTapes : demander le nom, demander la couleur, afficher un message personnalisé",
              },
              slug: "chapter-1-introduction-understanding-c-net-and-your-first-setup/1-7-3-steps-ask-name-ask-colour-print-personalised-greeting",
            },
          ],
        },
        {
          label: "2 - Primitive Types and Basic Syntax",
          translations: {
            fr: "2 - Types primitifs et syntaxe de base",
          },
          items: [
            {
              label: "2.1 Value types",
              translations: {
                fr: "2.1 Types valeur",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-1-value-types",
            },
            {
              label: "2.1.1 Integral types",
              translations: {
                fr: "2.1.1 Types entiers",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-1-1-integral-types",
            },
            {
              label: "2.2 Reference types",
              translations: {
                fr: "2.2 Types référence",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-2-reference-types",
            },
            {
              label: "2.2.1 String",
              translations: {
                fr: "2.2.1 String",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-2-1-string",
            },
            {
              label: "2.2.2 Object",
              translations: {
                fr: "2.2.2 Object",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-2-2-object",
            },
            {
              label: "2.2.3 Dynamic",
              translations: {
                fr: "2.2.3 Dynamic",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-2-3-dynamic",
            },
            {
              label: "2.3 Variables and constants",
              translations: {
                fr: "2.3 Variables et constantes",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-variables-and-constants",
            },
            {
              label: "2.3.1 Declaration type variableName",
              translations: {
                fr: "2.3.1 Déclaration type nomVariable",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-1-declaration-type-variablename",
            },
            {
              label: "2.3.2 Initialisation int x = 5",
              translations: {
                fr: "2.3.2 Initialisation int x = 5",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-2-initialisation-int-x-5",
            },
            {
              label: "2.3.3 Type inference with var",
              translations: {
                fr: "2.3.3 Inférence de type avec var",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-3-type-inference-with-var",
            },
            {
              label: "2.3.4 Constants const double Pi = 3.14",
              translations: {
                fr: "2.3.4 Constantes const double Pi = 3.14",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-4-constants-const-double-pi-314",
            },
            {
              label: "2.3.5 Read only fields",
              translations: {
                fr: "2.3.5 Champs readonly",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-3-5-read-only-fields",
            },
            {
              label: "2.4 String interpolation",
              translations: {
                fr: "2.4 Interpolation de chaînes",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-4-string-interpolation",
            },
            {
              label: "2.4.1 Syntax Hello name",
              translations: {
                fr: "2.4.1 Syntaxe Bonjour nom",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-4-1-syntax-hello-name",
            },
            {
              label: "2.4.2 Formatting value format",
              translations: {
                fr: "2.4.2 Mise en forme valeur format",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-4-2-formatting-value-format",
            },
            {
              label: "2.4.3 Escape sequences for literal brace",
              translations: {
                fr: "2.4.3 Séquences d’échappement pour accolade littérale",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-4-3-escape-sequences-for-literal-brace",
            },
            {
              label: "2.5 Basic IO",
              translations: {
                fr: "2.5 Entrées-sorties basiques",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-5-basic-io",
            },
            {
              label: "2.5.1 Console.WriteLine line",
              translations: {
                fr: "2.5.1 Console.WriteLine ligne",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-5-1-consolewriteline-line",
            },
            {
              label: "2.5.2 Console.Write no newline",
              translations: {
                fr: "2.5.2 Console.Write sans saut de ligne",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-5-2-consolewrite-no-newline",
            },
            {
              label: "2.5.3 Console.ReadLine returns string",
              translations: {
                fr: "2.5.3 Console.ReadLine retourne une chaîne",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-5-3-consolereadline-returns-string",
            },
            {
              label: "2.5.4 Console.ReadKey single character",
              translations: {
                fr: "2.5.4 Console.ReadKey un seul caractère",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-5-4-consolereadkey-single-character",
            },
            {
              label: "2.6 Type conversion",
              translations: {
                fr: "2.6 Conversion de types",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-6-type-conversion",
            },
            {
              label: "2.6.1 Implicit conversion",
              translations: {
                fr: "2.6.1 Conversion implicite",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-6-1-implicit-conversion",
            },
            {
              label: "2.6.2 Explicit cast",
              translations: {
                fr: "2.6.2 Conversion explicite",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-6-2-explicit-cast",
            },
            {
              label: "2.6.3 Convert class",
              translations: {
                fr: "2.6.3 Classe Convert",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-6-3-convert-class",
            },
            {
              label: "2.6.4 Parse and TryParse",
              translations: {
                fr: "2.6.4 Parse et TryParse",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-6-4-parse-and-tryparse",
            },
            {
              label: "2.7 Project Simple Calculator",
              translations: {
                fr: "2.7 Projet Calculatrice simple",
              },
              slug: "chapter-2-primitive-types-and-basic-syntax/2-7-project-simple-calculator",
            },
          ],
        },
        {
          label: "3 - Control Flow and Operators",
          translations: {
            fr: "3 - Flux de contrôle et opérateurs",
          },
          items: [
            {
              label: "3.1 Conditional statements",
              translations: {
                fr: "3.1 Instructions conditionnelles",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-conditional-statements",
            },
            {
              label: "3.1.1 If statement",
              translations: {
                fr: "3.1.1 If",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-1-if-statement",
            },
            {
              label: "3.1.2 Else if chain",
              translations: {
                fr: "3.1.2 Else if enchaîné",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-2-else-if-chain",
            },
            {
              label: "3.1.3 Else clause",
              translations: {
                fr: "3.1.3 Else",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-3-else-clause",
            },
            {
              label: "3.1.4 Nested if",
              translations: {
                fr: "3.1.4 If imbriqué",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-4-nested-if",
            },
            {
              label: "3.2 Switch statement",
              translations: {
                fr: "3.2 Instruction switch",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-switch-statement",
            },
            {
              label: "3.2.1 Switch with constant patterns",
              translations: {
                fr: "3.2.1 Switch avec motifs constants",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-1-switch-with-constant-patterns",
            },
            {
              label: "3.2.2 Switch with pattern matching C# 7 and later",
              translations: {
                fr: "3.2.2 Switch avec critères de correspondance C# 7 et ultérieur",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-2-switch-with-pattern-matching-c-7-and-later",
            },
            {
              label: "3.2.3 When guards",
              translations: {
                fr: "3.2.3 Gardes when",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-3-when-guards",
            },
            {
              label: "3.2.4 Goto case rare",
              translations: {
                fr: "3.2.4 Goto case rare",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-4-goto-case-rare",
            },
            {
              label: "3.3 Switch expressions C# 8 and later",
              translations: {
                fr: "3.3 Expressions switch C# 8 et ultérieur",
              },
              slug: "chapter-3-control-flow-and-operators/3-3-switch-expressions-c-8-and-later",
            },
            {
              label: "3.3.1 Syntax",
              translations: {
                fr: "3.3.1 Syntaxe",
              },
              slug: "chapter-3-control-flow-and-operators/3-3-1-syntax",
            },
            {
              label: "3.3.2 Discard pattern",
              translations: {
                fr: "3.3.2 Modèle d’abandon",
              },
              slug: "chapter-3-control-flow-and-operators/3-3-2-discard-pattern",
            },
            {
              label: "3.4 Loops",
              translations: {
                fr: "3.4 Boucles",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-loops",
            },
            {
              label: "3.4.1 For loop",
              translations: {
                fr: "3.4.1 For",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-1-for-loop",
            },
            {
              label: "3.4.2 Foreach",
              translations: {
                fr: "3.4.2 Foreach",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-2-foreach",
            },
            {
              label: "3.4.3 While",
              translations: {
                fr: "3.4.3 While",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-3-while",
            },
            {
              label: "3.4.4 Do while",
              translations: {
                fr: "3.4.4 Do while",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-4-do-while",
            },
            {
              label: "3.5 Loop control",
              translations: {
                fr: "3.5 Contrôle de boucle",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-loop-control",
            },
            {
              label: "3.5.1 Break",
              translations: {
                fr: "3.5.1 Break",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-1-break",
            },
            {
              label: "3.5.2 Continue",
              translations: {
                fr: "3.5.2 Continue",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-2-continue",
            },
            {
              label: "3.5.3 Return",
              translations: {
                fr: "3.5.3 Return",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-3-return",
            },
            {
              label: "3.5.4 Goto avoid",
              translations: {
                fr: "3.5.4 Goto à éviter",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-4-goto-avoid",
            },
            {
              label: "3.6 Operators",
              translations: {
                fr: "3.6 Opérateurs",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-operators",
            },
            {
              label: "3.6.1 Arithmetic",
              translations: {
                fr: "3.6.1 Arithmétiques",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-1-arithmetic",
            },
            {
              label: "3.6.2 Assignment",
              translations: {
                fr: "3.6.2 Assignation",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-2-assignment",
            },
            {
              label: "3.6.3 Logical",
              translations: {
                fr: "3.6.3 Logiques",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-3-logical",
            },
            {
              label: "3.6.4 Comparison",
              translations: {
                fr: "3.6.4 Comparaison",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-4-comparison",
            },
            {
              label: "3.6.5 Null coalescing",
              translations: {
                fr: "3.6.5 Null coalescing",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-5-null-coalescing",
            },
            {
              label: "3.6.6 Null conditional",
              translations: {
                fr: "3.6.6 Null conditionnel",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-6-null-conditional",
            },
            {
              label: "3.6.7 Ternary",
              translations: {
                fr: "3.6.7 Ternaire",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-7-ternary",
            },
            {
              label: "3.6.8 Bitwise",
              translations: {
                fr: "3.6.8 Binaires",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-8-bitwise",
            },
            {
              label: "3.7 Project Number Guessing Game",
              translations: {
                fr: "3.7 Projet Jeu du nombre mystère",
              },
              slug: "chapter-3-control-flow-and-operators/3-7-project-number-guessing-game",
            },
          ],
        },
        {
          label: "4 - Object Oriented Programming OOP Deep Dive",
          translations: {
            fr: "4 - Programmation orientée objet (POO) en profondeur",
          },
          items: [
            {
              label: "4.1 Classes and objects",
              translations: {
                fr: "4.1 Classes et objets",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-classes-and-objects",
            },
            {
              label: "4.1.1 Class definition",
              translations: {
                fr: "4.1.1 Définition d’une classe",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-1-class-definition",
            },
            {
              label: "4.1.2 Instantiation",
              translations: {
                fr: "4.1.2 Instanciation",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-2-instantiation",
            },
            {
              label: "4.1.3 Fields",
              translations: {
                fr: "4.1.3 Champs",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-3-fields",
            },
            {
              label: "4.1.4 Properties",
              translations: {
                fr: "4.1.4 Propriétés",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-4-properties",
            },
            {
              label: "4.1.5 Methods",
              translations: {
                fr: "4.1.5 Méthodes",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-1-5-methods",
            },
            {
              label: "4.2 Encapsulation",
              translations: {
                fr: "4.2 Encapsulation",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-2-encapsulation",
            },
            {
              label: "4.2.1 Access modifiers",
              translations: {
                fr: "4.2.1 Modificateurs d’accès",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-2-1-access-modifiers",
            },
            {
              label: "4.2.2 Property accessors",
              translations: {
                fr: "4.2.2 Accesseurs de propriétés",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-2-2-property-accessors",
            },
            {
              label: "4.2.3 Auto implemented properties",
              translations: {
                fr: "4.2.3 Propriétés auto-implémentées",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-2-3-auto-implemented-properties",
            },
            {
              label: "4.3 Inheritance",
              translations: {
                fr: "4.3 Héritage",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-inheritance",
            },
            {
              label: "4.3.1 Base class and derived class",
              translations: {
                fr: "4.3.1 Classe de base et classe dérivée",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-1-base-class-and-derived-class",
            },
            {
              label: "4.3.2 Base keyword",
              translations: {
                fr: "4.3.2 Mot-clé base",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-2-base-keyword",
            },
            {
              label: "4.3.3 Sealed classes",
              translations: {
                fr: "4.3.3 Classes sealed",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-3-sealed-classes",
            },
            {
              label: "4.3.4 Virtual and override methods",
              translations: {
                fr: "4.3.4 Méthodes virtual et override",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-4-virtual-and-override-methods",
            },
            {
              label: "4.3.5 Abstract classes and methods",
              translations: {
                fr: "4.3.5 Classes et méthodes abstract",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-5-abstract-classes-and-methods",
            },
            {
              label: "4.3.6 Hiding members with new",
              translations: {
                fr: "4.3.6 Masquer des membres avec new",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-3-6-hiding-members-with-new",
            },
            {
              label: "4.4 Polymorphism",
              translations: {
                fr: "4.4 Polymorphisme",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-4-polymorphism",
            },
            {
              label: "4.4.1 Compile time overloading",
              translations: {
                fr: "4.4.1 Polymorphisme à la compilation (surcharge)",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-4-1-compile-time-overloading",
            },
            {
              label: "4.4.2 Runtime virtual override",
              translations: {
                fr: "4.4.2 Polymorphisme à l’exécution (virtual/override)",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-4-2-runtime-virtual-override",
            },
            {
              label: "4.4.3 Is and as operators",
              translations: {
                fr: "4.4.3 Opérateurs is et as",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-4-3-is-and-as-operators",
            },
            {
              label: "4.5 Interfaces",
              translations: {
                fr: "4.5 Interfaces",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-5-interfaces",
            },
            {
              label: "4.5.1 Interface definition",
              translations: {
                fr: "4.5.1 Définition d’une interface",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-5-1-interface-definition",
            },
            {
              label: "4.5.2 Implementing an interface",
              translations: {
                fr: "4.5.2 Implémenter une interface",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-5-2-implementing-an-interface",
            },
            {
              label: "4.5.3 Explicit interface implementation",
              translations: {
                fr: "4.5.3 Implémentation explicite d’interface",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-5-3-explicit-interface-implementation",
            },
            {
              label: "4.5.4 Default interface methods C# 8 and later",
              translations: {
                fr: "4.5.4 Méthodes d’interface par défaut C# 8 et ultérieur",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-5-4-default-interface-methods-c-8-and-later",
            },
            {
              label: "4.6 Static classes and members",
              translations: {
                fr: "4.6 Classes et membres static",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-6-static-classes-and-members",
            },
            {
              label: "4.6.1 Static fields methods properties",
              translations: {
                fr: "4.6.1 Champs, méthodes, propriétés static",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-6-1-static-fields-methods-properties",
            },
            {
              label: "4.6.2 Static constructor",
              translations: {
                fr: "4.6.2 Constructeur static",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-6-2-static-constructor",
            },
            {
              label: "4.6.3 Static class cannot be instantiated",
              translations: {
                fr: "4.6.3 Classe static ne peut pas être instanciée",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-6-3-static-class-cannot-be-instantiated",
            },
            {
              label: "4.7 Project Library Management System console",
              translations: {
                fr: "4.7 Projet Système de gestion de bibliothèque (console)",
              },
              slug: "chapter-4-object-oriented-programming-oop-deep-dive/4-7-project-library-management-system-console",
            },
          ],
        },
        {
          label: "5 - Design Patterns for Backend Development",
          translations: {
            fr: "5 - Patrons de conception pour le développement backend",
          },
          items: [
            {
              label: "5.1 Creational patterns",
              translations: {
                fr: "5.1 Patrons de création",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-creational-patterns",
            },
            {
              label: "5.1.1 Factory Method",
              translations: {
                fr: "5.1.1 Fabrique (Factory Method)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-1-factory-method",
            },
            {
              label: "5.1.2 Abstract Factory",
              translations: {
                fr: "5.1.2 Fabrique abstraite (Abstract Factory)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-2-abstract-factory",
            },
            {
              label: "5.1.3 Singleton",
              translations: {
                fr: "5.1.3 Singleton",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-3-singleton",
            },
            {
              label: "5.1.4 Builder",
              translations: {
                fr: "5.1.4 Monteur (Builder)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-4-builder",
            },
            {
              label: "5.1.5 Prototype",
              translations: {
                fr: "5.1.5 Prototype",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-1-5-prototype",
            },
            {
              label: "5.2 Structural patterns",
              translations: {
                fr: "5.2 Patrons structurels",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-structural-patterns",
            },
            {
              label: "5.2.1 Adapter",
              translations: {
                fr: "5.2.1 Adaptateur (Adapter)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-1-adapter",
            },
            {
              label: "5.2.2 Proxy",
              translations: {
                fr: "5.2.2 Proxy",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-2-proxy",
            },
            {
              label: "5.2.3 Decorator",
              translations: {
                fr: "5.2.3 Décorateur (Decorator)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-3-decorator",
            },
            {
              label: "5.2.4 Facade",
              translations: {
                fr: "5.2.4 Façade (Facade)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-4-facade",
            },
            {
              label: "5.2.5 Bridge",
              translations: {
                fr: "5.2.5 Pont (Bridge)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-5-bridge",
            },
            {
              label: "5.2.6 Composite",
              translations: {
                fr: "5.2.6 Composite",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-6-composite",
            },
            {
              label: "5.2.7 Flyweight",
              translations: {
                fr: "5.2.7 Poids-mouche (Flyweight)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-2-7-flyweight",
            },
            {
              label: "5.3 Behavioural patterns",
              translations: {
                fr: "5.3 Patrons comportementaux",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns",
            },
            {
              label: "5.3.1 Strategy",
              translations: {
                fr: "5.3.1 Stratégie (Strategy)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-1-strategy",
            },
            {
              label: "5.3.2 Command",
              translations: {
                fr: "5.3.2 Commande (Command)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-2-command",
            },
            {
              label: "5.3.3 Observer",
              translations: {
                fr: "5.3.3 Observateur (Observer)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-3-observer",
            },
            {
              label: "5.3.4 Chain of Responsibility",
              translations: {
                fr: "5.3.4 Chaîne de responsabilité (Chain of Responsibility)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-4-chain-of-responsibility",
            },
            {
              label: "5.3.5 Mediator",
              translations: {
                fr: "5.3.5 Médiateur (Mediator)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-5-mediator",
            },
            {
              label: "5.3.6 Memento",
              translations: {
                fr: "5.3.6 Memento",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-6-memento",
            },
            {
              label: "5.3.7 State",
              translations: {
                fr: "5.3.7 ÉTat (State)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-7-state",
            },
            {
              label: "5.3.8 Template Method",
              translations: {
                fr: "5.3.8 Patron Méthode (Template Method)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-8-template-method",
            },
            {
              label: "5.3.9 Visitor",
              translations: {
                fr: "5.3.9 Visiteur (Visitor)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-3-9-visitor",
            },
            {
              label: "5.4 Architectural patterns for backend",
              translations: {
                fr: "5.4 Patrons architecturaux pour le backend",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend",
            },
            {
              label: "5.4.1 Repository",
              translations: {
                fr: "5.4.1 Dépôt (Repository)",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-4-1-repository",
            },
            {
              label: "5.4.2 Middleware",
              translations: {
                fr: "5.4.2 Middleware",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-4-2-middleware",
            },
            {
              label: "5.4.3 Dependency Injection",
              translations: {
                fr: "5.4.3 Injection de dépendances",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-4-3-dependency-injection",
            },
            {
              label: "5.5 Project Discount Strategy System",
              translations: {
                fr: "5.5 Projet Système de remise avec le patron Stratégie",
              },
              slug: "chapter-5-design-patterns-for-backend-development/5-5-project-discount-strategy-system",
            },
          ],
        },
        {
          label: "6 - Advanced Type System",
          translations: {
            fr: "6 - Système de types avancé",
          },
          items: [
            {
              label: "6.1 Records",
              translations: {
                fr: "6.1 Enregistrements (Records)",
              },
              slug: "chapter-6-advanced-type-system/6-1-records",
            },
            {
              label: "6.1.1 Record class",
              translations: {
                fr: "6.1.1 Record class",
              },
              slug: "chapter-6-advanced-type-system/6-1-1-record-class",
            },
            {
              label: "6.1.2 Record struct",
              translations: {
                fr: "6.1.2 Record struct",
              },
              slug: "chapter-6-advanced-type-system/6-1-2-record-struct",
            },
            {
              label: "6.1.3 Positional records",
              translations: {
                fr: "6.1.3 Enregistrements positionnels",
              },
              slug: "chapter-6-advanced-type-system/6-1-3-positional-records",
            },
            {
              label: "6.1.4 With expressions",
              translations: {
                fr: "6.1.4 Expressions with",
              },
              slug: "chapter-6-advanced-type-system/6-1-4-with-expressions",
            },
            {
              label: "6.1.5 Value based equality",
              translations: {
                fr: "6.1.5 ÉGalité basée sur la valeur",
              },
              slug: "chapter-6-advanced-type-system/6-1-5-value-based-equality",
            },
            {
              label: "6.2 Structs",
              translations: {
                fr: "6.2 Structures (struct)",
              },
              slug: "chapter-6-advanced-type-system/6-2-structs",
            },
            {
              label: "6.2.1 Struct",
              translations: {
                fr: "6.2.1 Struct",
              },
              slug: "chapter-6-advanced-type-system/6-2-1-struct",
            },
            {
              label: "6.2.2 Readonly struct",
              translations: {
                fr: "6.2.2 Readonly struct",
              },
              slug: "chapter-6-advanced-type-system/6-2-2-readonly-struct",
            },
            {
              label: "6.2.3 Ref struct",
              translations: {
                fr: "6.2.3 Ref struct",
              },
              slug: "chapter-6-advanced-type-system/6-2-3-ref-struct",
            },
            {
              label: "6.2.4 When to use struct vs class",
              translations: {
                fr: "6.2.4 Quand utiliser struct vs class",
              },
              slug: "chapter-6-advanced-type-system/6-2-4-when-to-use-struct-vs-class",
            },
            {
              label: "6.3 Enums",
              translations: {
                fr: "6.3 ÉNumérations (enum)",
              },
              slug: "chapter-6-advanced-type-system/6-3-enums",
            },
            {
              label: "6.3.1 Enum definition",
              translations: {
                fr: "6.3.1 Définition d’une enum",
              },
              slug: "chapter-6-advanced-type-system/6-3-1-enum-definition",
            },
            {
              label: "6.3.2 Underlying type",
              translations: {
                fr: "6.3.2 Type sous-jacent",
              },
              slug: "chapter-6-advanced-type-system/6-3-2-underlying-type",
            },
            {
              label: "6.3.3 Flags enum",
              translations: {
                fr: "6.3.3 Enum avec attribut Flags",
              },
              slug: "chapter-6-advanced-type-system/6-3-3-flags-enum",
            },
            {
              label: "6.3.4 Enum Parse and Enum GetValues",
              translations: {
                fr: "6.3.4 Enum.Parse et Enum.GetValues",
              },
              slug: "chapter-6-advanced-type-system/6-3-4-enum-parse-and-enum-getvalues",
            },
            {
              label: "6.4 Nullable reference types C# 8 and later",
              translations: {
                fr: "6.4 Types référence Nullable C# 8 et ultérieur",
              },
              slug: "chapter-6-advanced-type-system/6-4-nullable-reference-types-c-8-and-later",
            },
            {
              label: "6.4.1 String question mark nullable reference",
              translations: {
                fr: "6.4.1 String? référence nullable",
              },
              slug: "chapter-6-advanced-type-system/6-4-1-string-question-mark-nullable-reference",
            },
            {
              label: "6.4.2 Nullable annotation context",
              translations: {
                fr: "6.4.2 Contexte d’annotation nullable",
              },
              slug: "chapter-6-advanced-type-system/6-4-2-nullable-annotation-context",
            },
            {
              label: "6.4.3 Null forgiving operator",
              translations: {
                fr: "6.4.3 Opérateur de suppression de null",
              },
              slug: "chapter-6-advanced-type-system/6-4-3-null-forgiving-operator",
            },
            {
              label: "6.4.4 Nullable warnings",
              translations: {
                fr: "6.4.4 Avertissements de nullabilité",
              },
              slug: "chapter-6-advanced-type-system/6-4-4-nullable-warnings",
            },
            {
              label: "6.5 Pattern matching",
              translations: {
                fr: "6.5 Filtrage (Pattern matching)",
              },
              slug: "chapter-6-advanced-type-system/6-5-pattern-matching",
            },
            {
              label: "6.5.1 Constant pattern",
              translations: {
                fr: "6.5.1 Motif constant",
              },
              slug: "chapter-6-advanced-type-system/6-5-1-constant-pattern",
            },
            {
              label: "6.5.2 Type pattern",
              translations: {
                fr: "6.5.2 Motif de type",
              },
              slug: "chapter-6-advanced-type-system/6-5-2-type-pattern",
            },
            {
              label: "6.5.3 Property pattern",
              translations: {
                fr: "6.5.3 Motif de propriété",
              },
              slug: "chapter-6-advanced-type-system/6-5-3-property-pattern",
            },
            {
              label: "6.5.4 Positional pattern",
              translations: {
                fr: "6.5.4 Motif positionnel",
              },
              slug: "chapter-6-advanced-type-system/6-5-4-positional-pattern",
            },
            {
              label: "6.5.5 List patterns C# 11",
              translations: {
                fr: "6.5.5 Motif de liste C# 11",
              },
              slug: "chapter-6-advanced-type-system/6-5-5-list-patterns-c-11",
            },
            {
              label: "6.5.6 Var pattern",
              translations: {
                fr: "6.5.6 Motif var",
              },
              slug: "chapter-6-advanced-type-system/6-5-6-var-pattern",
            },
            {
              label: "6.6 Project Immutable Person Record with Validation",
              translations: {
                fr: "6.6 Projet Enregistrement Personne immuable avec validation",
              },
              slug: "chapter-6-advanced-type-system/6-6-project-immutable-person-record-with-validation",
            },
          ],
        },
        {
          label: "7 - Delegates Events and Lambdas",
          translations: {
            fr: "7 - Délégués, événements et expressions lambda",
          },
          items: [
            {
              label: "7.1 Delegates",
              translations: {
                fr: "7.1 Délégués",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-1-delegates",
            },
            {
              label: "7.1.1 Declaration",
              translations: {
                fr: "7.1.1 Déclaration",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-1-1-declaration",
            },
            {
              label: "7.1.2 Instantiation and invocation",
              translations: {
                fr: "7.1.2 Instanciation et invocation",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-1-2-instantiation-and-invocation",
            },
            {
              label: "7.1.3 Multicast delegates",
              translations: {
                fr: "7.1.3 Délégués multicast",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-1-3-multicast-delegates",
            },
            {
              label: "7.1.4 Generic delegates Action Func Predicate",
              translations: {
                fr: "7.1.4 Délégués génériques Action Func Predicate",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-1-4-generic-delegates-action-func-predicate",
            },
            {
              label: "7.2 Events",
              translations: {
                fr: "7.2 ÉVénements",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-2-events",
            },
            {
              label: "7.2.1 Event keyword",
              translations: {
                fr: "7.2.1 Mot-clé event",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-2-1-event-keyword",
            },
            {
              label: "7.2.2 Subscribing and unsubscribing",
              translations: {
                fr: "7.2.2 Souscription et désabonnement",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-2-2-subscribing-and-unsubscribing",
            },
            {
              label: "7.2.3 Event invocation",
              translations: {
                fr: "7.2.3 Invocation d’événement",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-2-3-event-invocation",
            },
            {
              label: "7.2.4 Standard pattern EventHandler and EventArgs",
              translations: {
                fr: "7.2.4 Patron standard EventHandler et EventArgs",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs",
            },
            {
              label: "7.3 Lambda expressions",
              translations: {
                fr: "7.3 Expressions lambda",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions",
            },
            {
              label: "7.3.1 Syntax",
              translations: {
                fr: "7.3.1 Syntaxe",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-3-1-syntax",
            },
            {
              label: "7.3.2 Statement lambdas",
              translations: {
                fr: "7.3.2 Lambdas avec corps d’instructions",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas",
            },
            {
              label: "7.3.3 Capturing outer variables closures",
              translations: {
                fr: "7.3.3 Capture de variables externes (fermetures)",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-3-3-capturing-outer-variables-closures",
            },
            {
              label: "7.3.4 Expression trees",
              translations: {
                fr: "7.3.4 Arbres d’expressions",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-3-4-expression-trees",
            },
            {
              label: "7.4 Anonymous functions",
              translations: {
                fr: "7.4 Fonctions anonymes",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-4-anonymous-functions",
            },
            {
              label: "7.4.1 Delegate keyword pre lambda",
              translations: {
                fr: "7.4.1 Mot-clé delegate avant les lambdas",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-4-1-delegate-keyword-pre-lambda",
            },
            {
              label: "7.4.2 Comparison with lambdas",
              translations: {
                fr: "7.4.2 Comparaison avec les lambdas",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-4-2-comparison-with-lambdas",
            },
            {
              label: "7.5 Project Button Click Simulator Event",
              translations: {
                fr: "7.5 Projet Simulateur de clic de bouton (événement)",
              },
              slug: "chapter-7-delegates-events-and-lambdas/7-5-project-button-click-simulator-event",
            },
          ],
        },
        {
          label: "8 - LINQ Language Integrated Query",
          translations: {
            fr: "8 - LINQ (Language Integrated Query)",
          },
          items: [
            {
              label: "8.1 Query syntax vs method syntax",
              translations: {
                fr: "8.1 Syntaxe de requête vs syntaxe de méthode",
              },
              slug: "chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax",
            },
            {
              label: "8.1.1 Query syntax",
              translations: {
                fr: "8.1.1 Syntaxe de requête",
              },
              slug: "chapter-8-linq-language-integrated-query/8-1-1-query-syntax",
            },
            {
              label: "8.1.2 Method syntax",
              translations: {
                fr: "8.1.2 Syntaxe de méthode",
              },
              slug: "chapter-8-linq-language-integrated-query/8-1-2-method-syntax",
            },
            {
              label: "8.1.3 Mixing both",
              translations: {
                fr: "8.1.3 Mélange des deux",
              },
              slug: "chapter-8-linq-language-integrated-query/8-1-3-mixing-both",
            },
            {
              label: "8.2 Deferred vs immediate execution",
              translations: {
                fr: "8.2 Exécution différée vs immédiate",
              },
              slug: "chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution",
            },
            {
              label: "8.2.1 Deferred operators",
              translations: {
                fr: "8.2.1 Opérateurs différés",
              },
              slug: "chapter-8-linq-language-integrated-query/8-2-1-deferred-operators",
            },
            {
              label: "8.2.2 Immediate operators",
              translations: {
                fr: "8.2.2 Opérateurs immédiats",
              },
              slug: "chapter-8-linq-language-integrated-query/8-2-2-immediate-operators",
            },
            {
              label: "8.2.3 Streaming vs buffering operators",
              translations: {
                fr: "8.2.3 Opérateurs de flux vs tampon",
              },
              slug: "chapter-8-linq-language-integrated-query/8-2-3-streaming-vs-buffering-operators",
            },
            {
              label: "8.3 LINQ to Objects LINQ to XML LINQ to Entities",
              translations: {
                fr: "8.3 LINQ to Objects, LINQ to XML, LINQ to Entities",
              },
              slug: "chapter-8-linq-language-integrated-query/8-3-linq-to-objects-linq-to-xml-linq-to-entities",
            },
            {
              label: "8.3.1 In memory collections",
              translations: {
                fr: "8.3.1 Collections en mémoire",
              },
              slug: "chapter-8-linq-language-integrated-query/8-3-1-in-memory-collections",
            },
            {
              label: "8.3.2 XML",
              translations: {
                fr: "8.3.2 XML",
              },
              slug: "chapter-8-linq-language-integrated-query/8-3-2-xml",
            },
            {
              label: "8.3.3 EF Core SQL translation",
              translations: {
                fr: "8.3.3 EF Core traduction SQL",
              },
              slug: "chapter-8-linq-language-integrated-query/8-3-3-ef-core-sql-translation",
            },
            {
              label: "8.4 Common operators",
              translations: {
                fr: "8.4 Opérateurs courants",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-common-operators",
            },
            {
              label: "8.4.1 Filtering",
              translations: {
                fr: "8.4.1 Filtrage",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-1-filtering",
            },
            {
              label: "8.4.2 Projection",
              translations: {
                fr: "8.4.2 Projection",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-2-projection",
            },
            {
              label: "8.4.3 Ordering",
              translations: {
                fr: "8.4.3 Tri",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-3-ordering",
            },
            {
              label: "8.4.4 Grouping",
              translations: {
                fr: "8.4.4 Regroupement",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-4-grouping",
            },
            {
              label: "8.4.5 Joining",
              translations: {
                fr: "8.4.5 Jointure",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-5-joining",
            },
            {
              label: "8.4.6 Aggregation",
              translations: {
                fr: "8.4.6 Agrégation",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-6-aggregation",
            },
            {
              label: "8.4.7 Element operators",
              translations: {
                fr: "8.4.7 Opérateurs d’élément",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-7-element-operators",
            },
            {
              label: "8.4.8 Set operators",
              translations: {
                fr: "8.4.8 Opérateurs ensemblistes",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-8-set-operators",
            },
            {
              label: "8.4.9 Quantifiers",
              translations: {
                fr: "8.4.9 Quantificateurs",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-9-quantifiers",
            },
            {
              label: "8.4.10 Partitioning",
              translations: {
                fr: "8.4.10 Partitionnement",
              },
              slug: "chapter-8-linq-language-integrated-query/8-4-10-partitioning",
            },
            {
              label: "8.5 Project Employee Data Analysis",
              translations: {
                fr: "8.5 Projet Analyse de données employés",
              },
              slug: "chapter-8-linq-language-integrated-query/8-5-project-employee-data-analysis",
            },
          ],
        },
        {
          label: "9 - Asynchronous Programming async await",
          translations: {
            fr: "9 - Programmation asynchrone (async/await)",
          },
          items: [
            {
              label: "9.1 Task based Asynchronous Pattern TAP",
              translations: {
                fr: "9.1 Modèle asynchrone basé sur les tâches (TAP)",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap",
            },
            {
              label: "9.1.1 Task no result",
              translations: {
                fr: "9.1.1 Task sans résultat",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-1-1-task-no-result",
            },
            {
              label: "9.1.2 Task T result",
              translations: {
                fr: "9.1.2 Task<T> avec résultat",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result",
            },
            {
              label: "9.1.3 ValueTask and ValueTask T for performance",
              translations: {
                fr: "9.1.3 ValueTask et ValueTask<T> pour la performance",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-1-3-valuetask-and-valuetask-t-for-performance",
            },
            {
              label: "9.2 Async and await",
              translations: {
                fr: "9.2 Async et await",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-2-async-and-await",
            },
            {
              label: "9.2.1 Marking method async",
              translations: {
                fr: "9.2.1 Marquer une méthode async",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-2-1-marking-method-async",
            },
            {
              label: "9.2.2 Await unwraps the result",
              translations: {
                fr: "9.2.2 Await extrait le résultat",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-2-2-await-unwraps-the-result",
            },
            {
              label: "9.2.3 Compiler transformation into state machine",
              translations: {
                fr: "9.2.3 Transformation par le compilateur en machine à états",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-2-3-compiler-transformation-into-state-machine",
            },
            {
              label: "9.3 Return types of async methods",
              translations: {
                fr: "9.3 Types de retour des méthodes async",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods",
            },
            {
              label: "9.3.1 Task for void async",
              translations: {
                fr: "9.3.1 Task pour async void",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-3-1-task-for-void-async",
            },
            {
              label: "9.3.2 Task T for returning value",
              translations: {
                fr: "9.3.2 Task<T> pour retourner une valeur",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-3-2-task-t-for-returning-value",
            },
            {
              label: "9.3.3 Void only for event handlers avoid",
              translations: {
                fr: "9.3.3 Void uniquement pour les gestionnaires d’événements (à éviter)",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-3-3-void-only-for-event-handlers-avoid",
            },
            {
              label: "9.4 Asynchronous streams",
              translations: {
                fr: "9.4 Flux asynchrones",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams",
            },
            {
              label: "9.4.1 IAsyncEnumerable T",
              translations: {
                fr: "9.4.1 IAsyncEnumerable<T>",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-4-1-iasyncenumerable-t",
            },
            {
              label: "9.4.2 Await foreach",
              translations: {
                fr: "9.4.2 Await foreach",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach",
            },
            {
              label: "9.4.3 Await using asynchronous disposable",
              translations: {
                fr: "9.4.3 Await using pour disposer de manière asynchrone",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-4-3-await-using-asynchronous-disposable",
            },
            {
              label: "9.5 Avoiding async void",
              translations: {
                fr: "9.5 ÉViter async void",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void",
            },
            {
              label: "9.5.1 Exceptions cannot be caught",
              translations: {
                fr: "9.5.1 Les exceptions ne peuvent pas être capturées",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-5-1-exceptions-cannot-be-caught",
            },
            {
              label: "9.5.2 Hard to test",
              translations: {
                fr: "9.5.2 Difficile à tester",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-5-2-hard-to-test",
            },
            {
              label: "9.6 ConfigureAwait false",
              translations: {
                fr: "9.6 ConfigureAwait(false)",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-6-configureawait-false",
            },
            {
              label: "9.6.1 Avoid capturing original SynchronizationContext",
              translations: {
                fr: "9.6.1 ÉViter de capturer le SynchronizationContext d’origine",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-6-1-avoid-capturing-original-synchronizationcontext",
            },
            {
              label: "9.6.2 Use in library code",
              translations: {
                fr: "9.6.2 Utiliser dans le code de bibliothèque",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-6-2-use-in-library-code",
            },
            {
              label: "9.7 Cancellation tokens",
              translations: {
                fr: "9.7 Jetons d’annulation",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens",
            },
            {
              label: "9.7.1 CancellationTokenSource",
              translations: {
                fr: "9.7.1 CancellationTokenSource",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-7-1-cancellationtokensource",
            },
            {
              label: "9.7.2 CancellationToken",
              translations: {
                fr: "9.7.2 CancellationToken",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken",
            },
            {
              label: "9.7.3 ThrowIfCancellationRequested",
              translations: {
                fr: "9.7.3 ThrowIfCancellationRequested",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested",
            },
            {
              label: "9.7.4 Cooperative cancellation",
              translations: {
                fr: "9.7.4 Annulation coopérative",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-7-4-cooperative-cancellation",
            },
            {
              label: "9.8 Project Async Weather Fetcher",
              translations: {
                fr: "9.8 Projet Récupérateur de météo asynchrone",
              },
              slug: "chapter-9-asynchronous-programming-async-await/9-8-project-async-weather-fetcher",
            },
          ],
        },
        {
          label: "10 - Memory Management and Performance",
          translations: {
            fr: "10 - Gestion de la mémoire et performance",
          },
          items: [
            {
              label: "10.1 Garbage collection",
              translations: {
                fr: "10.1 Garbage collection (GC)",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-garbage-collection",
            },
            {
              label: "10.1.1 Generations 0, 1, 2",
              translations: {
                fr: "10.1.1 Générations 0, 1, 2",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-1-generations-0-1-2",
            },
            {
              label: "10.1.2 Workstation GC vs Server GC",
              translations: {
                fr: "10.1.2 GC station de travail vs GC serveur",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc",
            },
            {
              label: "10.1.3 Background GC",
              translations: {
                fr: "10.1.3 GC d’arrière-plan",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-3-background-gc",
            },
            {
              label: "10.1.4 Large Object Heap LOH",
              translations: {
                fr: "10.1.4 Tas des grands objets (LOH)",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh",
            },
            {
              label: "10.1.5 Pinned objects",
              translations: {
                fr: "10.1.5 Objets épinglés",
              },
              slug: "chapter-10-memory-management-and-performance/10-1-5-pinned-objects",
            },
            {
              label: "10.2 IDisposable",
              translations: {
                fr: "10.2 IDisposable",
              },
              slug: "chapter-10-memory-management-and-performance/10-2-idisposable",
            },
            {
              label: "10.2.1 Unmanaged resources",
              translations: {
                fr: "10.2.1 Ressources non managées",
              },
              slug: "chapter-10-memory-management-and-performance/10-2-1-unmanaged-resources",
            },
            {
              label: "10.2.2 Dispose pattern",
              translations: {
                fr: "10.2.2 Patron Dispose",
              },
              slug: "chapter-10-memory-management-and-performance/10-2-2-dispose-pattern",
            },
            {
              label: "10.2.3 Using statement",
              translations: {
                fr: "10.2.3 Instruction using",
              },
              slug: "chapter-10-memory-management-and-performance/10-2-3-using-statement",
            },
            {
              label: "10.2.4 Await using and IAsyncDisposable",
              translations: {
                fr: "10.2.4 Await using et IAsyncDisposable",
              },
              slug: "chapter-10-memory-management-and-performance/10-2-4-await-using-and-iasyncdisposable",
            },
            {
              label: "10.3 Span T and Memory T",
              translations: {
                fr: "10.3 Span<T> et Memory<T>",
              },
              slug: "chapter-10-memory-management-and-performance/10-3-span-t-and-memory-t",
            },
            {
              label: "10.3.1 Stack only Span T",
              translations: {
                fr: "10.3.1 Span<T> réservé à la pile",
              },
              slug: "chapter-10-memory-management-and-performance/10-3-1-stack-only-span-t",
            },
            {
              label: "10.3.2 Memory T for heap or async",
              translations: {
                fr: "10.3.2 Memory<T> pour le tas ou l’asynchrone",
              },
              slug: "chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async",
            },
            {
              label: "10.3.3 ArrayPool T for renting buffers",
              translations: {
                fr: "10.3.3 ArrayPool<T> pour louer des tampons",
              },
              slug: "chapter-10-memory-management-and-performance/10-3-3-arraypool-t-for-renting-buffers",
            },
            {
              label: "10.4 Benchmarking",
              translations: {
                fr: "10.4 Benchmarking",
              },
              slug: "chapter-10-memory-management-and-performance/10-4-benchmarking",
            },
            {
              label: "10.4.1 BenchmarkDotNet",
              translations: {
                fr: "10.4.1 BenchmarkDotNet",
              },
              slug: "chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet",
            },
            {
              label: "10.4.2 Benchmark and MemoryDiagnoser attributes",
              translations: {
                fr: "10.4.2 Attributs Benchmark et MemoryDiagnoser",
              },
              slug: "chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes",
            },
            {
              label: "10.4.3 Running benchmarks avoiding common pitfalls",
              translations: {
                fr: "10.4.3 Exécuter des benchmarks et éviter les pièges courants",
              },
              slug: "chapter-10-memory-management-and-performance/10-4-3-running-benchmarks-avoiding-common-pitfalls",
            },
            {
              label: "10.5 Project Benchmark String Concatenation vs StringBuilder",
              translations: {
                fr: "10.5 Projet Comparer concaténation de chaînes vs StringBuilder",
              },
              slug: "chapter-10-memory-management-and-performance/10-5-project-benchmark-string-concatenation-vs-stringbuilder",
            },
          ],
        },
        {
          label: "11 - Generics and Constraints",
          translations: {
            fr: "11 - Génériques et contraintes",
          },
          items: [
            {
              label: "11.1 Generic classes",
              translations: {
                fr: "11.1 Classes génériques",
              },
              slug: "chapter-11-generics-and-constraints/11-1-generic-classes",
            },
            {
              label: "11.1.1 Syntax",
              translations: {
                fr: "11.1.1 Syntaxe",
              },
              slug: "chapter-11-generics-and-constraints/11-1-1-syntax",
            },
            {
              label: "11.1.2 Type parameters naming T, TKey, TValue",
              translations: {
                fr: "11.1.2 Nom des paramètres de type T, TKey, TValue",
              },
              slug: "chapter-11-generics-and-constraints/11-1-2-type-parameters-naming-t-tkey-tvalue",
            },
            {
              label: "11.2 Generic methods",
              translations: {
                fr: "11.2 Méthodes génériques",
              },
              slug: "chapter-11-generics-and-constraints/11-2-generic-methods",
            },
            {
              label: "11.2.1 T MyMethod T param",
              translations: {
                fr: "11.2.1 T MaMéthode<T>(T param)",
              },
              slug: "chapter-11-generics-and-constraints/11-2-1-t-mymethod-t-param",
            },
            {
              label: "11.2.2 Type inference at call site",
              translations: {
                fr: "11.2.2 Inférence de type à l’appel",
              },
              slug: "chapter-11-generics-and-constraints/11-2-2-type-inference-at-call-site",
            },
            {
              label: "11.3 Generic interfaces",
              translations: {
                fr: "11.3 Interfaces génériques",
              },
              slug: "chapter-11-generics-and-constraints/11-3-generic-interfaces",
            },
            {
              label: "11.3.1 Interface IRepository T",
              translations: {
                fr: "11.3.1 Interface IRepository<T>",
              },
              slug: "chapter-11-generics-and-constraints/11-3-1-interface-irepository-t",
            },
            {
              label: "11.3.2 Covariance out T and contravariance in T",
              translations: {
                fr: "11.3.2 Covariance (out T) et contravariance (in T)",
              },
              slug: "chapter-11-generics-and-constraints/11-3-2-covariance-out-t-and-contravariance-in-t",
            },
            {
              label: "11.4 Constraints",
              translations: {
                fr: "11.4 Contraintes",
              },
              slug: "chapter-11-generics-and-constraints/11-4-constraints",
            },
            {
              label: "11.4.1 Where T struct value type",
              translations: {
                fr: "11.4.1 Where T  : struct (type valeur)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type",
            },
            {
              label: "11.4.2 Where T class reference type",
              translations: {
                fr: "11.4.2 Where T  : class (type référence)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type",
            },
            {
              label: "11.4.3 Where T new parameterless constructor",
              translations: {
                fr: "11.4.3 Where T  : new() (constructeur sans paramètre)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-3-where-t-new-parameterless-constructor",
            },
            {
              label: "11.4.4 Where T BaseClass base class constraint",
              translations: {
                fr: "11.4.4 Where T  : BaseClass (contrainte de classe de base)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-4-where-t-baseclass-base-class-constraint",
            },
            {
              label: "11.4.5 Where T IMyInterface interface constraint",
              translations: {
                fr: "11.4.5 Where T  : IMyInterface (contrainte d’interface)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint",
            },
            {
              label: "11.4.6 Where T unmanaged no references",
              translations: {
                fr: "11.4.6 Where T  : unmanaged (sans références)",
              },
              slug: "chapter-11-generics-and-constraints/11-4-6-where-t-unmanaged-no-references",
            },
            {
              label: "11.4.7 Multiple constraints",
              translations: {
                fr: "11.4.7 Contraintes multiples",
              },
              slug: "chapter-11-generics-and-constraints/11-4-7-multiple-constraints",
            },
            {
              label: "11.5 Project Generic Repository Simulator",
              translations: {
                fr: "11.5 Projet Simulateur de dépôt générique",
              },
              slug: "chapter-11-generics-and-constraints/11-5-project-generic-repository-simulator",
            },
          ],
        },
        {
          label: "12 - Exceptions and Error Handling",
          translations: {
            fr: "12 - Exceptions et gestion des erreurs",
          },
          items: [
            {
              label: "12.1 Try catch finally",
              translations: {
                fr: "12.1 Try/catch/finally",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-1-try-catch-finally",
            },
            {
              label: "12.1.1 Catching specific exception types",
              translations: {
                fr: "12.1.1 Capturer des types d’exception spécifiques",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types",
            },
            {
              label: "12.1.2 Multiple catch blocks",
              translations: {
                fr: "12.1.2 Blocs catch multiples",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-1-2-multiple-catch-blocks",
            },
            {
              label: "12.1.3 Finally for cleanup",
              translations: {
                fr: "12.1.3 Finally pour le nettoyage",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-1-3-finally-for-cleanup",
            },
            {
              label: "12.2 Exception filters",
              translations: {
                fr: "12.2 Filtres d’exception",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-2-exception-filters",
            },
            {
              label: "12.2.1 Catch with when condition",
              translations: {
                fr: "12.2.1 Catch avec condition when",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-2-1-catch-with-when-condition",
            },
            {
              label: "12.3 Custom exceptions",
              translations: {
                fr: "12.3 Exceptions personnalisées",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-3-custom-exceptions",
            },
            {
              label: "12.3.1 Derive from Exception or ApplicationException",
              translations: {
                fr: "12.3.1 Dériver de Exception ou ApplicationException",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-3-1-derive-from-exception-or-applicationexception",
            },
            {
              label: "12.3.2 Serialisation constructor",
              translations: {
                fr: "12.3.2 Constructeur de sérialisation",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-3-2-serialisation-constructor",
            },
            {
              label: "12.3.3 Adding custom properties",
              translations: {
                fr: "12.3.3 Ajouter des propriétés personnalisées",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-3-3-adding-custom-properties",
            },
            {
              label: "12.4 ExceptionDispatchInfo",
              translations: {
                fr: "12.4 ExceptionDispatchInfo",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-4-exceptiondispatchinfo",
            },
            {
              label: "12.4.1 Capturing and rethrowing with original stack trace",
              translations: {
                fr: "12.4.1 Capturer et relancer avec la pile d’appels d’origine",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-4-1-capturing-and-rethrowing-with-original-stack-trace",
            },
            {
              label: "12.5 Global exception handling",
              translations: {
                fr: "12.5 Gestion globale des exceptions",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-5-global-exception-handling",
            },
            {
              label: "12.5.1 ASP.NET Core middleware",
              translations: {
                fr: "12.5.1 Middleware ASP.NET Core",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-5-1-aspnet-core-middleware",
            },
            {
              label: "12.5.2 AppDomain UnhandledException",
              translations: {
                fr: "12.5.2 AppDomain.UnhandledException",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-5-2-appdomain-unhandledexception",
            },
            {
              label: "12.5.3 TaskScheduler UnobservedTaskException",
              translations: {
                fr: "12.5.3 TaskScheduler.UnobservedTaskException",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-5-3-taskscheduler-unobservedtaskexception",
            },
            {
              label: "12.6 Project Safe File Reader with Retry",
              translations: {
                fr: "12.6 Projet Lecteur de fichier sécurisé avec réessai",
              },
              slug: "chapter-12-exceptions-and-error-handling/12-6-project-safe-file-reader-with-retry",
            },
          ],
        },
        {
          label: "13 - Reflection Attributes and Source Generators",
          translations: {
            fr: "13 - Réflexion, attributs et générateurs sources",
          },
          items: [
            {
              label: "13.1 Reflection",
              translations: {
                fr: "13.1 Réflexion",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-1-reflection",
            },
            {
              label: "13.1.1 Type class",
              translations: {
                fr: "13.1.1 Classe Type",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-1-1-type-class",
            },
            {
              label: "13.1.2 Assembly loading and scanning",
              translations: {
                fr: "13.1.2 Chargement et analyse d’assembly",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-1-2-assembly-loading-and-scanning",
            },
            {
              label: "13.1.3 MemberInfo MethodInfo PropertyInfo",
              translations: {
                fr: "13.1.3 MemberInfo, MethodInfo, PropertyInfo",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo",
            },
            {
              label: "13.1.4 Invoking methods dynamically",
              translations: {
                fr: "13.1.4 Invoquer des méthodes dynamiquement",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-1-4-invoking-methods-dynamically",
            },
            {
              label: "13.2 Custom attributes",
              translations: {
                fr: "13.2 Attributs personnalisés",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes",
            },
            {
              label: "13.2.1 Attribute class AttributeUsage",
              translations: {
                fr: "13.2.1 Classe d’attribut avec AttributeUsage",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage",
            },
            {
              label: "13.2.2 Applying attributes to targets",
              translations: {
                fr: "13.2.2 Appliquer des attributs aux cibles",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-2-2-applying-attributes-to-targets",
            },
            {
              label: "13.2.3 Reading attributes with reflection",
              translations: {
                fr: "13.2.3 Lire des attributs avec la réflexion",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection",
            },
            {
              label: "13.3 Source generators",
              translations: {
                fr: "13.3 Générateurs sources",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-3-source-generators",
            },
            {
              label: "13.3.1 What are source generators",
              translations: {
                fr: "13.3.1 Que sont les générateurs sources ?",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-3-1-what-are-source-generators",
            },
            {
              label: "13.3.2 Incremental generators",
              translations: {
                fr: "13.3.2 Générateurs incrémentaux",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators",
            },
            {
              label: "13.3.3 Use cases compile time code performance",
              translations: {
                fr: "13.3.3 Cas d’usage (code à la compilation, performance)",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance",
            },
            {
              label: "13.3.4 Difference from reflection no runtime overhead",
              translations: {
                fr: "13.3.4 Différence avec la réflexion (aucun coût à l’exécution)",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-3-4-difference-from-reflection-no-runtime-overhead",
            },
            {
              label: "13.4 Project Attribute Based Validation Engine",
              translations: {
                fr: "13.4 Projet Moteur de validation basé sur attributs",
              },
              slug: "chapter-13-reflection-attributes-and-source-generators/13-4-project-attribute-based-validation-engine",
            },
          ],
        },
        {
          label: "14 - Modern C# Features for Backend",
          translations: {
            fr: "14 - Fonctionnalités modernes de C# pour le backend",
          },
          items: [
            {
              label: "14.1 Init only setters",
              translations: {
                fr: "14.1 Accesseurs init uniquement",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-1-init-only-setters",
            },
            {
              label: "14.1.1 Immutable objects after construction",
              translations: {
                fr: "14.1.1 Objets immuables après construction",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-1-1-immutable-objects-after-construction",
            },
            {
              label: "14.1.2 Object initialiser with init",
              translations: {
                fr: "14.1.2 Initialiseur d’objet avec init",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-1-2-object-initialiser-with-init",
            },
            {
              label: "14.2 Required members C# 11",
              translations: {
                fr: "14.2 Membres required C# 11",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-2-required-members-c-11",
            },
            {
              label: "14.2.1 Required keyword",
              translations: {
                fr: "14.2.1 Mot-clé required",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-2-1-required-keyword",
            },
            {
              label: "14.2.2 Constructor ensures required properties set",
              translations: {
                fr: "14.2.2 Le constructeur garantit que les propriétés required sont définies",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-2-2-constructor-ensures-required-properties-set",
            },
            {
              label: "14.3 Record types emphasis",
              translations: {
                fr: "14.3 Types record (rappel)",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-3-record-types-emphasis",
            },
            {
              label: "14.4 Interpolated string handlers",
              translations: {
                fr: "14.4 Gestionnaires de chaînes interpolées",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-4-interpolated-string-handlers",
            },
            {
              label: "14.4.1 Performance optimisation for logging",
              translations: {
                fr: "14.4.1 Optimisation des performances pour la journalisation",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-4-1-performance-optimisation-for-logging",
            },
            {
              label: "14.4.2 InterpolatedStringHandler struct",
              translations: {
                fr: "14.4.2 Structure InterpolatedStringHandler",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-4-2-interpolatedstringhandler-struct",
            },
            {
              label: "14.5 Caller info attributes",
              translations: {
                fr: "14.5 Attributs d’informations d’appelant",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-5-caller-info-attributes",
            },
            {
              label: "14.5.1 CallerMemberName",
              translations: {
                fr: "14.5.1 CallerMemberName",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-5-1-callermembername",
            },
            {
              label: "14.5.2 CallerArgumentExpression",
              translations: {
                fr: "14.5.2 CallerArgumentExpression",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-5-2-callerargumentexpression",
            },
            {
              label: "14.5.3 CallerFilePath and CallerLineNumber",
              translations: {
                fr: "14.5.3 CallerFilePath et CallerLineNumber",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-5-3-callerfilepath-and-callerlinenumber",
            },
            {
              label: "14.6 Project Logging Helper with Caller Info",
              translations: {
                fr: "14.6 Projet Aide à la journalisation avec informations d’appelant",
              },
              slug: "chapter-14-modern-c-features-for-backend/14-6-project-logging-helper-with-caller-info",
            },
          ],
        },
        {
          label: "15 - Testing and Mocking",
          translations: {
            fr: "15 - Tests et simulation (mocking)",
          },
          items: [
            {
              label: "15.1 Unit testing frameworks",
              translations: {
                fr: "15.1 Frameworks de tests unitaires",
              },
              slug: "chapter-15-testing-and-mocking/15-1-unit-testing-frameworks",
            },
            {
              label: "15.1.1 XUnit Fact Theory InlineData",
              translations: {
                fr: "15.1.1 XUnit (Fact, Theory, InlineData)",
              },
              slug: "chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata",
            },
            {
              label: "15.1.2 NUnit Test TestCase",
              translations: {
                fr: "15.1.2 NUnit (Test, TestCase)",
              },
              slug: "chapter-15-testing-and-mocking/15-1-2-nunit-test-testcase",
            },
            {
              label: "15.1.3 MSTest",
              translations: {
                fr: "15.1.3 MSTest",
              },
              slug: "chapter-15-testing-and-mocking/15-1-3-mstest",
            },
            {
              label: "15.2 Mocking libraries",
              translations: {
                fr: "15.2 Bibliothèques de simulation",
              },
              slug: "chapter-15-testing-and-mocking/15-2-mocking-libraries",
            },
            {
              label: "15.2.1 Moq Mock Setup Verify",
              translations: {
                fr: "15.2.1 Moq (Mock, Setup, Verify)",
              },
              slug: "chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify",
            },
            {
              label: "15.2.2 NSubstitute Substitute.For",
              translations: {
                fr: "15.2.2 NSubstitute (Substitute.For<T>())",
              },
              slug: "chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitutefor",
            },
            {
              label: "15.2.3 FakeItEasy",
              translations: {
                fr: "15.2.3 FakeItEasy",
              },
              slug: "chapter-15-testing-and-mocking/15-2-3-fakeiteasy",
            },
            {
              label: "15.3 Test doubles",
              translations: {
                fr: "15.3 Doubles de test",
              },
              slug: "chapter-15-testing-and-mocking/15-3-test-doubles",
            },
            {
              label: "15.3.1 Stub",
              translations: {
                fr: "15.3.1 Stub",
              },
              slug: "chapter-15-testing-and-mocking/15-3-1-stub",
            },
            {
              label: "15.3.2 Mock",
              translations: {
                fr: "15.3.2 Mock",
              },
              slug: "chapter-15-testing-and-mocking/15-3-2-mock",
            },
            {
              label: "15.3.3 Fake",
              translations: {
                fr: "15.3.3 Fake",
              },
              slug: "chapter-15-testing-and-mocking/15-3-3-fake",
            },
            {
              label: "15.4 Integration testing",
              translations: {
                fr: "15.4 Tests d’intégration",
              },
              slug: "chapter-15-testing-and-mocking/15-4-integration-testing",
            },
            {
              label: "15.4.1 WebApplicationFactory TStartup",
              translations: {
                fr: "15.4.1 WebApplicationFactory<TStartup>",
              },
              slug: "chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup",
            },
            {
              label: "15.4.2 In memory database with EF Core",
              translations: {
                fr: "15.4.2 Base de données en mémoire avec EF Core",
              },
              slug: "chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core",
            },
            {
              label: "15.4.3 HttpClient for testing endpoints",
              translations: {
                fr: "15.4.3 HttpClient pour tester les endpoints",
              },
              slug: "chapter-15-testing-and-mocking/15-4-3-httpclient-for-testing-endpoints",
            },
            {
              label: "15.5 Project Testing a Calculator Service with Moq",
              translations: {
                fr: "15.5 Projet Tester un service de calculatrice avec Moq",
              },
              slug: "chapter-15-testing-and-mocking/15-5-project-testing-a-calculator-service-with-moq",
            },
          ],
        },
        {
          label: "16 - Logging Diagnostics and Configuration",
          translations: {
            fr: "16 - Journalisation, diagnostic et configuration",
          },
          items: [
            {
              label: "16.1 Logging",
              translations: {
                fr: "16.1 Journalisation",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-1-logging",
            },
            {
              label: "16.1.1 ILogger T interface",
              translations: {
                fr: "16.1.1 Interface ILogger<T>",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-1-1-ilogger-t-interface",
            },
            {
              label: "16.1.2 Log levels Trace Debug Information Warning Error Critical",
              translations: {
                fr: "16.1.2 Niveaux de log  : Trace, Debug, Information, Warning, Error, Critical",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-1-2-log-levels-trace-debug-information-warning-error-critical",
            },
            {
              label: "16.1.3 Structured logging with Serilog NLog",
              translations: {
                fr: "16.1.3 Journalisation structurée avec Serilog, NLog",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-1-3-structured-logging-with-serilog-nlog",
            },
            {
              label: "16.1.4 Enrichment and sinks console file Elasticsearch",
              translations: {
                fr: "16.1.4 Enrichissement et destinations (console, fichier, Elasticsearch)",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-1-4-enrichment-and-sinks-console-file-elasticsearch",
            },
            {
              label: "16.2 Configuration",
              translations: {
                fr: "16.2 Configuration",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-configuration",
            },
            {
              label: "16.2.1 IConfiguration and configuration providers",
              translations: {
                fr: "16.2.1 IConfiguration et fournisseurs de configuration",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-1-iconfiguration-and-configuration-providers",
            },
            {
              label: "16.2.2 JSON files appsettings.JSON",
              translations: {
                fr: "16.2.2 Fichiers JSON (appsettings.JSON)",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-2-json-files-appsettingsjson",
            },
            {
              label: "16.2.3 Environment variables",
              translations: {
                fr: "16.2.3 Variables d’environnement",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-3-environment-variables",
            },
            {
              label: "16.2.4 User secrets for development only",
              translations: {
                fr: "16.2.4 Secrets utilisateur (développement uniquement)",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-4-user-secrets-for-development-only",
            },
            {
              label: "16.2.5 Command line arguments",
              translations: {
                fr: "16.2.5 Arguments de ligne de commande",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-2-5-command-line-arguments",
            },
            {
              label: "16.3 Options pattern",
              translations: {
                fr: "16.3 Patron Options",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-3-options-pattern",
            },
            {
              label: "16.3.1 IOptions T singleton no reload",
              translations: {
                fr: "16.3.1 IOptions<T> singleton, pas de rechargement",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-3-1-ioptions-t-singleton-no-reload",
            },
            {
              label: "16.3.2 IOptionsSnapshot T scoped reload on change",
              translations: {
                fr: "16.3.2 IOptionsSnapshot<T> par portée, rechargement au changement",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-3-2-ioptionssnapshot-t-scoped-reload-on-change",
            },
            {
              label: "16.3.3 IOptionsMonitor T singleton with change notifications",
              translations: {
                fr: "16.3.3 IOptionsMonitor<T> singleton avec notifications de changement",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-3-3-ioptionsmonitor-t-singleton-with-change-notifications",
            },
            {
              label: "16.3.4 Configure T and PostConfigure",
              translations: {
                fr: "16.3.4 Configure<T> et PostConfigure",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-3-4-configure-t-and-postconfigure",
            },
            {
              label: "16.4 Project Configurable App with Serilog",
              translations: {
                fr: "16.4 Projet Application configurable avec Serilog",
              },
              slug: "chapter-16-logging-diagnostics-and-configuration/16-4-project-configurable-app-with-serilog",
            },
          ],
        },
        {
          label: "17 - Dependency Injection Deep Dive",
          translations: {
            fr: "17 - Injection de dépendances en profondeur",
          },
          items: [
            {
              label: "17.1 Service lifetimes",
              translations: {
                fr: "17.1 Durées de vie des services",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-1-service-lifetimes",
            },
            {
              label: "17.1.1 Singleton one instance for entire app",
              translations: {
                fr: "17.1.1 Singleton (une instance pour toute l’application)",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-1-1-singleton-one-instance-for-entire-app",
            },
            {
              label: "17.1.2 Scoped one per HTTP request or scope",
              translations: {
                fr: "17.1.2 Scoped (une par requête HTTP ou portée)",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-1-2-scoped-one-per-http-request-or-scope",
            },
            {
              label: "17.1.3 Transient new instance every time",
              translations: {
                fr: "17.1.3 Transient (nouvelle instance à chaque fois)",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-1-3-transient-new-instance-every-time",
            },
            {
              label: "17.2 Registration methods",
              translations: {
                fr: "17.2 Méthodes d’enregistrement",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-2-registration-methods",
            },
            {
              label: "17.2.1 AddSingleton AddScoped AddTransient",
              translations: {
                fr: "17.2.1 AddSingleton, AddScoped, AddTransient",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-2-1-addsingleton-addscoped-addtransient",
            },
            {
              label: "17.2.2 Factory delegates",
              translations: {
                fr: "17.2.2 Délégués d’usine",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-2-2-factory-delegates",
            },
            {
              label: "17.2.3 Open generic registrations",
              translations: {
                fr: "17.2.3 Enregistrements génériques ouverts",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-2-3-open-generic-registrations",
            },
            {
              label: "17.3 Service resolution",
              translations: {
                fr: "17.3 Résolution de services",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-3-service-resolution",
            },
            {
              label: "17.3.1 Constructor injection preferred",
              translations: {
                fr: "17.3.1 Injection par constructeur (préférée)",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-3-1-constructor-injection-preferred",
            },
            {
              label: "17.3.2 IServiceProvider directly",
              translations: {
                fr: "17.3.2 IServiceProvider directement",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-3-2-iserviceprovider-directly",
            },
            {
              label: "17.3.3 IServiceScopeFactory for creating scopes",
              translations: {
                fr: "17.3.3 IServiceScopeFactory pour créer des portées",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-3-3-iservicescopefactory-for-creating-scopes",
            },
            {
              label: "17.4 Decorator pattern with DI",
              translations: {
                fr: "17.4 Patron Décorateur avec DI",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-4-decorator-pattern-with-di",
            },
            {
              label: "17.4.1 Using AddScoped to wrap a service",
              translations: {
                fr: "17.4.1 Utiliser AddScoped pour envelopper un service",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-4-1-using-addscoped-to-wrap-a-service",
            },
            {
              label: "17.4.2 Scrutor library for decorators",
              translations: {
                fr: "17.4.2 Bibliothèque Scrutor pour les décorateurs",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-4-2-scrutor-library-for-decorators",
            },
            {
              label: "17.5 Project DI Lifetime Demonstrator",
              translations: {
                fr: "17.5 Projet Démonstrateur de durées de vie DI",
              },
              slug: "chapter-17-dependency-injection-deep-dive/17-5-project-di-lifetime-demonstrator",
            },
          ],
        },
        {
          label: "18 - Interop and Low Level APIs",
          translations: {
            fr: "18 - Interopérabilité et API bas niveau",
          },
          items: [
            {
              label: "18.1 PInvoke",
              translations: {
                fr: "18.1 P/Invoke",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-1-pinvoke",
            },
            {
              label: "18.1.1 DllImport attribute legacy",
              translations: {
                fr: "18.1.1 Attribut DllImport (hérité)",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-1-1-dllimport-attribute-legacy",
            },
            {
              label: "18.1.2 LibraryImport source generator .Net 7 and later",
              translations: {
                fr: "18.1.2 LibraryImport (générateur source, .NET 7 et ultérieur)",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-1-2-libraryimport-source-generator-net-7-and-later",
            },
            {
              label: "18.1.3 Marshalling strings structs pointers",
              translations: {
                fr: "18.1.3 Marshalling des chaînes, structures, pointeurs",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-1-3-marshalling-strings-structs-pointers",
            },
            {
              label: "18.2 Unsafe code",
              translations: {
                fr: "18.2 Code non vérifié (unsafe)",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-2-unsafe-code",
            },
            {
              label: "18.2.1 Unsafe context",
              translations: {
                fr: "18.2.1 Contexte unsafe",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-2-1-unsafe-context",
            },
            {
              label: "18.2.2 Pointers",
              translations: {
                fr: "18.2.2 Pointeurs",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-2-2-pointers",
            },
            {
              label: "18.2.3 Fixed statement to pin managed objects",
              translations: {
                fr: "18.2.3 Instruction fixed pour épingler des objets managés",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-2-3-fixed-statement-to-pin-managed-objects",
            },
            {
              label: "18.2.4 Stackalloc allocate on stack",
              translations: {
                fr: "18.2.4 Stackalloc pour allouer sur la pile",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-2-4-stackalloc-allocate-on-stack",
            },
            {
              label: "18.3 Memory mapped files",
              translations: {
                fr: "18.3 Fichiers mappés en mémoire",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-3-memory-mapped-files",
            },
            {
              label: "18.3.1 MemoryMappedFile.CreateFromFile",
              translations: {
                fr: "18.3.1 MemoryMappedFile.CreateFromFile",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-3-1-memorymappedfilecreatefromfile",
            },
            {
              label: "18.3.2 MemoryMappedViewAccessor",
              translations: {
                fr: "18.3.2 MemoryMappedViewAccessor",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-3-2-memorymappedviewaccessor",
            },
            {
              label: "18.4 Marshal class",
              translations: {
                fr: "18.4 Classe Marshal",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-4-marshal-class",
            },
            {
              label: "18.4.1 Marshal.AllocHGlobal unmanaged memory",
              translations: {
                fr: "18.4.1 Marshal.AllocHGlobal (mémoire non managée)",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-4-1-marshalallochglobal-unmanaged-memory",
            },
            {
              label: "18.4.2 Marshal.StructureToPtr",
              translations: {
                fr: "18.4.2 Marshal.StructureToPtr",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-4-2-marshalstructuretoptr",
            },
            {
              label: "18.4.3 Marshal.PtrToStructure",
              translations: {
                fr: "18.4.3 Marshal.PtrToStructure",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-4-3-marshalptrtostructure",
            },
            {
              label: "18.5 Project Call Windows MessageBox via PInvoke",
              translations: {
                fr: "18.5 Projet Appeler la MessageBox Windows via P/Invoke",
              },
              slug: "chapter-18-interop-and-low-level-apis/18-5-project-call-windows-messagebox-via-pinvoke",
            },
          ],
        },
        {
          label: "19 - Backend Specific Patterns",
          translations: {
            fr: "19 - Patrons spécifiques au backend",
          },
          items: [
            {
              label: "19.1 Middleware pipeline",
              translations: {
                fr: "19.1 Pipeline de middleware",
              },
              slug: "chapter-19-backend-specific-patterns/19-1-middleware-pipeline",
            },
            {
              label: "19.1.1 Use short circuiting",
              translations: {
                fr: "19.1.1 Use (court-circuit)",
              },
              slug: "chapter-19-backend-specific-patterns/19-1-1-use-short-circuiting",
            },
            {
              label: "19.1.2 Run terminal middleware",
              translations: {
                fr: "19.1.2 Run (terminal middleware)",
              },
              slug: "chapter-19-backend-specific-patterns/19-1-2-run-terminal-middleware",
            },
            {
              label: "19.1.3 Map branching",
              translations: {
                fr: "19.1.3 Map (branchement)",
              },
              slug: "chapter-19-backend-specific-patterns/19-1-3-map-branching",
            },
            {
              label: "19.1.4 Order of middleware",
              translations: {
                fr: "19.1.4 Ordre des middlewares",
              },
              slug: "chapter-19-backend-specific-patterns/19-1-4-order-of-middleware",
            },
            {
              label: "19.2 Request delegates",
              translations: {
                fr: "19.2 Délégués de requête",
              },
              slug: "chapter-19-backend-specific-patterns/19-2-request-delegates",
            },
            {
              label: "19.2.1 RequestDelegate signature",
              translations: {
                fr: "19.2.1 Signature RequestDelegate",
              },
              slug: "chapter-19-backend-specific-patterns/19-2-1-requestdelegate-signature",
            },
            {
              label: "19.2.2 Inline middleware with Use",
              translations: {
                fr: "19.2.2 Middleware inline avec Use",
              },
              slug: "chapter-19-backend-specific-patterns/19-2-2-inline-middleware-with-use",
            },
            {
              label: "19.3 Custom middleware",
              translations: {
                fr: "19.3 Middleware personnalisé",
              },
              slug: "chapter-19-backend-specific-patterns/19-3-custom-middleware",
            },
            {
              label: "19.3.1 Class with InvokeAsync method",
              translations: {
                fr: "19.3.1 Classe avec méthode InvokeAsync",
              },
              slug: "chapter-19-backend-specific-patterns/19-3-1-class-with-invokeasync-method",
            },
            {
              label: "19.3.2 Injecting services scoped singleton",
              translations: {
                fr: "19.3.2 Injection de services (scoped, singleton)",
              },
              slug: "chapter-19-backend-specific-patterns/19-3-2-injecting-services-scoped-singleton",
            },
            {
              label: "19.3.3 Calling next context",
              translations: {
                fr: "19.3.3 Appeler _next(context)",
              },
              slug: "chapter-19-backend-specific-patterns/19-3-3-calling-next-context",
            },
            {
              label: "19.4 Project Custom Request Logging Middleware",
              translations: {
                fr: "19.4 Projet Middleware de journalisation des requêtes personnalisé",
              },
              slug: "chapter-19-backend-specific-patterns/19-4-project-custom-request-logging-middleware",
            },
          ],
        },
        {
          label: "20 - Code Quality and Tooling",
          translations: {
            fr: "20 - Qualité de code et outils",
          },
          items: [
            {
              label: "20.1 Roslyn analyzers",
              translations: {
                fr: "20.1 Analyseurs Roslyn",
              },
              slug: "chapter-20-code-quality-and-tooling/20-1-roslyn-analyzers",
            },
            {
              label: "20.1.1 FxCop legacy and Microsoft.CodeAnalysis.NetAnalyzers",
              translations: {
                fr: "20.1.1 FxCop (hérité) et Microsoft.CodeAnalysis.NetAnalyzers",
              },
              slug: "chapter-20-code-quality-and-tooling/20-1-1-fxcop-legacy-and-microsoftcodeanalysisnetanalyzers",
            },
            {
              label: "20.1.2 StyleCop naming layout",
              translations: {
                fr: "20.1.2 StyleCop (nommage, mise en page)",
              },
              slug: "chapter-20-code-quality-and-tooling/20-1-2-stylecop-naming-layout",
            },
            {
              label: "20.1.3 SonarAnalyzer security bugs",
              translations: {
                fr: "20.1.3 SonarAnalyzer (sécurité, bogues)",
              },
              slug: "chapter-20-code-quality-and-tooling/20-1-3-sonaranalyzer-security-bugs",
            },
            {
              label: "20.2 Formatting",
              translations: {
                fr: "20.2 Formatage",
              },
              slug: "chapter-20-code-quality-and-tooling/20-2-formatting",
            },
            {
              label: "20.2.1 Editorconfig file",
              translations: {
                fr: "20.2.1 Fichier editorconfig",
              },
              slug: "chapter-20-code-quality-and-tooling/20-2-1-editorconfig-file",
            },
            {
              label: "20.2.2 Dotnet format command",
              translations: {
                fr: "20.2.2 Commande dotnet format",
              },
              slug: "chapter-20-code-quality-and-tooling/20-2-2-dotnet-format-command",
            },
            {
              label: "20.2.3 IDE integration VS Rider VS Code",
              translations: {
                fr: "20.2.3 Intégration IDE (VS, Rider, VS Code)",
              },
              slug: "chapter-20-code-quality-and-tooling/20-2-3-ide-integration-vs-rider-vs-code",
            },
            {
              label: "20.3 Pre commit hooks",
              translations: {
                fr: "20.3 Crochets de pré-commit",
              },
              slug: "chapter-20-code-quality-and-tooling/20-3-pre-commit-hooks",
            },
            {
              label: "20.3.1 Husky.NET or simple bash scripts",
              translations: {
                fr: "20.3.1 Husky.NET ou scripts bash simples",
              },
              slug: "chapter-20-code-quality-and-tooling/20-3-1-huskynet-or-simple-bash-scripts",
            },
            {
              label: "20.3.2 Running dotnet format and dotnet test before commit",
              translations: {
                fr: "20.3.2 Exécuter dotnet format et dotnet test avant le commit",
              },
              slug: "chapter-20-code-quality-and-tooling/20-3-2-running-dotnet-format-and-dotnet-test-before-commit",
            },
            {
              label: "20.4 Project Enforce Coding Standards with editorconfig",
              translations: {
                fr: "20.4 Projet Appliquer des normes de codage avec editorconfig",
              },
              slug: "chapter-20-code-quality-and-tooling/20-4-project-enforce-coding-standards-with-editorconfig",
            },
          ],
        },
        {
          label: "21 - CLR Internals and Diagnostics",
          translations: {
            fr: "21 - Internals du CLR et diagnostics",
          },
          items: [
            {
              label: "21.1 JIT compilation",
              translations: {
                fr: "21.1 Compilation JIT",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-1-jit-compilation",
            },
            {
              label: "21.1.1 Tiered compilation",
              translations: {
                fr: "21.1.1 Compilation à plusieurs niveaux (Tiered)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-1-1-tiered-compilation",
            },
            {
              label: "21.1.2 ReadyToRun R2R ahead of time",
              translations: {
                fr: "21.1.2 ReadyToRun (R2R) précompilation",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-1-2-readytorun-r2r-ahead-of-time",
            },
            {
              label: "21.1.3 Cross gen single file Native AOT",
              translations: {
                fr: "21.1.3 Cross-gen (fichier unique, Native AOT)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-1-3-cross-gen-single-file-native-aot",
            },
            {
              label: "21.2 Diagnostic tools",
              translations: {
                fr: "21.2 Outils de diagnostic",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-2-diagnostic-tools",
            },
            {
              label: "21.2.1 Dotnet trace runtime events profiling",
              translations: {
                fr: "21.2.1 Dotnet trace (événements runtime, profilage)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-2-1-dotnet-trace-runtime-events-profiling",
            },
            {
              label: "21.2.2 Dotnet dump heap analysis crash dumps",
              translations: {
                fr: "21.2.2 Dotnet dump (analyse du tas, vidages de crash)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-2-2-dotnet-dump-heap-analysis-crash-dumps",
            },
            {
              label: "21.2.3 Dotnet counters performance counters",
              translations: {
                fr: "21.2.3 Dotnet counters (compteurs de performance)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-2-3-dotnet-counters-performance-counters",
            },
            {
              label: "21.2.4 Dotnet gcdump GC heap snapshots",
              translations: {
                fr: "21.2.4 Dotnet gcdump (instantanés du tas GC)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-2-4-dotnet-gcdump-gc-heap-snapshots",
            },
            {
              label: "21.3 Event listeners",
              translations: {
                fr: "21.3 ÉCouteurs d’événements",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-3-event-listeners",
            },
            {
              label: "21.3.1 EventSource custom events",
              translations: {
                fr: "21.3.1 EventSource (événements personnalisés)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-3-1-eventsource-custom-events",
            },
            {
              label: "21.3.2 EventListener consume events",
              translations: {
                fr: "21.3.2 EventListener (consommer des événements)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-3-2-eventlistener-consume-events",
            },
            {
              label: "21.3.3 DiagnosticSource for library instrumentation",
              translations: {
                fr: "21.3.3 DiagnosticSource (pour l’instrumentation de bibliothèque)",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-3-3-diagnosticsource-for-library-instrumentation",
            },
            {
              label: "21.4 Project Collect GC Events with EventListener",
              translations: {
                fr: "21.4 Projet Collecter les événements GC avec EventListener",
              },
              slug: "chapter-21-clr-internals-and-diagnostics/21-4-project-collect-gc-events-with-eventlistener",
            },
          ],
        },
        {
          label: "22 - Low Level Concurrency and Lock Free Code",
          translations: {
            fr: "22 - Concurrence bas niveau et code sans verrou",
          },
          items: [
            {
              label: "22.1 Threading basics recap",
              translations: {
                fr: "22.1 Rappels sur les threads",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-1-threading-basics-recap",
            },
            {
              label: "22.1.1 System.Threading.Thread",
              translations: {
                fr: "22.1.1 System.Threading.Thread",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-1-1-systemthreadingthread",
            },
            {
              label: "22.1.2 ThreadPool",
              translations: {
                fr: "22.1.2 ThreadPool",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-1-2-threadpool",
            },
            {
              label: "22.1.3 Task as higher level abstraction",
              translations: {
                fr: "22.1.3 Task comme abstraction de plus haut niveau",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-1-3-task-as-higher-level-abstraction",
            },
            {
              label: "22.2 Lock free primitives",
              translations: {
                fr: "22.2 Primitives sans verrou",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-2-lock-free-primitives",
            },
            {
              label: "22.2.1 Interlocked class",
              translations: {
                fr: "22.2.1 Classe Interlocked",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-2-1-interlocked-class",
            },
            {
              label: "22.2.2 Volatile prevent compiler optimisations",
              translations: {
                fr: "22.2.2 Volatile (empêcher les optimisations du compilateur)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-2-2-volatile-prevent-compiler-optimisations",
            },
            {
              label: "22.2.3 MemoryBarrier rarely needed directly",
              translations: {
                fr: "22.2.3 MemoryBarrier (rarement nécessaire directement)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-2-3-memorybarrier-rarely-needed-directly",
            },
            {
              label: "22.3 Lightweight synchronisation",
              translations: {
                fr: "22.3 Synchronisation légère",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-3-lightweight-synchronisation",
            },
            {
              label: "22.3.1 SpinLock when lock held for short time",
              translations: {
                fr: "22.3.1 SpinLock (quand le verrou est tenu brièvement)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-3-1-spinlock-when-lock-held-for-short-time",
            },
            {
              label: "22.3.2 SpinWait hybrid spinning",
              translations: {
                fr: "22.3.2 SpinWait (attente hybride)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-3-2-spinwait-hybrid-spinning",
            },
            {
              label: "22.3.3 Lazy T with thread safe initialisation",
              translations: {
                fr: "22.3.3 Lazy<T> avec initialisation thread-safe",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-3-3-lazy-t-with-thread-safe-initialisation",
            },
            {
              label: "22.3.4 LazyInitializer static helpers",
              translations: {
                fr: "22.3.4 LazyInitializer (helpers statiques)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-3-4-lazyinitializer-static-helpers",
            },
            {
              label: "22.4 Concurrent collections",
              translations: {
                fr: "22.4 Collections concurrentes",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-concurrent-collections",
            },
            {
              label: "22.4.1 ConcurrentDictionary TKey TValue",
              translations: {
                fr: "22.4.1 ConcurrentDictionary<TKey,TValue>",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-1-concurrentdictionary-tkey-tvalue",
            },
            {
              label: "22.4.2 ConcurrentQueue T",
              translations: {
                fr: "22.4.2 ConcurrentQueue<T>",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-2-concurrentqueue-t",
            },
            {
              label: "22.4.3 ConcurrentStack T",
              translations: {
                fr: "22.4.3 ConcurrentStack<T>",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-3-concurrentstack-t",
            },
            {
              label: "22.4.4 ConcurrentBag T",
              translations: {
                fr: "22.4.4 ConcurrentBag<T>",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-4-concurrentbag-t",
            },
            {
              label: "22.4.5 BlockingCollection T",
              translations: {
                fr: "22.4.5 BlockingCollection<T>",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-5-blockingcollection-t",
            },
            {
              label: "22.4.6 Channel T producer consumer async support",
              translations: {
                fr: "22.4.6 Channel<T> (producteur-consommateur, support asynchrone)",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-4-6-channel-t-producer-consumer-async-support",
            },
            {
              label: "22.5 Project Thread Safe Counter with Interlocked",
              translations: {
                fr: "22.5 Projet Compteur thread-safe avec Interlocked",
              },
              slug: "chapter-22-low-level-concurrency-and-lock-free-code/22-5-project-thread-safe-counter-with-interlocked",
            },
          ],
        },
        {
          label: "23 - Advanced Testing and Debugging Techniques",
          translations: {
            fr: "23 - Techniques avancées de test et débogage",
          },
          items: [
            {
              label: "23.1 Snapshot testing with Verify",
              translations: {
                fr: "23.1 Test instantané (snapshot) avec Verify",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-1-snapshot-testing-with-verify",
            },
            {
              label: "23.1.1 Serialising expected output",
              translations: {
                fr: "23.1.1 Sérialisation de la sortie attendue",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-1-1-serialising-expected-output",
            },
            {
              label: "23.1.2 Diffing changes",
              translations: {
                fr: "23.1.2 Comparaison des différences",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-1-2-diffing-changes",
            },
            {
              label: "23.2 Fuzzing random inputs",
              translations: {
                fr: "23.2 Fuzzing (entrées aléatoires)",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-2-fuzzing-random-inputs",
            },
            {
              label: "23.2.1 FsCheck for property based testing",
              translations: {
                fr: "23.2.1 FsCheck pour les tests basés sur les propriétés",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-2-1-fscheck-for-property-based-testing",
            },
            {
              label: "23.2.2 Generating arbitrary values",
              translations: {
                fr: "23.2.2 Générer des valeurs arbitraires",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-2-2-generating-arbitrary-values",
            },
            {
              label: "23.2.3 Shrinking counterexamples",
              translations: {
                fr: "23.2.3 Réduction des contre-exemples",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-2-3-shrinking-counterexamples",
            },
            {
              label: "23.3 Debugging with WinDbg SOS",
              translations: {
                fr: "23.3 Débogage avec WinDbg/SOS",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-3-debugging-with-windbg-sos",
            },
            {
              label: "23.3.1 Attaching to a process",
              translations: {
                fr: "23.3.1 Attacher à un processus",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-3-1-attaching-to-a-process",
            },
            {
              label: "23.3.2 Dumpheap and gcroot commands",
              translations: {
                fr: "23.3.2 Commandes dumpheap et gcroot",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-3-2-dumpheap-and-gcroot-commands",
            },
            {
              label: "23.3.3 Analysing deadlocks high CPU",
              translations: {
                fr: "23.3.3 Analyser les interblocages, forte utilisation CPU",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-3-3-analysing-deadlocks-high-cpu",
            },
            {
              label: "23.4 Chaos engineering",
              translations: {
                fr: "23.4 Ingénierie du chaos (Chaos engineering)",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-4-chaos-engineering",
            },
            {
              label: "23.4.1 Simulating failures with Polly chaos policies",
              translations: {
                fr: "23.4.1 Simuler des pannes avec Polly (politiques de chaos)",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-4-1-simulating-failures-with-polly-chaos-policies",
            },
            {
              label: "23.4.2 Fault injection in integration tests",
              translations: {
                fr: "23.4.2 Injection de fautes dans les tests d’intégration",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-4-2-fault-injection-in-integration-tests",
            },
            {
              label: "23.5 Project Property Based Test for Sort Algorithm",
              translations: {
                fr: "23.5 Projet Test basé sur les propriétés pour un algorithme de tri",
              },
              slug: "chapter-23-advanced-testing-and-debugging-techniques/23-5-project-property-based-test-for-sort-algorithm",
            },
          ],
        },
        {
          label: "24 - REST API Deep Dive",
          translations: {
            fr: "24 - API REST en profondeur",
          },
          items: [
            {
              label: "24.1 Controllers vs minimal APIs",
              translations: {
                fr: "24.1 Contrôleurs vs API minimales",
              },
              slug: "chapter-24-rest-api-deep-dive/24-1-controllers-vs-minimal-apis",
            },
            {
              label: "24.1.1 Controller based ApiController Route",
              translations: {
                fr: "24.1.1 Contrôleur (ApiController, Route)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-1-1-controller-based-apicontroller-route",
            },
            {
              label: "24.1.2 Minimal APIs MapGet MapPost",
              translations: {
                fr: "24.1.2 API minimales (MapGet, MapPost)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-1-2-minimal-apis-mapget-mappost",
            },
            {
              label: "24.1.3 Trade offs simplicity vs features",
              translations: {
                fr: "24.1.3 Compromis (simplicité vs fonctionnalités)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-1-3-trade-offs-simplicity-vs-features",
            },
            {
              label: "24.2 Routing and model binding",
              translations: {
                fr: "24.2 Routage et liaison de modèles",
              },
              slug: "chapter-24-rest-api-deep-dive/24-2-routing-and-model-binding",
            },
            {
              label: "24.2.1 Attribute routing",
              translations: {
                fr: "24.2.1 Routage par attributs",
              },
              slug: "chapter-24-rest-api-deep-dive/24-2-1-attribute-routing",
            },
            {
              label: "24.2.2 Route constraints",
              translations: {
                fr: "24.2.2 Contraintes de route",
              },
              slug: "chapter-24-rest-api-deep-dive/24-2-2-route-constraints",
            },
            {
              label: "24.2.3 From body query route header",
              translations: {
                fr: "24.2.3 From body, query, route, header",
              },
              slug: "chapter-24-rest-api-deep-dive/24-2-3-from-body-query-route-header",
            },
            {
              label: "24.3 Validation",
              translations: {
                fr: "24.3 Validation",
              },
              slug: "chapter-24-rest-api-deep-dive/24-3-validation",
            },
            {
              label: "24.3.1 Data annotations Required MaxLength",
              translations: {
                fr: "24.3.1 Annotations de données (Required, MaxLength)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-3-1-data-annotations-required-maxlength",
            },
            {
              label: "24.3.2 ApiController automatic validation",
              translations: {
                fr: "24.3.2 Validation automatique avec ApiController",
              },
              slug: "chapter-24-rest-api-deep-dive/24-3-2-apicontroller-automatic-validation",
            },
            {
              label: "24.3.3 Custom validation attributes",
              translations: {
                fr: "24.3.3 Attributs de validation personnalisés",
              },
              slug: "chapter-24-rest-api-deep-dive/24-3-3-custom-validation-attributes",
            },
            {
              label: "24.3.4 FluentValidation external library",
              translations: {
                fr: "24.3.4 FluentValidation (bibliothèque externe)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-3-4-fluentvalidation-external-library",
            },
            {
              label: "24.4 Content negotiation",
              translations: {
                fr: "24.4 Négociation de contenu",
              },
              slug: "chapter-24-rest-api-deep-dive/24-4-content-negotiation",
            },
            {
              label: "24.4.1 Accept header",
              translations: {
                fr: "24.4.1 En-tête Accept",
              },
              slug: "chapter-24-rest-api-deep-dive/24-4-1-accept-header",
            },
            {
              label: "24.4.2 Produces and Consumes attributes",
              translations: {
                fr: "24.4.2 Attributs Produces et Consumes",
              },
              slug: "chapter-24-rest-api-deep-dive/24-4-2-produces-and-consumes-attributes",
            },
            {
              label: "24.4.3 Custom formatters",
              translations: {
                fr: "24.4.3 Formateurs personnalisés",
              },
              slug: "chapter-24-rest-api-deep-dive/24-4-3-custom-formatters",
            },
            {
              label: "24.5 API versioning",
              translations: {
                fr: "24.5 Gestion de version d’API",
              },
              slug: "chapter-24-rest-api-deep-dive/24-5-api-versioning",
            },
            {
              label: "24.5.1 URL path versioning",
              translations: {
                fr: "24.5.1 Versionnement par chemin d’URL",
              },
              slug: "chapter-24-rest-api-deep-dive/24-5-1-url-path-versioning",
            },
            {
              label: "24.5.2 Query string versioning",
              translations: {
                fr: "24.5.2 Versionnement par chaîne de requête",
              },
              slug: "chapter-24-rest-api-deep-dive/24-5-2-query-string-versioning",
            },
            {
              label: "24.5.3 Header versioning",
              translations: {
                fr: "24.5.3 Versionnement par en-tête",
              },
              slug: "chapter-24-rest-api-deep-dive/24-5-3-header-versioning",
            },
            {
              label: "24.5.4 Microsoft.AspNetCore.Mvc.Versioning",
              translations: {
                fr: "24.5.4 Microsoft.AspNetCore.Mvc.Versioning",
              },
              slug: "chapter-24-rest-api-deep-dive/24-5-4-microsoftaspnetcoremvcversioning",
            },
            {
              label: "24.6 OpenAPI and Swagger",
              translations: {
                fr: "24.6 OpenAPI et Swagger",
              },
              slug: "chapter-24-rest-api-deep-dive/24-6-openapi-and-swagger",
            },
            {
              label: "24.6.1 Swashbuckle.AspNetCore",
              translations: {
                fr: "24.6.1 Swashbuckle.AspNetCore",
              },
              slug: "chapter-24-rest-api-deep-dive/24-6-1-swashbuckleaspnetcore",
            },
            {
              label: "24.6.2 Generating Swagger JSON",
              translations: {
                fr: "24.6.2 Générer du JSON Swagger",
              },
              slug: "chapter-24-rest-api-deep-dive/24-6-2-generating-swagger-json",
            },
            {
              label: "24.6.3 Swagger UI for testing",
              translations: {
                fr: "24.6.3 Interface Swagger UI pour les tests",
              },
              slug: "chapter-24-rest-api-deep-dive/24-6-3-swagger-ui-for-testing",
            },
            {
              label: "24.6.4 Annotations ProducesResponseType",
              translations: {
                fr: "24.6.4 Annotations ProducesResponseType",
              },
              slug: "chapter-24-rest-api-deep-dive/24-6-4-annotations-producesresponsetype",
            },
            {
              label: "24.7 Problem Details RFC 7807",
              translations: {
                fr: "24.7 Problème Details (RFC 7807)",
              },
              slug: "chapter-24-rest-api-deep-dive/24-7-problem-details-rfc-7807",
            },
            {
              label: "24.7.1 ProblemDetails class",
              translations: {
                fr: "24.7.1 Classe ProblemDetails",
              },
              slug: "chapter-24-rest-api-deep-dive/24-7-1-problemdetails-class",
            },
            {
              label: "24.7.2 ValidationProblemDetails for errors",
              translations: {
                fr: "24.7.2 ValidationProblemDetails pour les erreurs",
              },
              slug: "chapter-24-rest-api-deep-dive/24-7-2-validationproblemdetails-for-errors",
            },
            {
              label: "24.7.3 Results.Problem in minimal APIs",
              translations: {
                fr: "24.7.3 Results.Problem dans les API minimales",
              },
              slug: "chapter-24-rest-api-deep-dive/24-7-3-resultsproblem-in-minimal-apis",
            },
            {
              label: "24.8 Project Todo API with Versioning and OpenAPI",
              translations: {
                fr: "24.8 Projet API Todo avec versionnement et OpenAPI",
              },
              slug: "chapter-24-rest-api-deep-dive/24-8-project-todo-api-with-versioning-and-openapi",
            },
          ],
        },
        {
          label: "25 - API Security Deep Dive",
          translations: {
            fr: "25 - Sécurité des API en profondeur",
          },
          items: [
            {
              label: "25.1 CORS",
              translations: {
                fr: "25.1 CORS",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-cors",
            },
            {
              label: "25.1.1 Same origin policy",
              translations: {
                fr: "25.1.1 Politique de même origine",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-1-same-origin-policy",
            },
            {
              label: "25.1.2 Preflight requests OPTIONS",
              translations: {
                fr: "25.1.2 Requêtes préliminaires (OPTIONS)",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-2-preflight-requests-options",
            },
            {
              label: "25.1.3 AddCors and UseCors",
              translations: {
                fr: "25.1.3 AddCors et UseCors",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-3-addcors-and-usecors",
            },
            {
              label: "25.1.4 Allowed origins methods headers",
              translations: {
                fr: "25.1.4 Origines, méthodes, en-têtes autorisés",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-4-allowed-origins-methods-headers",
            },
            {
              label: "25.1.5 Credentials AllowCredentials",
              translations: {
                fr: "25.1.5 Credentials (AllowCredentials)",
              },
              slug: "chapter-25-api-security-deep-dive/25-1-5-credentials-allowcredentials",
            },
            {
              label: "25.2 Rate limiting",
              translations: {
                fr: "25.2 Limitation de débit (Rate limiting)",
              },
              slug: "chapter-25-api-security-deep-dive/25-2-rate-limiting",
            },
            {
              label: "25.2.1 Fixed window sliding window token bucket concurrency",
              translations: {
                fr: "25.2.1 Fenêtre fixe, fenêtre glissante, seau à jetons, concurrence",
              },
              slug: "chapter-25-api-security-deep-dive/25-2-1-fixed-window-sliding-window-token-bucket-concurrency",
            },
            {
              label: "25.2.2 Built in .Net 7 and later AddRateLimiter EnableRateLimiting",
              translations: {
                fr: "25.2.2 Intégré à .NET 7 et ultérieur (AddRateLimiter, EnableRateLimiting)",
              },
              slug: "chapter-25-api-security-deep-dive/25-2-2-built-in-net-7-and-later-addratelimiter-enableratelimiting",
            },
            {
              label: "25.2.3 Partitioning by user IP API key",
              translations: {
                fr: "25.2.3 Partitionnement par utilisateur, IP, clé API",
              },
              slug: "chapter-25-api-security-deep-dive/25-2-3-partitioning-by-user-ip-api-key",
            },
            {
              label: "25.2.4 Returning 429 with Retry After",
              translations: {
                fr: "25.2.4 Retourner 429 avec Retry-After",
              },
              slug: "chapter-25-api-security-deep-dive/25-2-4-returning-429-with-retry-after",
            },
            {
              label: "25.3 Security headers",
              translations: {
                fr: "25.3 En-têtes de sécurité",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-security-headers",
            },
            {
              label: "25.3.1 HSTS Strict Transport Security",
              translations: {
                fr: "25.3.1 HSTS (Strict-Transport-Security)",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-1-hsts-strict-transport-security",
            },
            {
              label: "25.3.2 CSP Content Security Policy",
              translations: {
                fr: "25.3.2 CSP (Content-Security-Policy)",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-2-csp-content-security-policy",
            },
            {
              label: "25.3.3 X Frame Options clickjacking",
              translations: {
                fr: "25.3.3 X-Frame-Options (anti-clickjacking)",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-3-x-frame-options-clickjacking",
            },
            {
              label: "25.3.4 X Content Type Options nosniff",
              translations: {
                fr: "25.3.4 X-Content-Type-Options (nosniff)",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-4-x-content-type-options-nosniff",
            },
            {
              label: "25.3.5 Referrer Policy",
              translations: {
                fr: "25.3.5 Referrer-Policy",
              },
              slug: "chapter-25-api-security-deep-dive/25-3-5-referrer-policy",
            },
            {
              label: "25.4 API keys",
              translations: {
                fr: "25.4 Clés API",
              },
              slug: "chapter-25-api-security-deep-dive/25-4-api-keys",
            },
            {
              label: "25.4.1 Header or query string",
              translations: {
                fr: "25.4.1 En-tête ou chaîne de requête",
              },
              slug: "chapter-25-api-security-deep-dive/25-4-1-header-or-query-string",
            },
            {
              label: "25.4.2 Custom authentication handler",
              translations: {
                fr: "25.4.2 Gestionnaire d’authentification personnalisé",
              },
              slug: "chapter-25-api-security-deep-dive/25-4-2-custom-authentication-handler",
            },
            {
              label: "25.4.3 Storing keys securely Azure Key Vault Data Protection",
              translations: {
                fr: "25.4.3 Stocker les clés de manière sécurisée (Azure Key Vault, Data Protection)",
              },
              slug: "chapter-25-api-security-deep-dive/25-4-3-storing-keys-securely-azure-key-vault-data-protection",
            },
            {
              label: "25.5 HMAC signing",
              translations: {
                fr: "25.5 Signature HMAC",
              },
              slug: "chapter-25-api-security-deep-dive/25-5-hmac-signing",
            },
            {
              label: "25.5.1 Request signing client computes hash",
              translations: {
                fr: "25.5.1 Signature de la requête (le client calcule le hachage)",
              },
              slug: "chapter-25-api-security-deep-dive/25-5-1-request-signing-client-computes-hash",
            },
            {
              label: "25.5.2 Server recomputes and compares",
              translations: {
                fr: "25.5.2 Le serveur recalcule et compare",
              },
              slug: "chapter-25-api-security-deep-dive/25-5-2-server-recomputes-and-compares",
            },
            {
              label: "25.5.3 Replay attack prevention nonce timestamp",
              translations: {
                fr: "25.5.3 Prévention des attaques par rejeu (nonce, horodatage)",
              },
              slug: "chapter-25-api-security-deep-dive/25-5-3-replay-attack-prevention-nonce-timestamp",
            },
            {
              label: "25.6 Data Protection DPAPI",
              translations: {
                fr: "25.6 Protection des données (DPAPI)",
              },
              slug: "chapter-25-api-security-deep-dive/25-6-data-protection-dpapi",
            },
            {
              label: "25.6.1 IDataProtectionProvider",
              translations: {
                fr: "25.6.1 IDataProtectionProvider",
              },
              slug: "chapter-25-api-security-deep-dive/25-6-1-idataprotectionprovider",
            },
            {
              label: "25.6.2 Protect and Unprotect",
              translations: {
                fr: "25.6.2 Protect et Unprotect",
              },
              slug: "chapter-25-api-security-deep-dive/25-6-2-protect-and-unprotect",
            },
            {
              label: "25.6.3 Key ring storage automatic rotation",
              translations: {
                fr: "25.6.3 Anneau de clés (stockage, rotation automatique)",
              },
              slug: "chapter-25-api-security-deep-dive/25-6-3-key-ring-storage-automatic-rotation",
            },
            {
              label: "25.6.4 Purpose strings isolated keys",
              translations: {
                fr: "25.6.4 Chaînes d’objectif (clés isolées)",
              },
              slug: "chapter-25-api-security-deep-dive/25-6-4-purpose-strings-isolated-keys",
            },
            {
              label: "25.7 Input validation",
              translations: {
                fr: "25.7 Validation des entrées",
              },
              slug: "chapter-25-api-security-deep-dive/25-7-input-validation",
            },
            {
              label: "25.7.1 Built in anti XSS not enough",
              translations: {
                fr: "25.7.1 Anti-XSS intégré (insuffisant)",
              },
              slug: "chapter-25-api-security-deep-dive/25-7-1-built-in-anti-xss-not-enough",
            },
            {
              label: "25.7.2 FluentValidation for complex rules",
              translations: {
                fr: "25.7.2 FluentValidation pour les règles complexes",
              },
              slug: "chapter-25-api-security-deep-dive/25-7-2-fluentvalidation-for-complex-rules",
            },
            {
              label: "25.7.3 Whitelisting vs blacklisting",
              translations: {
                fr: "25.7.3 Liste blanche vs liste noire",
              },
              slug: "chapter-25-api-security-deep-dive/25-7-3-whitelisting-vs-blacklisting",
            },
            {
              label: "25.8 OWASP Top 10 for APIs",
              translations: {
                fr: "25.8 OWASP Top 10 pour les API",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-owasp-top-10-for-apis",
            },
            {
              label: "25.8.1 API1 Broken object level authorisation",
              translations: {
                fr: "25.8.1 API1  : Autorisation au niveau objet défaillante",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-1-api1-broken-object-level-authorisation",
            },
            {
              label: "25.8.2 API2 Broken authentication",
              translations: {
                fr: "25.8.2 API2  : Authentification défaillante",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-2-api2-broken-authentication",
            },
            {
              label: "25.8.3 API3 Excessive data exposure",
              translations: {
                fr: "25.8.3 API3  : Exposition excessive de données",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-3-api3-excessive-data-exposure",
            },
            {
              label: "25.8.4 API4 Lack of rate limiting",
              translations: {
                fr: "25.8.4 API4  : Manque de limitation de débit",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-4-api4-lack-of-rate-limiting",
            },
            {
              label: "25.8.5 API5 Broken function level authorisation",
              translations: {
                fr: "25.8.5 API5  : Autorisation au niveau fonction défaillante",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-5-api5-broken-function-level-authorisation",
            },
            {
              label: "25.8.6 API6 Mass assignment",
              translations: {
                fr: "25.8.6 API6  : Assignment massif",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-6-api6-mass-assignment",
            },
            {
              label: "25.8.7 API7 Security misconfiguration",
              translations: {
                fr: "25.8.7 API7  : Mauvaise configuration de la sécurité",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-7-api7-security-misconfiguration",
            },
            {
              label: "25.8.8 API8 Injection",
              translations: {
                fr: "25.8.8 API8  : Injection",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-8-api8-injection",
            },
            {
              label: "25.8.9 API9 Improper asset management",
              translations: {
                fr: "25.8.9 API9  : Mauvaise gestion des actifs",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-9-api9-improper-asset-management",
            },
            {
              label: "25.8.10 API10 Insufficient logging and monitoring",
              translations: {
                fr: "25.8.10 API10  : Journalisation et surveillance insuffisantes",
              },
              slug: "chapter-25-api-security-deep-dive/25-8-10-api10-insufficient-logging-and-monitoring",
            },
            {
              label: "25.9 Project Secured Weather API",
              translations: {
                fr: "25.9 Projet API météo sécurisée",
              },
              slug: "chapter-25-api-security-deep-dive/25-9-project-secured-weather-api",
            },
          ],
        },
        {
          label: "26 - Authentication in ASP.NET Core",
          translations: {
            fr: "26 - Authentification dans ASP.NET Core",
          },
          items: [
            {
              label: "26.1 Authentication schemes",
              translations: {
                fr: "26.1 Schémas d’authentification",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-1-authentication-schemes",
            },
            {
              label: "26.1.1 Cookie authentication for traditional web apps",
              translations: {
                fr: "26.1.1 Authentification par cookie (applications web traditionnelles)",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-1-1-cookie-authentication-for-traditional-web-apps",
            },
            {
              label: "26.1.2 JWT Bearer for API tokens",
              translations: {
                fr: "26.1.2 JWT Bearer (jetons API)",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-1-2-jwt-bearer-for-api-tokens",
            },
            {
              label: "26.1.3 OAuth 2.0 and OpenID Connect external providers",
              translations: {
                fr: "26.1.3 OAuth 2.0 et OpenID Connect (fournisseurs externes)",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-1-3-oauth-20-and-openid-connect-external-providers",
            },
            {
              label: "26.2 Setup",
              translations: {
                fr: "26.2 Configuration",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-2-setup",
            },
            {
              label: "26.2.1 AddAuthentication and AddJwtBearer",
              translations: {
                fr: "26.2.1 AddAuthentication et AddJwtBearer",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-2-1-addauthentication-and-addjwtbearer",
            },
            {
              label: "26.2.2 Authorize attribute",
              translations: {
                fr: "26.2.2 Attribut Authorize",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-2-2-authorize-attribute",
            },
            {
              label: "26.2.3 AuthenticationHandler custom logic",
              translations: {
                fr: "26.2.3 Logique personnalisée avec AuthenticationHandler",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-2-3-authenticationhandler-custom-logic",
            },
            {
              label: "26.3 JWT details",
              translations: {
                fr: "26.3 Détails sur JWT",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-3-jwt-details",
            },
            {
              label: "26.3.1 Header payload signature",
              translations: {
                fr: "26.3.1 En-tête, charge utile, signature",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-3-1-header-payload-signature",
            },
            {
              label: "26.3.2 Issuer audience expiration",
              translations: {
                fr: "26.3.2 ÉMetteur, audience, expiration",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-3-2-issuer-audience-expiration",
            },
            {
              label: "26.3.3 Symmetric HMAC vs asymmetric RSA signing",
              translations: {
                fr: "26.3.3 Signature symétrique (HMAC) vs asymétrique (RSA)",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-3-3-symmetric-hmac-vs-asymmetric-rsa-signing",
            },
            {
              label: "26.4 Project JWT Authentication for Todo API",
              translations: {
                fr: "26.4 Projet Authentification JWT pour l’API Todo",
              },
              slug: "chapter-26-authentication-in-aspnet-core/26-4-project-jwt-authentication-for-todo-api",
            },
          ],
        },
        {
          label: "27 - Authorization Role Policy and Resource Based",
          translations: {
            fr: "27 - Autorisation basée sur les rôles, les politiques et les ressources",
          },
          items: [
            {
              label: "27.1 Role based",
              translations: {
                fr: "27.1 Basée sur les rôles",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-1-role-based",
            },
            {
              label: "27.1.1 Authorize with Roles",
              translations: {
                fr: "27.1.1 Authorize avec Roles",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-1-1-authorize-with-roles",
            },
            {
              label: "27.1.2 Claims with role type",
              translations: {
                fr: "27.1.2 Revendications (claims) avec type de rôle",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-1-2-claims-with-role-type",
            },
            {
              label: "27.2 Policy based",
              translations: {
                fr: "27.2 Basée sur les politiques",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-2-policy-based",
            },
            {
              label: "27.2.1 AddAuthorization with policies",
              translations: {
                fr: "27.2.1 AddAuthorization avec politiques",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-2-1-addauthorization-with-policies",
            },
            {
              label: "27.2.2 RequireClaim RequireRole RequireAssertion",
              translations: {
                fr: "27.2.2 RequireClaim, RequireRole, RequireAssertion",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-2-2-requireclaim-requirerole-requireassertion",
            },
            {
              label: "27.2.3 Custom IAuthorizationRequirement and AuthorizationHandler",
              translations: {
                fr: "27.2.3 IAuthorizationRequirement personnalisé et AuthorizationHandler",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-2-3-custom-iauthorizationrequirement-and-authorizationhandler",
            },
            {
              label: "27.3 Resource based",
              translations: {
                fr: "27.3 Basée sur les ressources",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-3-resource-based",
            },
            {
              label: "27.3.1 Inject IAuthorizationService",
              translations: {
                fr: "27.3.1 Injecter IAuthorizationService",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-3-1-inject-iauthorizationservice",
            },
            {
              label: "27.3.2 Call AuthorizeAsync with user resource requirement",
              translations: {
                fr: "27.3.2 Appeler AuthorizeAsync avec utilisateur, ressource, exigence",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-3-2-call-authorizeasync-with-user-resource-requirement",
            },
            {
              label: "27.3.3 Inside endpoint check ownership",
              translations: {
                fr: "27.3.3 Dans un endpoint, vérifier la propriété",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-3-3-inside-endpoint-check-ownership",
            },
            {
              label: "27.4 Project Todo API with Role and Ownership Policies",
              translations: {
                fr: "27.4 Projet API Todo avec politiques de rôle et de propriété",
              },
              slug: "chapter-27-authorization-role-policy-and-resource-based/27-4-project-todo-api-with-role-and-ownership-policies",
            },
          ],
        },
        {
          label: "28 - Database Access with EF Core and Dapper",
          translations: {
            fr: "28 - Accès aux bases de données avec EF Core et Dapper",
          },
          items: [
            {
              label: "28.1 EF Core",
              translations: {
                fr: "28.1 EF Core",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-ef-core",
            },
            {
              label: "28.1.1 DbContext DbSet",
              translations: {
                fr: "28.1.1 DbContext, DbSet",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-1-dbcontext-dbset",
            },
            {
              label: "28.1.2 Migrations Add Migration Update Database",
              translations: {
                fr: "28.1.2 Migrations (Add-Migration, Update-Database)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-2-migrations-add-migration-update-database",
            },
            {
              label: "28.1.3 LINQ queries translated to SQL",
              translations: {
                fr: "28.1.3 Requêtes LINQ traduites en SQL",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-3-linq-queries-translated-to-sql",
            },
            {
              label: "28.1.4 Change tracking and SaveChanges",
              translations: {
                fr: "28.1.4 Suivi des modifications et SaveChanges",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-4-change-tracking-and-savechanges",
            },
            {
              label: "28.1.5 Concurrency tokens Timestamp",
              translations: {
                fr: "28.1.5 Jetons de concurrence (Timestamp)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-1-5-concurrency-tokens-timestamp",
            },
            {
              label: "28.2 Dapper",
              translations: {
                fr: "28.2 Dapper",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-2-dapper",
            },
            {
              label: "28.2.1 QueryAsync T raw SQL",
              translations: {
                fr: "28.2.1 QueryAsync<T> (SQL brut)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-2-1-queryasync-t-raw-sql",
            },
            {
              label: "28.2.2 ExecuteAsync non query",
              translations: {
                fr: "28.2.2 ExecuteAsync (non-requête)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-2-2-executeasync-non-query",
            },
            {
              label: "28.2.3 Multi mapping QueryAsync T U TResult",
              translations: {
                fr: "28.2.3 Multi-mappage (QueryAsync<T, U, TResult>)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-2-3-multi-mapping-queryasync-t-u-tresult",
            },
            {
              label: "28.2.4 Performance advantage over EF Core",
              translations: {
                fr: "28.2.4 Avantage de performance par rapport à EF Core",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-2-4-performance-advantage-over-ef-core",
            },
            {
              label: "28.3 When to use which",
              translations: {
                fr: "28.3 Quand utiliser l’un ou l’autre",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-3-when-to-use-which",
            },
            {
              label: "28.3.1 EF Core for complex object graphs migrations",
              translations: {
                fr: "28.3.1 EF Core pour les graphes d’objets complexes, migrations",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-3-1-ef-core-for-complex-object-graphs-migrations",
            },
            {
              label: "28.3.2 Dapper for read only high performance queries",
              translations: {
                fr: "28.3.2 Dapper pour les requêtes en lecture seule haute performance",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-3-2-dapper-for-read-only-high-performance-queries",
            },
            {
              label: "28.3.3 Using both together CQRS lite",
              translations: {
                fr: "28.3.3 Utiliser les deux ensemble (CQRS léger)",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-3-3-using-both-together-cqrs-lite",
            },
            {
              label: "28.4 Project Blogging API with EF Core for writes and Dapper for reads",
              translations: {
                fr: "28.4 Projet API de blog avec EF Core pour les écritures et Dapper pour les lectures",
              },
              slug: "chapter-28-database-access-with-ef-core-and-dapper/28-4-project-blogging-api-with-ef-core-for-writes-and-dapper-for-reads",
            },
          ],
        },
        {
          label: "29 - File IO and Streams for Backend Developers",
          translations: {
            fr: "29 - Entrées-sorties fichiers et flux pour les développeurs backend",
          },
          items: [
            {
              label: "29.1 File system helpers",
              translations: {
                fr: "29.1 Aides du système de fichiers",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-1-file-system-helpers",
            },
            {
              label: "29.1.1 File Directory FileInfo DirectoryInfo",
              translations: {
                fr: "29.1.1 File, Directory, FileInfo, DirectoryInfo",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-1-1-file-directory-fileinfo-directoryinfo",
            },
            {
              label: "29.1.2 ReadAllText WriteAllText convenience but loads entire file",
              translations: {
                fr: "29.1.2 ReadAllText, WriteAllText (pratique mais charge tout le fichier)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-1-2-readalltext-writealltext-convenience-but-loads-entire-file",
            },
            {
              label: "29.2 Streams",
              translations: {
                fr: "29.2 Flux (Streams)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-2-streams",
            },
            {
              label: "29.2.1 FileStream read write bytes",
              translations: {
                fr: "29.2.1 FileStream (lire/écrire des octets)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-2-1-filestream-read-write-bytes",
            },
            {
              label: "29.2.2 StreamReader StreamWriter for text",
              translations: {
                fr: "29.2.2 StreamReader / StreamWriter (texte)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-2-2-streamreader-streamwriter-for-text",
            },
            {
              label: "29.2.3 MemoryStream in memory buffer",
              translations: {
                fr: "29.2.3 MemoryStream (tampon en mémoire)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-2-3-memorystream-in-memory-buffer",
            },
            {
              label: "29.2.4 GZipStream compression",
              translations: {
                fr: "29.2.4 GZipStream (compression)",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-2-4-gzipstream-compression",
            },
            {
              label: "29.3 Streaming responses",
              translations: {
                fr: "29.3 Réponses en streaming",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-3-streaming-responses",
            },
            {
              label: "29.3.1 Results.Stream in minimal API",
              translations: {
                fr: "29.3.1 Results.Stream dans les API minimales",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-3-1-resultsstream-in-minimal-api",
            },
            {
              label: "29.3.2 FileStreamResult in controller",
              translations: {
                fr: "29.3.2 FileStreamResult dans les contrôleurs",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-3-2-filestreamresult-in-controller",
            },
            {
              label: "29.3.3 Avoid loading large files into memory",
              translations: {
                fr: "29.3.3 ÉViter de charger de gros fichiers en mémoire",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-3-3-avoid-loading-large-files-into-memory",
            },
            {
              label: "29.4 Project File Upload and Download API",
              translations: {
                fr: "29.4 Projet API d’envoi et téléchargement de fichiers",
              },
              slug: "chapter-29-file-io-and-streams-for-backend-developers/29-4-project-file-upload-and-download-api",
            },
          ],
        },
        {
          label: "30 - Message Queues and Event Driven Architecture",
          translations: {
            fr: "30 - Files d’attente de messages et architecture événementielle",
          },
          items: [
            {
              label: "30.1 Message brokers",
              translations: {
                fr: "30.1 Courtiers de messages",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-1-message-brokers",
            },
            {
              label: "30.1.1 RabbitMQ popular AMQP",
              translations: {
                fr: "30.1.1 RabbitMQ (populaire, AMQP)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-1-1-rabbitmq-popular-amqp",
            },
            {
              label: "30.1.2 Azure Service Bus cloud",
              translations: {
                fr: "30.1.2 Azure Service Bus (cloud)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-1-2-azure-service-bus-cloud",
            },
            {
              label: "30.1.3 AWS SQS SNS",
              translations: {
                fr: "30.1.3 AWS SQS / SNS",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-1-3-aws-sqs-sns",
            },
            {
              label: "30.1.4 Kafka high throughput",
              translations: {
                fr: "30.1.4 Kafka (débit élevé)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-1-4-kafka-high-throughput",
            },
            {
              label: "30.2 Abstractions",
              translations: {
                fr: "30.2 Abstractions",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-2-abstractions",
            },
            {
              label: "30.2.1 MassTransit supports multiple brokers",
              translations: {
                fr: "30.2.1 MassTransit (supporte plusieurs courtiers)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-2-1-masstransit-supports-multiple-brokers",
            },
            {
              label: "30.2.2 NServiceBus commercial",
              translations: {
                fr: "30.2.2 NServiceBus (commercial)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-2-2-nservicebus-commercial",
            },
            {
              label: "30.2.3 Raw client libraries",
              translations: {
                fr: "30.2.3 Bibliothèques client brutes",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-2-3-raw-client-libraries",
            },
            {
              label: "30.3 Idempotency",
              translations: {
                fr: "30.3 Idempotence",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-3-idempotency",
            },
            {
              label: "30.3.1 Idempotency keys in message headers",
              translations: {
                fr: "30.3.1 Clés d’idempotence dans les en-têtes de message",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-3-1-idempotency-keys-in-message-headers",
            },
            {
              label: "30.3.2 Storing processed message IDs",
              translations: {
                fr: "30.3.2 Stocker les ID de messages traités",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-3-2-storing-processed-message-ids",
            },
            {
              label: "30.3.3 Exactly once delivery not truly possible but idempotent consumers",
              translations: {
                fr: "30.3.3 Livraison exactement une fois (pas vraiment possible, mais consommateurs idempotents)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-3-3-exactly-once-delivery-not-truly-possible-but-idempotent-consumers",
            },
            {
              label: "30.4 Outbox pattern",
              translations: {
                fr: "30.4 Patron Outbox",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-4-outbox-pattern",
            },
            {
              label: "30.4.1 Store messages in database as part of transaction",
              translations: {
                fr: "30.4.1 Stocker les messages dans la base de données dans la transaction",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-4-1-store-messages-in-database-as-part-of-transaction",
            },
            {
              label: "30.4.2 Background processor publishes to broker",
              translations: {
                fr: "30.4.2 Un processeur d’arrière-plan publie sur le courtier",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-4-2-background-processor-publishes-to-broker",
            },
            {
              label: "30.4.3 Prevents lost messages on broker failure",
              translations: {
                fr: "30.4.3 Empêche la perte de messages en cas de panne du courtier",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-4-3-prevents-lost-messages-on-broker-failure",
            },
            {
              label: "30.5 Dead letter queues",
              translations: {
                fr: "30.5 Files de lettres mortes (Dead-letter queues)",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-5-dead-letter-queues",
            },
            {
              label: "30.5.1 Handling poison messages",
              translations: {
                fr: "30.5.1 Gérer les messages empoisonnés",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-5-1-handling-poison-messages",
            },
            {
              label: "30.5.2 Retry policies and dead letter after max attempts",
              translations: {
                fr: "30.5.2 Politiques de réessai et lettre morte après un nombre maximal d’essais",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-5-2-retry-policies-and-dead-letter-after-max-attempts",
            },
            {
              label: "30.6 Project Order Processing with RabbitMQ and MassTransit",
              translations: {
                fr: "30.6 Projet Traitement de commandes avec RabbitMQ et MassTransit",
              },
              slug: "chapter-30-message-queues-and-event-driven-architecture/30-6-project-order-processing-with-rabbitmq-and-masstransit",
            },
          ],
        },
        {
          label: "31 - GRPC for High Performance APIs",
          translations: {
            fr: "31 - GRPC pour des API haute performance",
          },
          items: [
            {
              label: "31.1 Protocol Buffers",
              translations: {
                fr: "31.1 Protocole Buffers (Protobuf)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-1-protocol-buffers",
            },
            {
              label: "31.1.1 Proto syntax for messages and services",
              translations: {
                fr: "31.1.1 Syntaxe .proto pour messages et services",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-1-1-proto-syntax-for-messages-and-services",
            },
            {
              label: "31.1.2 Scalar types int32 string bool",
              translations: {
                fr: "31.1.2 Types scalaires (int32, string, bool)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-1-2-scalar-types-int32-string-bool",
            },
            {
              label: "31.1.3 Repeated fields enums nested messages",
              translations: {
                fr: "31.1.3 Champs répétés, énumérations, messages imbriqués",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-1-3-repeated-fields-enums-nested-messages",
            },
            {
              label: "31.2 GRPC service types",
              translations: {
                fr: "31.2 Types de services gRPC",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-2-grpc-service-types",
            },
            {
              label: "31.2.1 Unary request response",
              translations: {
                fr: "31.2.1 Unaire (requête-réponse)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-2-1-unary-request-response",
            },
            {
              label: "31.2.2 Server streaming many responses",
              translations: {
                fr: "31.2.2 Streaming serveur (plusieurs réponses)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-2-2-server-streaming-many-responses",
            },
            {
              label: "31.2.3 Client streaming many requests",
              translations: {
                fr: "31.2.3 Streaming client (plusieurs requêtes)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-2-3-client-streaming-many-requests",
            },
            {
              label: "31.2.4 Bidirectional streaming",
              translations: {
                fr: "31.2.4 Streaming bidirectionnel",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-2-4-bidirectional-streaming",
            },
            {
              label: "31.3 Implementation in .Net",
              translations: {
                fr: "31.3 Implémentation dans .NET",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-3-implementation-in-net",
            },
            {
              label: "31.3.1 Grpc.AspNetCore package",
              translations: {
                fr: "31.3.1 Paquet Grpc.AspNetCore",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-3-1-grpcaspnetcore-package",
            },
            {
              label: "31.3.2 Code generation from proto",
              translations: {
                fr: "31.3.2 Génération de code à partir de .proto",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-3-2-code-generation-from-proto",
            },
            {
              label: "31.3.3 Service implementation inherits generated base",
              translations: {
                fr: "31.3.3 Implémentation du service (hérite de la classe générée)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-3-3-service-implementation-inherits-generated-base",
            },
            {
              label: "31.4 GRPC vs REST",
              translations: {
                fr: "31.4 GRPC vs REST",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-4-grpc-vs-rest",
            },
            {
              label: "31.4.1 Performance binary HTTP2 multiplexing",
              translations: {
                fr: "31.4.1 Performance (binaire, multiplexage HTTP/2)",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-4-1-performance-binary-http2-multiplexing",
            },
            {
              label: "31.4.2 Contract first vs code first",
              translations: {
                fr: "31.4.2 Contrat d’abord vs code d’abord",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-4-2-contract-first-vs-code-first",
            },
            {
              label: "31.4.3 GRPC Web for browser clients",
              translations: {
                fr: "31.4.3 GRPC-Web pour les clients navigateur",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-4-3-grpc-web-for-browser-clients",
            },
            {
              label: "31.5 Project Stock Price Streaming Service",
              translations: {
                fr: "31.5 Projet Service de streaming de prix d’actions",
              },
              slug: "chapter-31-grpc-for-high-performance-apis/31-5-project-stock-price-streaming-service",
            },
          ],
        },
        {
          label: "32 - Real Time Communication with SignalR",
          translations: {
            fr: "32 - Communication temps réel avec SignalR",
          },
          items: [
            {
              label: "32.1 Hubs",
              translations: {
                fr: "32.1 Hubs",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-1-hubs",
            },
            {
              label: "32.1.1 Hub class",
              translations: {
                fr: "32.1.1 Classe Hub",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-1-1-hub-class",
            },
            {
              label: "32.1.2 Methods callable from client",
              translations: {
                fr: "32.1.2 Méthodes appelables par le client",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-1-2-methods-callable-from-client",
            },
            {
              label: "32.1.3 Calling client methods",
              translations: {
                fr: "32.1.3 Appeler des méthodes client",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-1-3-calling-client-methods",
            },
            {
              label: "32.2 Connection management",
              translations: {
                fr: "32.2 Gestion des connexions",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-2-connection-management",
            },
            {
              label: "32.2.1 OnConnectedAsync and OnDisconnectedAsync",
              translations: {
                fr: "32.2.1 OnConnectedAsync et OnDisconnectedAsync",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-2-1-onconnectedasync-and-ondisconnectedasync",
            },
            {
              label: "32.2.2 Keeping connection IDs",
              translations: {
                fr: "32.2.2 Conserver les ID de connexion",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-2-2-keeping-connection-ids",
            },
            {
              label: "32.2.3 Reconnection logic",
              translations: {
                fr: "32.2.3 Logique de reconnexion",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-2-3-reconnection-logic",
            },
            {
              label: "32.3 Scaling out",
              translations: {
                fr: "32.3 Montée en charge",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-3-scaling-out",
            },
            {
              label: "32.3.1 Redis backplane",
              translations: {
                fr: "32.3.1 Plan de données Redis (Redis backplane)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-3-1-redis-backplane",
            },
            {
              label: "32.3.2 Azure SignalR Service fully managed",
              translations: {
                fr: "32.3.2 Service Azure SignalR (entièrement géré)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-3-2-azure-signalr-service-fully-managed",
            },
            {
              label: "32.3.3 Sticky sessions if not using backplane",
              translations: {
                fr: "32.3.3 Sessions persistantes (si pas de plan de données)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-3-3-sticky-sessions-if-not-using-backplane",
            },
            {
              label: "32.4 Transports",
              translations: {
                fr: "32.4 Transports",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-4-transports",
            },
            {
              label: "32.4.1 WebSockets best performance",
              translations: {
                fr: "32.4.1 WebSockets (meilleure performance)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-4-1-websockets-best-performance",
            },
            {
              label: "32.4.2 Server Sent Events SSE",
              translations: {
                fr: "32.4.2 Server-Sent Events (SSE)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-4-2-server-sent-events-sse",
            },
            {
              label: "32.4.3 Long polling fallback",
              translations: {
                fr: "32.4.3 Long polling (fallback)",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-4-3-long-polling-fallback",
            },
            {
              label: "32.5 Project Live Chat Application",
              translations: {
                fr: "32.5 Projet Application de chat en direct",
              },
              slug: "chapter-32-real-time-communication-with-signalr/32-5-project-live-chat-application",
            },
          ],
        },
        {
          label: "33 - Docker and Containerisation for .Net Backend",
          translations: {
            fr: "33 - Docker et conteneurisation pour le backend .NET",
          },
          items: [
            {
              label: "33.1 Docker basics",
              translations: {
                fr: "33.1 Bases de Docker",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-1-docker-basics",
            },
            {
              label: "33.1.1 Dockerfile FROM WORKDIR COPY RUN EXPOSE ENTRYPOINT",
              translations: {
                fr: "33.1.1 Dockerfile  : FROM, WORKDIR, COPY, RUN, EXPOSE, ENTRYPOINT",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-1-1-dockerfile-from-workdir-copy-run-expose-entrypoint",
            },
            {
              label: "33.1.2 Multi stage builds build vs runtime images",
              translations: {
                fr: "33.1.2 Constructions multi-étapes (images de build vs runtime)",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-1-2-multi-stage-builds-build-vs-runtime-images",
            },
            {
              label: "33.1.3 Dockerignore",
              translations: {
                fr: "33.1.3 .Dockerignore",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-1-3-dockerignore",
            },
            {
              label: "33.2 Docker Compose",
              translations: {
                fr: "33.2 Docker Compose",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-2-docker-compose",
            },
            {
              label: "33.2.1 Docker-compose.yml services .Networks volumes",
              translations: {
                fr: "33.2.1 Docker-compose.yml (services, réseaux, volumes)",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-2-1-docker-composeyml-services-networks-volumes",
            },
            {
              label: "33.2.2 Environment variables",
              translations: {
                fr: "33.2.2 Variables d’environnement",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-2-2-environment-variables",
            },
            {
              label: "33.2.3 Dependencies depends on",
              translations: {
                fr: "33.2.3 Dépendances (depends_on)",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-2-3-dependencies-depends-on",
            },
            {
              label: "33.3 Health checks",
              translations: {
                fr: "33.3 Tests de santé (Health checks)",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-3-health-checks",
            },
            {
              label: "33.3.1 HEALTHCHECK in Dockerfile",
              translations: {
                fr: "33.3.1 HEALTHCHECK dans le Dockerfile",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-3-1-healthcheck-in-dockerfile",
            },
            {
              label: "33.3.2 ASP.NET Core health checks AddHealthChecks",
              translations: {
                fr: "33.3.2 Health checks ASP.NET Core (AddHealthChecks)",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-3-2-aspnet-core-health-checks-addhealthchecks",
            },
            {
              label: "33.4 Project Dockerise the Todo API with PostgreSQL",
              translations: {
                fr: "33.4 Projet Dockeriser l’API Todo avec PostgreSQL",
              },
              slug: "chapter-33-docker-and-containerisation-for-net-backend/33-4-project-dockerise-the-todo-api-with-postgresql",
            },
          ],
        },
        {
          label: "34 - CI CD for .Net Backend",
          translations: {
            fr: "34 - CI/CD pour le backend .NET",
          },
          items: [
            {
              label: "34.1 CI CD platforms",
              translations: {
                fr: "34.1 Plateformes CI/CD",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-1-ci-cd-platforms",
            },
            {
              label: "34.1.1 GitHub Actions",
              translations: {
                fr: "34.1.1 GitHub Actions",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-1-1-github-actions",
            },
            {
              label: "34.1.2 Azure DevOps Pipelines",
              translations: {
                fr: "34.1.2 Azure DevOps Pipelines",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-1-2-azure-devops-pipelines",
            },
            {
              label: "34.1.3 GitLab CI",
              translations: {
                fr: "34.1.3 GitLab CI",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-1-3-gitlab-ci",
            },
            {
              label: "34.1.4 Jenkins legacy",
              translations: {
                fr: "34.1.4 Jenkins (hérité)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-1-4-jenkins-legacy",
            },
            {
              label: "34.2 Typical pipeline",
              translations: {
                fr: "34.2 Pipeline typique",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-typical-pipeline",
            },
            {
              label: "34.2.1 Build dotnet build",
              translations: {
                fr: "34.2.1 Build (dotnet build)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-1-build-dotnet-build",
            },
            {
              label: "34.2.2 Test dotnet test",
              translations: {
                fr: "34.2.2 Test (dotnet test)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-2-test-dotnet-test",
            },
            {
              label: "34.2.3 Publish dotnet publish",
              translations: {
                fr: "34.2.3 Publication (dotnet publish)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-3-publish-dotnet-publish",
            },
            {
              label: "34.2.4 Build Docker image docker build",
              translations: {
                fr: "34.2.4 Construction de l’image Docker (docker build)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-4-build-docker-image-docker-build",
            },
            {
              label: "34.2.5 Push to registry docker push",
              translations: {
                fr: "34.2.5 Pousser vers un registre (docker push)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-5-push-to-registry-docker-push",
            },
            {
              label: "34.2.6 Deploy to Azure Container Instances Kubernetes VM",
              translations: {
                fr: "34.2.6 Déployer sur Azure Container Instances, Kubernetes, VM",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-2-6-deploy-to-azure-container-instances-kubernetes-vm",
            },
            {
              label: "34.3 Infrastructure as Code",
              translations: {
                fr: "34.3 Infrastructure as Code",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-3-infrastructure-as-code",
            },
            {
              label: "34.3.1 Bicep for Azure Resource Manager",
              translations: {
                fr: "34.3.1 Bicep (pour Azure Resource Manager)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-3-1-bicep-for-azure-resource-manager",
            },
            {
              label: "34.3.2 Terraform multi cloud",
              translations: {
                fr: "34.3.2 Terraform (multi-cloud)",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-3-2-terraform-multi-cloud",
            },
            {
              label: "34.4 Project GitHub Actions CI CD for Todo API",
              translations: {
                fr: "34.4 Projet CI/CD avec GitHub Actions pour l’API Todo",
              },
              slug: "chapter-34-ci-cd-for-net-backend/34-4-project-github-actions-ci-cd-for-todo-api",
            },
          ],
        },
        {
          label: "35 - Mid Point Capstone Secure Role Based Access plus OTP REST API",
          translations: {
            fr: "35 - Capstone intermédiaire  : API REST sécurisée avec contrôle d’accès basé sur les rôles et OTP",
          },
          items: [
            {
              label: "35.1 Project overview",
              translations: {
                fr: "35.1 Aperçu du projet",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-1-project-overview",
            },
            {
              label: "35.2 Features JWT roles OTP rate limiting idempotency",
              translations: {
                fr: "35.2 Fonctionnalités  : JWT, rôles, OTP, limitation de débit, idempotence",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-2-features-jwt-roles-otp-rate-limiting-idempotency",
            },
            {
              label: "35.3 Implementation steps",
              translations: {
                fr: "35.3 ÉTapes d’implémentation",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-implementation-steps",
            },
            {
              label: "35.3.1 Scaffold ASP.NET Core project with JWT",
              translations: {
                fr: "35.3.1 Créer un projet ASP.NET Core avec JWT",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-1-scaffold-aspnet-core-project-with-jwt",
            },
            {
              label: "35.3.2 Implement user registration and login",
              translations: {
                fr: "35.3.2 Implémenter l’enregistrement et la connexion des utilisateurs",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-2-implement-user-registration-and-login",
            },
            {
              label: "35.3.3 Add role claims and admin endpoints",
              translations: {
                fr: "35.3.3 Ajouter des revendications de rôles et des endpoints administrateur",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-3-add-role-claims-and-admin-endpoints",
            },
            {
              label: "35.3.4 OTP generation service 6 digits with expiry",
              translations: {
                fr: "35.3.4 Service de génération OTP (6 chiffres avec expiration)",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-4-otp-generation-service-6-digits-with-expiry",
            },
            {
              label: "35.3.5 Background service plus channel for email sending",
              translations: {
                fr: "35.3.5 Service d’arrière-plan + canal pour l’envoi d’emails",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-5-background-service-plus-channel-for-email-sending",
            },
            {
              label: "35.3.6 Idempotency middleware with Redis",
              translations: {
                fr: "35.3.6 Middleware d’idempotence avec Redis",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-6-idempotency-middleware-with-redis",
            },
            {
              label: "35.3.7 Integration tests",
              translations: {
                fr: "35.3.7 Tests d’intégration",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-7-integration-tests",
            },
            {
              label: "35.3.8 Docker and CI CD",
              translations: {
                fr: "35.3.8 Docker et CI/CD",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-3-8-docker-and-ci-cd",
            },
            {
              label: "35.4 Deliverables",
              translations: {
                fr: "35.4 Livrables",
              },
              slug: "chapter-35-mid-point-capstone-secure-role-based-access-plus-otp-rest-api/35-4-deliverables",
            },
          ],
        },
        {
          label: "36 - Beyond Senior Distributed Systems Cloud Native and Leadership",
          translations: {
            fr: "36 - Au-delà de senior  : systèmes distribués, cloud natif et leadership",
          },
          items: [
            {
              label: "36.1 Microservices vs modular monolith",
              translations: {
                fr: "36.1 Microservices vs monolithe modulaire",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-1-microservices-vs-modular-monolith",
            },
            {
              label: "36.1.1 Benefits and trade offs",
              translations: {
                fr: "36.1.1 Avantages et compromis",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-1-1-benefits-and-trade-offs",
            },
            {
              label: "36.1.2 Service discovery Consul Eureka",
              translations: {
                fr: "36.1.2 Découverte de services (Consul, Eureka)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-1-2-service-discovery-consul-eureka",
            },
            {
              label: "36.1.3 API gateways Ocelot YARP Kong",
              translations: {
                fr: "36.1.3 Passerelles API (Ocelot, YARP, Kong)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-1-3-api-gateways-ocelot-yarp-kong",
            },
            {
              label: "36.2 Distributed transactions",
              translations: {
                fr: "36.2 Transactions distribuées",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-2-distributed-transactions",
            },
            {
              label: "36.2.1 Two phase commit not common in microservices",
              translations: {
                fr: "36.2.1 Commit en deux phases (peu courant dans les microservices)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-2-1-two-phase-commit-not-common-in-microservices",
            },
            {
              label: "36.2.2 Saga pattern choreography vs orchestration",
              translations: {
                fr: "36.2.2 Patron Saga (chorégraphie vs orchestration)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-2-2-saga-pattern-choreography-vs-orchestration",
            },
            {
              label: "36.2.3 Idempotency and compensating transactions",
              translations: {
                fr: "36.2.3 Idempotence et transactions compensatoires",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-2-3-idempotency-and-compensating-transactions",
            },
            {
              label: "36.3 Cloud native patterns",
              translations: {
                fr: "36.3 Patrons cloud natifs",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-3-cloud-native-patterns",
            },
            {
              label: "36.3.1 Retry and circuit breaker with Polly",
              translations: {
                fr: "36.3.1 Réessai et disjoncteur (circuit breaker) avec Polly",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-3-1-retry-and-circuit-breaker-with-polly",
            },
            {
              label: "36.3.2 Sidecar pattern for example Dapr",
              translations: {
                fr: "36.3.2 Patron Sidecar (par exemple Dapr)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-3-2-sidecar-pattern-for-example-dapr",
            },
            {
              label: "36.3.3 Health checks and liveness probes",
              translations: {
                fr: "36.3.3 Tests de santé (health checks) et sondes de vivacité (liveness)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-3-3-health-checks-and-liveness-probes",
            },
            {
              label: "36.4 Leadership",
              translations: {
                fr: "36.4 Leadership",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-4-leadership",
            },
            {
              label: "36.4.1 Architecture Decision Records ADR",
              translations: {
                fr: "36.4.1 Enregistrements de décision d’architecture (ADR)",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-4-1-architecture-decision-records-adr",
            },
            {
              label: "36.4.2 Running technical design reviews",
              translations: {
                fr: "36.4.2 Mener des revues de conception technique",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-4-2-running-technical-design-reviews",
            },
            {
              label: "36.4.3 Mentoring senior engineers",
              translations: {
                fr: "36.4.3 Mentorat des ingénieurs seniors",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-4-3-mentoring-senior-engineers",
            },
            {
              label: "36.5 Project ADR and Proof of Concept for Saga Pattern",
              translations: {
                fr: "36.5 Projet ADR et preuve de concept pour le patron Saga",
              },
              slug: "chapter-36-beyond-senior-distributed-systems-cloud-native-and-leadership/36-5-project-adr-and-proof-of-concept-for-saga-pattern",
            },
          ],
        },
        {
          label: "37 - Final Mastery Project Banking Core System for Finance",
          translations: {
            fr: "37 - Projet final de maîtrise  : Système bancaire central (Finance)",
          },
          items: [
            {
              label: "37.1 Business context",
              translations: {
                fr: "37.1 Contexte métier",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-1-business-context",
            },
            {
              label: "37.2 Core features accounts transfers interest real time feed",
              translations: {
                fr: "37.2 Fonctionnalités principales  : comptes, virements, intérêts, flux temps réel",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-2-core-features-accounts-transfers-interest-real-time-feed",
            },
            {
              label: "37.3 Technical challenges idempotency concurrency outbox tracing",
              translations: {
                fr: "37.3 Défis techniques  : idempotence, concurrence, outbox, traçage",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-3-technical-challenges-idempotency-concurrency-outbox-tracing",
            },
            {
              label: "37.4 Solution structure modular monolith",
              translations: {
                fr: "37.4 Structure de solution  : monolithe modulaire",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-4-solution-structure-modular-monolith",
            },
            {
              label: "37.5 Data models",
              translations: {
                fr: "37.5 Modèles de données",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-5-data-models",
            },
            {
              label: "37.6 Implementation steps",
              translations: {
                fr: "37.6 ÉTapes d’implémentation",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-implementation-steps",
            },
            {
              label: "37.6.1 Create solution with four projects",
              translations: {
                fr: "37.6.1 Créer une solution avec quatre projets",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-1-create-solution-with-four-projects",
            },
            {
              label: "37.6.2 Define domain models and DbContext",
              translations: {
                fr: "37.6.2 Définir les modèles de domaine et DbContext",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-2-define-domain-models-and-dbcontext",
            },
            {
              label: "37.6.3 Implement idempotent transfer endpoint",
              translations: {
                fr: "37.6.3 Implémenter un endpoint de virement idempotent",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-3-implement-idempotent-transfer-endpoint",
            },
            {
              label: "37.6.4 Add optimistic concurrency row version",
              translations: {
                fr: "37.6.4 Ajouter la concurrence optimiste (version de ligne)",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-4-add-optimistic-concurrency-row-version",
            },
            {
              label: "37.6.5 Set up RabbitMQ and MassTransit",
              translations: {
                fr: "37.6.5 Configurer RabbitMQ et MassTransit",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-5-set-up-rabbitmq-and-masstransit",
            },
            {
              label: "37.6.6 Implement SignalR hub for balance updates",
              translations: {
                fr: "37.6.6 Implémenter un hub SignalR pour les mises à jour de solde",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-6-implement-signalr-hub-for-balance-updates",
            },
            {
              label: "37.6.7 Background workers scheduled payments interest outbox",
              translations: {
                fr: "37.6.7 Workers d’arrière-plan (paiements programmés, intérêts, outbox)",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-7-background-workers-scheduled-payments-interest-outbox",
            },
            {
              label: "37.6.8 Add Polly retries for notifications",
              translations: {
                fr: "37.6.8 Ajouter des réessais Polly pour les notifications",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-8-add-polly-retries-for-notifications",
            },
            {
              label: "37.6.9 Configure OpenTelemetry and Jaeger",
              translations: {
                fr: "37.6.9 Configurer OpenTelemetry et Jaeger",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-9-configure-opentelemetry-and-jaeger",
            },
            {
              label: "37.6.10 Write Docker Compose",
              translations: {
                fr: "37.6.10 ÉCrire Docker Compose",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-10-write-docker-compose",
            },
            {
              label: "37.6.11 Write k6 load test",
              translations: {
                fr: "37.6.11 ÉCrire un test de charge k6",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-11-write-k6-load-test",
            },
            {
              label: "37.6.12 Set up CI CD",
              translations: {
                fr: "37.6.12 Mettre en place CI/CD",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-6-12-set-up-ci-cd",
            },
            {
              label: "37.7 Deliverables",
              translations: {
                fr: "37.7 Livrables",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-7-deliverables",
            },
            {
              label: "37.8 Optional extensions",
              translations: {
                fr: "37.8 Extensions optionnelles",
              },
              slug: "chapter-37-final-mastery-project-banking-core-system-for-finance/37-8-optional-extensions",
            },
          ],
        },
      ],
    }),
  ],
});
