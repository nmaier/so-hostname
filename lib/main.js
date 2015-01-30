const {data} = require("sdk/self");
const {PageMod} = require("sdk/page-mod");

PageMod({
    include: "*.example.org",
    contentScriptFile: data.url("content.js"),
    contentScriptOptions: require("./hostname"),
    contentScriptWhen: "start",
});
