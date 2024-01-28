// View Mode
function getViewMode() {
    let view_mode = localStorage.getItem("view_mode");
    
    if (view_mode === null || !view_mode.includes("dark") && !view_mode.includes ("light")) {
        localStorage.setItem("view_mode", "dark");
        view_mode = localStorage.getItem("view_mode");
    }
    
    view_mode.includes("dark") ? setViewMode("dark") : setViewMode("light");
    return view_mode;
}

function setViewMode(mode) {
    let objectList = ["html", "body"];
    let view_mode = localStorage.getItem("view_mode");
    let vm_icon = document.querySelector('.fa');
    
    switch (mode) {
        case "dark":
            objectList.forEach(function(i) {
                if (document.querySelector(i).classList.contains("light")) document.querySelector(i).classList.remove("light");
                document.querySelector(i).classList.add("dark");
            });
            if (!view_mode.includes("dark")) localStorage.setItem("view_mode", "dark");
            vm_icon.classList.remove("fa-moon-o");
            vm_icon.classList.add("fa-sun-o");
            break;
        case "light":
            objectList.forEach(function(i) {
                if (document.querySelector(i).classList.contains("dark")) document.querySelector(i).classList.remove("dark");
                document.querySelector(i).classList.add("light");
            });
            if (!view_mode.includes("light")) localStorage.setItem("view_mode", "light");
            vm_icon.classList.remove("fa-sun-o");
            vm_icon.classList.add("fa-moon-o");
            break;
        default: break;
    }
}

function toggleViewMode() {
    let view_mode = localStorage.getItem("view_mode");
    view_mode.includes("dark") ? setViewMode("light") : setViewMode("dark");
}

// Text Color
function setupTextColor() {
    let color = localStorage.getItem("color") || {};

    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString().split("\"")[1];
        for (var i = 0; i < document.querySelectorAll("div").length; i++) { 
            document.querySelectorAll("div")[i].style.color = color;
        }
    } else if (window.accReset === true) {
        window.accReset = false;
        resetColor("text");
    } else {
        console.log("invalid color");
    }
}

// Background Color
function setupBackgroundColor() {
    let color = localStorage.getItem("color") || {};

    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString().split("\"")[1];
        for (var i = 0; i < document.querySelectorAll("div").length; i++) {
            document.querySelectorAll("div")[i].style.backgroundColor = color;
        }
    } else if (window.accBgReset === true) {
        window.accBgReset = false;
        resetColor("background");
    } else {
        console.log("invalid bg color");
    }
}

// Reset colors
function resetColor(type) {
    switch (type) {
        case "text":
            for (var i = 0; i < document.querySelectorAll("div").length; i++) {
                document.querySelectorAll("div")[i].style.color = '';
            }
            break;
        case "background":
            for (var i = 0; i < document.querySelectorAll("div").length; i++) {
                document.querySelectorAll("div")[i].style.backgroundColor = '';
            }
            break;
        default: break;
    }
}

if (document.readyState !== "isLoading") {
    setTimeout(() => { setupTextColor(); getViewMode(); }, 0);
} else {
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => { setupTextColor(); getViewMode(); }, 0);
    });
}
