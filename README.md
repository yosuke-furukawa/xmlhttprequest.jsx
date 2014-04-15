XmlHttpRequest for JSX
========================

XHR for JSX

How to use
========================

```sh
$ npm install xmlhttprequest.jsx -S
```

```javascript

import "xmlhttprequest.jsx/xmlhttprequest.jsx";

class _Test extends TestCase {
  function testXHR() : void {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      log("State: " + this.readyState);

      if (this.readyState == 4) {
        log("Complete.\nBody length: " + this.responseText.length);
        log("Body:\n" + this.responseText);
      }
    }

    xhr.open("GET", "http://driverdan.com");
    xhr.send();
  }
}

```
