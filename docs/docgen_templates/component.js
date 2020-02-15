"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderedComponents = 0
var target = 2
module.exports = (function (renderedUsage, doc, config, fileName) {
    var displayName = doc.displayName, description = doc.description, docsBlocks = doc.docsBlocks, tags = doc.tags, functional = doc.functional;
    var _a = tags || {}, deprecated = _a.deprecated, author = _a.author, since = _a.since, version = _a.version, see = _a.see, link = _a.link;

    const render = (renderedComponents === target ? '# Components' : '') + (!config.outFile && deprecated
        ? // to avoid having the squiggles in the left menu for deprecated items
            // use the frontmatter feature of vuepress
            "\n---\ntitle: " + displayName + "\n---"
        : '') + "\n  ## " + (deprecated ? "~~" + displayName + "~~" : displayName) + "\n\n  " + (deprecated ? "> **Deprecated** " + deprecated[0].description + "\n" : '') + "\n  " + (description ? '> ' + description : '') + "\n  \n  " + (functional ? renderedUsage.functionalTag : '') + "\n  " + (author ? author.map(function (a) { return "Author: " + a.description + "\n"; }) : '') + "\n  " + (since ? "Since: " + since[0].description + "\n" : '') + "\n  " + (version ? "Version: " + version[0].description + "\n" : '') + "\n  " + (see ? see.map(function (s) { return "[See](" + s.description + ")\n"; }) : '') + "\n  " + (link ? link.map(function (l) { return "[See](" + l.description + ")\n"; }) : '') + "\n\n  " + renderedUsage.props + "\n  " + renderedUsage.methods + "\n  " + renderedUsage.events + "\n  " + renderedUsage.slots + "\n  " + (docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : '') + "\n  ";

    if (renderedComponents < target) {
        renderedComponents++
    }

    return render
});
