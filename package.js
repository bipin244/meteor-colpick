Package.describe({
    summary: "Lightweight jQuery Color Picker plugin with RGB, HSB and HEX fields, several skins and layouts - packaged for meteor."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');

    api.add_files([
        "lib/css/colpick.css",
        "lib/js/colpick.js"
    ], "client");
});