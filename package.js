Package.describe({
  name: 'mirageglobe:snapsvgcdn',
  summary: 'Latest version html5shiv loaded via CDN',
  version: '1.2.0',
  git: 'https://github.com/mirageglobe/meteorsnapsvgcdn'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('mirageglobe:snapsvgcdn.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirageglobe:snapsvgcdn');
  api.addFiles('mirageglobe:snapsvgcdn-tests.js','client');
});
