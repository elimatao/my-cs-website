---
title: LEDs
slug: leds
layout: leds
date: 2022-06-18
lastmod: 2022-06-18
description: Game about the conversion between numerical systems
featured_image: /images/LEDs.png
show_featured_image: True
draft: False
has_formulas: True
---
The numbers we normally use are represented with the decimal sistem. That means, its digits go from 0 to 9. However, they can also be represented with the binary sistem, which only has 0 and 1. In this case, the number 5 would be 101 for example.

The important thing in this game is to know how to convert binary numbers into decimal ones. Therefore we need to look at all the 1 (or LEDs turned on in the case of the game). The values attribued to the position of every 1 need to be added. They are, looking from right to left: $2^0, 2^1, 2^2, 2^3... (1, 2, 4, 8 ...)$.

**Example:** We have the number 1101. To convert it, we calculate $2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13$.

In the case of this game, all the 0 are represented by LEDs turned off and the 1 by LEDs turned on. The players who manage to convert the given numbers fastest win. 