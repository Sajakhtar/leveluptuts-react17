# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

And this project is based on [Level Up Tutorials](https://leveluptutorials.com/) [Reach for Everyone](https://leveluptutorials.com/tutorials/react-for-everyone/understanding-components) course.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## React Developer Tool

[Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

This extention make available 2 additonal tabs within Chrome Developer Tool:
- Components - here you can see your components (in a tree) and their props, hooks, state, source
- Profile


## Dependancies

```bash
npm install --save prop-types
```

## TMDB API

Create an account on [TMDB]() and request an API key.

[API documentation](https://developers.themoviedb.org/3/getting-started/introduction)

### [Discover endpoint](https://developers.themoviedb.org/3/discover/movie-discover)

API URL for Discover Movies: `https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

### [Config endpoint](https://developers.themoviedb.org/3/configuration/get-api-configuration)
API URL for Config: `https://api.themoviedb.org/3/configuration?api_key=<<api_key>>`

Image path stem: `https://image.tmdb.org/t/p/w500/`

### [Movie endpoint](https://developers.themoviedb.org/3/movies/get-movie-details)

API URL for a movie: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`

## [React Router](https://reactrouter.com/)

Install react router version for websites:

```bash
npm install --save react-router-dom
```

## Environment Variables

Typically install `donenv` and reference as `process.env.VAR_NAME`.

```bash
npm i donenv
```

But, since we're using `create-react-app` we can utilize its built in capability by starting environemt variable names as `REACT_APP_`, then rereference them as `process.env.REACT_APP_VAR_NAME`.


## React Frameworks

- [Gatsby](https://www.gatsbyjs.com/)
  - Most powerful for static sites, i.e. without User Authentication
  - ships HTML, CSS, JS to give the fastest sites possible
- [Next.js](https://nextjs.org/)
  - Most widely used React framework
  - Provides server side rendering on demand via serverside functions, meaning that sites are fast, SEO friendly and extendable/ buildable for the futre
  - created by Vercel, which are now supporting Svelte ecosystem e.g. Sveltekit
- [Meteor](https://www.meteor.com/)
  - Meteor gives you everything you need, where as Next.js and Gatsby are primarily for frontend, Meteor gives serverside components, database, user authentication/ accounts out of the box
  - fullstack functionality
- [RedwoodJS](https://redwoodjs.com/)
  - Still in development
  - includes GraphQL API, Prisma modelling tool to interact with DB
  - better for advanced users
  - fullstack functionality
- [Blits.js](https://blitzjs.com/)
  - "Zero API" data layer built on Next.js, inspired by Ruby on Rails
  - i.e. no need for rest or GraphQL
  - fullstack functionality


## Class Components

Thus far we've utilized function based components, but old code bases may have class based components as older versions of react used a class based syntax. Hooks and Functional Components are definitively declared to be the future.

Learn about class based components in [React 16 for everyone](https://leveluptutorials.com/tutorials/react-16-for-everyone/create-react-app-and-initial-files-explained).
