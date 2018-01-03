System.register("Config/Services", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services;
    return {
        setters: [],
        execute: function () {
            Services = class Services {
                /**
                 *
                 */
                initialize(di) {
                }
            };
            exports_1("Services", Services);
        }
    };
});
System.register("Controllers/IndexController", ["Mvc/Controller"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Controller_1, IndexController;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            }
        ],
        execute: function () {
            IndexController = class IndexController extends Controller_1.Controller {
                initialize() {
                    console.log("initialize controller");
                }
                julian() {
                    console.log("call julian");
                }
            };
            exports_2("IndexController", IndexController);
        }
    };
});
System.register("Config/AppConfig", ["Config/Services", "Controllers/IndexController"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Services_1, IndexController_1, AppConfig;
    return {
        setters: [
            function (Services_1_1) {
                Services_1 = Services_1_1;
            },
            function (IndexController_1_1) {
                IndexController_1 = IndexController_1_1;
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
                        "service": Services_1.Services,
                        "controllers": [
                            IndexController_1.IndexController
                        ]
                    };
                }
            };
            exports_3("AppConfig", AppConfig);
        }
    };
});
System.register(["Starter/Application", "Config/AppConfig"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Application_1, AppConfig_1, config, application;
    return {
        setters: [
            function (Application_1_1) {
                Application_1 = Application_1_1;
            },
            function (AppConfig_1_1) {
                AppConfig_1 = AppConfig_1_1;
            }
        ],
        execute: function () {
            config = new AppConfig_1.AppConfig();
            application = new Application_1.Application(config);
            application.start();
            console.log("le estarter");
        }
    };
});
System.register("Models/News", ["Mvc/Model/AjaxModel"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var AjaxModel_1, News;
    return {
        setters: [
            function (AjaxModel_1_1) {
                AjaxModel_1 = AjaxModel_1_1;
            }
        ],
        execute: function () {
            News = class News extends AjaxModel_1.AjaxModel {
                constructor() {
                    super(...arguments);
                    this.id = 0;
                    this.publicId = "";
                    this.title = "";
                    this.bodyContent = "";
                    this.imagePreview = "";
                    this.videoLink = "";
                    this.show = true;
                }
                setId(id) { this.id = id; }
                getId() { return this.id; }
                setPublicId(publicId) { this.publicId = publicId; }
                getPublicId() { return this.publicId; }
                setTitle(value) { this.title = value; }
                getTitle() { return this.title; }
                setBodyContent(content) { this.bodyContent = content; }
                getBodyContent() { return this.bodyContent; }
                setImagePreview(img) { this.imagePreview = img; }
                getImagePreview() { return this.imagePreview; }
                setVideoLink(link) { this.videoLink = link; }
                getVideoLink() { return this.videoLink; }
                setShow(show) { this.show = show; }
                getShow() { return this.show; }
            };
            exports_5("News", News);
        }
    };
});
