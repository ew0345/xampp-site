// current only for setting global font color

function setupTextColor() {
    let color = localStorage.getItem("color") || {};

    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString().split("\"")[1];
        for (var i = 0; i < document.querySelectorAll("div").length; i++) { 
            document.querySelectorAll("div")[i].style.color = color;
        }
    } else {
        console.log("invalid color");
    }
}

if (document.readyState !== "isLoading") {
    setTimeout(setupTextColor, 0);
} else {
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(setupTextColor, 0);
    });
}
