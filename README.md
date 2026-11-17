# eBike Ladeplaner

[Deutsch](#deutsch) · [English](#english)

---

## Deutsch

Eine Webseite, die eine schaltbare Steckdose (Shelly oder Tasmota) für das Laden von Bosch-eBike-Akkus steuert. Du wählst Akku und Ladegerät, trägst den aktuellen und den gewünschten Ladestand ein, und die Seite berechnet die Ladezeit. Mit einem Tippen startest du die Ladung, die Steckdose schaltet zum richtigen Zeitpunkt ab. Aus deinen gespeicherten Ladungen lernt die Seite einen Korrekturfaktor (auch abhängig von der Temperatur) und wird so genauer. Nach dem ersten Laden funktioniert sie auch ohne Internet.

### Aufs Handy

**iPhone:** Die Seite in Safari öffnen, *Teilen → Zum Home-Bildschirm*, dann einmal über das Symbol öffnen, solange du Internet hast. Danach öffnet sie auch ohne Internet, z. B. im WLAN der Steckdose.

**Android:** Die Seite in Chrome oder Samsung Internet öffnen, Menü (drei Punkte) → **Zum Startbildschirm hinzufügen** oder **App installieren**, dann einmal über das Symbol öffnen. Die Seite zeigt dafür selbst eine Karte (iPhone: „Teilen-Fenster öffnen“, Android: „Installieren“). Weggeklickt? Ganz unten auf der Seite holt der Link „Zum Home-/Startbildschirm hinzufügen“ sie zurück.

### Steckdose

Auf der Seite wählst du unter „Steckdose“ **Shelly** oder **Tasmota** und trägst die IP-Adresse ein.

### Bedienung in Kürze

- Ladestand eintragen (die Temperatur trägt die Seite meist selbst ein) und **Ladevorgang starten** tippen. Bei Shelly zeigt die Steckdose danach eine kleine Antwortseite (Start mit Bereich und Uhrzeit, oder eine Fehlermeldung). Bei Tasmota erscheint etwa 2 Sekunden ein kleines Fenster, das den Befehl schickt und sich selbst schließt. Endet die Ladung nicht am selben Tag, steht „fertig morgen gegen …“.
- Nach dem Laden oben auf **Eintragen** tippen und im Pop-up den erreichten Ladestand eintragen (vom Bosch-Display). Erst dann lernt die Seite aus dieser Ladung. Liegt der Wert mehr als 20 Prozentpunkte unter dem Ziel, fragt die Seite nach.
- **Profile:** Oben rechts wählst du das Profil. Jedes Profil ist eine Steckdose mit einem Akku und einem Ladegerät. Weitere legst du mit „+ Profil hinzufügen“ an, umbenennen und löschen geht über „Profil bearbeiten …“ in der Auswahl. Mehrere Profile können gleichzeitig laden.
- **Batterieschutz:** Unter „Akku & Ladegerät“ trägst du ein, nach wie vielen Ladestarts eine Ladung auf 100 % laufen soll. Eine graue Zeile zeigt, wie viele Ladestarts noch bleiben. Dann heißt der Knopf „Batterieschutz 100 % starten“ und startet einen Timer (2 A: 13 Std., 4 A: 8 Std., 6 A und 12 A: 6 Std.).
- **Zwei Korrekturfaktoren:** Die Seite lernt getrennt für 0–80 % und 80–100 %. Der Faktor ab 80 % wird erst ab 3 Ladungen über 80 % genutzt. Lade ab und zu von 80 auf 100 %.
- **Außentemperatur:** Die Seite trägt sie beim Öffnen von selbst ein (Internet und Standortfreigabe nötig). Du kannst sie überschreiben. Unter 0 °C und über 40 °C warnt die Seite (Bosch: Laden nur von 0 bis 40 °C).
- **Verlauf:** Unter „Alle Ladungen anzeigen“ kannst du den Ladestand eines Eintrags mit „Ändern“ korrigieren oder ihn löschen. Aus Versehen gelöscht? Lies deine Sicherungsdatei mit „Aus Datei wiederherstellen“ neu ein.
- **Sicherung:** Den Verlauf und alle Profile mit ihren Einstellungen kannst du unter „Sicherung“ als Datei sichern und wiederherstellen.
- **Sprache:** Ganz unten auf der Seite wählst du „DE | EN“. Beim ersten Öffnen richtet sich die Sprache nach dem Browser.
- Solange die Uhr läuft und die Seite sichtbar ist, bleibt der Bildschirm an, wenn der Browser es erlaubt.

### Hinweise

- Die Seite ist öffentlich, enthält aber keine persönlichen Daten. IP-Adresse und Eingaben bleiben nur im Browser.
- Mit Internet holt die Seite immer zuerst die neueste Version, ohne Internet nutzt sie die abgelegte. Die Zeile „Version aktualisiert am …“ unten zeigt, welche Version du gerade siehst.
- Das Offline-Speichern wurde im Browser getestet, nicht auf einem iPhone. Teste es einmal im Flugmodus.
- Die Steuerung der Steckdosen ist nicht an echter Shelly-/Tasmota-Hardware getestet.

---

## English

A web page that controls a switchable smart plug (Shelly or Tasmota) for charging Bosch eBike batteries. You pick the battery and charger, enter the current and the target charge level, and the page calculates the charging time. One tap starts the charge, and the plug switches off at the right time. From your saved charges the page learns a correction factor (also depending on temperature) and gets more accurate over time. After the first load it also works without internet.

### Put it on your phone

**iPhone:** Open the page in Safari, *Share → Add to Home Screen*, then open it once from the icon while you have internet. After that it also opens without internet, e.g. on the plug's Wi-Fi.

**Android:** Open the page in Chrome or Samsung Internet, menu (three dots) → **Add to Home screen** or **Install app**, then open it once from the icon. The page shows a card for this itself (iPhone: "Teilen-Fenster öffnen", Android: "Installieren"). Dismissed it? The link "Add to Home Screen" at the very bottom of the page brings it back.

### Smart plug

On the page, choose **Shelly** or **Tasmota** under "Steckdose" (socket) and enter the plug's IP address.

### Quick usage

- Enter the charge level (the page usually fills in the temperature itself) and tap **Ladevorgang starten** (start charging). With Shelly the plug then shows a small reply page (start with range and time, or an error message). With Tasmota a small window appears for about 2 seconds, sends the command and closes by itself. If the charge does not end on the same day, the page says "done tomorrow around …".
- After charging, tap **Eintragen** (enter) at the top and enter the reached charge level in the pop-up (from the Bosch display). Only then does the page learn from that charge. If the value is more than 20 percentage points below the target, the page asks for confirmation.
- **Profiles:** Choose the profile at the top right. Each profile is one plug with one battery and one charger. Add more with "+ Profil hinzufügen" (add profile); rename and delete via "Profil bearbeiten …" (edit profile) in the selector. Several profiles can charge at the same time.
- **Battery protection:** Under "Akku & Ladegerät" (battery and charger) enter after how many charge starts a charge to 100 % should run. A grey line shows how many charge starts are left. Then the button reads "Batterieschutz 100 % starten" and starts a timer (2 A: 13 h, 4 A: 8 h, 6 A and 12 A: 6 h).
- **Two correction factors:** The page learns separately for 0–80 % and 80–100 %. The factor above 80 % is only used from 3 charges above 80 %. Charge from 80 to 100 % now and then.
- **Outdoor temperature:** The page fills it in by itself when opened (needs internet and location permission). You can overwrite it. Below 0 °C and above 40 °C the page warns (Bosch: charge only between 0 and 40 °C).
- **History:** Under "Show all charges" you can correct the level of an entry with "Change" or delete it. Deleted by mistake? Read your backup file in again with "Restore from file".
- **Backup:** Under "Sicherung" (backup) you can back up and restore the history and all profiles with their settings as a file.
- **Language:** At the very bottom of the page choose “DE | EN”. On first opening the language follows the browser.
- While the clock runs and the page is visible, the screen stays on if the browser allows it.

### Notes

- The page is public but contains no personal data. The IP address and your entries stay in the browser only.
- With internet the page always fetches the newest version first, without internet it uses the stored one. The line “Version aktualisiert am …” (version updated on) at the bottom shows which version you are seeing.
- Offline storage was tested in a browser, not on an iPhone. Try it once in airplane mode.
- Plug control has not been tested on real Shelly or Tasmota hardware.
