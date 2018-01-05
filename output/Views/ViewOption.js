System.register(["Mvc/View/Elements/Option"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Option_1, ViewOption;
    return {
        setters: [
            function (Option_1_1) {
                Option_1 = Option_1_1;
            }
        ],
        execute: function () {
            ViewOption = class ViewOption extends Option_1.Option {
            };
            exports_1("ViewOption", ViewOption);
        }
    };
});
