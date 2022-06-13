---
title: Über diese Seite
slug: ueber_diese_seite
date: 2020-08-01
lastmod: 2020-08-01
description:
featured_image: /images/code.png
show_featured_image: True
draft: False
has_formulas: False
---

## Motiv
Diese Webseite wurde im Juni und Juli 2020 als Endprojekt des Online-Kurses über Informatik CS50x (sehr empfehlenswert) geschaffen. Deswegen sind viele ihrer Elemente eher Übungen und sollten nicht ernst genommen werden.
Zum Beispiel hat sicherlich einer von euch bemerkt, dass man sich einloggen, aber nicht registrieren kann. Der einzige, der sich aktuell einloggen kann, bin ich, und ich denke nicht, dass ich diese Option nutzen werde, da man dadurch nur Videos und Nutzer zur Datenbank hinzufügen kann, was schneller auf andere Weise geht. Das ganze System wurde daher nur geschaffen, um die App komplexer zu machen, was übrigens auch für das Kontaktformular gilt. Ich glaube nicht wirklich, dass das jemand benutzen wird. Es war aber interessant zu entdecken, wie man automatisch E-mails verschicken kann. Ich nehme an, ihr fragt euch jetzt nicht mehr, warum ich Spiele hinzugefügt habe...

---

## Funktionsweise
Diese Webseite besteht aus:
- Einer App, geschrieben in [python 3](https://www.python.org/) mit den Bibliotheken [Flask, Jinja y Werkzeug](https://palletsprojects.com/)
- Einer Datenbank, die alle Benutzer, Videos und Ergebnisse der Spiele speichert
- Mehreren HTML Dokumenten, die die Struktur der einzelnen Seiten beschreiben
- CSS Dateien für die Definition des Stils von jedem HTML Element (Ich habe [Bootstrap](https://getbootstrap.com/) bei vielen Gelegenheiten benutzt.)
- JavaScript Dokumenten, die die Seiten interaktiver machen

Den Kern der Webseite bildet die Flask-App. Sie läuft auf einem Server von [Heroku](https://www.heroku.com/). Wenn ein Nutzer auf die Webseite zugreifen will, "sendet" die App die benötigten HTML, CSS und JavaScript Dokumente. Einige Inhalte sind jedoch von einer Datenbank abhängig, da sie sich ständig verändern und irgendwo gespeichert werden müssen.

Dank der Bibliothek Jinja kann man diese Daten beim Senden der Seite in das HTML Dokument einfügen. Außerdem ermöglicht die AJAX Technologie (Asynchronous JavaScript And XML) den Austausch von Daten zwischen Server und lokalem Browser ohne das Nachladen von Seiten. Das ist zum Beispiel beim Auswählen eines Komponisten im Musikabschnitt bemerkbar.

---

## Kompatibilität
Diese Webseite wurde in erster Linie mit den Browsern Firefox und Chrome probiert und ich empfehle deren Nutzung. Andere Browser sind kompatibel, möglicherweise sind aber nicht alle Eigenschaften verfügbar. Möglich ist auch, dass die JavaScript Technologie deaktiviert ist. Um dies zu überprüfen und gegebenenfalls zu korrigieren, besucht am Besten [diese Seite](https://www.enable-javascript.com/es/).

---

## Danksagung
Es gibt mehrere Personen, ohne die diese Webseite nicht möglich gewesen wäre. Als erstes will ich deswegen dem CS50 Team dafür danken, dass es einen ausgezeichneten Kurs kostenlos anbietet. Dazu kommen die Webseiten W3schools und Stackoverflow, die eine extrem hilfreiche Referenz sind. Ich möchte auch gerne meinen Eltern für die Hilfe bei den ganzen Fotos und Videos danken und schließlich all den Personen, die die Seite getestet und die letzten Fehler entdeckt haben.
