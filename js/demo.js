// Font Color Changer
function fccdSetup() {
	document.querySelector(".fccd-btn").addEventListener("click", function() {
		let color = document.querySelector(".fccd-i").value;
		let colorNames = [
			"AliceBlue",
		    "AntiqueWhite",
		    "Aqua",
		    "Aquamarine",
		    "Azure",
		    "Beige",
		    "Bisque",
		    "Black",
		    "BlanchedAlmond",
		    "Blue",
		    "BlueViolet",
		    "Brown",
		    "BurlyWood",
		    "CadetBlue",
		    "Chartreuse",
		    "Chocolate",
		    "Coral",
		    "CornflowerBlue",
		    "Cornsilk",
		    "Crimson",
		    "Cyan",
		    "DarkBlue",
		    "DarkCyan",
		    "DarkGoldenRod",
		    "DarkGray",
		    "DarkGreen",
		    "DarkKhaki",
		    "DarkMagenta",
		    "DarkOliveGreen",
		    "DarkOrange",
		    "DarkOrchid",
		    "DarkRed",
		    "DarkSalmon",
		    "DarkSeaGreen",
		    "DarkSlateBlue",
		    "DarkSlateGray",
		    "DarkTurquoise",
		    "DarkViolet",
		    "DeepPink",
		    "DeepSkyBlue",
		    "DimGray",
		    "DodgerBlue",
		    "FireBrick",
		    "FloralWhite",
		    "ForestGreen",
		    "Fuchsia",
		    "Gainsboro",
		    "GhostWhite",
		    "Gold",
		    "GoldenRod",
		    "Gray",
		    "Green",
		    "GreenYellow",
		    "HoneyDew",
		    "HotPink",
		    "IndianRed",
		    "Indigo",
		    "Ivory",
		    "Khaki",
		    "Lavender",
		    "LavaenderBlush",
		    "LawnGreen",
		    "LemonChiffon",
		    "LightBlue",
		    "LightCoral",
		    "LightCyan",
		    "LightGoldenRodYellow",
		    "LightGray",
		    "LightGreen",
		    "LightPink",
		    "LightSalmon",
		    "LightSeaGreen",
		    "LightSkyBlue",
		    "LightSlateGray",
		    "LightSteelBlue",
		    "LightYellow",
		    "Lime",
		    "LimeGreen",
		    "Linen",
		    "Magenta",
		    "Maroon",
		    "MediumAquaMarine",
		    "MediumBlue",
		    "MediumOrchid",
		    "MediumPurple",
		    "MediumSeaGreen",
		    "MediumSlateBlue",
		    "MediumSpringGreen",
		    "MediumTurquosie",
		    "MediumVoiletRed",
		    "MidnightBlue",
		    "MintCream",
		    "MistyRose",
		    "Moccasin",
		    "NavajoWhite",
		    "Navy",
		    "OldLace",
		    "Olive",
		    "OliveDrab",
		    "Orange",
		    "OrangeRed",
		    "Orchid",
		    "PaleGoldenRod",
		    "PaleGreen",
		    "PaleTurquoise",
		    "PaleVoiletRed",
		    "PapayaWhip",
		    "PeachPuff",
		    "Peru",
		    "Pink",
		    "Plum",
		    "PowderBlue",
		    "Purple",
		    "RebeccaPurple",
		    "Red",
		    "RosyBrown",
		    "RoyalBlue",
		    "SaddleBrown",
		    "Salmon",
		    "SandyBrown",
		    "SeaGreen",
		    "SeaShell",
		    "Sienna",
		    "Silver",
		    "SkyBlue",
		    "SlateBlue",
		    "SlateGray",
		    "Snow",
		    "SpringGreen",
		    "SteelBlue",
		    "Tan",
		    "Teal",
		    "Thistle",
		    "Tomato",
		    "Turquoise",
		    "Voilet",
		    "Wheat",
		    "White",
		    "WhiteSmoke",
		    "Yellow",
		    "YellowGreen"
	    ];
	    let validateHex = /^#[0-9A-F]{6}$/i;

	    let isValidColor = false;

		if (color.toLowerCase() === "content.show") {
			const a = document.createElement("div");
			const a1 = document.createElement("input");
			const a2 = document.createElement("br");
			const a3 = document.createElement("button");

			a.setAttribute("class", "demo-1");
			a1.setAttribute("class", "input");
			a3.innerText = "Submit"

			if (!document.querySelector(".demo-1")) {
				document.body.append(a);
				a.append(a1);
				a.append(a2);
				a.append(a3);

				a3.onclick = function () {
					let p = a1.value;
					switch (p.toLowerCase()) {
						default: break;
						case "test": 
							console.log("AAA");
							break;
					}
				}
				window.onkeydown = function(e) {
					switch(e.key) {
						case "Enter":
							if (document.activeElement.className == "input") {
								a3.click();
							}
							break;
						default: break;
					}
				}
			}
		} else {
			colorNames.forEach(function(v) {
				if (color.toLowerCase().includes(v.toLowerCase())) isValidColor = true;
			});

			if (validateHex.test(color) === true && isValidColor === false || isValidColor === true) {
				let store = JSON.parse(localStorage.getItem("color")) || {};
				localStorage.setItem("color", JSON.stringify(color));

				document.querySelector(".demo-0").style = `color: ${color}`;
				document.querySelector(".fccd").style = `color: ${color}`;
			} else {
				alert("Invalid color. If you're using HEX please include the #\nFor a list of of HTML Color Names please see here: https://www.w3schools.com/tags/ref_colornames.asp");
			}
		}
	});
}

function resetColor() {
	document.querySelector(".reset-btn").addEventListener("click", function() {
		let store = localStorage.getItem("color") || {};
		if (Object.entries(store).length > 0) {
			localStorage.removeItem("color");

			for (var i = 0; i < document.querySelectorAll("div").length; i++) {
				document.querySelectorAll("div")[i].style.color = "";
			}
			for (var i = 0; i < document.querySelectorAll("p").length; i++) {
				document.querySelectorAll("p")[i].style.color = "";
			}
			for (var i = 0; i < document.querySelectorAll("h1").length; i++) {
				document.querySelectorAll("h1")[i].style.color ="";
			}
		}
	});
}

if (document.readyState !== 'loading') {
	setTimeout(fccdSetup, 0);
	setTimeout(resetColor, 0);
} else {
	document.addEventListener('DOMContentLoaded', function () {
		setTimeout(fccdSetup, 0);
		setTimeout(resetColor, 0);
	});
}