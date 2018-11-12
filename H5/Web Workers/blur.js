function inRange(i,width,height){
	return ((i>=0)&&(i<width*height))
}
function averageNeighbors(imageData,width,height,i){
	let v=imageData[i],

	//主方向
		north=inRange(i-width*4,width,height)
			 ?imageData[i-width*4]:v,
		south=inRange(i+width*4,width,height)
			 ?imageData[i+width*4]:v,
	    west=imageData(i-4,width,height)
	    	 ?imageData[i-4]:v,
	    east=inRange(i+4,width,height)
	    	 ?imageData[i+4]:v,
	//相邻对角线
}