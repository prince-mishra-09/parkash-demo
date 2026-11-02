import fs from "fs";

const html = fs.readFileSync(".next/server/app/index.html", "utf8");
const links = html.match(/<link[^>]+rel="stylesheet"[^>]*>/g);
console.log("Found stylesheets:", links);

const cssFile = html.match(/href="\/_next\/static\/chunks\/[^"]+\.css"/);
console.log("CSS file linked:", cssFile ? cssFile[0] : "None");

