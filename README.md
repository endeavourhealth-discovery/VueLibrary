# VueLibrary

## Introduction

This document outlines the steps that should be followed to allow local development of changes and the correct commit order for repositories.

## Overview

This repository contains the Java model classes (and some necessary/related helpers & utilities) which are the "source of truth" for
other repositories/sub projects such as IM Directory and IM Query Runner. This is achieved by generating
typescript interfaces and enums directly from the Java code.

## Prerequisites

| Tool | Version |
| ---- | ------- |
| node | 22.20.0 |
| npm  | 10.9.3  |
| pnpm | 11.15.1 |

## Making Changes

To ensure smooth development without breaking existing code/builds, these steps should be followed, in this order.

## Local development

To allow you to develop smoothly it is advised to create an npm link between VueLibrary and you consuming app. This will allow changes to be used without having to publish VueLibrary to npm.

1. In VueLibrary console `pnpm link`
2. In consuming app console `pnpm link "../VueLibrary"` assuming a similar filestructure:

```text
codebase/
├── VueLibrary
├── IMAPI
└── IMDirectory
```

A successful link will add an overrides section for `@endeavour/vue-library` in the package.json (pnpm v10) or pnpm-workspace.yaml (pnpm v11).

To remove a linked project simply run `pnpm unlink` in the consuming apps console.

### VueLibrary

1. Set the new version number using `pnpm setVersion --to=<x.x.x>` (note that this will error if that version is already used).
2. You can now make your changes in the VueLibrary.
3. Run the `pnpm build` task.
4. Run the `pnpm test:unit` task.
5. Commit the changes when you need the version to be used.

The ci/cd pipeline for VueLibrary will automatically update the package on npm allowing you to consume the new version.

### Node project (e.g. IMDirectory)

1. bump the version in the package json dependency "@endeavour/vue-library"
2. perform pnpm install to use it
3. You can now use the new model in your project

## Committing your changes

Once you're changes are complete and all code builds locally

1. Commit Vue library first
2. Then commit your projects that use it
