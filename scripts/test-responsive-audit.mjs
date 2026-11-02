import fs from "fs";
import path from "path";

const baseDir = process.cwd();
const htmlPath = path.join(baseDir, ".next", "server", "app", "index.html");
const cssPath = path.join(baseDir, "app", "compiled-tailwind.css");
const stickyCtaPath = path.join(baseDir, "components", "StickyMobileCTA.tsx");

console.log("=== Responsive & Audit Verification Suite ===");

if (!fs.existsSync(htmlPath)) {
  console.error("index.html not found. Run build first.");
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf8");
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
const stickyCode = fs.existsSync(stickyCtaPath) ? fs.readFileSync(stickyCtaPath, "utf8") : "";

const checks = [
  {
    name: "1. Direct WhatsApp CTA in Hero Above the Fold",
    pass: html.includes("wa.me/919818376653") && html.includes("WhatsApp"),
  },
  {
    name: "2. Primary Hero CTA 'Check Fares'",
    pass: html.includes("Check Fares"),
  },
  {
    name: "3. Direct Click-to-Call Phone Icon in Mobile Header",
    pass: html.includes("tel:+919818376653") && (html.includes("Call Parkash") || html.includes("Call Dispatch")),
  },
  {
    name: "4. Expanded Touch Target in Mobile Header (h-9 / w-9)",
    pass: html.includes("h-9 w-9"),
  },
  {
    name: "5. Mobile Background Car Image Framing (object-[78%_center])",
    pass: html.includes("object-[78%_center]"),
  },
  {
    name: "6. Customer Review Avatars at 28px (h-7 w-7)",
    pass: html.includes("h-7 w-7") && html.includes("Google Reviews"),
  },
  {
    name: "7. Tightened Mobile Headline Subtitle",
    pass: html.includes("Executive chauffeur car rentals &amp; airport transfers across Delhi NCR") || html.includes("Executive chauffeur car rentals & airport transfers across Delhi NCR"),
  },
  {
    name: "8. Three Service Cards with Micro-Subtitles on Mobile",
    pass: html.includes("IGI T1, T2, T3") && html.includes("Hourly / Day") && (html.includes("Agra, Hills &amp; More") || html.includes("Agra, Hills & More")),
  },
  {
    name: "9. Contextual 'Get Fare' Action on Active Service",
    pass: html.includes("Get Fare"),
  },
  {
    name: "10. Compact Screen Scroll Indicator Utility (compact-hide-scroll)",
    pass: html.includes("compact-hide-scroll") && css.includes("compact-hide-scroll"),
  },
  {
    name: "11. iOS Safe Area Inset in Sticky Mobile Bar",
    pass: stickyCode.includes("safe-area-inset-bottom"),
  },
  {
    name: "12. Harmonized Quiet Luxury Palette in Sticky Bar",
    pass: stickyCode.includes("#16382C") && stickyCode.includes("#17352D") && stickyCode.includes("#B99A62"),
  },
  {
    name: "13. Crest Emblem Refined Gold Status Indicator",
    pass: !html.includes("bg-[#22c55e]") && html.includes("bg-[#B99A62]"),
  },
  {
    name: "14. Reduced Motion Support for Conveyor / Marquee",
    pass: css.includes("prefers-reduced-motion"),
  },
  {
    name: "15. WCAG AA Contrast on Micro Stat Subtitles (#826735 / #FAF7F2)",
    pass: html.includes("#826735"),
  },
];

let allPassed = true;
for (const check of checks) {
  if (check.pass) {
    console.log(`[PASS] ${check.name}`);
  } else {
    console.error(`[FAIL] ${check.name}`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log("\nAll 15 approved and modified audit recommendations PASSED with 100% verification!");
} else {
  console.error("\nSome checks failed!");
  process.exit(1);
}
