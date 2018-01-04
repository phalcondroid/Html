System.register(["Mvc/Controller"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var Controller_1, Selec, Selec2, IndexController;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            }
        ],
        execute: function () {
            Selec = class Selec {
                constructor() {
                    console.log("buena los selecs");
                }
            };
            exports_1("Selec", Selec);
            Selec2 = class Selec2 {
                constructor() {
                    console.log("buena los selecs");
                }
            };
            exports_1("Selec2", Selec2);
            IndexController = class IndexController extends Controller_1.Controller {
                initialize() {
                    console.log("initialize controller");
                }
                julian(ViewModel) {
                    new ViewModel({
                        "data": "mas data"
                    });
                }
                julian2(ViewModel) {
                    new ViewModel({
                        "data2": "mas data222"
                    });
                }
            };
            __decorate([
                View({
                    "elements": Selec
                })
            ], IndexController.prototype, "julian", null);
            __decorate([
                View({
                    "elements": Selec2
                })
            ], IndexController.prototype, "julian2", null);
            exports_1("IndexController", IndexController);
        }
    };
});
