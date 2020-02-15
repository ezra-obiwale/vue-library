"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
module.exports = (function (slots) {
    return "\n### Slots\n\n| Name          | Description  | Bindings |\n| ------------- | ------------ | -------- |\n" + slots
        .map(function (slot) {
        var d = slot.description, bindings = slot.bindings, name = slot.name;
        var readableBindings = // serialize bindings to display them ina readable manner
         bindings && Object.keys(bindings).length ? JSON.stringify(bindings, null, 2) : '';
        return "| " + utils_1.mdclean(name) + " | " + utils_1.mdclean(d || '') + " | " + utils_1.mdclean(readableBindings) + " |"; // remplace returns by <br> to allow them in a table cell
    })
        .join('\n') + "\n";
});
