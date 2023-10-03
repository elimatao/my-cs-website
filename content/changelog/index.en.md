---
title: Changelog
slug: changelog
date: 2022-06-20
lastmod: 2023-10-03
description:
featured_image: /images/code_v2.png
show_featured_image: True
draft: False
has_formulas: False
---
## v2.1
**2023-10-03**
### Motivation
Heroku (my backend hosting provider) decided to remove the free plan. So, in order to save costs I had to get rid of the backend which, being a programming exercise, was mostly unnecessary anyway.
### Changes
So what I did is to turn the recordings into static files, which makes them less flexible to be queried, but reduces loading time to nothing.

Furthermore I had to remove the highscore table in the LEDs game as it also requires the backend. The game is still playable. It has been moved to the Informatics section as I don't think I will be adding enough games in the future to justify a dedicated games section. Besides, this website is rather supposed to be about me and what I do than a games portal.



# v2.0
**2022-06-28**
### Problems so far
Altough the site seemed rather complete, there were a few under-the-hood issues that affected the performance (loading time) and the development flow:
- In the free plan from Heroku, the server is shut down after some minutes of inactivity, causing a way too long initial response time for the next request.
- Pages such as "About me", that don't contain live data, were server-side rendered on every request. This was slower than rendering the page on compile time as Static Site Generators do.
- <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr> was unavailable because of limitations in Herokus free plan on custom domains.
- The frontend code was split over two different repositories, one with the dynamic flask app and another one containing the static "cs" section. This meant that if I wanted to change let's say the text color, I had to do double work and programmers hate that.
- Content writing and editing wasn't very comfortable in the flask app, as most of it happened in raw <abbr title="Hyper Text Markup Language">HTML</abbr> and the translations could only writtten in .po files, which had to be generated with extra scripts.

### Changes
Most of these issues were adressed by merging the frontend code into a single [Hugo](https://gohugo.io) project. Hugo is a powerful Static Site Generator. The pages are now compiled once and served quickly via [Netlify](https://www.netlify.com). The content is comfortably edited in the Markdown language with optional HTML extensions and the translation process is more straight forward. The code is available on my [Github repository](https://github.com/elimatao/website-frontend).

The dynamic content is requested via JavaScript and served by the flask app which has been radically reduced to a simple <abbr title="Application Programming Interface">API</abbr>. The delay due to the on-demand launch of the server is still present, but only noticeable in the music section, where it takes a bit longer to load the available composers.