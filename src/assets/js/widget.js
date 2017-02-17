'use strict';

var pushowl = {
    init: function () {
        // TODO: Add your html code here
        var widget = `
            <div id="pushowl-widget-container">
                <div class="pushowl-notification-widget">
                    <h4>This is a widget</h4>
                </div>
            </div>`;
        // Insert the pushowl widget container
        document.body.insertAdjacentHTML('afterend', widget);

        this.endpoint = "http://127.0.0.1:3000";
        var docHead = document.getElementsByTagName("head")[0];
        this.addCSS(docHead, this.endpoint + "/assets/css/widget.css", false);
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