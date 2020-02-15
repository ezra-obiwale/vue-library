"use strict";
/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * replaces returns and tubes to make the input compatible with markdown
 * @param input
 */
function mdclean(input) {
    return input.replace(/\r?\n/g, '<br>').replace(/\|/g, '\\|');
}
exports.mdclean = mdclean;
function cleanName(name) {
    return name.replace(/[^A-Za-z0-9-]/g, '');
}
exports.cleanName = cleanName;
