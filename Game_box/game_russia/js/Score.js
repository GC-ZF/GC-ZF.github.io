<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>(function(window){
	'use strict';

	function Score(){
		this.canvas = new Canvas('score',100,70);
		this.score = 0;

		this._init();

	}

	Score.prototype = {
		constructor:Score,

		_init:function(){
			this._render();
		},
		_render:function(){    //控制context绘制得分
			this.canvas.drawText(this.score);
		},
		addScore:function(value){
			this.score+=value;
			this._render();
			return this.score;
		}
	};
	window.Score = Score;
})(window);