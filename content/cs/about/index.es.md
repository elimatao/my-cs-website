---
title: Sobre este sitio
slug: sobre_este_sitio
date: 2020-08-01
lastmod: 2020-08-01
description:
featured_image: /images/code.png
show_featured_image: True
draft: False
---
## Propósito
Esta sitio ha sido creado en junio y julio de 2020 como proyecto final del curso online sobre informática [CS50x](https://www.edx.org/es/course/cs50s-introduction-to-computer-science) (muy recomendable). Por lo tanto, muchos de sus elementos son realmente ejercicios y no deberían ser tomados en serio.
Por ejemplo, seguro que alguno de vosotros se habrá dado cuenta de que hay una sección para iniciar sesión pero no hay manera de registrarse. El único actualmente que puede iniciar sesión soy yo, y no creo que vaya a usar esa opción porque lo único que permite es añadir vídeos y usuarios a la base de datos, lo que va más rápido de otra manera. Así solo fue creada para hacer todo más complejo, lo que también va para el formulario de contacto. Dudo seriamente de que alguien vaya a usarlo, pero fue interesante descubrir como generar y mandar e-mails automáticamente. Supongo que ya no se preguntan por qué añadí juegos...

---

## Funcionamiento
El sitio está compuesto por:
- Una aplicación escrita en [python 3](https://www.python.org/) con las librerías [Flask, Jinja y Werkzeug](https://palletsprojects.com/)
- Una base de datos con tablas para usuarios, videos y los resultados de los juegos
- Varios documentos HTML que describen la estructura de cada página
- Documentos CSS para definir el estilo de los elementos HTML (He utilizado [Bootstrap](https://getbootstrap.com/) en muchas ocasiones)
- Documentos JavaScript que hacen las páginas más interactivas

El núcleo de este sitio es la aplicación Flask, que está en un servidor de [Heroku](https://www.heroku.com/). Cuando un usuario quiere acceder al sitio, esta "envía" los documentos HTML, CSS y JS necesarios. Algunos contenidos sin embargo son dependientes de una base de datos, ya que cambian frecuentemente y es la única manera de guardarlos.

Gracias a la librería Jinja se puede integrar esos datos en el documento HTML al cargar la página. Además, la tecnología <abbr title="Asynchronous JavaScript And XML">AJAX</abbr> permite el intercambio de información entre la aplicación en el lado del servidor y el navegador del usuario sin tener que recargar la página. Esto por ejemplo es visible al seleccionar un compositor en la sección de música.

---

## Compatibilidad
Este sitio ha sido probado principalmente con los navegadores Firefox y Chrome, por lo que recomiendo su uso. Otros navegadores son compatibles pero puede que algunas características no estén disponibles. También es posible que la tecnología JavaScript esté desactivada en el navegador. Para comprobar si es el caso y resolverlo, pueden visitar [esta página web](https://www.enable-javascript.com/es/).

---

## Agradecimientos
Hay varias personas sin las cuales el sitio web no habría sido posible. En primer lugar, quiero agradecer al equipo de CS50 por ofrecer un curso tan fantástico gratuitamente. Después están sitios web como w3schools o stackoverflow que suponen una referencia de muy alta calidad. También me gustaría agradecer a mis padres por ayudarme con las fotos y los vídeos y finalmente a todas las personas que probaron el sitio, permitiendo los últimos ajustes.
