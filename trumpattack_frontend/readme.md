# Whack trump attack - frontend

### A boilerplate with React and Redux

Features:
* Webpack 2
* React
* React Router
* Redux
* SASS
* Test utilities

### Installation

```sh
git clone [git-repo-url] your-project-folder-name
cd your-project-folder-name
npm i
npm start
```

### Scripts
List of avaliable scripts

| Command        | Description  |
| ------------- |:-------------:|
| `npm start`      | Starts webpack dev server with hot reloading |
| `npm run start:open`      | Same as above but opens the deafult web browser |
| `npm run build`      | Builds the project in `dist/` with development settings |
| `npm run build:prod` | Builds the project in `dist/` with production settings |
| `npm run clean-dist` | Clear the `dist/` folder |
| `npm run copy-files` | Copy files to `dist/` folder |
| `npm run clean-and-copy` | Clear and copy files to the `dist` folder |
| `npm run validate-webpack:dev` | Validates webpack development settings |
| `npm run validate-webpack:prod` | Validates webpack production settings |
| `npm test` | Run tests |
| `npm run test:watch` | Run test and watch for changes |
| `npm run test:coverage` | Generate test coverage report |

### Tests
Tests are written with [AVA](https://github.com/avajs/ava)

Create a new file in `tests/` and name it `*.spec.js`.

Test utilities:
- [Sinon](http://sinonjs.org/) _Spies, stubs and mocks_
- [Enzyme](https://github.com/airbnb/enzyme) _Test components_

### Project structure
*I like to have Redux actions and reducers in separate folders. In this way the Redux part of the application can simply be moved to other projects (for example, a React Native project)*

- `src/`
	- `redux/`					- _Redux folder_
		- `actions/` 				- _Redux actions_
		- `reducers/`				- _Redux reducers_
	- `app/`						- _Core components and routes_
	- `components/`			- _Components_
	- `screens/`				- _Views_
	- `assets/`			
		- `style/`				- _SASS..._
		- `images/`				
- `tests/`						- _Tests_

### Linting
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

I use the [XO](https://github.com/sindresorhus/xo) plugin for linting (with some rules that I prefer). Linting rules are specified in `package.json`.
Feel free to use it with your favorite editor or remove it!

I have tried it with [Atom](https://atom.io/packages/linter-xo) and [Sublime-Text 3](https://github.com/sindresorhus/SublimeLinter-contrib-xo)
