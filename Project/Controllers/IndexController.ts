import { Controller } from "Mvc/Controller";

export class IndexController extends Controller
{
    public initialize()
    {
        console.log("initialize controller");
    }

    public julian()
    {
        console.log("call julian");
    }
}