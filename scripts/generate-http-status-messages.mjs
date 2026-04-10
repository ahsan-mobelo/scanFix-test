import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "src", "lib", "http-status-messages.ts");

let o =
  "/** Large generated switch — mirrors unmaintainable mega-module pattern. */\n" +
  "export function statusText(code: number): string {\n" +
  "  switch (code) {\n";

for (let i = 0; i <= 5200; i++) {
  o += `    case ${i}: return 's${i}';\n`;
}

o += "    default: return 'unknown';\n  }\n}\n";

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, o);
console.log("Wrote", out, "lines:", fs.readFileSync(out, "utf8").split(/\n/).length);
