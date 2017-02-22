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
		alert("Already full here");
		return;
	}

	stone_down_white(row, col);
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


	//alert(move_count);

	var newest_move = move_record.length-1;
	//alert(move_record[newest_move][2]);
	//alert(move_record[newest_move][0]+":"+move_record[newest_move][1]);
	//console.log(move_record[newest_move][0]+":"+move_record[newest_move][1]);
	
	//if(move_count>4)
	//{
		//if(isSquare(move_record.length-1,move_record.length-2,move_record.length-3,move_record.length-4))
		//{
		//	alert(move_count+":yes");
		//}
	//}
	
	if(winJudgeWhite())
	{
		if(gameEnded==false)
		{
			alert("You win");
			gameEnded=true;
		}
	}
	if(gameEnded==false)
	{
		getSolution();
	}
}


//from algorithm
var computed_record = new Array();
var step_tried_time = new Array();
var maxstep=31;
var size=19;

function getSolution() {
	
	//algorithm 
	if(move_count<3)
	{
		var area = 0;
		//which area out of 4 does the first white come?
		
		var w1x=move_record[1][0];
		var w1y=move_record[1][1];
		if(w1x>9&&w1y<10)
		{
			area=1;
			stone_down_black(8,9);
		}
		if(w1x<10&&w1y<9)
		{
			area=4;
			stone_down_black(9,10);
		}
		if(w1x<9&&w1y>8)
		{
			area=3;
			stone_down_black(10,9);
		}
		if(w1x>8&&w1y>9)
		{
			area=2;
			stone_down_black(9,8);
		}
		//console.log(area); 
	}
	else if(move_count==4)
	{
		//at least 2 white 2 black
		//backtracking search
		
		
		computed_record.push(move_record[0]);
		computed_record.push(move_record[1]);
		computed_record.push(move_record[2]);
		computed_record.push(move_record[3]);
		
		Cpan[move_record[0][0]][move_record[0][1]]=1;
		Cpan[move_record[1][0]][move_record[1][1]]=2;
		Cpan[move_record[2][0]][move_record[2][1]]=1;
		Cpan[move_record[3][0]][move_record[3][1]]=2;
		
		var blackCanWin = 0;
		
		
		var stepsToWin = 0;
		
		//console.log("now"); 
		
		
		
		for (var step = 0; step < maxstep; step++)
		{
			step_tried_time.push(0);
		}
		for (var step = 5; step < maxstep; step++)
		{
			if (step == maxstep-1)
			{
				step = step - 3;
				
				var newest_move = computed_record.length-1;
				
				Cpan[computed_record[newest_move][0]][computed_record[newest_move][1]]=0;
				Cpan[computed_record[newest_move-1][0]][computed_record[newest_move-1][1]]=0;
				computed_record.pop();
				computed_record.pop();
				continue;
			}
			var goNext = 0;//flag to tell loops if it can go next step
			step_tried_time[step] = step_tried_time[step] +1; //stt
			//when this step is tried, the later steps must be not tried
			for (var laterStep = step + 1; laterStep < maxstep; laterStep++)
			{
				step_tried_time[laterStep] = 0;
			}
			var possibilites = 0;
			//judge whose turn it is
			if (step % 2 == 1) //black
			{
				
				//run algorithm with the stt;
				//keep checkmating!
				if (parseInt((computed_record.length-1)/2)+1>2)
				{
					//pick 3 to form 4
					//if can, win
					//if can't, pick the other 3
					for (var chess1 = 0; chess1 < parseInt((computed_record.length-1)/2) - 1; chess1++)
					{
						if (blackCanWin == 1)
						{
							break;
						}
						for (var chess2 = chess1+1; chess2 < parseInt((computed_record.length-1)/2) ; chess2++)
						{
							if (blackCanWin == 1)
							{
								break;
							}
							for (var chess3 = chess2+1; chess3 < parseInt((computed_record.length-1)/2)+1; chess3++)
							{
								var now1= chess1*2;
								var now2= chess2*2;
								var now3= chess3*2;
								if (isosceles(now1, now2, now3))
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure_number(now1, now2, now3);
									
									if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]]==0)
									{
										stepsToWin = step + 1;
										blackCanWin = 1;
										
										computed_record.push(lastChessForSquare);
										break;
									}
								}
							}
						}
					}
					if (blackCanWin == 1)
					{
						break;
					}
				}
				//no 3? then pick 2
				//pick 2 to form 3, distance of them <=3
				//ensure this 3 can form 4
				
				for (var chess1 = 0; chess1 < parseInt((computed_record.length-1)/2); chess1++)
				{
					if (goNext == 1)
					{
						break;
					}
					for (var chess2 = chess1 + 1; chess2 < parseInt((computed_record.length-1)/2)+1; chess2++)
					{
						var now1= chess1*2;
						var now2= chess2*2;
						if (computed_record[now1][0] == computed_record[now2][0]) //x the same
						{
							var distance = Math.abs(computed_record[now1][1] - computed_record[now2][1]);
							if (distance > 3)
							{
								continue;
							}
							//case 1, y=now1.y, x=now1.x-distance
							if (-1 < computed_record[now1][0] - distance < size)
							{
								var pos1=new Array();
								pos1[0]= computed_record[now1][0] - distance;
								pos1[1]= computed_record[now1][1];
								if (Cpan[pos1[0]][pos1[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos1);
									//ensure this 3 can form 4
									if (Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 1 good
										possibilites++;
										if (possibilites == step_tried_time[step])
										{
											computed_record.push(pos1);
											Cpan[pos1[0]][pos1[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case 2, y=now1.y, x=now1.x+distance
							if (-1 < computed_record[now1][0] + distance < size)
							{
								var pos2=new Array();
								//line 411
								pos2[0] = computed_record[now1][0] + distance;
								pos2[1] = computed_record[now1][1];
								if (Cpan[pos2[0]][pos2[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos2);
									//ensure this 3 can form 4
									if (Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 2 good
										possibilites++;
										if (possibilites == step_tried_time[step])
										{
											computed_record.push(pos2);
											Cpan[pos2[0]][pos2[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case 3, y=now2.y, x=now2.x-distance
							if (-1 < computed_record[now2][0] - distance < size)
							{
								var pos3=new Array();
								pos3[0] = computed_record[now2][0] - distance;
								pos3[1] = computed_record[now2][1];
								if (Cpan[pos3[0]][pos3[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos3);
									//ensure this 3 can form 4
									if (Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 3 good
										possibilites++;
										if(possibilites == step_tried_time[step])
										{
											computed_record.push(pos3);
											Cpan[pos3[0]][pos3[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case 4, y=now2.y, x=now2.x+distance
							if (-1 < computed_record[now2][0]+ distance < size)
							{
								var pos4=new Array();
								pos4[0]=computed_record[now2][0] + distance;
								pos4[1]=computed_record[now2][1];
								if (Cpan[pos4[0]][pos4[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos4);
									//ensure this 3 can form 4
									if (Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 4 good
										possibilites++;
										if (possibilites == step_tried_time[step])
										{
											computed_record.push(pos4);
											Cpan[pos4[0]][pos4[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
						}
						else if (computed_record[now1][1] == computed_record[now2][1]) //y the same
						{
							var distance = Math.abs(computed_record[now1][0] - computed_record[now2][0]);
							if (distance > 3)
							{
								continue;
							}
							//case1, x=now1.x, y=now1.y+distance
							if (-1 < computed_record[now1][1] + distance < size)
							{
								var pos1=new Array();
								pos1[0]=computed_record[now1][0];
								pos1[1]=computed_record[now1][1] + distance;
								if(Cpan[pos1[0]][pos1[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos1);
									//ensure this 3 can form 4
									if (Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 1 good
										possibilites++;
										if(possibilites == step_tried_time[step])
										{
											computed_record.push(pos1);
											Cpan[pos1[0]][pos1[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case2, x=now2.x, y=now2.y+distance
							if(-1 < computed_record[now2][1]  + distance < size)
							{
								var pos2 =new Array();
								pos2[0]=computed_record[now2][0];
								pos2[1]=computed_record[now2][1] + distance;
								if(Cpan[pos2[0]][pos2[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos2);
									//ensure this 3 can form 4
									if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 2 good
										possibilites++;
										if(possibilites == step_tried_time[step])
										{
											computed_record.push(pos2);
											Cpan[pos2[0]][pos2[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case 3, x=now1.x, y =now1.y-distance
							if(-1 < computed_record[now1][1]  - distance < size)
							{
								var pos3 =new Array();
								pos3[0]=computed_record[now1][0];
								pos3[1]=computed_record[now1][1]  - distance;
								if(Cpan[pos3[0]][pos3[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos3);
									//ensure this 3 can form 4
									if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 3 good
										possibilites++;
										if (possibilites == step_tried_time[step])
										{
											computed_record.push(pos3);
											Cpan[pos3[0]][pos3[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
							//case4, x=now2.x, y =now2.y-distance
							if(-1 < computed_record[now2][1]  - distance < size)
							{
								var pos4 =new Array();
								pos4[0]=computed_record[now2][0];
								pos4[1]=computed_record[now2][1]  - distance;
								if(Cpan[pos4[0]][pos4[1]] == 0)
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, pos4);
									//ensure this 3 can form 4
									if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										//case 4 good
										possibilites++;
										if (possibilites == step_tried_time[step])
										{
											computed_record.push(pos4);
											Cpan[pos4[0]][pos4[1]]=1;
											goNext = 1;
											break;
										}
									}
								}
							}
						}
					}
				}
				if(goNext == 1)
				{
					continue;
				}
				else
				{
					//if no 2, go back by 2
					//all possibilites are tested? go back by 2
					//minus 1 dead loop
					// -2, white has more one,
					//must -3
					step = step - 3;
					//remove last two chesses
					var newest_move = computed_record.length-1;
				
					Cpan[computed_record[newest_move][0]][computed_record[newest_move][1]]=0;
					Cpan[computed_record[newest_move-1][0]][computed_record[newest_move-1][1]]=0;
					computed_record.pop();
					computed_record.pop();
					continue;
				}
			}
			else //white
			{
				
				//white can win?
				if(parseInt(computed_record.length/2)>2)
				{
				
					var whiteCanWin = 0;
					//pick 3 to form 4
					//if can, win
					//if can't, pick the other 3
					for (var chess1 = 0; chess1 < parseInt(computed_record.length/2) - 2; chess1++)
					{
						if (whiteCanWin == 1)
						{
							break;
						}
						for (var chess2 = chess1 + 1; chess2 < parseInt(computed_record.length/2) - 1; chess2++)
						{
							if (whiteCanWin == 1)
							{
								break;
							}
							for (var chess3 = chess2 + 1; chess3 < parseInt(computed_record.length/2); chess3++)
							{
								var now1= chess1*2+1;
								var now2= chess2*2+1;
								var now3= chess3*2+1;
								if (isosceles(now1, now2, now3))
								{
									var lastChessForSquare = new Array();
									lastChessForSquare = expected_sqaure(now1, now2, now3);
									if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]] == 0)
									{
										whiteCanWin = 1;
										break;
									}
								}
							}
						}
					}
					if (whiteCanWin == 1)
					{
						step = step - 2;
						//remove last one chess
						var newest_move = computed_record.length-1;
						Cpan[computed_record[newest_move][0]][computed_record[newest_move][1]]=0;
						
						computed_record.pop();
						continue;
					}
				}
				//ohterwise play defense
				var playD = 0;
			
				
				for (var chess1 = 0; chess1 < parseInt((computed_record.length-1)/2) - 1; chess1++)
				{
					
					if (playD == 1)
					{
						break;
					}
					for (var chess2 = chess1 + 1; chess2 < parseInt((computed_record.length-1)/2) ; chess2++)
					{
						
						//console.log(parseInt((computed_record.length-1)/2) +1);
						if (playD == 1)
						{
							break;
						}
					
						for (var chess3 = chess2 + 1; chess3 < parseInt((computed_record.length-1)/2) +1; chess3++)
						{
							
							var now1= chess1*2;
							var now2= chess2*2;
							var now3= chess3*2;
							
							if (isosceles(now1, now2, now3))
							{
								
								var lastChessForSquare = new Array();
								lastChessForSquare = expected_sqaure_number(now1, now2, now3);
								if(Cpan[lastChessForSquare[0]][lastChessForSquare[1]]==0)
								{
									
									Cpan[lastChessForSquare[0]][lastChessForSquare[1]]=2;
									computed_record.push(lastChessForSquare);
									playD =1;
									break;
								}
							}
						}
					}
				}
			}
		}
		//console.log(computed_record.length); 
		
		stone_down_black(computed_record[4][0],computed_record[4][1]);
		console.log("move"); 
		return;
		
		
	}
	else if(move_count>4)
	{
		//move_count=newestmove+1;
		//do as plan
		console.log("move"); 
		if(pan[computed_record[move_count-1][0]][computed_record[move_count-1][1]]==0)
		{
			
			stone_down_black(computed_record[move_count-1][0],computed_record[move_count-1][1]);
			return;
		}
		else
		{
			stone_down_black(computed_record[move_count][0],computed_record[move_count][1]);
			return;
		}
		
	}
	
	/*
	if(move_count==2)
	stone_down_black(0,1);
	if(move_count==4)
	stone_down_black(9,0);
	if(move_count==6)
	stone_down_black(0,0);
	if(move_count==8)
	stone_down_black(1,1);
	if(move_count==10)
	stone_down_black(0,9);
	*/
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
			alert("You lose");
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