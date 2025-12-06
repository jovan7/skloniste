# 🐾 Sklonište

> A modern digital home for animal rescue and adoption.

**Sklonište** is an animal rescue shelter platform built to connect pets with their forever homes. It utilizes a headless CMS for easy content management and a modern frontend for a fast, responsive user experience.

---

## 🛠️ Tech Stack

* **Framework:** [Angular](https://angular.dev/) (v20+)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **CMS:** [Contentful](https://www.contentful.com/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/your-username/skloniste.git](https://github.com/your-username/skloniste.git)
cd skloniste
npm install
## Development server

To start a local development server, run:

ng serve
```

### 3. Environment Configuration
⚠️ Important: You must configure your Contentful credentials for the app to fetch data.

Create a .env file in the root directory.

Add the following keys:

```
NG_APP_TOKEN=[your_contentful_delivery_api_key]
NG_APP_SPACE=[your_contentful_space_id]
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
