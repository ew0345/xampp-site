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
        a.style.color = color;
    } else {
        console.warn("about_invalid_color");
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

    // Set Font Color
    let sfc_cont = document.createElement("div");
    let sfc_s = document.createElement("span");
    let sfc_i = document.createElement("input");
    let sfc_b0 = document.createElement("button");
    let sfc_b1 = document.createElement("button");
    let sfc_spacer = document.createElement("span");

    // define properties
    sfc_cont.id = "sfc_cont";
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

    // append elements
    acc_cont.append(sfc_cont);
    sfc_cont.append(sfc_s);
    sfc_cont.append(sfc_i);
    sfc_cont.append(sfc_spacer);
    sfc_cont.append(sfc_b0);
    sfc_cont.append(sfc_b1);   

    // Set Background Color
    let sbg_cont = [document.createElement("div"), document.createElement("div")];
    let sbg_s = [document.createElement("span"), document.createElement("span")];
    let sbg_i = [document.createElement("input"), document.createElement("input")];
    let sbg_b0 = [document.createElement("button"), document.createElement("button")];
    let sbg_b1 = [document.createElement("button"), document.createElement("button")];

    // define properties
    sbg_cont[0].id = "sbg_cont0";
    sbg_cont[1].id = "sbg_cont1";
    sbg_s[0].id = "sbg_s0";
    sbg_s[1].id = "sbg_s1";
    sbg_s[0].innerHTML = "Set Text Background Color ";
    sbg_s[1].innerHTML = "Set Page Background Color ";
    sbg_i[0].id = "sbg_i0";
    sbg_i[1].id = "sbg_i1";
    sbg_i[0].type = "text";
    sbg_i[1].type = "text";
    sbg_i[0].value = "";
    sbg_i[1].value = "";
    sbg_b0[0].id = "sbg_b0_0";
    sbg_b0[1].id = "sbg_b0_1";
    sbg_b0[0].innerHTML = "Set";
    sbg_b0[1].innerHTML = "Set";
    sbg_b1[0].id = "sbg_b1_0";
    sbg_b1[1].id = "sbg_b1_1";
    sbg_b1[0].innerHTML = "Reset";
    sbg_b1[1].innerHTML = "Reset";

    // append elements
    acc_cont.append(sbg_cont[0]);
    acc_cont.append(sbg_cont[1]);
    sbg_cont[0].append(sbg_s[0]);
    sbg_cont[0].append(sbg_i[0]);
    sbg_cont[0].append(sbg_b0[0]);
    sbg_cont[0].append(sbg_b1[0]);
    sbg_cont[1].append(sbg_s[1]);
    sbg_cont[1].append(sbg_i[1]);
    sbg_cont[1].append(sbg_b0[1]);
    sbg_cont[1].append(sbg_b1[1]);

    // append extra elements
    acc_scr.type="text/javascript";
    acc_scr.src="/js/accessibility.js";
    acc_cont.append(acc_br[1]);
    acc_cont.append(acc_exit);
    document.head.append(acc_scr);

    let color = localStorage.getItem("color") || {}
    if (Object.entries(color).length > 0) {
        color = color.valueOf().toString().split("\"")[1];
        acc.style.color = color;
    } else {
        console.warn("acc_invalid_color");
    }
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
    setTimeout(() => {setActiveNav(); initializeAbout(); initializeAcc(); }, 0);
} else {
    window.addEventListener('DOMContentLoaded', function () {
       setTimeout(()=>{ setActiveNav(); initializeAbout(); initializeAcc(); }, 0);
    });
}