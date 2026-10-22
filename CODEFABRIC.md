# CodeFabric Rollback Pilot

Öffentliche eigenständige Testkopie von https://github.com/dsactivi-2/Manufact-DB-Roleback-MCP am Commit `74de30cd879300c34946f7b7df5b23fcd43a9de8`.

Der Code ist übernommen, die Betriebsverbindungen sind absichtlich deaktiviert. Kein Cursor-Agent, kein dauerhafter Loop, kein Auto-Merge und keine Preview aktiviert. Einstieg für Agenten: AGENTS.md. Technischer Stand: docs/codefabric/PLAN.md.

Produktive Cloudflare-Zuordnungen, Hyperdrive/R2/Crons und MCP-Verbindungen wurden aus aktiven Konfigurationen entfernt. Historische Quellunterlagen enthalten weiterhin ursprüngliche URLs als Kontext; nicht als Pilot-Endpunkte verwenden. Provisionierungs-/Smoke-/Betriebsskripte und npm deploy sind vor externem I/O gesperrt. Details und Dateiabweichungen stehen im Importmanifest.

Die ursprüngliche package.json deklariert MIT; im Quellstand wurde keine separate LICENSE-Datei gefunden. Originalautoren-/Metadaten bleiben erhalten. Für weitere öffentliche Distribution die Lizenzunterlagen klären.
