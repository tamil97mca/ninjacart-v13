# NinjaCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Compodoc

Angular `Compodoc` is a documentation tool specifically designed for Angular applications. It generates comprehensive and interactive documentation for your Angular projects, providing valuable insights into your codebase, components, services, modules, and more. The primary goal of Compodoc is to help developers understand, visualize, and maintain their Angular applications more effectively. [Angular Compodoc Reference] (https://compodoc.app/guides/installation.html)

Global installation

Install from npm : `npm install -g @compodoc/compodoc`

If you use PowerShell on Windows, add quotes : `npm install -g "@compodoc/compodoc"`

Local installation

Install with Angular CLI : npm scripts + special tsconfig.doc.json file will be created.
`ng add @compodoc/compodoc`

or directly

`npm install --save-dev @compodoc/compodoc`

Run

Create a file named tsconfig.doc.json, containing a key include pointing to src folder, you can also use exclude key :

`{
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
}`

Define a script task for it in your package.json (with npm 6.x) :

`"scripts": {
  "compodoc": "npx compodoc -p tsconfig.doc.json"
}`

and run it like a normal npm script (Generate the documentation) : `npm run compodoc`

Serve the documentation: `compodoc -so`
