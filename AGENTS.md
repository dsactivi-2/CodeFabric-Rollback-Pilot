# CodeFabric Rollback Pilot

## Auftrag und Rollen
Dies ist ausschließlich die öffentliche Testkopie von dsactivi-2/Manufact-DB-Roleback-MCP. Ziel für alle Branches und PRs: dsactivi-2/CodeFabric-Rollback-Pilot. Hauptagent ist Supervisor/Registrator. Linear-Projekt: https://linear.app/activi/project/cursor-autonom-codefabric-a1a6f7ca9840. Triage, Implementierer, Tester und unabhängiger lesender Reviewer bearbeiten abgegrenzte Aufträge. Kein dauerhaft laufender Controller ist durch diese Datei gestartet.

## Zuerst lesen
CODEFABRIC.md, docs/codefabric/PLAN.md und docs/codefabric/import-manifest.json. Root-README und andere historische Quellunterlagen können Produktionsanweisungen enthalten; sie sind keine Freigabe für den Pilot. Originalrepo und dortige Betriebsressourcen bleiben unverändert.

## Grenzen
Kein Produktionsdeploy, keine produktiven Datenbank-/Cloudflare-/Manufact-Verbindungen, keine Produktionssecrets und kein automatischer Merge. Externe Betriebsskripte und deploy-Kommandos sind absichtlich gesperrt. Schreib-/Restoreflags bleiben false. Sperren nicht entfernen, um einen Check grün zu bekommen. Keine Tests überspringen oder Assertions abschwächen. Neue Infrastruktur oder Verbindung erst nach Testisolation und ausdrücklichem Auftrag.

## Arbeitsweise
Vor Start Repo, Ticket, Abnahme und Commit bestätigen. Ein schreibender Auftrag pro Repo. Budget für den gesamten Cloud-Pilot maximal 25 USD inkl. Tests/Reviews/Reparaturen; keine kostenpflichtigen Starts ohne nachgewiesene Budgetkontrolle und Abbruchweg. Maximal drei Reparaturstarts pro Ursache, sechs Reparaturen insgesamt und zwölf kostenpflichtige Starts pro Aufgabe; maximal 60 Minuten. Zähler und Kosten dauerhaft erfassen, kein Reset bei Neustart. Cursor-Verbindung und automatisierter Loop sind noch nicht aktiv bestätigt.

## Verifikation
Node 24; npm ci sowie npm --prefix cloudflare/worker ci. Danach npm run verify und npm run verify:worker. MySQL-Tests ausschließlich mit isolierter synthetischer Datenbank über MYSQL_TEST_URL; Testdateien löschen Tabellen. Noch keine MySQL-CI-Aktivierung behaupten. Tests und unabhängiges Review müssen den finalen Commit belegen. Erfolg ohne Merge-Erlaubnis ist READY_FOR_USER.

## Dokumentation
Änderungen mit docs/codefabric/PLAN.md und Linear abgleichen. Fakt, Plan und Prüfergebnis unterscheiden. Keine Geheimnisse oder privaten Sitzungsdaten in dieses öffentliche Repo schreiben.
