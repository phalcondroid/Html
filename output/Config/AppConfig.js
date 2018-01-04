System.register(["./Services.js", "../Controllers/IndexController.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services_js_1, IndexController_js_1, AppConfig;
    return {
        setters: [
            function (Services_js_1_1) {
                Services_js_1 = Services_js_1_1;
            },
            function (IndexController_js_1_1) {
                IndexController_js_1 = IndexController_js_1_1;
            }
        ],
        execute: function () {
            AppConfig = class AppConfig {
                get() {
                    return {
                        "paths": {
                            "baseUrl": "laurl",
                            "base": "jajaja"
                        },
                        "service": Services_js_1.Services,
                        "controllers": [
                            IndexController_js_1.IndexController
                        ]
                    };
                }
            };
            exports_1("AppConfig", AppConfig);
        }
    };
});
