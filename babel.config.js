const ignore = [
  /[\/\\]core-js/,
  /@babel[\/\\]runtime/,
];

const sourceType = 'unambiguous';
const presets = [
  [
    "@babel/env",
    {
      modules: false,
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        ie: "11"
      },
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
];

module.exports = { ignore,sourceType,presets };