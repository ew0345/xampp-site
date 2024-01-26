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
    // Setup Accessibility Window
    let acc = document.createElement("div");
    let acc_cont = document.createElement("div");
    let acc_exit = document.createElement("button");
    let acc_br = [document.createElement("br"), document.createElement("br")]
    let acc_scr = document.createElement(`script`);
    
    acc.id = "accessibility";
    acc.style = "display:none;position:fixed;top:20%;bottom:20%;right:20%;left:20%;border:1px solid;z-index:0;text-align:center;";
    acc_cont.id="acc-container";
    acc_exit.innerHTML = "Close";
    acc_exit.setAttribute("onclick", "toggleAcc()");
    acc_exit.style="z-index:1;";

    document.body.append(acc);
    acc.append(acc_cont);
    acc_cont.append(acc_br[0])
    // TODO

    // Set Font Color
    let sfc_cont = document.createElement("div");
    let sfc_s = document.createElement("span");
    let sfc_i = document.createElement("input");
    let sfc_b0 = document.createElement("button");
    let sfc_b1 = document.createElement("button");
    let sfc_spacer = document.createElement("span");

    sfc_cont.id = "sfc_cont";
    // sfc_cont.style = "position:fixed;"
    sfc_s.id = "sfc_s";
    sfc_s.innerHTML = "Set Font Color ";
    sfc_i.id = "sfc_i";
    sfc_i.type = "text";
    sfc_i.value = "";
    sfc_b0.id = "sfc_b0";
    sfc_b0.innerHTML = "Set";
    sfc_b1.id = "sfc_b1";
    sfc_b1.innerHTML = "Reset";
    sfc_spacer.inneHTML = "  ";

    acc_cont.append(sfc_cont);
    sfc_cont.append(sfc_s);
    sfc_cont.append(sfc_i);
    sfc_cont.append(sfc_spacer);
    sfc_cont.append(sfc_b0);
    sfc_cont.append(sfc_b1);
    acc_cont.append(acc_br[1]);    

    acc_cont.append(acc_exit);

    acc_scr.type="text/javascript";
    acc_scr.src="/js/accessibility.js";
    document.head.append(acc_scr);
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


if (document.readyState !== 'loading') {
   // setTimeout(getViewMode, 0);
   // setTimeout(setActiveNav, 0);
   // setTimeout(initializeAbout, 0);
    setTimeout(()=>{
        //getViewMode();
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
        //getViewMode();
        setActiveNav();
        initializeAbout();
        initializeAcc();
    }, 0);
    })
}