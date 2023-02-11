# React + Redux Toolkit Authorization and Authentication Example

This is a repository to give you example about how to do authorization and authentication in a React.js app with using Redux Toolkit.

## Features

- Yarn package manager
- TypeScript
- Redux Toolkit
- Simple authorization and authentication
- Yup + Formik
- Husky + Eslint + Prettier + lint-staged
- Tailwindcss + Postcss + Autoprefixer
- Axios

## Advice

- Migrate to React Context or Zustand for state management
- Remove unused file in your future project
- Adjust `tsconfig.json` file according to your need

## Scripts

- Run `yarn start` to start the development server
  ```bash
  yarn start
  ```
- Run `yarn lint` to run eslint to check code consistency
  ```bash
  yarn lint
  ```
- Run `yarn build` to build the app
  ```bash
  yarn build
  ```

## Additional Scripts

These scripts will run **everytime you create a new commit** to maintain code style and consistency. Check the `.prettierrc` and `eslint.json` files for configuring according to your need.

- Run `yarn lint:fix` to run eslint to fix code style
  ```bash
  yarn lint:fix
  ```
- Run `yarn prettier:write` to rewrite code style
  ```bash
  yarn prettier:write
  ```