/*
	author: Chu Luo<mr.cluo29@gmail.com>
	reuse some code from: @nixzhu (zhuhongxu@gmail.com)
	license: GPL
*/

/* some global values */
var pan = new Array(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
);

var Cpan = new Array(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
);

var shadow = new Array(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
);
var jie = new Array();
var move_record = new Array();

function showPan() {
	var c = document.getElementById("weiqi");
	var cxt = c.getContext("2d");
	cxt.strokeStyle="black";
	
	/* 清空，重新画线等 */
	cxt.clearRect(0,0,600,600);
	cxt.fillStyle = "sandybrown";
	cxt.fillRect(0,0,600,600);
	grid(cxt);
	ninePoints(cxt);

	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (pan[i][j] === 1) { //black
				var rg = cxt.createRadialGradient((i+1)*30-3, (j+1)*30-3, 1, (i+1)*30-4, (j+1)*30-4, 11);
				rg.addColorStop(1, /*"black"*/"#202020");
				rg.addColorStop(0, "gray");
				cxt.beginPath();
				cxt.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				//cxt.fillStyle="black";
				cxt.fillStyle=rg;
				cxt.fill();
				
			}
			else if (pan[i][j] === 2) { //white
				var rg = cxt.createRadialGradient((i+1)*30-3, (j+1)*30-3, 1, (i+1)*30-4, (j+1)*30-4, 11);
				rg.addColorStop(1, /*"lightgray"*/"#e0e0e0");
				rg.addColorStop(0, "white");
				cxt.beginPath();
				cxt.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				//cxt.fillStyle="white";
				cxt.fillStyle=rg;
				cxt.fill();
			}
			else if (pan[i][j] === 7) { // fill color
				cxt.beginPath();
				cxt.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				cxt.fillStyle="red";
				cxt.fill();
			}
		}
	}
	
}

function play(row, col) {
	if (row < 0 || row > 19 || col < 0 || col > 19) {
		alert("index error....");
		return;
	}
	// 处理已有棋子在此
	if (pan[row][col] != 0) {
		alert("Already full there");
		return;
	}

	if (move_count % 2 === 1)
	{
		stone_down_white(row, col);
	}
	else
	{
		if(move_count===2)
		{
	
			if(move_record[0][0]==row&&Math.abs(move_record[0][1]-col)==1)
			{
				stone_down_black(row, col);
			}
			else if(move_record[0][1]==col&&Math.abs(move_record[0][0]-row)==1)
			{
				stone_down_black(row, col);
			}
			else
			{
				alert("First 2 black must stick together");
			}

		}
		else
		{
			stone_down_black(row, col);
		}
		
	}
	//alert("row="+row+"col="+col);
}

//row is actually col



/* 将盘面做个影分身 */
function make_shadow() {
	for (var i = 0; i < pan.length; i++) {
		for (var j = 0; j < pan[i].length; j++) {
			shadow[i][j] = pan[i][j];
		}
	}
}
function shadow_to_pan() {
	for (var i = 0; i < pan.length; i++) {
		for (var j = 0; j < pan[i].length; j++) {
			pan[i][j] = shadow[i][j];
		}
	}
}

/* 泛洪填充，只操作影分身 */
function flood_fill(row, col, color) { // color 为当前要填充的颜色
	if (row < 0 || row > 19-1 || col < 0 || col > 19-1)
		return;

	var anti_color = 2;
	if (color === 2)
		anti_color = 1;

	if (shadow[row][col] !== anti_color && shadow[row][col] !== 7) { // 非color颜色，且未被填充
		shadow[row][col] = 7; // 表示已被填充
		flood_fill(row+1, col, color);
		flood_fill(row-1, col, color);
		flood_fill(row, col+1, color);
		flood_fill(row, col-1, color);
	}
}

var gameEnded=false;

// 真正落子
function stone_down_white(row, col) {
	
	pan[row][col] = 2;
	
	move_count ++;
	move_record.push([row, col]);	// 记录手数


	
	
	if(winJudgeWhite())
	{
		if(gameEnded==false)
		{
			alert("White wins");
			gameEnded=true;
		}
	}
	
}



// 真正落子
function stone_down_black(row, col) {
	
	console.log("down"); 
	
	pan[row][col] = 1;
	
	move_count ++;
	move_record.push([row, col]);	// 记录手数


	//console.log("CJJAWL"); 
	if(winJudgeBlack())
	{
		if(gameEnded==false)
		{
			alert("Black wins");
			gameEnded=true;
		}
	}
	

}

function winJudgeWhite(){
	//must be a white, 1,3,5,7...
	
	var newest_move = move_record.length-1;
	//find all 3 old combinations, with the new, judge
	//console.log(newest_move); 
	//console.log(move_record[newest_move][0]+":"+move_record[newest_move][1]);
	
	if(move_record.length-1<7)
	{
		return false;
	}
	else
	{
		for (var i = 1; i < newest_move-4; i=i+2) {
			for (var j = i+2; j < newest_move-2; j=j+2) {
				for (var k = j+2; k < newest_move; k=k+2) {
					if(isSquareReal(newest_move,i,j,k))
					{
						//console.log("yes"); 
						return true;
					}
					//console.log("no"+i+","+j+","+k+","+newest_move); 
				}
			}
		}
	}
	return false;
}


