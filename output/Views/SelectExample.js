System.register(["Mvc/View/Elements/Select"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Select_1, SelectExample;
    return {
        setters: [
            function (Select_1_1) {
                Select_1 = Select_1_1;
            }
        ],
        execute: function () {
            SelectExample = class SelectExample extends Select_1.Select {
                initialize() {
                }
            };
            exports_1("SelectExample", SelectExample);
        }
    };
});
