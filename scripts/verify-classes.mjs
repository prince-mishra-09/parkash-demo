import fs from "fs";
import path from "path";

const html = fs.readFileSync(".next/server/app/index.html", "utf8");

// Find all class names in HTML
const classMatches = html.matchAll(/class="([^"]+)"/g);
const usedClasses = new Set();
for (const match of classMatches) {
  match[1].split(/\s+/).forEach(cls => {
    if (cls) usedClasses.add(cls);
  });
}

console.log(`Total distinct classes used in index.html: ${usedClasses.size}`);

// Read generated CSS
const chunksDir = path.join(".next", "static", "chunks");
const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith(".css"));
console.log("CSS chunks found:", cssFiles);

let combinedCSS = "";
for (const f of cssFiles) {
  combinedCSS += fs.readFileSync(path.join(chunksDir, f), "utf8") + "\n";
}

console.log(`Combined CSS length: ${combinedCSS.length} bytes`);

// Check new Quiet Luxury palette classes
const quietLuxuryClasses = [
  "flex", "grid", "hidden", "lg:flex", "lg:grid", "sm:grid-cols-2", "lg:grid-cols-4",
  "bg-[#17352D]", "bg-[#142B24]", "bg-[#FAF7F2]", "bg-[#F6F2E9]", "text-[#17352D]", "text-[#B99A62]",
  "border-[#DED5C4]", "border-[#B99A62]/30", "rounded-3xl", "rounded-2xl", "rounded-full",
  "max-w-7xl", "mx-auto", "px-4", "py-20", "min-h-screen", "font-serif"
];

const missing = [];
for (const cls of quietLuxuryClasses) {
  const escaped = cls.replace(/([#\/\[\]%:])/g, "\\$1");
  const has = combinedCSS.includes(escaped) || combinedCSS.includes(cls);
  if (!has) {
    missing.push(cls);
  }
}

console.log(`Quiet Luxury classes checked: ${quietLuxuryClasses.length}. Missing: ${missing.length}`);
if (missing.length > 0) {
  console.log("Missing classes:", missing);
} else {
  console.log("ALL Quiet Luxury classes are present in the CSS output!");
}
