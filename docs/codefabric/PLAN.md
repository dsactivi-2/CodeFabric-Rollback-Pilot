# Pilotstand – 22.10.2026

## Implementiert
Quellcode und Tests aus eindeutigem Ausgangscommit übernommen. Öffentliche Zielkopie vom Nutzer bestätigt. Aktive Produktionszuordnungen entfernt, externer MCP-Anschluss deaktiviert und Betriebsskripte gesperrt. Ursprüngliche Preflight-Logik zielte auf aktivierte Produktionsflags; Pilot-Preflight prüft stattdessen sichere deaktivierte Defaults. Das Original bleibt als Textreferenz erhalten. Bestehende Anwendungstests werden unverändert übernommen; neue Pilotkonfigurationstests prüfen erlaubte und verbotene Zustände.

## Offen
CI-Basis prüfen, MySQL-Testdatenbank/Integration ergänzen, Branchschutz einrichten, Cursor verbinden, 25-USD-Kontrolle und dauerhafte Aufgaben-/Startregistrierung implementieren, erstes Issue mit unabhängigem Review bearbeiten, danach Reparaturloop testen. Graphify und Manufact-Preview optional später. Aktuelle Aufgaben und Zustände: https://linear.app/activi/project/cursor-autonom-codefabric-a1a6f7ca9840.

## Cursor-Einrichtung
Nach Import Cursor Cloud öffnen und GitHub-Zugriff auf genau dieses Zielrepo erlauben. Direkter OAuth-Zugang von ChatGPT zur Cursor-Cloud-Agent-API wurde bisher nicht nachgewiesen. Der Nutzer kann die GitHub-Verbindung innerhalb Cursor selbst autorisieren. Noch keinen kostenpflichtigen Agenten starten, solange Budget-/Abbruchkontrollen offen sind.

## Prüfgrenze
Quellcodekopie und Konfigurationschecks beweisen keine isolierte laufende Datenbank oder funktionierende Preview. Keine produktiven Endpunkte testen. Prüfnachweise werden nach tatsächlicher Ausführung ergänzt.
