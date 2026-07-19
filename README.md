# VueLibrary

## Introduction

This document outlines the steps that should be followed to allow local development of changes and the correct commit order for repositories.

## Overview

This repository contains the Java model classes (and some necessary/related helpers & utilities) which are the "source of truth" for
other repositories/sub projects such as IM Directory and IM Query Runner. This is achieved by generating
typescript interfaces and enums directly from the Java code.

## Prerequisites

| Tool  | Version |
|-------|---------|
| node  | 22.20.0 |
| npm   | 10.9.3  |
| pnpm  | 10.34.2 |

## Making Changes

To ensure smooth development without breaking existing code/builds, these steps should be followed, in this order.

### VueLibrary

1. Set the new version number using `pnpm setVersion --to=<x.x.x>`  (note that this will error if its that version already)
2. You can now make your changes in the VueLibrary/Java classes, 
3. run the `pnpm build` task, return to your Java project and rebuild.
   All these changes will remain local.

The pnpm build will perform the java build, typescript generation and publishing to local maven (and linked npm package once setup)

### Java project (e.g. IMAPI)
1. You must make equivalent changes to the Java project model for compatibility if IMAPI is using the new model.

### Node project (e.g. IMDirectory)

1. bump the version in the package json dependency "@endeavour/vue-library"
2. perform pnpm install to use it 
3. You can now use the new model in your project

## Committing your changes

Once you're changes are complete and all code builds locally

1. Commit Vue library first
2. Then commit your projects that use it
