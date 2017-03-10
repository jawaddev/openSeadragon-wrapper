Package.describe({
  name: 'abarrahjaouad:openseadragon-wrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'simple wrapper for openseadragon and d3',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jawaddev/openSeadragon-wrapper.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('1.4.3.1');
  // Use Underscore package, but only on the server.
  // Version not specified, so it will be as of Meteor 0.9.0.
  api.use('modules');
  api.use('ecmascript');
  // When using ecmascript or modules packages, you can use this instead of
  // api.export and api.addFiles:
  api.mainModule('openseadragon-wrapper.js', 'client');
  api.export("openseadragon");
});