function winJudgeBlack(){
//must be a black, 0,2,4,6...

	var newest_move = move_record.length-1;
	//find all 3 old combinations, with the new, judge
	//console.log(newest_move); 
	//console.log(move_record[newest_move][0]+":"+move_record[newest_move][1]);
	if(move_record.length-1<6)
	{
		return false;
	}
	else
	{
		for (var i = 0; i < newest_move-4; i=i+2) {
			for (var j = i+2; j < newest_move-2; j=j+2) {
				for (var k = j+2; k < newest_move; k=k+2) {
					if(isSquareReal(newest_move,i,j,k))
					{
						//console.log("yes"); 
						return true;
					}
					//console.log("no"+i+","+j+","+k+","+newest_move); 
				}
			}
		}
	}
	return false;
}


function isSquare(count1, count2, count3, count4)
{
	var x1=computed_record[count1][0];
	var y1=computed_record[count1][1];
	var x2=computed_record[count2][0];
	var y2=computed_record[count2][1];
	var x3=computed_record[count3][0];
	var y3=computed_record[count3][1];
	var x4=computed_record[count4][0];
	var y4=computed_record[count4][1];
	// find same x as count1
	if(x1==x2)
	{
		// find same y as count1
		if(y1==y3&&Math.abs(x1-x3)==Math.abs(y1-y2))
		{
			if(y2==y4&&x3==x4)
			{
				return true;
			}
		}
		else if(y1==y4&&Math.abs(x1-x4)==Math.abs(y1-y2))
		{
			if(y2==y3&&x4==x3)
			{
				return true;
			}
		}
	}
	else if(x1==x3)
	{
		if(y1==y2&&Math.abs(x1-x2)==Math.abs(y1-y3))
		{
			if(y3==y4&&x2==x4)
			{
				return true;
			}
		}
		else if(y1==y4&&Math.abs(x1-x4)==Math.abs(y1-y3))
		{
			if(y2==y3&&x4==x2)
			{
				return true;
			}
		}
	}
	else if(x1==x4)
	{
		if(y1==y2&&Math.abs(x1-x2)==Math.abs(y1-y4))
		{
			if(y3==y4&&x2==x3)
			{
				return true;
			}
		}
		else if(y1==y3&&Math.abs(x1-x3)==Math.abs(y1-y4))
		{
			if(y2==y4&&x2==x3)
			{
				return true;
			}
		}
	}

	return false;
}


function isSquareReal(count1, count2, count3, count4)
{
	var x1=move_record[count1][0];
	var y1=move_record[count1][1];
	var x2=move_record[count2][0];
	var y2=move_record[count2][1];
	var x3=move_record[count3][0];
	var y3=move_record[count3][1];
	var x4=move_record[count4][0];
	var y4=move_record[count4][1];
	// find same x as count1
	if(x1==x2)
	{
		// find same y as count1
		if(y1==y3&&Math.abs(x1-x3)==Math.abs(y1-y2))
		{
			if(y2==y4&&x3==x4)
			{
				return true;
			}
		}
		else if(y1==y4&&Math.abs(x1-x4)==Math.abs(y1-y2))
		{
			if(y2==y3&&x4==x3)
			{
				return true;
			}
		}
	}
	else if(x1==x3)
	{
		if(y1==y2&&Math.abs(x1-x2)==Math.abs(y1-y3))
		{
			if(y3==y4&&x2==x4)
			{
				return true;
			}
		}
		else if(y1==y4&&Math.abs(x1-x4)==Math.abs(y1-y3))
		{
			if(y2==y3&&x4==x2)
			{
				return true;
			}
		}
	}
	else if(x1==x4)
	{
		if(y1==y2&&Math.abs(x1-x2)==Math.abs(y1-y4))
		{
			if(y3==y4&&x2==x3)
			{
				return true;
			}
		}
		else if(y1==y3&&Math.abs(x1-x3)==Math.abs(y1-y4))
		{
			if(y2==y4&&x2==x3)
			{
				return true;
			}
		}
	}

	return false;
}



