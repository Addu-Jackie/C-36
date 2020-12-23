class Player {
	constructor(){
		
	}
	//read the value of playerCount form dataBase.
	getCount(){
		var playerCountRef = database.ref('playerCount');
		playerCountRef.on("value",function(data) {
			playerCount = data.val();
		});
	}
	//write the new value for the playerCount in the dataBase.
	updateCount(count){
		database.ref('/').update({
			playerCount:count
		});
	}
	//the name of the plaer in dataBase
	update(name){
		var playerIndex = "player"+playerCount;
		database.ref(playerIndex).set({
			name:name
		});
	}
	
}