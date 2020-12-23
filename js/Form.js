class Form {
	constructor(){

	}
	display(){
		var title = createElement('h2');
		title.html("Car Racing Game")
		title.position(130,0);

		var input = createInput("Name");
		var button = createButton("Play");
		var greeting = createElement('h3');
		input.position(130,160);
		button.position(250,200);
		//call a function when the play button is pressed,hide input box and button.
		//get the player name and write it to the dataBase.
		//increase the player count by 1 and write it to the data base.
		//display the greetings.
		button.mousePressed(function () {
			input.hide();
			button.hide();
			var name = input.value();
			playerCount = playerCount+1;
			player.update(name);
			player.updateCount(playerCount);
			greeting.html("Hello"+name);
			greeting.position(350,200);
		})
	}
}