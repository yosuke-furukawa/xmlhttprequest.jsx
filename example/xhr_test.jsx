import "xmlhttprequest.jsx";

class _Main {
  static function main(args : string[]) : void {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        log("State: " + xhr.readyState as string);

        if (xhr.readyState == 4) {
          log("Complete.\nBody length: " + xhr.responseText.length as string);
          log("Body:\n" + xhr.responseText);
        }
      };

      xhr.open("GET", "http://localhost:5000/index.html");
      xhr.send();
  }
}
