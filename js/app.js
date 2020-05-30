

/* Define global variabled */
let links;
let tgtdefault;  // The previous target which I need to remove highlihting
let linkdefault; // The previous link (li item) which I need to remove highlighting
const links_To_Jump = new Array ("#EP1" , "#EP2" , "#WB1" , "#WB2");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function clearactivefromsection(){
  if(typeof tgtdefault !== "undefined")
  tgtdefault.classList.remove('activeSection'); 

}

function clearactivefromli(){
  if(typeof linkdefault !== "undefined"){
   linkdefault.classList.remove('activeNavli');
  }
}


function activeThechosenli(lk){
    lk.classList.add('activeNavli');
}
 
function activeThechosensection(tt){
    tt.classList.add("activeSection");
   
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

function scrollAndHighlight(links){
console.log("inside");
for(let link of links){
  link.addEventListener("click" , function(){
    let togo = link.getAttribute("goto");
    tgt = document.querySelector(togo);
    tgt.scrollIntoView({
            behavior: 'auto',
            block: 'start'
        });
    } );
  }
}

function hight() {
    for (let i = 0; i < 4; i++) {
       
        let curr = document.querySelector(links_To_Jump[i]);
        if (curr.getBoundingClientRect().top < 300) {
            clearactivefromsection();
            clearactivefromli();
            activeThechosenli(links[i]);
            activeThechosensection(curr);
            tgtdefault = curr;
            linkdefault = links[i];

        }
    }

}

// build the nav

function buildthenav(prtt){
  const S = document.querySelector(prtt);
  const child = document.createElement('nav');
  S.appendChild(child);
  const ch = document.createElement('ul');
  child.appendChild(ch);
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
prtt = "#fixed";
buildthenav(prtt);

// Scroll to section on link click
// Set sections as active


links = document.querySelectorAll("li");
scrollAndHighlight(links);



window.addEventListener("scroll", hight);

