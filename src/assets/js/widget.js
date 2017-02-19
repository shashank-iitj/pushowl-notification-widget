'use strict';

var pushowl = {
    init: function () {
        // TODO: Add your html code here
        var widget = `
            <div id="pushowl-widget-container">
                <div class="pushowl-notification-widget">
                    <div class="pushowl-widget-bell-container">
                        <img src="/assets/images/ic_notifications_white_24px.svg" width="20" height="20" />
                    </div>
                    <div class="pushowl-widget-content">
                        <div class="pushowl-widget-message">Get notification on your computer for important events and updates.</div>
                        <div class="pushowl-widget-button-bar">
                            <button class="pushowl-widget-action-btn">No</button>
                            <button class="pushowl-widget-action-btn">Yes</button>
                        </div>
                    </div>
                </div>
            </div>`;
        // Insert the pushowl widget container
        document.body.insertAdjacentHTML('afterend', widget);

        this.endpoint = "http://127.0.0.1:3000";
        var docHead = document.getElementsByTagName("head")[0];
        this.addCSS(docHead, this.endpoint + "/assets/css/widget.css", false);
        this.addCSS(docHead, "https://fonts.googleapis.com/css?family=Roboto", false);
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