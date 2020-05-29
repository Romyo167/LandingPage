

/* Define global variabled */
let S1;
let S2;
let links;
let tgt = document.querySelector('#EP');
let linkdefault;

/* Functions to be used in code*/


//Erase Sub navigation list function
function ClearContents(SS){
 for(let S of SS){
   S.style.display = "none";
  } 
}

//Display Sub navigation list function
function DisplayContents(SS){
  for(let S of SS){
   S.style.display = "block";
  }
}
function clearhigh(){
  tgt.style.border = "none";   
}

/* main scrolling function */

function scrollAndHighlight(links){

for(let link of links){
  link.addEventListener("click" , function(){
    if(typeof linkdefault !== "undefined"){
    linkdefault.style.backgroundColor = "rgb(184,130,204)";
    linkdefault.style.border = "none";
  }
    tgt.style.border = "none";
    let togo = link.getAttribute("goto");
    tgt = document.querySelector(togo);
    tgt.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    tgt.style.border = "10px solid blue";
    tgt.style.borderRadius = "25px";
    link.style.backgroundColor = "rgb(50,130,204)";
    link.style.border = "5px solid gray";
    link.style.borderRadius = "10px";
    link.style.width = "75%";
    linkdefault = link;
    });
  }
}


/* Remove highlight when mouse is out*/
//function RemoveHighlight(){
  
//}

/* Build the nav */
//That is what is going to be built after this funtion
/*
                 <ul>
                  <div id= "parent1" ><li class = "father1" goto = "#EP">Electronics Projects</li><div>
                    <li class = "father1 son" goto = "#EP1" >Section 1</li>
                    <li class = "father1 son" goto = "#EP2">Section 2</li></div></div>
                    <div id= "parent2"> <li class = "father2" goto ="#WB">Web Projects</li><div>
                    <li class = "father2 son"  goto = "#WB1" >Section 3</li>
                    <li class = "father2 son" goto = "#WB2">Section 4</li></div></div>
                </ul>
  */
function buildthenav(){
  const S = document.querySelector('nav');
  const ch = document.createElement('ul');
  S.appendChild(ch);



  let prt = document.querySelector('ul');
  let ch1 = document.createElement('div');
  ch1.className = 'parent1'; 
  prt.appendChild(ch1);

  let prt1 = document.querySelector('nav>ul>.parent1');
  let ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father1';
  ch1ofch1.innerHTML = 'Electronics Projects';
  ch1ofch1.setAttribute("goto", "#EP");
  prt1.appendChild(ch1ofch1);

  prt1 = document.querySelector('nav>ul>.parent1');
  ch1 = document.createElement('div');
  prt1.appendChild(ch1);

  prt1 = document.querySelector('nav>ul>.parent1>div');
  ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father1';
  ch1ofch1.innerHTML = 'Section 1';
  ch1ofch1.classList.add("son");
  ch1ofch1.setAttribute("goto", "#EP1");
  prt1.appendChild(ch1ofch1);

  prt1 = document.querySelector('nav>ul>.parent1>div');
  ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father1';
  ch1ofch1.innerHTML = 'Section 2';
  ch1ofch1.classList.add("son");
  ch1ofch1.setAttribute("goto", "#EP2");
  prt1.appendChild(ch1ofch1);





  prt = document.querySelector('ul');
  ch1 = document.createElement('div');
  ch1.className = 'parent2'; 
  prt.appendChild(ch1);

  prt1 = document.querySelector('nav>ul>.parent2');
  ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father2';
  ch1ofch1.innerHTML = 'Web Projects';
  ch1ofch1.setAttribute("goto", "#WB");
  prt1.appendChild(ch1ofch1);


  prt1 = document.querySelector('nav>ul>.parent2');
  ch1 = document.createElement('div');
  prt1.appendChild(ch1);

  prt1 = document.querySelector('nav>ul>.parent2>div');
  ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father2';
  ch1ofch1.innerHTML = 'Section 3';
  ch1ofch1.classList.add("son");
  ch1ofch1.setAttribute("goto", "#WB1");
  prt1.appendChild(ch1ofch1);

  prt1 = document.querySelector('nav>ul>.parent2>div');
  ch1ofch1 = document.createElement('li'); 
  ch1ofch1.className = 'father2';
  ch1ofch1.innerHTML = 'Section 4';
  ch1ofch1.classList.add("son");
  ch1ofch1.setAttribute("goto", "#WB2");
  prt1.appendChild(ch1ofch1)

}


/* Start Invoking functions */

buildthenav();


S1 = document.querySelectorAll(".father1.son");
S2 = document.querySelectorAll(".father2.son");
links = document.querySelectorAll("li");

ClearContents(S1);
ClearContents(S2);
scrollAndHighlight(links);

// Display the sub nav when mouse over
//first subnav
let father1 = document.querySelector(".parent1");
father1.addEventListener( "mouseover" ,  function(){DisplayContents(S1);});

//second subnav
let father2 = document.querySelector(".parent2");
father2.addEventListener( "mouseover" , function(){DisplayContents(S2);});


// Clear when mouse out
father1.addEventListener( "mouseout" ,function(){ClearContents(S1);});
father2.addEventListener( "mouseout" ,function(){ClearContents(S2);});

 