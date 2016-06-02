(function() {
    "use strict";
 
    define(function () {
 
        var link = function(url) {
            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = url;
 
            document.getElementsByTagName("head")[0].appendChild(css);
        };
 
        return {
            link: link
        };
    });
}());