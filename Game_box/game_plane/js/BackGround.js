<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * 游戏背景
 */
var BackGround = function(img,x,y,w,h,v,gameStart){
	// 背景图片
	this.img = img;
	// 坐标
    this.x_int = x;
    this.y_int = y;
    // 大小
    this.w_int = w;
    this.h_int = h;
    //速度
    this.v_float=v;
    // 引用
    this.gs = gameStart;
};
BackGround.prototype = {
	//绘制
	darw:function(spf){
		var bg = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		this.gs.context.drawImage(bg,x,y,w,h);
		this.move(spf);
	},
	//移动
	move:function(fps){
		var v = this.v_float/fps;
		if(this.y_int>=this.h_int){
			this.y_int=0-this.h_int;
		}
		this.y_int+=v;
	}
};