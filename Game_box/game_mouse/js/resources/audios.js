<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 音频资源列表
 */
function getAudioRes() {
    return [{
        id : 'begin_music',
        src : 'audio/begin_music'
    }, {
        id : 'second_music',
        src : 'audio/second_music'
    },{
        id : 'game_music',
        src : 'audio/game_music',
		loop : true
    }, {
        id : 'game_pass',
        src : 'audio/game_pass'
    }, {
        id : 'no_hit',
        src : 'audio/no_hit'
    }, {
        id : 'over_music',
        src : 'audio/over_music'
    }];
}