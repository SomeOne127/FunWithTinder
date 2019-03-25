// You can change following 3 variables:
var likeRate = 0.7;
// Chance of each person to be superliked is superLikeChance
var superLikeChance = 30;
// Script will run until day limit or maxItems number will be reached
var maxItems = 30;



var likesSet = 0;
var dislikesSet = 0;
var superlikesSet = 0;
var total = 0;
var reachOutOfLimit = false;
var interval = null;


function doClick() {
  var cont = clickButtons();
  
  if (cont){ 
	setTimeout(doClick, getRandomInt(1000) + 1000);
  }
}

doClick();


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function printStatistics(){
	console.log("Congratulations!!!");
	console.log("Script finishes");
	if (reachOutOfLimit){
		console.log("You reached out your limit");
	}
	else{
		console.log("You didn't reach your limit");
	}
	console.log("Amount of Likes set: " + likesSet);
	console.log("Amount of Dislikes set: " + dislikesSet);
	console.log("Amount of Superlikes set: " + superlikesSet);
}


function clickButtons(){
  reachOutOfLimit = document.getElementsByClassName("button--primary-shadow").length > 0;

  if (reachOutOfLimit || total >= maxItems)
  {
	printStatistics();
  
    return false;
  }
  else
  {
	  var buttons = document.getElementsByClassName("recsGamepad__button");
	   
	  if (getRandomInt(100) <= likeRate * 100){
		  if (getRandomInt(superLikeChance) == superLikeChance-1 && superlikesSet == 0)
		  {
			// Remove next line, if you don't want to set superlike
			buttons[2].click();
			superlikesSet++;
		  } else
		  {
			buttons[3].click();
			likesSet++;
		  }
	  }
	  else
	  {
		buttons[1].click();
		dislikesSet++;
	  }
	  
	  total++;
  }
  
  return true;
}
