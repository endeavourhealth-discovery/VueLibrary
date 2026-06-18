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

1. Set the new version number using `pnpm setVersion --to=<x.x.x>`
2. Run the node task `pnpmn build`

The pnpm build will perform the java build, typescript generation and publishing to local maven (and linked npm package once setup)

### Java Project (e.g. IMAPI)

1. Perform a clean build to ensure everything is building successfully
2. Bump the version reference in the project (e.g. `libs.versions.toml` or `pom.xml` file)
3. Perform a clean build to ensure everything is still building successfully

You can now make your changes in the VueLibrary/Java classes, re-run the `pnpm build` task, return to your Java project and rebuild.
All these changes will remain local.

### Node project (e.g. IMDirectory)

1. Perform a clean build to ensure everything is building successfully
2. Point your local package to your local VueLibrary `pnpm link ..\VueLibrary\`
3. Perform a clean build to ensure everything is still building successfully

You can now make your changes in the VueLibrary/Java classes, re-run the `pnpm build` task, return to your Java project and rebuild.
All these changes will remain local.

## Committing your changes

Once you're changes are complete and all code builds locally

1. Unlink VueLibrary from your local copy `pnpm unlink`
2. Commit & Push the VueLibrary changes
    * The CI/CD process will build the changes and push the new versions of the Java jar and npm package to the repository
2. Wait for the VueLibrary build to build successfully
3. Commit & Push your project changes
    * The CI/CD process will use the new packages from the repository