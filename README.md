# Web Slider

This is a small project to show a slide of images or web pages on your own web page.

## How to use it

Go to src/pages.json, here you will find all the configurations

- transitionTime (default: 300000, 5 min): milliseconds to change between pages
- refeshTime (default: 3600000, 1hour): milliseconds to refresh all pages
- pages: it´s an array of objects with this attributes
  - name: page name, just for reference
  - type: wpage (web page) or img (image)
  - url: url to the page or the image you want to show
