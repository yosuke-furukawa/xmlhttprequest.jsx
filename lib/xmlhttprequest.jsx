native class XMLHttpRequest {
  var onreadystatechange : function():void;
  var headers : variant;
  var readyState : variant;
  var responseText : string;
  var status: variant;
  function open(method: string, url: string) : void;
  function open(method: string, url: string, async: boolean) : void;
  function open(method: string, url: string, async: boolean, user: string, password: string) : void;
  function abort() : void;
  function send() : void;
  function send(data: variant) : void;
  function send(data: string) : void;
} = """
(function () {
  if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    return require('xmlhttprequest').XMLHttpRequest;
  } else {
    // browser
    return window.XMLHttpRequest;
  }
}())
""";
