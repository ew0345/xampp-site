function toggleAbout() {
	const a = document.querySelector('.about');
	if (a.style.display === "none") {
		a.style.display = "block";
	} else {
		a.style.display = "none";
	}
}

function setActiveNav() {
	let listLinks = document.querySelectorAll(".nav-item a");
	listLinks.forEach(function (v, i) {
		if (listLinks[i].innerHTML.includes(document.title)) listLinks[i].classList.add("nav-item-active");
	});
}

function getViewMode() {
    let view_mode = localStorage.getItem("view_mode");
    
    if (view_mode === null || !view_mode.includes("dark") && !view_mode.includes ("light")) {
        localStorage.setItem("view_mode", "dark");
        view_mode = localStorage.getItem("view_mode");
    }
    
    view_mode.includes("dark") ? setViewMode("dark") : setViewMode("light");
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

if (document.readyState !== 'loading') {
    setTimeout(getViewMode, 0);
    setTimeout(setActiveNav, 0);
} else {
    window.addEventListener('DOMContentLoaded', function () {
        setTimeout(getViewMode, 0);
        setTimeout(setActiveNav, 0);
    })
}