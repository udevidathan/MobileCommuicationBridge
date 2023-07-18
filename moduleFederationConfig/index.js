const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");

const mfConfig = (env) => {
  //inside env we get these env & based on the env we can load the correct urls
  const environment = (
    (env['local'] && 'local') || 
    (env['dev'] && 'dev') || 
    (env['preprod'] && 'staging') || 
    (env['prod'] && 'prod')
  ).toUpperCase();

  //this envVar will hold all the urls that is required in this module federation plugin
  //we can use envVar['shellAppUrl'] in the remotes, this is just an example

  const envVar = {
    shellAppUrl: process.env[`SHELL_APP_${environment}_URI`],
  }

  return ({
    plugins: [
      new ModuleFederationPlugin({
        name: "shell",
        filename: "shellEntry.js",
        remotes: {},
        exposes: {},
        shared: packageJSON.dependencies
      }),
    ]
  });
};

module.exports = mfConfig;