Package.describe({
    summary: "Lightweight jQuery Color Picker plugin with RGB, HSB and HEX fields, several skins and layouts."
});

Package.on_use(function (api) {
    api.add_files([
        "lib/bootstrap-colorpicker/js/bootstrap-colorpicker.js",
        "lib/bootstrap-colorpicker/css/bootstrap-colorpicker.css",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/alpha.png",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/hue.png",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/saturation.png"
    ], "client");

    api.add_files('path-override.css', 'client');
});