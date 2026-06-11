# VueLibrary

## Introduction

This document outlines the steps that should be followed to allow local development of changes and the correct commit order for repositories.

## Overview

This repository contains the Java model classes (and some necessary/related helpers & utilities) which are the "source of truth" for
other repositories/sub projects such as IM Directory and IM Query Runner. This is achieved by generating
typescript interfaces and enums directly from the Java code.

## Making Changes

To ensure smooth development without breaking existing code/builds, these steps should be followed, in this order.

### VueLibrary

1. Bump the version in [Java](./Library/build.gradle.kts)
2. Run the gradle task `Library/publishToMavenLocal`
3. Bump the version in [Typescript](./package.json)
4. Run the node task `pnpmn build`

### Java Project (e.g. IMAPI)

1. Perform a clean build to ensure everything is building successfully
2. Bump the version reference in the project (e.g. `libs.versions.toml` or `pom.xml` file)
3. Perform a clean build to ensure everything is still building successfully

You can now make your changes in the VueLibrarr/Java classes, re-run the `publishToMavenLocal` task, return to your Java project and rebuild.
All these changes will remain local.

### Node project (e.g. IMDirectory)

1. Perform a clean build to ensure everything is building successfully
2. Point your local package to your local VueLibrary `pnpm link ..\VueLibrary\`
3. Perform a clean build to ensure everything is still building successfully

You can now make your changes in the VueLibrarr/Java classes, re-run the `publishToMavenLocal` task, return to your Java project and rebuild.
All these changes will remain local.

## Committing your changes

Once you're changes are complete and all code builds locally

1. Commit & Push the VueLibrary changes
    * The CI/CD process will build the changes and push the new versions of the Java and node libraries to the repository
2. Wait for the VueLibrary build to build successfully
3. Commit & Push your project changes
    * The CI/CD process will use the packages from the repository