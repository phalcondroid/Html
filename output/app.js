System.register(["Starter/Application", "Config/AppConfig.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Application_1, AppConfig_js_1, config, application;
    return {
        setters: [
            function (Application_1_1) {
                Application_1 = Application_1_1;
            },
            function (AppConfig_js_1_1) {
                AppConfig_js_1 = AppConfig_js_1_1;
            }
        ],
        execute: function () {
            config = new AppConfig_js_1.AppConfig();
            application = new Application_1.Application(config);
            application.start();
        }
    };
});
