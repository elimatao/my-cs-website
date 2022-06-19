---
title: Leds
slug: leds
type: games/leds
date: 2022-06-18
lastmod: 2022-06-18
description: Spiel über die Umwandlung zwischen Zahlensystemen
featured_image: /images/LEDs.png
show_featured_image: False
draft: False
has_formulas: True
---
Die Zahlen, die wir normalerweise benutzen, werden mit dem dezimalen Zahlensystem dargestellt. Das heißt, die Ziffern gehen von 0 bis 9. Man kann Zahlen aber auch mit dem binären Zahlensystem darstellen, das nur 0 und 1 enthält. So ist zum Beispiel die Zahl 5 binär dargestellt 101.

Das Wichtige in diesem Spiel ist, die Zahlen vom binären System in das dezimale System umwandeln zu können. Dazu muss man alle Einsen betrachten (oder eingeschaltete LEDs im Fall des Spiels) und alle Werte addieren, die der Position dieser Einsen entsprechen. Die Werte sind, von rechts nach links gesehen: $2^0, 2^1, 2^2, 2^3... (1, 2, 4, 8 ...)$.

**Beispiel:** Gegeben ist die Zahl 1101. Um sie umzuwandeln, rechnet man $2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13$.

In dem Spiel werden alle Nullen durch ausgeschaltete LEDs dargestellt, alle Einsen durch eingeschaltete. Es gewinnen die Spieler, die weniger Zeit brauchen, um die Zahlen umzuwandeln.