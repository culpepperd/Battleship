var view = {
	displayMessage: function (msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function (location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function (location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
}

var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
			 { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
			 { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];

var ship1 = ships[0];
// var location = ship1.locations[2];
var hits = ship1.hits;
hits[2] = "hit";
// console.log("Location " + location + " is " + ship1.hits[2]);

var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if (ship3.hits[1] === "hit") {
	console.log("Ouch, hit on third ship at location one.");
} else {
	console.log("Missy McMisserson over here...");
}

