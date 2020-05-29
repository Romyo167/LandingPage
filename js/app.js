

/* Define global variabled */
let links;
let tgtdefault;  // The previous target which I need to remove highlihting
let linkdefault; // The previous link (li item) which I need to remove highlighting

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function clearactivefromsection(){
  if(typeof tgtdefault !== "undefined")
  tgtdefault.style.border = "none";   
}

function clearactivefromli(){
  if(typeof linkdefault !== "undefined"){
    linkdefault.style.backgroundColor = "rgb(184,130,204)";
    linkdefault.style.border = "none";
  }
}


function activeThechosenli(lk){
    lk.style.backgroundColor = "rgb(50,130,204)";
    lk.style.border = "5px solid gray";
    lk.style.borderRadius = "10px";
    lk.style.width = "40%";
}
 
function activeThechosensection(tt){
    tt.style.border = "10px solid blue";
    tt.style.borderRadius = "25px";
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

function scrollAndHighlight(links){

for(let link of links){
  link.addEventListener("click" , function(){
    clearactivefromsection();
    clearactivefromli();
    let togo = link.getAttribute("goto");
    tgt = document.querySelector(togo);
    tgt.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    activeThechosenli(link)
    activeThechosensection(tgt)
    linkdefault = link;
    tgtdefault  = tgt;
    });
  }
}

// build the nav

function buildthenav(){
  const S = document.querySelector('nav');
  const ch = document.createElement('ul');
  S.appendChild(ch);
  const links_To_Jump = new Array ("#EP1" , "#EP2" , "#WB1" , "#WB2");
  let prt = document.querySelector('ul');
  for(let i = 0 ; i < 4 ; i ++){
    let ch = document.createElement('li');
    ch.setAttribute("goto", links_To_Jump[i]);
    ch.innerHTML = `Section ${i + 1}`;
    prt.appendChild(ch);
  }
}

 /**
   * End Main Functions
   * Begin Events
   * 
  */

// Build menu 

buildthenav();

// Scroll to section on link click
// Set sections as active


links = document.querySelectorAll("li");
scrollAndHighlight(links);




 