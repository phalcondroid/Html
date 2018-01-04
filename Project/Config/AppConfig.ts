
import { Services }        from "./Services.js";
import { ConfigInterface } from "Config/ConfigInterface";
import { IndexController } from "../Controllers/IndexController.js";

export class AppConfig implements ConfigInterface
{
    public get() : Object
    {
        return {
            "paths" : {
                "baseUrl" : "laurl",
                "base"    : "jajaja"
            },
            "service" : Services,
            "controllers" : [
                IndexController
            ]
        };
    }
}