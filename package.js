Package.describe({
    name: 'zlot:touch-marker',
    version: '0.0.5',
    summary: 'A nice looking touch-marker that fades in and out on touchstart/touchmove/touchend document event',
    git: 'https://github.com/zlot/meteor-touch-marker.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles('touch-marker.js', 'client');
    api.addFiles('touch-marker.css', 'client');
    api.export('TouchMarker');
});