///<reference path="../../chronos.d.ts"/>

import { Select } from "Mvc/View/Elements/Select";
import { ViewOption } from "./ViewOption.js";

export class SelectExample extends Select
{
    public initialize()
    {
        let option = new ViewOption; 
        option.append(
            this.get("message")
        );
        this.append(
            option
        );
    }
}