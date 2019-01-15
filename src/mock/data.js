let  datas = function(){
	let item=[]
	for(let k=0;k<1000;k++){
		item.push({
			name:'myName'+k,
			birth:'birth'+k+k,
		})
	}

	return item;
}

export datas()