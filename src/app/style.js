import { get, append } from "./utils";
const s = get("style");
append(append(document.head, s), document.createTextNode(""));
let id = 0;
export function style(role) {
    s.sheet.insertRule(role, id++);
}