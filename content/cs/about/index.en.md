---
title: About this site
slug: about_this_site
date: 2020-08-01
lastmod: 2020-08-01
description:
featured_image: /images/code.png
show_featured_image: True
draft: False
has_formulas: False
---
## Purpose
This site was created in juni and july as final project for the online course [CS50x](https://www.edx.org/es/course/cs50s-introduction-to-computer-science) (Very recommendable). Therefore, many of its elements are actually exercises and shouldn't be taken seriously.
For example, some of you certainly have noticed that there is a section for logging in, but no one for registering. I am the only one that can log in actually and I don'tthink that I'm going to use it, since it just allows to add users and videos to the database, which goes faster in another way. In fact, that feature was only created to make the everything more komplex, which also goes for the contact form. I don't really think anybody is going to use it, but it was interesting to discover how to make an app generate and send e-mails automatically.

---

## Functioning

The sites components are:
- An application written in [python 3](https://www.python.org/) with the libraries [Flask, Jinja y Werkzeug](https://palletsprojects.com/)
- A database with tables for users, videos and the results of the games
- Multiple HTML files that describe the structure of every page
- CSS documents, made to the define the style of every HTML element (I used [Bootstrap](https://getbootstrap.com/) in many cases)
- JavaScript files that add some interactivity to the pages

The core of this site is the Flask-app, which is cloud-hosted by [Heroku](https://www.heroku.com/). When a user makes a request to the app, it sends the required HTML, CSS and JS files. Some contents however are dependent of a database, since they change frequently and it's the only way to store them.

Thanks to th Jinja library, that data can be dinamically integrated into the HTML files when sent to the user. In adition to that, the AJAX tecnology (Asynchronous JavaScript And XML) allows the exchange of information between the server and the browser of the user without need to reload the page, which can be seen when selecting a composer in the music section.

---

## Compatibility
This site has primarily been tested with the browsers Chrome and Firefox. I recommend their usage. Other browsers can show the site but some features may not be available. It's also possible that the JavaScript technology is disabled in your browser. to check wether this is the case and solve it, you can visit [this website](https://www.enable-javascript.com/es/).

---

## Acknowledgements
There are many people that made this project possible. I'd first like to thank the CS50 team for offering such a fantastic course for free. I also say thanks to the Stackoverflow community and W3schools for offering an extremely useful reference. Finally, I'd like to acknowledge my parents for helping me with the videos and images and reviewing the texts and all the persons that tested the site and found the last issues.