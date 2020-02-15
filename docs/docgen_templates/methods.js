"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var paramsTmpl = function (params) {
    var ret = "\n  ##### Params\n\n  | Param name     | Type        | Description  |\n  | ------------- |------------- | -------------|\n  ";
    params.forEach(function (p) {
        var t = p.type && p.type.name ? p.type.name : '';
        var n = p.name ? p.name : '';
        var d = typeof p.description === 'string' ? p.description : '';
        ret += "| " + utils_1.mdclean(n) + " | " + utils_1.mdclean(t) + " | " + utils_1.mdclean(d) + " |\n";
    });
    return ret;
};
var returnsTemplate = function (ret) {
    var p = ret;
    var t = p.type && p.type.name ? p.type.name : '';
    var d = p.description ? p.description : '';
    return "\n  ##### Return\n  | Type        | Description  |\n  | ------------- | -------------|\n  | " + t + " | " + d + " |\n  ";
};
var tmpl = function (methods) {
    var ret = '';
    methods.forEach(function (m) {
        ret += "\n  #### " + (m.name ? m.name : '') + "\n  > " + (m.description || '') + "\n\n  " + (m.params ? paramsTmpl(m.params) : '') + "\n  " + (m.returns ? returnsTemplate(m.returns) : '') + "\n  ";
    });
    return ret;
};
module.exports = (function (methods) {
    if (Object.keys(methods).length === 0)
        return '';
    return "\n### Methods\n  " + tmpl(methods) + "\n  ";
});
