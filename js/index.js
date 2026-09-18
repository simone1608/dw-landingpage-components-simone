import Hero from "../components/Hero.js";
import Service from "../components/Service.js";
import Facilities from "../components/Facilities.js";
import Sites from "../components/Sites.js";


let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";


    let mainElement = document.createElement("main");
    mainElement.append(Hero());
    mainElement.append(Service(services))
    mainElement.append(Facilities(facilities))
    mainElement.append(Sites(sites))


    rootElement.append(mainElement)
}

function init() {
    render()
}

init()
