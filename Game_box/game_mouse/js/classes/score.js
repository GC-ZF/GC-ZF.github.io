<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 分数类
 */
(function() {

    var Score = function() {

         this.x;
         this.y;	
         this.duration=20;//消失canvas刷新次数	
         this.scoreType=-1;//画的分数帧,default是-1，不绘图。
         this.image= my.ImageManager.get('icon');		 
         		 
    }
	Score.prototype.width=106;
	Score.prototype.height=65;
	Score.prototype.frames = getScoreFrames("score");
	Score.prototype.draw = function(context){
	    if(this.scoreType>-1&&this.duration>0){
	      var f = this.frames[this.scoreType];
		  context.drawImage(this.image,f.x,f.y,this.width,this.height,this.x,this.y,this.width,this.height);
	      this.duration--;
		}else{
		  this.duration=20;
		  this.scoreType=-1;
		}
	}
	 
    window.Score = Score;
})();
