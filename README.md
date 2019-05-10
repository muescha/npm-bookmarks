# Personal NPM Bookmarks

This is a bookmark site for personal NPM favorites, built with [Gatsby](https://www.gatsbyjs.org/).

It features search and tags to filter available packages – these are fetched from the [npms.io](https://npms.io/) API.

## Demo

https://npm-bookmarks.netlify.com

## Manage favorites

Packages are added to `src/packages.json` including assigned tags.

## What's inside?

The site is a playground for Gatsby and React. A couple of _technical demos_ are included.

Some highlights:

- An adapted version of [gatsby-source-apiserver](https://www.gatsbyjs.org/packages/gatsby-source-apiserver/?=gatsby-source-apiserver) is used to fetch the API at build time.
- A [static query](https://www.gatsbyjs.org/docs/static-query/) is used in [footer.js](https://github.com/cardiv/npm.cardiv.de/blob/master/src/components/footer.js) to [process an image](https://www.gatsbyjs.org/docs/working-with-images/).
- CSS-in-JS with [styled-components](https://www.styled-components.com/) – specially used are [normalize](https://www.npmjs.com/package/styled-normalize), [createGlobalStyle](https://www.styled-components.com/docs/api#createglobalstyle) and [ThemeProvider](https://www.styled-components.com/docs/advanced#theming) in [layout.js](https://github.com/cardiv/npm.cardiv.de/blob/master/src/components/layout.js)/[layout.styled.js](https://github.com/cardiv/npm.cardiv.de/blob/master/src/components/layout.styled.js).
- [item.js](https://github.com/cardiv/npm.cardiv.de/blob/master/src/components/packages/item.js) imports icons using [react-fontawesome](https://github.com/FortAwesome/react-fontawesome).
- Notable ES6/React stuff used: [Set](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set) in [list.js](https://github.com/cardiv/npm.cardiv.de/blob/master/src/components/packages/list.js) and [ClassProperties](https://michalzalecki.com/react-components-and-class-properties/) in every stateful component.

## TODO

- [X] Sorting by download count
- [ ] Refresh single package data in browser

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cardiv/npm.cardiv.de)
