
import { Controller } from "Mvc/Controller";
import { SelectExample } from "../Views/SelectExample.js";

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
    public container(viewModel)
    {
        viewModel.set({
            meessage : "Something!"
        });
    }
}