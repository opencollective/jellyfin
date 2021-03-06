define(function() {
    "use strict";
    var addRedirectPrevention = null != self.dashboardVersion && self.Dashboard && !self.Dashboard.isConnectMode();
    return {
        load: function(url, req, load, config) {
            -1 === url.indexOf("://") && (url = config.baseUrl + url), config.urlArgs && (url += config.urlArgs(url, url)), addRedirectPrevention && (-1 === url.indexOf("?") ? url += "?" : url += "&", url += "r=0");
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, !0), xhr.onload = function(e) {
                load(this.response)
            }, xhr.send()
        },
        normalize: function(name, normalize) {
            return normalize(name)
        }
    }
});