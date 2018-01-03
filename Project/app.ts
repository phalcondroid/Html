import {Application}  from "Starter/Application";
import {Config}       from "Environment/Config";
import {AppConfig}    from "Config/AppConfig";

var config = new AppConfig();

let application = new Application(config);
application.start();

console.log("le estarter");