function isosceles(c1, c2, c3)
{
	var c1x=computed_record[c1][0];
	var c1y=computed_record[c1][1];
	var c2x=computed_record[c2][0];
	var c2y=computed_record[c2][1];
	var c3x=computed_record[c3][0];
	var c3y=computed_record[c3][1];
	if (c1x != c2x && c1x != c3x && c2x != c3x)
	{
		return false;
	}
	if (c1y != c2y && c1y != c3y && c2y != c3y)
	{
		return false;
	}
	if (c1y == c2y && c1x == c3x) // c1 right
	{
		if ((c1x - c2x)*(c1x - c2x) == (c1y - c3y)*(c1y - c3y))
		{
			return true;
		}
	}
	if (c1y == c3y && c1x == c2x) // c1 right
	{
		if ((c1x - c3x)*(c1x - c3x) == (c1y - c2y)*(c1y - c2y))
		{
			return true;
		}
	}
	if (c2y == c1y && c2x == c3x) // c2 right
	{
		if ((c1x - c2x)*(c1x - c2x) == (c2y - c3y)*(c2y - c3y))
		{
			return true;
		}
	}
	if (c2y == c3y && c2x == c1x) // c2 right
	{
		if ((c3x - c2x)*(c3x - c2x) == (c2y - c1y)*(c2y - c1y))
		{
			return true;
		}
	}
	if (c3y == c2y && c1x == c3x) // c3 right
	{
		if ((c3x - c2x)*(c3x - c2x) == (c1y - c3y)*(c1y - c3y))
		{
			return true;
		}
	}
	if (c1y == c3y && c2x == c3x) // c3 right
	{
		if ((c1x - c3x)*(c1x - c3x) == (c2y - c3y)*(c2y - c3y))
		{
			return true;
		}
	}
	return false;
}

function expected_sqaure_number(c1, c2, c3)
{
	var c4x=0;
	var c4y=0;
	var c1x=computed_record[c1][0];
	var c1y=computed_record[c1][1];
	var c2x=computed_record[c2][0];
	var c2y=computed_record[c2][1];
	var c3x=computed_record[c3][0];
	var c3y=computed_record[c3][1];
	
	if (c1y == c2y && c1x == c3x) // c1 right
	{
		c4x = c2x;
		c4y = c3y;
	}
	if (c1y == c3y && c1x == c2x) // c1 right
	{
		c4x = c3x;
		c4y = c2y;
	}
	if (c2y == c1y && c2x == c3x) // c2 right
	{
		c4x = c1x;
		c4y = c3y;
	}
	if (c2y == c3y && c2x == c1x) // c2 right
	{
		c4x = c3x;
		c4y = c1y;
	}
	if (c3y == c2y && c1x == c3x) // c3 right
	{
		c4x = c1y;
		c4y = c2x;
	}
	if (c1y == c3y && c2x == c3x) // c3 right
	{
		c4x = c1x;
		c4y = c2y;
	}
	var c4=new Array();
	c4[0]=c4x;
	c4[1]=c4y;
	return c4;
}


function expected_sqaure(c1, c2, c3)
{
	//c3 [0,0]
	var c4x=0;
	var c4y=0;
	var c1x=computed_record[c1][0];
	var c1y=computed_record[c1][1];
	var c2x=computed_record[c2][0];
	var c2y=computed_record[c2][1];
	var c3x=c3[0];
	var c3y=c3[1];
	
	if (c1y == c2y && c1x == c3x) // c1 right
	{
		c4x = c2x;
		c4y = c3y;
	}
	if (c1y == c3y && c1x == c2x) // c1 right
	{
		c4x = c3x;
		c4y = c2y;
	}
	if (c2y == c1y && c2x == c3x) // c2 right
	{
		c4x = c1x;
		c4y = c3y;
	}
	if (c2y == c3y && c2x == c1x) // c2 right
	{
		c4x = c3x;
		c4y = c1y;
	}
	if (c3y == c2y && c1x == c3x) // c3 right
	{
		c4x = c1y;
		c4y = c2x;
	}
	if (c1y == c3y && c2x == c3x) // c3 right
	{
		c4x = c1x;
		c4y = c2y;
	}
	var c4=new Array();
	c4[0]=c4x;
	c4[1]=c4y;
	return c4;
}


function expected_sqaure_real(c1, c2, c3)
{
	//c3 [0,0]
	var c4x=0;
	var c4y=0;
	var c1x=move_record[c1][0];
	var c1y=move_record[c1][1];
	var c2x=move_record[c2][0];
	var c2y=move_record[c2][1];
	var c3x=c3[0];
	var c3y=c3[1];
	
	if (c1y == c2y && c1x == c3x) // c1 right
	{
		c4x = c2x;
		c4y = c3y;
	}
	if (c1y == c3y && c1x == c2x) // c1 right
	{
		c4x = c3x;
		c4y = c2y;
	}
	if (c2y == c1y && c2x == c3x) // c2 right
	{
		c4x = c1x;
		c4y = c3y;
	}
	if (c2y == c3y && c2x == c1x) // c2 right
	{
		c4x = c3x;
		c4y = c1y;
	}
	if (c3y == c2y && c1x == c3x) // c3 right
	{
		c4x = c1y;
		c4y = c2x;
	}
	if (c1y == c3y && c2x == c3x) // c3 right
	{
		c4x = c1x;
		c4y = c2y;
	}
	var c4=new Array();
	c4[0]=c4x;
	c4[1]=c4y;
	return c4;
}

function getLineLengthSquare(count1, count2)
{
	var xSquare = (move_record[count1][0] - move_record[count2][0])*(move_record[count1][0] - move_record[count2][0])
	var ySquare = (move_record[count1][1] - move_record[count2][1])*(move_record[count1][1] - move_record[count2][1])
	return (xSquare+ySquare);
}




//function 


//move count 1, black,  2= white