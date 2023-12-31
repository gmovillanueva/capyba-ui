<!-- Intro Section-->
# Capyba UI

[Capyba UI](https://github.com/gmovillanueva/capyba-ui) is a free, open-source collection
of UI elements based on TailwindCSS, making it easy to place together to create websites.

Originally started as a collection of elements used for quickly prototyping designs with minor overhead. I decided to go ahead and release it into the wild.

<!-- Features Section-->
## Features

- [x] Wrote most of the README

<!-- Upcoming Features Section-->
## Upcoming Features

Still working on a roadmap...

<!-- Installation Section-->
## Installation

There is nothing to install!

<!-- Usage Section-->
## Usage

<!-- Development Section-->
## Development

<!-- Contributing Section-->
## Contributing

Feel like contributing?
Go ahead!

Still working on setting up a contributing guide.

<!-- License Section-->
## License

[MIT License](https://choosealicense.com/licenses/mit/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
