Package.describe({
  name: 'mirageglobe:snapsvgcdn',
  summary: 'CDN based Snapsvg for Meteor',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('mirageglobe:snapsvgcdn.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirageglobe:snapsvgcdn');
  api.addFiles('mirageglobe:snapsvgcdn-tests.js');
});
