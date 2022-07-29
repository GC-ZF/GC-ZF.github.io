<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 算数运算函数
 */
(function() {

    my.Math = {
        /**
         * 获取随机数
         * @param {Number} min
         * @param {Number} max
         */
        random : function(min, max) {
            return Math.floor((max - min + 1) * Math.random()) + min;
        },
        /**
         * 1角度对应的弧度
         */
        pointtoradian : Math.PI / 180
    }

})();
