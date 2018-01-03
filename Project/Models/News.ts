import { AjaxModel } from "Mvc/Model/AjaxModel";

export class News extends AjaxModel
{
    private id           : number = 0;
    private publicId     : string = "";
    private title        : string = "";
    private bodyContent  : string = "";
    private imagePreview : string = "";
    private videoLink    : string = "";
    private show         : boolean = true;

    public setId(id) { this.id = id; }
    public getId() { return this.id; }

    public setPublicId(publicId : string) { this.publicId = publicId; }
    public getPublicId() : string { return this.publicId; }

    public setTitle(value : string) { this.title = value; }
    public getTitle() : string { return this.title; }

    public setBodyContent(content : string) { this.bodyContent = content; }
    public getBodyContent() { return this.bodyContent; }

    public setImagePreview(img : string) { this.imagePreview = img; }
    public getImagePreview() { return this.imagePreview; }

    public setVideoLink(link : string) { this.videoLink = link; }
    public getVideoLink() { return this.videoLink; }

    public setShow(show : boolean) { this.show = show; }
    public getShow() { return this.show; }
}