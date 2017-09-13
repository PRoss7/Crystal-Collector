window.onload = function() {
	


	

$(document).ready(function() {

		// Selects random "target" number on page load between 19-120
		var randomNum = Math.floor(Math.random() * 101 + 19);
		$('#randomNumber').text(randomNum);

		// Variables for tallies
		var counter = 0;
		var wins = 0;
		var losses = 0;

		// Random Numbers for each chain
		var randomOne = Math.floor(Math.random() * 11 + 1);
		var randomTwo = Math.floor(Math.random() * 11 + 1);
		var randomThree = Math.floor(Math.random() * 11 + 1);
		var randomFour = Math.floor(Math.random() * 11 + 1);

		$('#wins').text(wins);
		$('#losses').text(losses);

		// Add up wins
		function win() {
			wins++;
			$('#wins').text(wins);
			alert("You Won!");
			reset();
		}

		// Add up losses
		function loss() {
			losses++;
			$('#losses').text(losses);
			alert("GAME OVER");
			reset();
		}

		// Reset the game
		function reset() {
			randomNum = Math.floor(Math.random() * 101 + 19);
			console.log(randomNum);
			$('#randomNumber').text(randomNum);
			randomOne = Math.floor(Math.random() * 11 + 1);
			randomTwo = Math.floor(Math.random() * 11 + 1);
			randomThree = Math.floor(Math.random() * 11 + 1);
			randomFour = Math.floor(Math.random() * 11 + 1);
			counter = 0;
			$('#scoreCounter').text(counter);
		}

		// Set up click events

		$('#randomOne').on("click", function() {
			counter = counter + randomOne;
			console.log(randomOne);
			console.log("New user total= " + counter);
			$('#scoreCounter').text(counter);
				if (counter == randomNum) {
					win();
				}

				else if (counter > randomNum) {
					loss();
				}
		})

		$('#randomTwo').on("click", function() {
			counter = counter + randomTwo;
			console.log(randomTwo);
			console.log("New user total= " + counter);
			$('#scoreCounter').text(counter);
				if (counter == randomNum) {
					win();
				}

				else if (counter > randomNum) {
					loss();
				}
		})	

		$('#randomThree').on("click", function() {
			counter = counter + randomThree;
			console.log(randomThree);
			console.log("New user total= " + counter);
			$('#scoreCounter').text(counter);
				if (counter == randomNum) {
					win();
				}

				else if (counter > randomNum) {
					loss();
				}
		})	

		$('#randomFour').on("click", function() {
			counter = counter + randomFour;
			console.log(randomFour);
			console.log("New user total= " + counter);
			$('#scoreCounter').text(counter);
				if (counter == randomNum) {
					win();
				}

				else if (counter > randomNum) {
					loss();
				}
		});


});

};

