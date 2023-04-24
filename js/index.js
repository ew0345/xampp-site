let debug = false;

function inputHandler(values) {
    values = values.split(" ");

    if (values[0] === 'undefined' || values[0] === "") {
        let p = prompt("Input: ");
        if (debug === true) console.log(p);
        inputHandler(p);
    } else {
        switch (values[0].toLowerCase()) {
            case "help": case "info":
                alert("Please check the developer console for information.")
                console.info("Available Commands: \n"+
                             "help | info : Displays this informational command.\n");
                debug ? console.info("---Debug Commands---\n"+"@debug : Toggles debug mode.\n"+"test : Displays inputs for testing.") : "";
                break;
            case "numeval":
                let numbers = [];
                let notNumbers = [];
                values.forEach(function(i) {
                    if (!i.includes("numeval")) isNaN(i) ? notNumbers.push(i) : numbers.push(i);
                });
                alert("Numbers: "+numbers.join(", ")+"\nNot Numbers: "+notNumbers.join(", "));
                break;
            case "@debug":
                debug ? debug = false : debug = true;
                console.log(debug);
                break;
            case "t": case "test": case "debug":
                debug ? console.log("Inputs: \n"+debug+"\n"+values) : "";
                break;
            default: break;
        }
    }
}

function setupKeybinds() {
    window.onkeydown = function (e) {
        if (debug === true) console.log("Key: "+e.key);
        switch (e.key) {
            case "/":
                inputHandler("");
                break;
            default: break;
        }
    }
}


if (document.readyState !== 'loading') {
    setTimeout(setupKeybinds, 0);
} else {
    window.addEventListener("DOMContentLoaded", function () {
        setTimeout(setupKeybinds, 0);
    });
}