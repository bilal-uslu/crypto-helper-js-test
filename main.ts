import {api} from "crypto-helper-js"

let textElement: HTMLDivElement = document.getElementById("text") as HTMLDivElement;

textElement.innerText = api().getData('test prodx');
