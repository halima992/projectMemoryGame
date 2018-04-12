let arrayElementLi = document.querySelectorAll(".card");
arrayElementI = [],
    parentOfCard = document.querySelector(".deck"),
    numOfmove = document.querySelector(".moves");
//-------------------------------------------------------------------
for (var i = 0; i < arrayElementLi.length; i++) {
    arrayElementI[i] = arrayElementLi[i].firstElementChild;
}
//-------------------------------------------------------------------


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//-------------------------------------------------------------------

shuffle(arrayElementI);
//-------------------------------------------------------------------
// to remove the  previous (card) from the panel after shuffle
for (let i = 0; i < arrayElementLi.length; i++) {
    parentOfCard.removeChild(arrayElementLi[i]);
}
//-------------------------------------------------------------------
// for append new array(card) to the panel after shuffle
var frag = document.createDocumentFragment();
for (var i = 0; i < arrayElementI.length; ++i) {
    let newElementI = document.createElement("LI");
    newElementI.classList.add("card");
    newElementI.appendChild(arrayElementI[i]);
    frag.appendChild(newElementI);
}
parentOfCard.appendChild(frag);
//---------------------------------------------------------------------
//this assignment for update the  arrayElementLi after shuffle  
arrayElementLi = document.querySelectorAll(".card");
//-------------------------------------------------------------------
//tocount the movement of player
function count(counterOfMove) {
    counterOfMove++;
    numOfmove.innerHTML = counterOfMove;
    return counterOfMove;
}
//-----------------------------------------------------------------
//function for update for add another card  on list
function update(child) {
    child = [];
    return child;
}
//-----------------------------------------------------------------

//function display
function displayTheCard(element, child, parent) {
    if (element.classList.length === 1 && child.length < 2) {
        element.classList.add("open", "show");
        addToList(element, child, parent);
    }
}

//function add to list

function addToList(element, child, parent) {
    if (child.length === 0) {
        child[0] = element.firstElementChild.className;
        parent[0] = element;
    } else if (child.length === 1) {
        child[1] = element.firstElementChild.className;
        parent[1] = element;
    }


}
//function to see if there is match or not 

function matchCard(child, parent,counterForwin) {
    parent[0].classList.remove("open", "show");
    parent[1].classList.remove("open", "show");
    if (child[0] === child[1]) {
        parent[0].classList.add("match");
        parent[1].classList.add("match");
		counterForwin+=2;
		return counterForwin;
    }
	
		return counterForwin;

}
//this function when the player win 
function theEnd(counterForwin) {
    let newDiv = document.createElement("DIV");
	newDiv.setAttribute('style', 'color: #FFF; background-color: #2e3d49; font-size: 3.5em; text-align: center');
	newDiv.innerHTML ="you are win ";
    document.body.appendChild(newDiv);
}
//this function for event when happend click 
function Event() {
    let child = [],
        parent = [],
        counterOfMove = 0,
        counterForwin = 0;
    for (let i = 0; i < arrayElementLi.length; i++)
        arrayElementLi[i].addEventListener('click', function() {
            counterOfMove = count(counterOfMove);
            displayTheCard(arrayElementLi[i], child, parent);
            if (child.length === 2) {
               counterForwin = matchCard(child, parent,counterForwin);
               child = update(child);
            }
			if(counterForwin === arrayElementLi.length){
				theEnd(counterForwin)
				
			}
        });
}


//call the event function 
Event();