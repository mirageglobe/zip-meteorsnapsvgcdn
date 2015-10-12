meteor-snapsvgcdn
======================

[![Build Status](https://travis-ci.org/mirageglobe/meteorsnapsvgcdn.svg?branch=master)](https://travis-ci.org/mirageglobe/meteorsnapsvgcdn)

CDN edition of Snapsvg packaged for Meteor.

-   Homepage of Snapsvg: [Snapsvg][] \<<http://www.snapsvg.io/>\>
-   Github source: [Github][]
    \<<https://github.com/adobe-webplatform/Snap.svg/>\>
-   A Sample Tutorial: [Tutorial][] \<<http://snapsvg.io/start/>\>

To install:

> meteor add mirageglobe:snapsvgcdn

HowTo:

> Template.\<templatename\>.rendered = function(){
> // snap code here
>
> }

Sample:

In your html file create a template

> \<template name="snapsvgdraw"\>
> \</template\>

In your js file, within isClient...

> // snapsvgdraw is a template with nothing in it. this draws a 800 x 600 canvas for drawing.
> Template.snapsvgdraw.rendered = function () {
> "use strict";
> Meteor.setTimeout(function () {var s = new Snap(800, 600), bigCircle = s.circle(150, 150, 100); }, 1000);
> };

Note that it may take a few m.seconds for the lib to load, so you may encounter "Snap is not found" if the snap cdn library is not loaded. The above will avoid this problem. (thanks to mattybow for spotting)

Happy drawing! Added bonus: use svgcrowbar to download the svg (http://nytimes.github.io/svg-crowbar/)

  [Snapsvg]: http://www.snapsvg.io/
  [Github]: https://github.com/adobe-webplatform/Snap.svg/
  [Tutorial]: http://snapsvg.io/start/
