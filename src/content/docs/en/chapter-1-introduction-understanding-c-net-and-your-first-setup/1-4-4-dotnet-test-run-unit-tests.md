---
title: dotnet test run unit tests
sidebar:
  order: 19
  label: 1.4.4 dotnet test run unit tests
---

**Context**: `dotnet test` runs unit tests in a test project. It works with xUnit, NUnit, MSTest, and others.

`dotnet test` runs unit tests in a test project using a test runner like xUnit, NUnit, or MSTest.

## Basic Usage

--codebash

# Run all tests in the current project

dotnet test

# Run tests with specific configuration

dotnet test -c Release

# Run tests in a specific project

dotnet test tests/MyTests.csproj
--code

## Filtering Tests

--codebash

# Run tests by name

dotnet test --filter "Name=MySpecificTest"

# Run tests by category

dotnet test --filter "Category=Unit"

# Run tests that match a pattern

dotnet test --filter "FullyQualifiedName~Calculator"
--code

## Test Results

--codebash

# Run with detailed logging

dotnet test -v detailed

# Generate test results in TRX format

dotnet test --logger "trx"
--code
