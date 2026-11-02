import fs from "fs";
import path from "path";
import { compile } from "@tailwindcss/node";

async function buildCSS() {
  console.log("Starting Tailwind CSS compilation...");
  const baseDir = process.cwd();

  const candidateFiles = [];
  function scan(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "node_modules" && entry.name !== ".next" && entry.name !== ".git") {
          scan(fullPath);
        }
      } else if (/\.(tsx|ts|jsx|js|html|css|json)$/.test(entry.name)) {
        candidateFiles.push(fullPath);
      }
    }
  }

  scan(path.join(baseDir, "app"));
  scan(path.join(baseDir, "components"));
  scan(path.join(baseDir, "lib"));

  console.log(`Scanning ${candidateFiles.length} files for Tailwind classes...`);

  const candidates = new Set();
  // Regex that captures all tokens and classes
  const tokenRegex = /([a-zA-Z0-9_\-\/\[\]#%.:]+)/g;

  for (const file of candidateFiles) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(tokenRegex);
    if (matches) {
      for (const m of matches) {
        // Clean trailing punctuation
        const clean = m.replace(/[;,{}()]$/, "");
        if (clean.length > 0) {
          candidates.add(clean);
        }
      }
    }
  }

  console.log(`Found ${candidates.size} candidate tokens.`);

  const globalsPath = path.join(baseDir, "app", "globals.css");
  const globalsContent = fs.existsSync(globalsPath) ? fs.readFileSync(globalsPath, "utf8") : "";

  // Ensure Tailwind base is always imported
  const cssInput = `@import "tailwindcss";\n` + globalsContent;

  const compiler = await compile(cssInput, {
    base: baseDir,
    onDependency: () => {},
  });

  const compiledCSS = compiler.build(Array.from(candidates));

  const outputPath = path.join(baseDir, "app", "compiled-tailwind.css");
  fs.writeFileSync(outputPath, compiledCSS, "utf8");
  console.log(`Success! Generated app/compiled-tailwind.css (${compiledCSS.length} bytes).`);
}

buildCSS().catch(err => {
  console.error("Build CSS error:", err);
  process.exit(1);
});
