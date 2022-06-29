---
title: About this site v2
slug: about_this_site_v2
date: 2022-06-20
lastmod: 2022-06-28
description:
featured_image: /images/code_v2.png
show_featured_image: True
draft: False
has_formulas: False
---
## Problems so far
Altough the site seemed rather complete, there were a few under-the-hood issues that affected the performance (loading time) and the development flow:
- In the free plan from Heroku, the server is shut down after some minutes of inactivity, causing a way too long initial response time for the next request.
- Pages such as "About me", that don't contain live data, were server-side rendered on every request. This was slower than rendering the page on compile time as Static Site Generators do.
- <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr> was unavailable because of limitations in Herokus free plan on custom domains.
- The frontend code was split over two different repositories, one with the dynamic flask app and another one containing the static "cs" section. This meant that if I wanted to change let's say the text color, I had to do double work and programmers hate that.
- Content writing and editing wasn't very comfortable in the flask app, as most of it happened in raw <abbr title="Hyper Text Markup Language">HTML</abbr> and the translations could only writtten in .po files, which had to be generated with extra scripts.

## Changes
Most of these issues were adressed by merging the frontend code into a single [Hugo](https://gohugo.io) project. Hugo is a powerful Static Site Generator. The pages are now compiled once and served quickly via [Netlify](https://www.netlify.com). The content is comfortably edited in the Markdown language with optional HTML extensions and the translation process is more straight forward. The code is available on my [Github repository](https://github.com/elimatao/website-frontend).

The dynamic content is requested via JavaScript and served by the flask app which has been radically reduced to a simple <abbr title="Application Programming Interface">API</abbr>. The delay due to the on-demand launch of the server is still present, but only noticeable in the music section, where it takes a bit longer to load the available composers.