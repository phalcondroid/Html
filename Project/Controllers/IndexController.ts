import { Controller } from "Mvc/Controller";
import { SelectExample } from "../Views/SelectExample.js";

export class Selec
{
    constructor()
    {
        console.log("buena los selecs");
    }
}

export class Selec2
{
    constructor()
    {
        console.log("buena los selecs");
    }
}

export class IndexController extends Controller
{
    public initialize()
    {
        console.log("initialize controller");
    }

    @View({
        "elements"   : SelectExample,
        "initialize" : {
            "class"  : "someclass",
            "style"  : "text-align : center;"
        } 
    })
    public container(ViewModel)
    {
        new ViewModel({
            "data" : "mas data"
        });
    }
}