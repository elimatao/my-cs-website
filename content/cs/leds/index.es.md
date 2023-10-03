---
title: LEDs
slug: leds
layout: leds
date: 2022-06-18
lastmod: 2022-06-18
description: Juego de conversión entre sistemas numéricos.
featured_image: /images/LEDs.png
show_featured_image: True
draft: False
has_formulas: True
---
Los números que utilizamos normalmente son representados con el sistema decimal, es decir, sus dígitos van del 0 al 9. Sin embargo, también se pueden representar con el sistema binario, que solo contiene 0 y 1. Así, por ejemplo, el número 5 es 101 en binario.

Lo importante en este juego es saber pasar los números del sistema binario al decimal. Para ello tenemos que contemplar todos los 1 (o LEDs encendidos en el caso del juego). Hay que sumar todos los valores atribuidos a la posición de cada 1. Los valores son, de derecha a izquierda: $2^0, 2^1, 2^2, 2^3... (1, 2, 4, 8 ...)$.

**Ejemplo:** Tenemos el número 1101. Para convertirlo calculamos $2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13$.

En el caso de este juego, los 0 son representados por LEDs apagadas y los 1 por LEDs encendidas. Ganan los jugadores que menos tardan en convertir los números dados. 