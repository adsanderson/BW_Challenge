# BW_Challenge

[![Build Status](https://travis-ci.org/adsanderson/BW_Challenge.svg?branch=master)](https://travis-ci.org/adsanderson/BW_Challenge)

[Live example](http://bw-challenge.adamsanderson.co.uk.s3-website-eu-west-1.amazonaws.com/)

## Technologies used

- React + Redux
- Webpack (bundling of JS and CSS assests)
- Tape (Testing)

### Prerequisites

[Node.js](https://nodejs.org)

Gulp: `$ npm install --global gulp`

### Initial setup

Navigate to the root of the project and run the following command:

`$ npm install`

With the dependencies installed you can run a local development server, tests or build the production files.

### Dev server

To run a development server for development purposes run:

`$ gulp`

### Testing

To run the unit tests for this project run:

`$ gulp test`

### Build

To create the production version of the project run:

`$ gulp build`

### Development Build

To create the development bundle run:

`$ gulp build-dev`