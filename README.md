# eBike Ladeplaner

[Deutsch](#deutsch) · [English](#english)

---

## Deutsch

Eine einzelne Webseite, die eine schaltbare Steckdose (Shelly oder Tasmota) für das Laden von Bosch-eBike-Akkus steuert. Du wählst Akku und Ladegerät, trägst den aktuellen und den gewünschten Ladestand ein, und die Seite berechnet die Ladezeit. Mit einem Tippen startest du die Ladung, die Steckdose schaltet zum richtigen Zeitpunkt ab. Aus deinen gespeicherten Ladungen lernt die Seite einen Korrekturfaktor (auch abhängig von der Temperatur) und wird so genauer. Sie funktioniert nach dem ersten Laden auch ohne Internet.

Dateien: `index.html` (die Seite), `sw.js` (Offline-Speicher), `manifest.webmanifest`, `icon.png`.
Alle vier müssen im selben Ordner liegen.

### Veröffentlichen (einmalig, ca. 5 Minuten)

1. Auf github.com ein kostenloses Konto anlegen und oben rechts *+ → New repository* wählen.
2. Name z. B. `ebike-laden`, Sichtbarkeit **Public**, *Create repository*.
3. Auf der leeren Repository-Seite *uploading an existing file* wählen und alle vier Dateien hineinziehen (nicht den Ordner, sondern die Dateien). Bei *Commit changes* **Commit directly to the main branch** wählen und bestätigen.
4. *Settings → Pages*: Bei *Build and deployment* Source **Deploy from a branch**, Branch **main**, Ordner **/ (root)**, *Save*.
5. Nach ein bis zwei Minuten steht oben auf der Pages-Seite die Adresse: `https://DEINNAME.github.io/ebike-laden/`

### Aufs Handy

**Android (Samsung):** Die Adresse in Chrome oder Samsung Internet öffnen, dann das Menü (drei Punkte) → **Zum Startbildschirm hinzufügen** oder **App installieren**. Danach einmal über das Symbol öffnen, solange du Internet hast.

**iPhone:**

1. Die Adresse in Safari öffnen (mit Internet).
2. *Teilen → Zum Home-Bildschirm*.
3. Einmal über das Symbol öffnen, solange du Internet hast. Dabei speichert sich die Seite im Gerät.
4. Danach öffnet sie auch ohne Internet, z. B. im WLAN der Steckdose.

### Steckdose

Auf der Seite wählst du unter „Steckdose“ **Shelly** oder **Tasmota** und trägst die IP-Adresse ein. Die Einrichtung der Steckdose steht in der jeweiligen README im Ordner `2_Shelly` bzw. `3_Tasmota` der ZIP.

### Bedienung in Kürze

- Ladestand und Temperatur eintragen, **Ladevorgang starten** tippen. Dabei erscheint etwa 2 Sekunden ein kleines Fenster, das den Befehl an die Steckdose schickt und sich selbst schließt.
- Nach dem Laden den erreichten Ladestand unter „Nach dem Laden“ eintragen und speichern. Erst dann lernt die Seite aus dieser Ladung.
- **Profile:** Oben rechts wählst du das Profil. Jedes Profil ist eine Steckdose mit einem Akku und einem Ladegerät. Weitere legst du mit „+ Profil hinzufügen“ an, Name, Typ und IP stellst du unter „Steckdose“ ein. Mehrere Profile können gleichzeitig laden.
- **Batterieschutz:** Unter „Akku & Ladegerät“ trägst du ein, nach wie vielen Ladestarts eine Ladung auf 100 % laufen soll. Dann heißt der Knopf „Batterieschutz 100 % starten“ und startet einen Timer (2 A: 13 Std., 4 A: 8 Std., 6 A und 12 A: 6 Std.).
- **Zwei Korrekturfaktoren:** Die Seite lernt getrennt für 0–80 % und 80–100 %. Der Faktor ab 80 % wird erst ab 3 Ladungen über 80 % genutzt. Lade ab und zu von 80 auf 100 %.
- **Sprache:** Ganz unten auf der Seite wählst du „DE | EN“. Beim ersten Öffnen richtet sich die Sprache nach dem Browser.
- **Außentemperatur:** Die Seite trägt sie beim Öffnen von selbst ein (Internet und Standortfreigabe nötig). Während der Suche zeigt ein Kreisel „Außentemperatur wird gesucht …“; bei Fehlschlag bis zu 3 Versuche und eine genaue Meldung. Bei Rückkehr in die Seite erneut. Du kannst sie überschreiben.
- Den Verlauf und alle Profile mit ihren Einstellungen (Steckdose, IP, Akku, Ladegerät, Batterieschutz) kannst du unter „Sicherung“ als Datei sichern und wiederherstellen.
- Die Karte „Nach dem Laden“ ist eingeklappt und öffnet sich, wenn eine Ladung auf den Eintrag wartet. Liegt der eingetragene Wert mehr als 20 Prozentpunkte unter dem Ziel, fragt die Seite nach.
- Unter „Alle Ladungen anzeigen“ kannst du den Ladestand eines Eintrags mit „Ändern“ korrigieren.
- Unter 0 °C und über 40 °C warnt die Seite (Bosch: Laden nur von 0 bis 40 °C). Solange die Uhr läuft und die Seite sichtbar ist, bleibt der Bildschirm an, wenn der Browser es erlaubt.

### Hinweise

- Die Seite ist öffentlich, enthält aber keine persönlichen Daten. IP-Adresse und Eingaben bleiben nur im Browser.
- Mit Internet holt die Seite immer zuerst die neueste Version, ohne Internet nutzt sie die abgelegte. Nach einem Update lädt sie sich einmal von selbst neu. Lade nach dem Hochladen zusammen mit `index.html` immer auch `sw.js` hoch und zähle darin den Namen `ebike-ladeplaner-vNN` hoch. GitHub Pages braucht nach dem Hochladen oft 1 bis 10 Minuten, bis die neue Datei sichtbar ist. Die Zeile „Version aktualisiert am …“ unten zeigt, welche Version du gerade siehst.
- Das Offline-Speichern habe ich im Browser getestet, nicht auf einem iPhone. Teste es einmal im Flugmodus.
- Die Steuerung der Steckdosen ist nicht an echter Shelly-/Tasmota-Hardware getestet.

---

## English

A single web page that controls a switchable smart plug (Shelly or Tasmota) for charging Bosch eBike batteries. You pick the battery and charger, enter the current and the target charge level, and the page calculates the charging time. One tap starts the charge, and the plug switches off at the right time. From your saved charges the page learns a correction factor (also depending on temperature) and gets more accurate over time. After the first load it also works without internet.

Files: `index.html` (the page), `sw.js` (offline cache), `manifest.webmanifest`, `icon.png`.
All four must be in the same folder.

### Publish (one time, about 5 minutes)

1. Create a free account on github.com and choose *+ → New repository* at the top right.
2. Name it e.g. `ebike-laden`, visibility **Public**, *Create repository*.
3. On the empty repository page choose *uploading an existing file* and drag in all four files (the files, not the folder). Under *Commit changes* choose **Commit directly to the main branch** and confirm.
4. *Settings → Pages*: under *Build and deployment* set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, *Save*.
5. After one or two minutes the address appears at the top of the Pages screen: `https://YOURNAME.github.io/ebike-laden/`

### Put it on your phone

**Android:** Open the address in Chrome or Samsung Internet, then use the menu (three dots) → **Add to Home screen** or **Install app**. Open it once from the icon while you have internet.

**iPhone:**

1. Open the address in Safari (with internet).
2. *Share → Add to Home Screen*.
3. Open it once from the icon while you have internet. This stores the page on the device.
4. After that it also opens without internet, e.g. on the plug's Wi-Fi.

### Smart plug

On the page, choose **Shelly** or **Tasmota** under "Steckdose" (socket) and enter the plug's IP address. Setting up the plug is described in the README inside the `2_Shelly` or `3_Tasmota` folder of the ZIP (German).

### Quick usage

- Enter the charge level and temperature, then tap **Ladevorgang starten** (start charging). A small window appears for about 2 seconds, sends the command to the plug and closes by itself.
- After charging, enter the reached charge level under "Nach dem Laden" (after charging) and save it. Only then does the page learn from that charge.
- **Profiles:** Choose the profile at the top right. Each profile is one plug with one battery and one charger. Add more with "+ Profil hinzufügen" (add profile) and set name, type and IP under "Steckdose" (plug). Several profiles can charge at the same time.
- **Battery protection:** Under "Akku & Ladegerät" (battery and charger) enter after how many charge starts a charge to 100 % should run. Then the button reads "Batterieschutz 100 % starten" and starts a timer (2 A: 13 h, 4 A: 8 h, 6 A and 12 A: 6 h).
- **Two correction factors:** The page learns separately for 0–80 % and 80–100 %. The factor above 80 % is only used from 3 charges above 80 %. Charge from 80 to 100 % now and then.
- **Language:** At the very bottom of the page choose “DE | EN”. On first opening the language follows the browser.
- **Outdoor temperature:** The page fills it in by itself when opened (needs internet and location permission). While searching, a spinner shows "Looking for the outdoor temperature …"; on failure up to 3 tries and a specific message. Retries when you return to the page. You can overwrite it.
- Under "Sicherung" (backup) you can back up and restore the history and all profiles with their settings (plug, IP, battery, charger, battery protection) as a file.
- The card "Nach dem Laden" (after charging) is collapsed and opens when a charge waits for its entry. If the entered value is more than 20 percentage points below the target, the page asks for confirmation.
- Under "Show all charges" you can correct the level of an entry with "Change".
- Below 0 °C and above 40 °C the page warns (Bosch: charge only between 0 and 40 °C). While the clock runs and the page is visible, the screen stays on if the browser allows it.

### Notes

- The page is public but contains no personal data. The IP address and your entries stay in the browser only.
- With internet the page always fetches the newest version first, without internet it uses the stored one. After an update it reloads itself once. After uploading, always upload `sw.js` together with `index.html` and increase the name `ebike-ladeplaner-vNN` in it. GitHub Pages often needs 1 to 10 minutes after the upload until the new file is visible. The line “Version aktualisiert am …” at the bottom shows which version you are seeing.
- Offline storage was tested in a browser, not on an iPhone. Try it once in airplane mode.
- Plug control has not been tested on real Shelly or Tasmota hardware.
- The page itself is in German.
