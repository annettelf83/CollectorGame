var userResult= 0; 
var wins= 0;
var losses = 0;

$( document ).ready(function(){
var random=Math.floor(Math.random()*101+19);

// *Selects a random number to be shown at the start of the game
    // *Number should be should be between 19 - 120
    $("#randomNumber").text(random);
    var crystal1=Math.floor(Math.random()*11+1);
    var crystal2=Math.floor(Math.random()*11+1);
    var crystal3=Math.floor(Math.random()*11+1);
    var crystal4=Math.floor(Math.random()*11+1);

    

    //declaring variables
    $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  //resets the game
  function reset(){
    random=Math.floor(Math.random()*101+19);
    console.log(random)
  $("#randomNumber").text(random);
  crystal1= Math.floor(Math.random()*11+1);
  crystal2= Math.floor(Math.random()*11+1);
  crystal3= Math.floor(Math.random()*11+1);
  crystal4= Math.floor(Math.random()*11+1);
    userResult= 0;
  $("#finalResult").text(userResult);
        } 
  //adds the wins to the userresult
  function win(){
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  //addes the losses to the userresult
  function loser(){
  alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  //sets up click for crystals
    $("#one").on ("click", function(){
      userResult = userResult + crystal1;
      console.log("New userResult= " + userResult);
      $("#finalResult").text(userResult); 
            //sets win/lose conditions
          if (userResult == random){
            win();
          }
          else if ( userResult > random){
            loser();
          }   
    })  
    $("#two").on ("click", function(){
      userResult = userResult + crystal2;
      console.log("New userResult= " + userResult);
      $("#finalResult").text(userResult); 
          if (userResult == random){
            win();
          }
          else if ( userResult > random){
            loser();
          } 
    })  
    $("#three").on ("click", function(){
      userResult = userResult + crystal3;
      console.log("New userResult= " + userResult);
      $("#finalResult").text(userResult);
  //sets win/lose conditions
            if (userResult == random){
            win();
          }
          else if ( userResult > random){
            loser();
          } 
    })  
    $("#four").on ("click", function(){
      userResult = userResult + crystal4;
      console.log("New userResult= " + userResult);
      $("#finalResult").text(userResult); 
        
            if (userResult === random){
            win();
          }
          else if ( userResult > random){
            loser();
          }
    });   
  }); 

