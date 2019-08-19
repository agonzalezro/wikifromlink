# wikifromlink

This project is a small React app that lets you create a wiki from a simple link: no storage, no *aaS. **Just a link.**

## How it works?

Every time you do a change the URL (actually the hash) changes including all the changes you have done. If you share the new URL to somebody else she will see whatever you are seeing at the moment.

Using the URL hash to encode the wiki has it pros and cons:

### Pros

- No storage required. All the needed information is stored in the URL hash.
- No server required. The rendering is done locally, you just need a CDN to download the JS.
- Compatible with markdown.

### Cons

- You always need to share the latest URL.
- Simpler history (when implemented) than other solutions.
- You can't use anchors to point to sections of the wiki... (this is probably fixable with the encoded JSON).

## Developing

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app), you can check its documentation if you need something more advanced.

Here we will list the usually required commands:

| Command          | Description |
|------------------|-------------|
| `npm start`      | Runs the app in the dev mode. The default port is [`:3000`](http://localhost:3000). |
| `npm test`       | Launches the test runner in the interactive watch mode. Sadly, there are not tests yet. |
| `npm run build`  | Builds the app for production to the `build` folder. |
| `npm run deploy` | Deploys the application in using GitHub's gh-pages. |