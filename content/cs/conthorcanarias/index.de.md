---
title: "Conthor Canarias"
date: 2022-02-28
draft: false
description: Neuimplementierung der Firmenwebseite
featured_image: /images/conthor-startseite.png
show_featured_image: false
has_formulas: false
lastmod: 2023-03-13
---
Die [Webseite der Consulting-Firma Conthor Canarias](https://www.conthorcanarias.com) hatte ein Design, welches nicht an kleine Displays angepasst war: Anstatt ab einer bestimmten Größe Blöcke untereinander neu anzuordnen so wie wir Handynutzer es gewöhnt sind, blieb das Layout einfach starr und unhandlich. Hinzu kamen andere Probleme wie lange Ladezeiten, die zurückzuführen waren auf zu große Mediendateien und unnötig aufgeblasenen, maschinengenerierten Code.

Ich entschied mich dafür, die Seite nochmal nachzucoden und nahm danach über einige Monate hinweg schrittweise Verbesserungen und Erweiterungen vor. Dabei war die Bibliothek Bootstrap von großer Hilfe. Bis auf einige Details wurde das Design der Desktopansicht komplett übernommen, bei der Handyansicht musste ich mir etwas neues ausdenken.

{{< img_resp_old src="conthor-handyvergleich.png" alt="Vergleich von der alten und neuen Version der Seite">}}

Später merkte ich aber, dass das Projekt nicht gut wartbar war und dass es sehr praktisch wäre, dem Seitenbesitzer einen bequemen und eigenständigen Weg zur Änderung und Hinzufügung von Inhalten zu geben. Dazu setzte ich auf Hugo, einem Generierer von statischen Seiten, kombiniert mit einem von [forestry.io](https://forestry.io) bereitgestellten Interface zur Texteditierung. Damit konnte ich auch viel Duplizierung von Code vermeiden.