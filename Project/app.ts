import {Application}  from "Starter/Application";
import {Config}       from "Environment/Config";
import {AppConfig}    from "Config/AppConfig.js";

var config = new AppConfig();

let application = new Application(config);
application.start();