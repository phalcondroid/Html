///<reference path="../../chronos.d.ts"/>
System.register(["Mvc/View/Elements/Select", "./ViewOption.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Select_1, ViewOption_js_1, SelectExample;
    return {
        setters: [
            function (Select_1_1) {
                Select_1 = Select_1_1;
            },
            function (ViewOption_js_1_1) {
                ViewOption_js_1 = ViewOption_js_1_1;
            }
        ],
        execute: function () {///<reference path="../../chronos.d.ts"/>
            SelectExample = class SelectExample extends Select_1.Select {
                initialize() {
                    let option = new ViewOption_js_1.ViewOption;
                    option.append(this.get("message"));
                    this.append(option);
                }
            };
            exports_1("SelectExample", SelectExample);
        }
    };
});
