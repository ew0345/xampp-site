// current only for setting global font color

function setupTextColor() {
    let color = localStorage.getItem("color") || {};

    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString();
        color = color.split("\"")[1];
        if (!document.body.attributes.custom) {
            for (var i = 0; i < document.querySelectorAll("div").length; i++) {
                if (document.querySelectorAll("div")[i].id != "about") document.querySelectorAll("div")[i].style = `color: ${color}`;
            }
            document.body.setAttribute("custom", "");
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

// TODO:
//  Stop 'about' from breaking with added style (do this by ADDING a style not ovewriting the existing one.)
