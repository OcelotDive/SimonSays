// JavaScript source code
var onOffCount = 1;

  var bool = null;
            var strict = document.getElementById('strictButton');
            strict.onclick = function () {
                bool = true;
                $('#strictButton').css('background-color', 'brown');
				
		
			}
startSwitch.onclick = function  (){
    var toggle = document.getElementById('toggle');
    onOffCount++;

    //game starts when switched on
    if (onOffCount % 2 == 0) {
        toggle.style.left = "20px";

        $(document).ready(function() {
            //start of main body of code
            var startSwitch = document.getElementById('startSwitch');
            
            var collection = [];
           var  cycleCount = 1;
            var seq = [];
            var history = [];

            document.getElementById('counterDisplay').innerHTML = cycleCount;




            function random() {
                if (cycleCount <= 20) {
                    while (collection.length < cycleCount) {
                        var colour = " "
                        var rand = Math.floor((Math.random() * 4) + 1);
                        console.log(rand);


                        switch (rand) {
                            case 1:
                                colour = "red";
                                break;
                            case 2:
                                colour = "green";
                                break;
                            case 3:
                                colour = "blue";
                                break;
                            case 4:
                                colour = "yellow";
                                break;
                        }



                        collection.push(colour);
                    }
                }
            }
            random()
           
            var h = null;

            function flash() {
                $('#posOne').css('pointer-events', 'auto');
                $('#posTwo').css('pointer-events', 'auto');
                $('#posThree').css('pointer-events', 'auto');
                $('#posFour').css('pointer-events', 'auto');

                switch (collection[0]) {
                    case "red":
                        var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                        audio1.play();
                        setTimeout(redOn, 0);
                        setTimeout(redOff, 500);

                        break;
                    case "green":
                        var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                        audio2.play();
                        setTimeout(greenOn, 0);
                        setTimeout(greenOff, 500);

                        break;
                    case "blue":
                        var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                        audio3.play();
                        setTimeout(blueOn, 0);
                        setTimeout(blueOff, 500);

                        break;
                    case "yellow":
                        var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                        audio4.play();
                        setTimeout(yellowOn, 0);
                        setTimeout(yellowOff, 500);

                        break;
                }

                console.log(collection);


                seq = collection.splice(0, 1);
                history.push(seq);

               if (collection.length < 1) {
                    clearInterval(h);
                }

}
            

            function recall() {
              
                
              h =     setInterval(function () {
                   
                        flash();
                        
                    }, 1000);
               
                  
            }
            
            recall();

            function redOn() {
                var red = $('#posOne').css('background-color', 'red');
            }
            function redOff() {
                var red = $('#posOne').css('background-color', '#D06175');
            }
            function greenOn() {
                var green = $('#posTwo').css('background-color', '#01DF00');
            }
            function greenOff() {
                var green = $('#posTwo').css('background-color', '#2F6503');
            }
            function blueOn() {
                var blue = $('#posThree').css('background-color', '#1AA1FD');
            }
            function blueOff() {
                var blue = $('#posThree').css('background-color', '#2A7CBF');
            }
            function yellowOn() {
                var yellow = $('#posFour').css('background-color', '#FFFF00');
            }
            function yellowOff() {
                var yellow = $('#posFour').css('background-color', '#AB993F');
            }


            //incrementation of display counter
           /* var up = document.getElementById('arrowUp');
            var down = document.getElementById('arrowDown');

            up.onclick = function () {
                if (cycleCount < 20) {
                    cycleCount++
                    document.getElementById('counterDisplay').innerHTML = cycleCount;
                }
                else {
                    return;
                }
            }
            down.onclick = function () {
                if (cycleCount > 1) {
                    cycleCount--
                    document.getElementById('counterDisplay').innerHTML = cycleCount;
                }
                else {
                    return;
                }
            }*/

            //click on colours
            var guessHistory = [];
            var selectionChoice;
            var numGuess = 0;
            var red = document.getElementById('posOne');
            var green = document.getElementById('posTwo');
            var blue = document.getElementById('posThree');
            var yellow = document.getElementById('posFour');

         

            red.onclick = function () {
                selectionChoice = "red";
                setTimeout(redOn, 0);
                setTimeout(redOff, 500);
                var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                audio1.play();
                
                guessHistory.push(selectionChoice);
             
               // compareNow();
                numGuess++;
                if (guessHistory.length == history.length ){
                    Correctguess();
               
                }
             
            }

         

            green.onclick = function () {
                selectionChoice = "green";
                setTimeout(greenOn, 0);
                setTimeout(greenOff, 500);
                var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                audio2.play();
                guessHistory.push(selectionChoice);
             
               // compareNow();
                numGuess++;
                if (guessHistory.length == history.length) {
                    Correctguess();

                }
               
            }
            blue.onclick = function () {
                selectionChoice = "blue";
                setTimeout(blueOn, 0);
                setTimeout(blueOff, 500);
                var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                audio3.play();
                guessHistory.push(selectionChoice);
             
               // compareNow();
                numGuess++;
                if (guessHistory.length == history.length) {
                    Correctguess();

                }
             
                
            }
            yellow.onclick = function () {
                selectionChoice = "yellow";
                setTimeout(yellowOn, 0);
                setTimeout(yellowOff, 500);
                var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                audio4.play();
                guessHistory.push(selectionChoice);
               
               // compareNow();
                numGuess++;
                if (guessHistory.length == history.length) {
                    Correctguess();

                }
              
            }

          

            
				var check = null;
            function compare() {
                var a = history.join(" ");
                var b = guessHistory.join(" ");
				
                if(b === a) {
                check = true;
				
              }
			  else{check = false;}
            }

            
           /* function compareNow() {
                var counter = history.length - 1;
                if (selectionChoice != history[numGuess]) {
               
                }

            }*/




            function Correctguess() {
                compare();
               
                if ( check === true ) {
                     
                    guessHistory = [];
                    history = [];
                    numGuess = 0;
                           
                           
                    cycleCount++;
                    document.getElementById('counterDisplay').innerHTML = cycleCount;
                    random();
                    recall();
                                        
                }
                    
                 if (check === false && bool == true){
					
					 disableButtons();
                    guessHistory = [];
                    history = [];
                    numGuess = 0;
					cycleCount =1;
					document.getElementById('counterDisplay').innerHTML = cycleCount;
                    setTimeout(random, 2000);
                    setTimeout(recall, 2000);
				 }       
              
                else if (check == false){
					
                    disableButtons();
                    guessHistory = [];
                    history = [];
                    numGuess = 0;
                    setTimeout(random, 2000);
                    setTimeout(recall, 2000);
                }
                     
               
                    }
            
        });

    }
    else  {
     
        toggle.style.left = "0px";
        bool = false;
        $('#strictButton').css('background-color', 'red');
    }
}                        
                                   
function disableButtons() {
    $('#posOne').css('pointer-events', 'none');
    $('#posTwo').css('pointer-events', 'none');
    $('#posThree').css('pointer-events', 'none');
    $('#posFour').css('pointer-events', 'none');
}


                      





