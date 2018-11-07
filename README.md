# meteor-snapsvgcdn #

[![Build Status](https://travis-ci.org/mirageglobe/meteorsnapsvgcdn.svg?branch=master)](https://travis-ci.org/mirageglobe/meteorsnapsvgcdn)

- author/site : Jimmy MG Lim (mirageglobe@gmail.com) / www.mirageglobe.com
- source : https://github.com/mirageglobe/meteorsnapsvgcdn

CDN edition of Snapsvg packaged for Meteor.

-   Homepage of Snapsvg: [Snapsvg][] \<<http://www.snapsvg.io/>\>
-   Github source: [Github][]
    \<<https://github.com/adobe-webplatform/Snap.svg/>\>
-   A Sample Tutorial: [Tutorial][] \<<http://snapsvg.io/start/>\>

# Features #

- includes snapsvg

# To use #

to install,
```
  $ meteor add mirageglobe:snapsvgcdn
```

```
  Template.\<templatename\>.rendered = function(){
    // snap code here
  }
```

to add to your app, in your html file create a template
```
  <template name="snapsvgdraw"\>
  </template\>
```

in your js file, within isClient...
```
  // snapsvgdraw is a template with nothing in it. this draws a 800 x 600 canvas for drawing.
  Template.snapsvgdraw.rendered = function () {
    "use strict";
    Meteor.setTimeout(function () {var s = new Snap(800, 600), bigCircle = s.circle(150, 150, 100); }, 1000);
  };
```

Note that it may take a few m.seconds for the lib to load, so you may encounter "Snap is not found" if the snap cdn library is not loaded. The above will avoid this problem. (thanks to mattybow for spotting)

Happy drawing! Added bonus: use svgcrowbar to download the svg (http://nytimes.github.io/svg-crowbar/)

  [Snapsvg]: http://www.snapsvg.io/
  [Github]: https://github.com/adobe-webplatform/Snap.svg/
  [Tutorial]: http://snapsvg.io/start/

# Guidelines #

a few points to note before submitting PR :

- use CDN (Content Delivery network) when possible to reduce hosted repos
- simple and clean UX/UI (Try to; although this is subjective; rule of thumb is if something is not essential, remove it)

# Roadmap #

- N/A

# License

Copyright 2013 Jimmy MG Lim (mirageglobe@gmail.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

License Breakdown: https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)
