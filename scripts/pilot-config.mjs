export function pilotConfigErrors(config) {
  const errors = [];
  if (config?.vars?.ENVIRONMENT !== "staging") errors.push("ENVIRONMENT must be staging");
  for (const key of ["WRITES_ENABLED", "RESTORES_ENABLED", "ALLOW_TEST_ENTITIES"])
    if (config?.vars?.[key] !== "false") errors.push(key + " must be false");
  if (config?.vars?.REQUIRE_APPROVAL !== "true") errors.push("REQUIRE_APPROVAL must be true");
  for (const key of ["account_id", "hyperdrive", "r2_buckets", "triggers"])
    if (Object.hasOwn(config ?? {}, key)) errors.push("external production binding forbidden: " + key);
  if (!/^codefabric-rollback-pilot(?:-staging)?$/.test(config?.name ?? "")) errors.push("unexpected Worker name");
  return errors;
}
