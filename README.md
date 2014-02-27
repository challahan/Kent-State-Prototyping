# Kent State Prototyping Template

This template, built on Zurb Foundation, makes prototyping for Kent State websites easier than ever before.  Yay!

## What's Included

* index.html:  This is the "kitchen sink", which shows examples of the available styles.
* landing-page-template.html:  This is a template for a basic top-level landing page.
* Coming Soon: Page w/ Left Column, Departmental Pages

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

## Directory Strucutre

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here


## Wishlist

   * Simplify the structure of buttons.  Currently, using lots of important tags instead of mix-ins.
   * Replace all color values with "theme" values instead, so that colors can be easily swapped.
  
