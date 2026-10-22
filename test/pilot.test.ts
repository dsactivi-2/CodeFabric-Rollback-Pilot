import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { spawnSync } from "node:child_process";
import { pilotConfigErrors } from "../scripts/pilot-config.mjs";
const base = JSON.parse(readFileSync(new URL("../cloudflare/worker/wrangler.jsonc", import.meta.url), "utf8"));
test("Pilot defaults contain no active writes or external bindings", () => assert.deepEqual(pilotConfigErrors(base), []));
for (const flag of ["WRITES_ENABLED", "RESTORES_ENABLED", "ALLOW_TEST_ENTITIES"])
  test("Pilot rejects enabled " + flag, () => assert.ok(pilotConfigErrors({...base, vars:{...base.vars, [flag]:"true"}}).length));
for (const key of ["account_id", "hyperdrive", "r2_buckets", "triggers"])
  test("Pilot rejects production binding " + key, () => assert.ok(pilotConfigErrors({...base, [key]:"external"}).length));
test("Provisioning guard fails before original script body can run", () => {
  const result = spawnSync(process.execPath, [new URL("../scripts/pilot-provisioning-disabled.mjs", import.meta.url).pathname], {encoding:"utf8"});
  assert.equal(result.status, 1);
  assert.match(result.stderr, /CODEFABRIC_PILOT/);
});
