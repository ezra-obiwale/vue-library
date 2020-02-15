"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var tmpl = function (events) {
    var ret = '';
    events.forEach(function (evt) {
        var _a = evt.description, description = _a === void 0 ? '' : _a, e = __rest(evt, ["description"]);
        var t = e.type && e.type.names ? e.type.names.join(' ') : '';
        ret += "| " + utils_1.mdclean(e.name) + " | " + utils_1.mdclean(t) + " | " + utils_1.mdclean(description) + "\n";
    });
    return ret;
};
module.exports = (function (events) {
    return "\n### Events\n  | Event name     | Type        | Description  |\n  | ------------- |------------- | -------------|\n  " + tmpl(events) + "\n  ";
});
