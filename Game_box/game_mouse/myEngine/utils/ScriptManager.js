<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 脚本资源管理器
 */
(function() {

    var ScriptManager = {
        /**
         * @private
         */
        __loadScript : function(url, callback) {
            var script = document.createElement('script');
            if(script.readyState) {
                script.onreadystatechange = function() {
                    if(script.readyState == 'loaded' || script.readyState == 'complete') {
                        callback.call();
                    }
                }
            } else {
                script.onload = callback;
            }
            script.type = 'text/javascript';
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        },
        /**
         * 加载脚本资源
         * @param {Array} urls
         * @param {Function} statechange
         */
        load : function(urls, statechange, __index) {
            __index = __index || 0;
            if(urls[__index]) {
                ScriptManager.__loadScript(urls[__index], function() {
                    ScriptManager.load(urls, statechange, __index + 1);
                });
            }
            statechange(__index);
        }
    }

    my.ScriptManager = ScriptManager;
})();
