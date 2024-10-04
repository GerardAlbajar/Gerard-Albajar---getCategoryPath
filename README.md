# Vue Category Path TypeScript

This is a Vue 3 project that implements a system to manage and retrieve category and subcategory paths efficiently. The project is built using Vite as the build tool and Vitest for unit testing.

## Project Structure

- **src/**: Contains the source code of the application.
- **tests/**: Contains unit tests for the application.
- **package.json**: Configuration file for the project that includes dependencies and scripts.

## Dependencies

This project uses the following dependencies:

- **Vue**: The main library for building user interfaces.
- **Vite**: A fast and optimized development environment for Vue.js.
- **Vitest**: A fast unit testing framework specifically designed for Vite-based projects.

### DevDependencies

- **@vitejs/plugin-vue**: Vite plugin for handling Vue components.
- **@vue/test-utils**: Utilities for testing Vue components.
- **TypeScript**: A typed superset of JavaScript.
- **vue-tsc**: Tool for performing type checks on Vue files.

## Why Use Vitest

Since the official setup created by `create-vue` is based on Vite, we recommend using a unit testing framework that can leverage the same configuration and transform pipeline directly from Vite. Vitest is a unit testing framework designed specifically for this purpose, created and maintained by Vue / Vite team members. It integrates with Vite-based projects with minimal effort and is blazing fast.

## Scripts

The following scripts are available in the project:

- **dev**: Starts the development server.

  ```bash
  npm run dev
  ```

- **build**: Compiles the application for production.

  ```bash
  npm run build
  ```

- **preview**: Shows a preview of the built application.

  ```bash
  npm run preview
  ```

- **test**: Runs unit tests using Vitest.
  ```bash
  npm run test
  ```

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```
