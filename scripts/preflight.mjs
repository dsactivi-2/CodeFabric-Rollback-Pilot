import fs from "node:fs";
import { pilotConfigErrors } from "./pilot-config.mjs";
const errors = [];
for (const name of ["wrangler.jsonc", "wrangler.staging.jsonc"]) {
  const config = JSON.parse(fs.readFileSync(new URL("../cloudflare/worker/" + name, import.meta.url), "utf8"));
  errors.push(...pilotConfigErrors(config).map(e => name + ": " + e));
}
const mcp = JSON.parse(fs.readFileSync(new URL("../hermes-plugin/mcp.json", import.meta.url), "utf8"));
if (!mcp.mcpServers || Object.keys(mcp.mcpServers).length) errors.push("MCP connections must remain disabled until a test endpoint is verified");
for (const [path, expected] of [["../package.json", "node scripts/pilot-provisioning-disabled.mjs"], ["../cloudflare/worker/package.json", "node ../../scripts/pilot-provisioning-disabled.mjs"]]) {
  const config = JSON.parse(fs.readFileSync(new URL(path, import.meta.url), "utf8"));
  if (config.scripts?.deploy !== expected) errors.push(path + ": deploy command must be disabled");
}
const manifest = JSON.parse(fs.readFileSync(new URL("../docs/codefabric/import-manifest.json", import.meta.url), "utf8"));
for (const path of manifest.blocked_scripts) {
  const text = fs.readFileSync(new URL("../" + path, import.meta.url), "utf8");
  if (!text.startsWith('import "./pilot-provisioning-disabled.mjs";')) errors.push(path + ": missing external I/O guard");
}
if (process.argv.includes("--activation")) errors.push("Pilot activation is intentionally disabled; isolated runtime resources have not been verified");
console.log(JSON.stringify({ok: errors.length === 0, mode: "isolated-pilot", errors}, null, 2));
if (errors.length) process.exitCode = 1;
