System.register(["Mvc/Model/AjaxModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("News", News);
        }
    };
});
