function initializeAbout() {
    // create elements
    let a = document.createElement("div");
    let ac = document.createElement("div");
    let ah1 = document.createElement("h1");
    let ap1 = document.createElement("p");
    let ap2 = document.createElement("p");
    let ahr = document.createElement("hr");
    let abr = document.createElement("br");
    let aeb = document.createElement("button");

    // define properties
    a.id = "about";
    a.style = "display:none;position:fixed;top:20%;bottom:20%;right:20%;left:20%;border:1px solid;z-index:0;text-align:center;";
    ac.id = "about-container";
    ah1.innerHTML = "PLACEHOLDER";
    ap1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Sed faucibus turpis in eu mi bibendum neque. Non blandit massa enim nec dui nunc mattis enim. Consequat mauris nunc congue nisi vitae. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Malesuada bibendum arcu vitae elementum. Aenean pharetra magna ac placerat vestibulum lectus mauris. Varius quam quisque id diam vel. Nunc id cursus metus aliquam eleifend mi in. Vulputate odio ut enim blandit volutpat maecenas volutpat";
    ap2.innerHTML = "Donec ultrices tincidunt arcu non sodales neque sodales ut. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Cursus mattis molestie a iaculis at erat pellentesque. Praesent semper feugiat nibh sed pulvinar proin. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Sed adipiscing diam donec adipiscing. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Metus dictum at tempor commodo ullamcorper a. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Morbi leo urna molestie at elementum. Lectus mauris ultrices eros in cursus turpis massa tincidunt. A pellentesque sit amet porttitor. Metus aliquam eleifend mi in nulla posuere. Viverra orci sagittis eu volutpat odio facilisis. Etiam non quam lacus suspendisse faucibus interdum posuere lorem.";
    aeb.style="z-index:1;";
    aeb.innerHTML="Close";
    aeb.setAttribute("onclick", "toggleAbout()");

    // set font color
    let color = localStorage.getItem("color") || {}
    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString().split("\"")[1];
        ah1.style.color = color;
        ap1.style.color = color;
        ap2.style.color = color;
    } else {
        console.log("invalid color");
    }

    // append elements
    document.body.append(a);
    a.append(ac);
    ac.append(ah1);
    ac.append(ahr);
    ac.append(ap1);
    ac.append(abr);
    ac.append(ap2);
    ac.append(abr);
    a.append(aeb);
}

function initializeAcc() {
    let acc = document.createElement("div");
    let accc = document.createElement("div");
    let acceb = document.createElement("button");
    
    acc.id = "accessibility";
    acc.style = "display:none;position:fixed;top:20%;bottom:20%;right:20%;left:20%;border:1px solid;z-index:0;text-align:center;";
    accc.id="acc-container";
    acceb.innerHTML = "Close";
    acceb.setAttribute("onclick", "toggleAcc()");
    acceb.style="z-index:1;";

    document.body.append(acc);
    acc.append(accc);
    acc.append(acceb);
    // TODO
}

function toggleAcc() {
    const a1 = document.querySelector("#accessibility");
    console.log(a1);
    if (a1.style.display === "none") {
		a1.style.display = "block";
        if (document.querySelector("#about").style.display === "block") {
            document.querySelector("#about").style.display = "none";
        }
	} else {
		a1.style.display = "none";
	}
}

function toggleAbout() {
	const a = document.querySelector("#about");
	if (a.style.display === "none") {
		a.style.display = "block";
        if (document.querySelector("#accessibility").style.display === "block") {
            document.querySelector("#accessibility").style.display = "none";
        }
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
   // setTimeout(getViewMode, 0);
   // setTimeout(setActiveNav, 0);
   // setTimeout(initializeAbout, 0);
    setTimeout(()=>{
        getViewMode();
        setActiveNav();
        initializeAbout();
        initializeAcc();
    }, 0);
} else {
    window.addEventListener('DOMContentLoaded', function () {
       // setTimeout(getViewMode, 0);
       // setTimeout(setActiveNav, 0);
       // this.setTimeout(initializeAbout);
       setTimeout(()=>{
        getViewMode();
        setActiveNav();
        initializeAbout();
        initializeAcc();
    }, 0);
    })
}