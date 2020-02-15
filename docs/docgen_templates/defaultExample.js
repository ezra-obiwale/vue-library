"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function getDefaultText() {
    return 'lorem ipsum';
}
function getDefaultNumber() {
    return '42';
}
function getDefaultBoolean() {
    return 'true';
}
function getDefaultArray() {
    return '[1, 2, 3]';
}
function getDefaultFunction() {
    return '() => void';
}
function getDefaultDate() {
    return 'new Date(\'2012-12-12\')';
}
function getDefaultObject() {
    return '{}';
}
function getDefault(prop) {
    if (!prop || !prop.type) {
        return getDefaultText();
    }
    else if (prop.type.name === 'string') {
        return getDefaultText();
    }
    else if (prop.type.name === 'number') {
        return getDefaultNumber();
    }
    else if (prop.type.name === 'boolean') {
        return getDefaultBoolean();
    }
    else if (prop.type.name === 'object') {
        return getDefaultObject();
    }
    else if (prop.type.name === 'array') {
        return getDefaultArray();
    }
    else if (prop.type.name === 'func') {
        return getDefaultFunction();
    }
    else if (prop.type.name === 'date') {
        return getDefaultDate();
    }
    return getDefaultText();
}
module.exports = (function (doc) {
    var displayName = doc.displayName, props = doc.props, slots = doc.slots;
    var cleanedName = utils_1.cleanName(displayName);
    var propsAttr = props
        ? props.filter(function (p) { return p.required; }).map(function (p) { return " " + p.name + "=\"" + getDefault(p) + "\""; })
        : [];
    return "\n### Example\n```vue live\n  <" + cleanedName + propsAttr.join(' ') + (!slots || !slots.filter(function (s) { return s.name === 'default'; })
        ? '/>'
        : ">" + getDefaultText() + "</" + cleanedName + ">") + "\n```\n";
});
