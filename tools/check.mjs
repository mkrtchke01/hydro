import { readFile } from "node:fs/promises";

const pages = [
  "index.html",
  "test-stands/index.html",
  "hydraulic-stations/index.html",
  "hydraulic-cylinders/index.html"
];

let failed = false;
for (const path of pages) {
  const html = await readFile(path, "utf8");
  const checks = [
    ["doctype", /<!doctype html>/i],
    ["lang", /<html lang="ru">/i],
    ["viewport", /name="viewport"/i],
    ["description", /name="description"/i],
    ["title", /<title>[^<]+<\/title>/i]
  ];
  for (const [name, pattern] of checks) {
    if (!pattern.test(html)) {
      failed = true;
      console.error(`${path}: missing ${name}`);
    }
  }
}

const content = await readFile("assets/content.js", "utf8");
for (const key of ["stands", "stations", "cylinders"]) {
  if (!new RegExp(`\\b${key}:\\s*\\{`).test(content)) {
    failed = true;
    console.error(`assets/content.js: missing ${key}`);
  }
}

if (failed) process.exit(1);
console.log("Static checks passed for 4 pages and 3 content sets.");
