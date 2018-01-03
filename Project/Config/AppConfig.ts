import { ConfigInterface } from "Config/ConfigInterface";
import { Services } from "./Services";
import { IndexController } from "../Controllers/IndexController";

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