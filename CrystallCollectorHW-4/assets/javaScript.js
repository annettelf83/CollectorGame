
var userResult= 0; 
var wins= 0;
var losses = 0;

$( document ).ready(function(){
var Random=Math.floor(Math.random()*101+19);//The random number shown at the start of the game should be between 19 - 120. the range of the random is 101, 120-19=101. 

    // *Selects a random number to be shown at the start of the game
    // *Number should be should be between 19 - 120
    
$('#randomNumber').text(Random); // Appending random number to the randomNumber id in the html doc
var crystal1= Math.floor(Math.random()*11+1)// Setting up random numbers for each crystal. * Random number has to be between 1 - 12
var crystal2= Math.floor(Math.random()*11+1)
var crystal3= Math.floor(Math.random()*11+1)
var crystal4= Math.floor(Math.random()*11+1)

    
    //  Decaring variables for tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
  $('#randomNumber').text(Random);
  crystal1= Math.floor(Math.random()*11+1);
  crystal2= Math.floor(Math.random()*11+1);
  crystal3= Math.floor(Math.random()*11+1);
  crystal4= Math.floor(Math.random()*11+1);
    userResult= 0;
  $('#finalResult').text(userResult);
        } 
  //adds the wins to the userresult
  function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userresult
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for crystals
    $('#one').on ('click', function(){
      userResult = userResult + crystal1;
      console.log("New userResult= " + userResult);
      $('#finalResult').text(userResult); 
            //sets win/lose conditions
          if (userResult == Random){
            win();
          }
          else if ( userResult > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userResult = userResult + crystal2;
      console.log("New userResult= " + userResult);
      $('#finalResult').text(userResult); 
          if (userResult == Random){
            win();
          }
          else if ( userResult > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userResult = userResult + crystal3;
      console.log("New userResult= " + userResult);
      $('#finalResult').text(userResult);
  //sets win/lose conditions
            if (userResult == Random){
            win();
          }
          else if ( userResult > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userResult = userResult + crystal4;
      console.log("New userResult= " + userResult);
      $('#finalResult').text(userResult); 
        
            if (userResult === Random){
            win();
          }
          else if ( userResult > Random){
            loser();
          }
    });   
  }); 



































/*
var randomResult; //undefined
var losses = 0; 
var wins = 0; 
var previous = 0; 

// setters $(".crystal").attr("class","red");//we're setting a value or attribute into this .crystal
//getters console.log($(this).attr("data-random"));. and here, we're getting value


randomResult = Math.floor(Math.random()*101) + 19;//The random number shown at the start of the game should be between 19 - 120. the range of the random is 101, 120-19=101. 
//console.log(random_result);

$("#result").html("Random Result: "+ random_result);
//this is going to run 4 times. every time it runs it needs to have a different number.
//Now, by clicking the cristals it should be hidding the random result. 

for(var i = 0; i <4; i++){ 
    var randomNu = Math.floor(Math.random() * 11) + 1; //hidden value btwn 1-12. I had *12);.. but since it should not be storing from 0, has to be *11) + 1;.
    //console.log(randomNu);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": randomNu
    });
    //crystal.html(randomNu);
    $(".crystals").append(crystal);
  
}
$(".crystal").on("click", function(){
   //console.log($(this).attr("data-random"));

   //var num = $(this).attr("data-random");
   var num = parseInt($(this).attr("data-random")); 
   var result = num + 5;
   
   previous += num; //this is keeping track of * When the player clicks on a crystal
   console.log(previous);
   
   if(previous > rendom_result){
    //console.log("You Lost!!");
    lost--;
   }
   else if(previous === rendom_result){
       //console.log("You win!!");
       win++;
   }

   



});

//Pseudo Coding
/*
3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page. DONE

   * The player will be shown a random number at the start of the game. DONE

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. DONE

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
 
   Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

   */
