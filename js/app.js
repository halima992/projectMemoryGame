let arrayElementLi = document.querySelectorAll(".card"),
    arrayElementI = [],
    parentOfCard = document.querySelector(".deck"),
    numOfmove = document.querySelector(".moves"),
	theRate   = document.querySelector(".stars"),
	child = [],
    parent = [],
    counterOfMove = 0,
    counterForwin = 0,
    numOfStars = 0,
 	minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    totalSeconds = 0;	

//-------------------------------------------------------------------
/**/
(function (){
setInterval(setTime, 1000);
function setTime() {
  ++totalSeconds;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutes.innerHTML = pad(parseInt(totalSeconds / 60));
}
 
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
})();

document.querySelector(".restart").addEventListener('click' ,function(){	
location.reload();
});
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
//this function for event when happend click 

function Event() {

    for (let i = 0; i < arrayElementLi.length; i++){
			  let card ;
		      card = arrayElementLi[i];
               card.addEventListener('click',  rate); 
			   card.addEventListener('click',function (){displayTheCard(card)});
			   card.addEventListener('click',matchCard);
			   card.addEventListener('click' , theEnd);
			   
        
}}


//tocount the movement of player
//tocount the movement of player
function count() {
    counterOfMove++;
    numOfmove.innerHTML = counterOfMove;}

function rate(){
	numOfStars = theRate.childElementCount;
	if((numOfStars===3 && counterOfMove>16)||(numOfStars===2 && counterOfMove>32)){
	theRate.removeChild(theRate.firstElementChild)	;
	
	}
}
//-----------------------------------------------------------------
//function display
function displayTheCard(element) {
    if (element.classList.length === 1 && child.length < 2) {
        element.classList.add("open", "show");
        addToList(element); }}
//function add to list
function addToList(element) {
    if (child.length === 0) {
        child[0] = element.firstElementChild.className;
        parent[0] = element;
    } else if (child.length === 1) {
        child[1] = element.firstElementChild.className;
        parent[1] = element;
    }


}
//function to see if there is match or not 

function matchCard() {
	
    if (child[0] === child[1]) {
        parent[0].classList.add("match");
        parent[1].classList.add("match");

		counterForwin+=2;
    }
	if(child.length ===2){
	count();
     setTimeout(function() {  parent[0].classList.remove("open", "show");
     parent[1].classList.remove("open", "show"); }, 700);

	 child = [];
}
	

}

//this function when the player win 
function theEnd() {
if(counterForwin === arrayElementLi.length){
	let  newP = document.createElement("P"),
	     newp2 = document.createElement("P");
	newP.innerHTML = ("You completed the game"+" " +minutes.innerHTML+" " + "minutes ,and"+" "+ seconds.innerHTML+" "+ "seconds" );
	newp2.innerHTML = ("Total moves:" + "  " +counterOfMove+ " ," +" "+ "Star rate:"+ "  " +numOfStars+" "+"of 3");
	 const  modal = document.querySelector(".modal");
	 const btn = document.querySelector(".button");
	 	 btn.insertAdjacentElement('beforebegin', newP);

	 btn.insertAdjacentElement('beforebegin', newp2);

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    toggleModal();
	btn.addEventListener("click",function(){location.reload();
})
}
}
//this function for event when happend click 


//call the event function 
Event();