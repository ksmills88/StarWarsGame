
// var characters = [];
// var obi = {
//     "name": "Obi-Wan Kenobi",
//     "healthPoint": 120,
//     "attackPower": 8,
//     "counterAttackPower": 12
//   };
// var luke = {
//     "name": "Luke Skywalker",
//     "healthPoint": 180,
//     "attackPower": 8,
//     "counterAttackPower": 12
//   };
// var maul = {
//     "name": "Darth Maul",
//     "healthPoint": 120,
//     "attackPower": 8,
//     "counterAttackPower": 12
//   };
// var sidious = {
//     "name": "Darth Sidious",
//     "healthPoint": 120,
//     "attackPower": 8,
//     "counterAttackPower": 12
//   };
// characters.push(obi, maul, luke, sidious);


// var isCharChosen = false;
// var attacker;
// var defender;
// var combatants = [];
// var characters = {
//     "obi": {
//         "name": "Obi-Wan Kenobi",
//         "healthPoint": 120,
//         "attackPower": 8,
//         "counterAttackPower": 12
//     },
//     "luke": {
//         "name": "Luke Skywalker",
//         "healthPoint": 180,
//         "attackPower": 25,
//         "counterAttackPower": 10
//     },
//     "maul": {
//         "name": "Darth Maul",
//         "healthPoint": 125,
//         "attackPower": 5,
//         "counterAttackPower": 50
//     },
//     "sidious": {
//         "name": "Darth Sidious",
//         "healthPoint": 200,
//         "attackPower": 10,
//         "counterAttackPower": 10
//     }
// }

// for(var i=0; i<characters.length; i++) {
//     console.log(characters[0].attackPower);
// }
 

// console.log(characters)
  
// $("#start-character").on("click", function (){
//   $("#start-character").empty();
// });


$(document).ready(function(){
    

    var test = true;
    var char1Count = true;
    var countDefeated = 0;

    var obiCount =0;
    var lukeCount =0;
    var sidCount =0;
    var maulCount =0;

    var disableBtn = true;
    

    // When the user chooses their character, this if/else will run to move each character to the appropriate area//
    
        $(".char1").on("click", function(){
            if(char1Count === true)
            {
                $(this).addClass("main");
                obiCount++;
                char1Count = false;
                //This will move the other 3 characters to their appended to divs
                
                $(".char2").appendTo("#enemies");
                $(".char3").appendTo("#enemies");
                $(".char4").appendTo("#enemies");
            }
            else if(char1Count === false && obiCount === 0)
            {
                lukeCount++;
                sidCount++;
                maulCount++;
                disableBtn = false;
                $(".char1").appendTo("#defender").addClass("def");
            }
        });

        $(".char2").on("click", function(){
            if(char1Count === true)
            {
                $(this).addClass("main");
                lukeCount++;
                char1Count = false;
                
                $(".char1").appendTo("#enemies");
                $(".char3").appendTo("#enemies");
                $(".char4").appendTo("#enemies");

            }
            else if(char1Count === false && lukeCount ===0)
            {
                //This enables the attack button after the defender has been selected.
                disableBtn = false;
                obiCount++;
                sidCount++;
                maulCount++;
                $(".char2").appendTo("#defender").addClass("def")
            }
        });
        $(".char3").on("click", function(){
            if(char1Count === true)
            {
                $(this).addClass("main");
                sidCount++;
                char1Count = false;
                
                $(".char1").appendTo("#enemies");
                $(".char2").appendTo("#enemies");
                $(".char4").appendTo("#enemies");
            }
            else if (char1Count === false && sidCount === 0)
            {
                disableBtn = false;
                lukeCount++;
                maulCount++;
                obiCount++;
                $(".char3").appendTo("#defender").addClass("def");
            }
        });
        $(".char4").on("click", function(){
            if(char1Count === true)
            {
                $(this).addClass("main");
                maulCount++;
                char1Count = false;
                
                $(".char1").appendTo("#enemies");
                $(".char2").appendTo("#enemies");
                $(".char3").appendTo("#enemies");  
            }
            else if (char1Count === false && maulCount === 0)
            {
                disableBtn = false;
                lukeCount++;
                sidCount++;
                obiCount++;
                $(".char4").appendTo("#defender").addClass("def");
            }
        });

        //Attack actions go here ------------------------//



        
});

alert("Choose Your Character to get started!")