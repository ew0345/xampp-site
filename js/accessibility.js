// Code for Accessibility Menu
let reset = false;
// Validate a color (name/hex)
function validateColor(color) {
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

    colorNames.forEach(function(v) {
        if (color.toLowerCase().includes(v.toLowerCase())) isValidColor = true;
    });

    if (validateHex.test(color) === true || isValidColor === true) {
        return true;
    } else {
		return false;
	}
}

// Text Color
function accSetColor() {
    document.querySelector("#sfc_b0").addEventListener("click", function() {
        let color = document.querySelector("#sfc_i").value;
        let isValid = validateColor(color);
		if (isValid) {
			localStorage.setItem("color", JSON.stringify(color));
			setupTextColor();
		} else if (!isValid) {
			alert("Invalid color. If you're using HEX please include the #\nFor a list of of HTML Color Names please see here: https://www.w3schools.com/tags/ref_colornames.asp");
		} else {
			alert("Please Report this error to the site admin.");
		}
    });
}

function accResetColor() {
    document.querySelector("#sfc_b1").addEventListener("click", function() {
        let store = localStorage.getItem("color") || {};
        if (Object.entries(store).length > 0) {
            localStorage.removeItem("color");
			reset = true;
            window.accReset = reset;
            setupTextColor();
        }
    });
}

// Background Color
function accBgColor() {
	// For Setting Background Color
	window.accBgReset = false;
}

function accBgResetColor() {
	// For Reseting Background Color
}

if (document.readyState !== 'loading') {
    setTimeout(accSetColor, 0);
    setTimeout(accResetColor, 0);
} else {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(accSetColor, 0);
        setTimeout(accResetColor, 0);
    });
}