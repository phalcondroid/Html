import { Controller } from "Mvc/Controller";

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
        "elements" : Selec
    })
    public julian(ViewModel)
    {
        new ViewModel({
            "data" : "mas data"
        });
    }

    @View({
        "elements" : Selec2
    })
    public julian2(ViewModel)
    {
        new ViewModel({
            "data2" : "mas data222"
        });
    }
}