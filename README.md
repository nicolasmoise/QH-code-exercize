### Introduction

I used https://github.com/kriasoft/react-starter-kit as my base and built on top of it.

The exercize was built and divided into different React.js components as follows:

- [The Depression Screener component](https://github.com/nicolasmoise/QH-code-exercize/tree/master/src/components/DepressionScreener) contains all the questions and the logic for calculating the score
- [The Depression Screener Result component](https://github.com/nicolasmoise/QH-code-exercize/tree/master/src/components/DepressionScreenerResult) displays the result based on your PHQ-9 test and recommends therapists if need be
- [The Multiple Choice Question component](https://github.com/nicolasmoise/QH-code-exercize/tree/master/src/components/MultipleChoiceQuestion) a re-usable component to create multiple choice questions
- [The Therapist Picker component](https://github.com/nicolasmoise/QH-code-exercize/tree/master/src/components/TherapistPicker) a re-usable component that allow you to select a therapist from a list

As you can see, most of my work was done in the components directory. The PHQ-9 test form uses the native HTML5 validation. I did not include any Jest unit tests for my components but these would be necessary if this was an actual project.



### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
│   └── /router.js              # React Routing
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /config.js              # Webpack configuration for both client and server side bundles
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /serve.js               # Launches the Node.js/Express web server in a seperate process
│   ├── /start.js               # Launches the development web server with "live reload" functionality
│   └── /(deploy.js)            # Deploys your web application (Planned)
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```

### Getting Started

```shell
$ git clone https://github.com/nicolasmoise/QH-code-exercize.git -b master
$ cd QH-code-exercize
$ npm install                   # Install Node.js components listed in ./package.json
$ npm start                     # Compile and launch
```

### How to Build

```shell
$ npm run build                 # or, `npm run build -- release`
```

By default, it builds in a *debug* mode. If you need to build in a release
mode, just add `-- release` flag. This will optimize the output bundle for
production deployment.

### How to Run

```shell
$ npm start                     # or, `npm start -- release`
```

This will start a lightweight development server with "live reload" and
synchronized browsing across multiple devices and browsers.
