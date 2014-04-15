import "test-case.jsx";
import "xmlhttprequest.jsx";

class _Test extends TestCase {
  function testXHR() : void {
    this.async((async : AsyncContext)->{
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        log("State: " + xhr.readyState as string);

        if (xhr.readyState == 4) {
          log("Complete.\nBody length: " + xhr.responseText.length as string);
          log("Body:\n" + xhr.responseText);
          this.expect(xhr.status, "XHR status is 200").toBe(200);
          async.done();
        }
      };

      xhr.open("GET", "http://www.google.co.jp");
      xhr.send();
    }, 1000);
  }
}
