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
        color = color.valueOf().toString();
        for (var i = 0; i < document.querySelectorAll("div").length; i++) { 
            document.querySelectorAll("div")[i].style.color = color;
        }
    } else if (window.accReset === true) {
        window.accReset = false;
        resetColor("text");
    } else {
        console.warn("text_invalid_color");
    }
}

// Background Color
function setupBackgroundColor(type) {
    let bg_color0 = localStorage.getItem("text bg color") || {};
    let bg_color1 = localStorage.getItem("page bg color") || {};

    switch (type) {
        case "text":
            if (Object.entries(bg_color0).length > 0) {
                bg_color0 = bg_color0.valueOf().toString();
                document.querySelector(".content").style.background = bg_color0;
            } else if (window.accTxtBgReset === true) {
                window.accTxtBgReset = false;
                resetColor("text_bg");
            } else {
                console.warn("text_bg_invalid_color");
            }
            break;
        case "page":
            if (Object.entries(bg_color1).length > 0) {
                bg_color1 = bg_color1.valueOf().toString();
                document.body.style.background = bg_color1;
            } else if (window.accPgBgReset === true) {
                window.accPgBgReset = false;
                resetColor("page_bg");
            } else {
                console.warn("page_bg_invalid_color");
            }
            break;
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
        case "text_bg":
            document.querySelector(".content").style.background = '';
            break;
        case "page_bg":
            document.body.style.background = '';
            break;
        default: break;
    }
}

if (document.readyState !== "isLoading") {
    setTimeout(() => { setupTextColor(); getViewMode(); setupBackgroundColor("text"); setupBackgroundColor("page"); }, 0);
} else {
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => { setupTextColor(); getViewMode(); setupBackgroundColor("text"); setupBackgroundColor("page"); }, 0);
    });
}
