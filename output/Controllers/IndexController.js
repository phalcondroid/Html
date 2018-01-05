System.register(["Mvc/Controller", "../Views/SelectExample.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var Controller_1, SelectExample_js_1, IndexController;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            },
            function (SelectExample_js_1_1) {
                SelectExample_js_1 = SelectExample_js_1_1;
            }
        ],
        execute: function () {
            IndexController = class IndexController extends Controller_1.Controller {
                initialize() {
                    console.log("initialize controller");
                }
                container(viewModel) {
                    viewModel.set({
                        meessage: "Something!"
                    });
                }
            };
            __decorate([
                View({
                    "elements": SelectExample_js_1.SelectExample,
                    "initialize": {
                        "class": "someclass",
                        "style": "text-align : center;"
                    }
                })
            ], IndexController.prototype, "container", null);
            exports_1("IndexController", IndexController);
        }
    };
});
