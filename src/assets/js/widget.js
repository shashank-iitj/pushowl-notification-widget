'use strict';

var pushowl = {
  init: function () {
    // TODO: Add your html code here
    var widget = $.get("/widget.html").then((result) => {
      console.log(result)
      // Insert the pushowl widget container
      document.body.insertAdjacentHTML('afterend', result);

      this.endpoint = "http://127.0.0.1:3000";
      var docHead = document.getElementsByTagName("head")[0];
      this.addCSS(docHead, this.endpoint + "/assets/css/widget.css", false);
    })

  },
  addCSS: function (parent, url, sync) {
    var link = document.createElement("link");
    link.href = url;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.async = sync;
    link.media = "screen,print";
    parent.appendChild(link);
  }
};

pushowl.init();