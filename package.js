Package.describe({
    summary: "HighCharts for Meteor, with an easy to use helper to get you started!",
    version: "5.0.7.1",
    documentation: 'README.md',
    git: "https://github.com/daoli/highcharts.git",
    name: "daoli:highcharts"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.4');
    api.use('jquery');
    api.use('templating');

    // basic highcharts
    api.addFiles([
      // Core
      'code/highcharts.js',
      'code/highcharts-3d.js',
      'code/highcharts-more.js',
      'code/modules/no-data-to-display.js',
      // Modules
      'code/modules/exporting.js',
      'code/modules/offline-exporting.js',
      'export-csv.js',
      // Helper
      'highchartsHelper.html',
      'highchartsHelper.js',
    ], 'client');
});
