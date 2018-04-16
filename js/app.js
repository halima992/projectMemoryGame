let cards = document.querySelectorAll('.card'),
    iconsOfCard = [],
    parentOfCard = document.querySelector('.deck'),
    numOfmove = document.querySelector('.moves'),
	theRate   = document.querySelector('.stars'),
	child = [],
    parent = [],
    counterOfMove = 0,
    counterForwin = 0,
    numOfStars = 0,
 	minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    totalSeconds = 0;

/**
* @description this function for time counter source https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
* @param there is no parameter
* @returns no returns
*/
(function (){
setInterval(setTime, 1000);
function setTime() {
  ++totalSeconds;
  seconds.innerHTML = ((totalSeconds % 60)+'');
  minutes.innerHTML = ((parseInt(totalSeconds / 60))+'');
}
})();
function reload(){location.reload();}
//addEventListener when player click on restart icon for reload webpage 

document.querySelector('.restart').addEventListener('click' ,reload);

//for loop for assign the icons of card  on array 
for (let i = 0; i < cards.length; i++) {
    iconsOfCard[i] = cards[i].firstElementChild;
}

/**
* @description this function for shuffle the card , Shuffle function from http://stackoverflow.com/a/2450976
* @param the parameter is array we have to shuffle it 
* @returns array after shuffle
*/
function shuffle(array) {
    let currentIndex = array.length,
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
//invoked the function shuffle for shuffle the icon

shuffle(iconsOfCard);
//-------------------------------------------------------------------
// to remove the  previous (card) from the panel after shuffle
for (let i = 0; i < cards.length; i++) {
    parentOfCard.removeChild(cards[i]);
}
//-------------------------------------------------------------------
// for append new array(card) to the panel after shuffle
var frag = document.createDocumentFragment();
for (let i = 0; i < iconsOfCard.length; ++i) {
    let newElementI = document.createElement('LI');
    newElementI.classList.add('card');
    newElementI.appendChild(iconsOfCard[i]);
    frag.appendChild(newElementI);
}
parentOfCard.appendChild(frag);
//---------------------------------------------------------------------
//this assignment for update the  cards after shuffle  
cards = document.querySelectorAll('.card');
/**
* @description this function for add event when happend click for display the card, make match , calculate the rate and movment
* @param no parameter 
* @returns no 
*/
(function () {

    for (let i = 0; i < cards.length; i++){
			  let card ;
		      card = cards[i];
               card.addEventListener('click',  rate); 
			   card.addEventListener('click',function (){displayTheCard(card , i)});
			   card.addEventListener('click',matchCard);
			   card.addEventListener('click' , theEnd);       
}})();

/**
* @description this function for count the movement of player
* @param no parameter 
* @returns no 
*/
function count() {
    counterOfMove++;
    numOfmove.innerHTML = counterOfMove;}
	
	/**
* @description this function for calculate the rate of player of 3
* @param no parameter 
* @returns no 
*/

function rate(){
	numOfStars = theRate.childElementCount;
	if((numOfStars===3 && counterOfMove>16)||(numOfStars===2 && counterOfMove>32)){
	theRate.removeChild(theRate.firstElementChild)	;
	
	}
}
/**
* @description this function for open and show the card when player click 
* @param element clicked  
* @returns no 
*/
function displayTheCard(element , index ) {
    if (element.classList.length === 1 && child.length < 2) {
        element.classList.add('open', 'show');
        addToList(element, index ); }}
//function add to list
function addToList(element ,index) {
    if (child.length === 0) {
        child[0] = element.firstElementChild.className;
        parent[0] = element;
		indexOfFirst = index;
    } else if (child.length === 1) {
        child[1] = element.firstElementChild.className;
        parent[1] = element;
	    indexOfSecond = index;  
    }


}
/**
* @description this function for make match ,count for win and update the list after check.
* @param no parameter 
* @returns no 
*/
function matchCard() {

    if ((child[0] === child[1]) &&  child.length ===2 ) {
		console.log('iam here'+ indexOfFirst);
		console.log('iam'+ indexOfSecond);
        parent[0].classList.add('match');
        parent[1].classList.add('match');
       counterForwin+=2;
    }
	
	if(child.length ===2 ){
	count();
     setTimeout(function() {  parent[0].classList.remove('open', 'show');
     parent[1].classList.remove('open', 'show'); }, 700);
	 child = [];
    }
}

/**
* @description this function for display the model after the player win 
* @param no parameter 
* @returns no 
*/function theEnd() {
	if(counterForwin === cards.length){
		let  newP = document.createElement('P'),
			 newp2 = document.createElement('P');
		newP.innerHTML = ('You completed the game'+
		' ' + minutes.innerHTML +
		' ' + 'minutes ,and' +
		' ' + seconds.innerHTML+
		' ' + 'seconds');
		newp2.innerHTML = ('Total moves:'+ 
		'  ' + counterOfMove+ 
		', ' +
		'  ' + 'Star rate:'+ 
		'  ' +numOfStars+' '+'of 3');
		 const  modal = document.querySelector('.modal');
		 const btn = document.querySelector('.button');
			 btn.insertAdjacentElement('beforebegin', newP);

		 btn.insertAdjacentElement('beforebegin', newp2);

		function toggleModal() {
			modal.classList.toggle('show-modal');
		}
		toggleModal();
		btn.addEventListener('click',reload);
	}
}


