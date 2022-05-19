---
title: "BwInf-39.2"
date: 2022-05-17T15:24:04+01:00
draft: false
description: Meine Lösung zur ersten und zweiten Aufgabe der zweiten Runde des BwInf
featured_image: /images/BWINF-Logo_RGB_Bundeswettbewerb.png
has_formulas: false 
---
# Kontext
Im Frühjahr 2021 nahm ich erfolgreich an der zweiten Runde des Bundeswettbewerbs Informatik teil. Ich durfte mir zwei der [drei gestellten Aufgaben](https://bwinf.de/fileadmin/bundeswettbewerb/39/aufgaben392.pdf) aussuchen und sie über mehrere Monate hinweg bearbeiten. Die Ergebnisse meiner bei weitem nicht perfekten Arbeit können interessierte [hier](https://github.com/elimatao/BwInf-39.2) einsehen und wiederverwenden.

# Aufgabe 1: Flohmarkt
Hier ging es darum, Anfragen zur Miete eines Flohmarktstandplatzes so optimal auszuwählen und zu ordnen, dass die Gewinne durch Mieteinnahmen maximiert wurden.

Zur Lösung dieses modifizierten Verpackungsproblems habe ich einen gierigen Algorithmus verwendet und mehrere Heuristiken zur Verbesserung der Ergebnisse ausprobiert.

# Aufgabe 2: Spießgesellen
In verdeckten Schüsseln befanden sich verschiede Obstsorten. Nun wurden verschiedene Obstspieße erstellt. Mit der Information, welche Sorten auf einem Spieß waren und welche Schüsseln benutzt wurden, um den Spieß zu bauen, sollte herausgefunden werden, welche Sorte sich in welcher Schüssel befand.

Gelöst habe ich das Problem mit einer schrittweisen, logischen Eliminierung möglicher Sorten für eine Schüssel (lieber die ausführliche Dokumentation lesen). Die Darstellung des Problems als bipartiter Graph mit anschließender Durchführung eines Matchings wäre auch ein Lösungsansatz gewesen. 