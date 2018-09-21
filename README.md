# Introduction to Typescript

This repository has basic setup and material for a "Introduction to Typescript" workshop that I've
planned to keep at my workplace. Still a **WORK IN PROGRESS**.

### Environment setup

- Node & npm [https://nodejs.org/en/](https://nodejs.org/en/)
- Create a project [https://github.com/wmonk/create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)
- Install Typescript either globally `npm install typescript -g` or locally in
  the created project folder `npm install typescript --save`

### Topics covered in the workshop

1. Environment walkthrough
   - tsconfig [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
     - target
     - module
     - strict rules
   - build tools
   - editors
   - tslint [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)
   - ts-node [https://github.com/TypeStrong/ts-node](https://github.com/TypeStrong/ts-node)
2. Basic types (example1.ts)
3. Interfaces and types (example2.ts)
4. @types/\*\* packages and d.ts files (example3.ts) // **TODO**
   - declare global types
   - extend existing library functionalities

### Tips

- Official docs [https://www.typescriptlang.org/docs/home.html](https://www.typescriptlang.org/docs/home.html)
- Compiler options [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- Typescript declaration files [https://basarat.gitbooks.io/typescript/docs/types/ambient/d.ts.html](https://basarat.gitbooks.io/typescript/docs/types/ambient/d.ts.html)
- Good typescript stuff
  - [https://blog.mariusschulz.com/](https://blog.mariusschulz.com/)
  - [https://www.typescript-weekly.com/](https://www.typescript-weekly.com/)

### General commands

- `tsc --init` to create a default `tsconfig.json` configuration file
- `tsc` compile typescript to the `outDir` defined in `tsconfig.json`
- `tsc -w` compile typescript and watch for changes
