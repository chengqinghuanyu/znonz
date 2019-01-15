export function getStorage(){
	if(localStorage){
		let storage = localStorage.getItem("language");
		return storage;
	
	}
	}