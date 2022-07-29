<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 分数帧
 */
var getScoreFrames = (function() {

    var frames = {
        score :[{
            x : 5,                       //+500
            y : 0
        }, {                             //x/2
            x : 111,
            y : 0
        }, {                             //-100
            x : 207,
            y : 0
        }, {                             //+100
            x : 322,
            y : 0
        },{                              //+20%
            x : 5,
            y : 65
        }]  
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
