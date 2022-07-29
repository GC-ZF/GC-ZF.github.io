<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var Num = function(context){
	this.ctx = context;
	this.size = 14;
	
	this.draw = function(num,x,y){
		var tempX = x;
		var tempY = y;
		var tempNumArray = [];
		if(num == 0){
			tempNumArray.push(0);
		}else{
			while(num > 0){
				tempNumArray.push(num % 10);
				num = parseInt(num/10);
			}
		}
		for(var i=tempNumArray.length-1;i>=0;i--){
			tempX = x+(tempNumArray.length-i-1) * this.size;
			this.ctx.drawImage(RESOURCE_IMAGE,POS["num"][0]+tempNumArray[i]*14,POS["num"][1],this.size, this.size,tempX, tempY,this.size, this.size);
			
		}
	};
	
};