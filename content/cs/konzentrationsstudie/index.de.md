---
title: "Konzentrationsstudie"
date: 2023-03-05
draft: false
description: Entwicklung eines Portal zur Durchführung einer Musikstudie und Auswertung der erhobenen Daten
featured_image: /images/konzentrationstest-cropped.png
has_formulas: true
---
## Ziel der Studie
Diese Studie wurde als Forschungsprojekt für den Wettbewerb "Jugend Forscht" vorgestellt. Ziel war es zu bestimmen, ob das Hören von Musik einen Einfluss auf die Konzentrationsleistung von Menschen hat. Zudem wollten wir erforschen, ob andere Faktoren wie Gefallen oder harmonische Komplexität eine Rolle spielen.

Als Grundlage dienten ähnliche, ältere Studien, die die Konzentrationsleistung während des Musikhörens gemessen haben. Das neuartige an unserem Ansatz war, dass wir zuerst einen Konzentrationstest durchführten, dann die Menschen Musik hören ließen, und anschließend einen zweiten Test zum Vergleichen organisierten. Dabei und bei der Auswertung der erhobenen Daten stützten wir uns auf den Vorteilen, die uns digitale Technologien heute bieten, und die unseren Vorgängern nicht so zur Verfügung standen.

## Umsetzung
### Entwicklung
Bei dem Konzentrationstest hat es sich um einen D2-Test gehandelt, einem Test worin man unter Zeitdruck aus einer Zeichenkette alle mit zwei Strichen markierten "d" markieren muss. Um die Skalierbarkeit der Studie zu gewährleisten, und da die vorhandene Umfragensoftware nicht in der Lage ist, solche Felder zu erstellen, musste ein eigenes Portal entwickelt werden.
{{< img_resp_old src="konzentrationstest.png" alt="Eingabefeld des Konzentrationstests">}}

Ich entschied mich beim Frontend für React, da ich es mag, wie man damit die Wiederverwendbarkeit von Code maximiert und die Technologie schon seit längerer Zeit üben wollte. Für das Backend fügte ich einfach der Flask-App, welche ich für meine eigene Webseite verwende noch ein Paar Routen hinzu und erstellte zwei weitere Tabellen für die Daten der Tester und die Testergebnisse. Bei der Entwicklung kam es immer wieder zu Problemen, die vor allem mit meiner Unerfahrung mit React JS zusammenhingen, aber auch mit Unterschieden in den Browsern, die zur teils fehlerhaften Darstellung des Portals führten.

Das Frontend lässt sich noch auf [dieser Seite](https://konzentrationsstudie.netlify.app/) ausprobieren, es werden aber keine Daten mehr erhoben oder ausgewertet. Der Quellcode ist [auf GitHub](https://github.com/elimatao/mozartstudie) zugänglich und frei verfügbar.

### Durchführung
Das Studienportal enthält alle nötigen Informationen zur Eigenständigen Durchführung der Studie. Der Link dazu konnte also einfach an potenzielle Teilnehmer verschickt werden. Trotzdem nahmen an der Studie überwiegend Schüler der Deutschen Schule Las Palmas teil, was zu einigen Herausforderungen bei der Auswertung der Ergebnisse führte.

### Auswertung
Zur Auswertung verwendete ich unter anderen die Python-Bibliotheken Pandas und Jupyter. Zu beachten war hierbei, dass leider einige Schüler, überwiegend Jungs, die Tests nicht sehr gewissenhaft durchgeführt haben. Ihre Ergebnisse nahmen zum Teil extreme Werte an und schwankten stark. Um dem entgegenzuwirken und brauchbarere Daten zu haben, wurden die extremen 2% der Daten bei der Auswertung verworfen.

## Ergebnisse
Insgesamt sind in den Daten hohe Schwankungen zu erkennen, was an der relativ geringen Teilnehmerzahl liegen muss.

Aus den Daten lässt sich trotzdem schließen, dass es einen statistischen Zusammenhang gibt zwischen dem hören von Musik und einem kurzzeitigen Schub der Konzentrationsleistung. Abgesehen davon konntenn wir nicht erkennen, dass die Art der Musik, oder ob die Musik der Person gefällt einen Unterschied für die Konzentrationsleistung ausmacht. Hier ist noch eine graphische Darstellung der Ergebnisse:

{{< img_resp_old src="studienergebnisse.png" alt="Eingabefeld des Konzentrationstests">}}


Diese Ergebnisse wurden in der Landesrunde von Jugend Forscht in Bilbao vorgestellt, wir erhielten dafür dort einen 3. Preis.