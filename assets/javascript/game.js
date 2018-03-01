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

    $(".attackBtn").on("click", function(){
        if(disableBtn === false){
            var charName = $(".def").attr("characterName");
            var healthStart = $(".main").attr("health");
            
            var attackMain = $(".main").attr("attack");
            
            var healthDefender = $(".def").attr("health");
            var counterAttack = $(".def").attr("counterAttack");
            var healthStartAfter = healthStart - counterAttack;
            var healthDefenderAfter = healthDefender - attackMain;
            var healthMain1 = $(".main").attr("health", healthStartAfter);
            var healthDefender1 = $(".def").attr("health", healthDefenderAfter);
            
console.log(attackMain);
           
            $(".main p").html($(".main").attr("health"));

            $(".def p").html($(".def").attr("health"));
            // shows message::::::
            $(".defender").html("<p>" + "You attacked " + charName + " for " + attackMain + " damage "+
                                charName + " attacked you back for " + counterAttack + " </p>");
            attackMain = attackMain * 2;
            
            var attackMain1 = $(".main").attr("attack", attackMain);
            
            console.log(attackMain1)
            //need else/if to determine lose/win/action. If "your character" runs out of health, game is over.
            //Your character disappears and an image of darth appears
            if(healthStartAfter <= 0)
            {
                $(".defender").html("<p>" + "GAME OVER! You have been defeated." + "</p>");
                $(".main").remove();
                $('#start-character').prepend($('<img>', {src:"assets/images/yoda3.jpg"}));
                $(".yourCharacter").html("<h2>" + "You Lost" + "</h3>").css({'color': 'red', 'font-size':'24px'});
                this.disabled = true;
                
                console.log(healthDefenderAfter)
            }
            //As the defenders are defeated, they must disappear and a new enemy can be chosen. 
            //when they disappear, text will appear alerting the user that they have defeated "__" and to choose another enemy. 
            else if(healthDefenderAfter <=0)
            {
                //If Obi dies
                if($(".def.char1").attr("health") <=0)
                {
                    maulCount--;
                    sidCount--;
                    lukeCount--;
                    $(".def").remove();
                    $(".defender").html("<p>" + "You have defeated " + charName +". Choose your next enemy.").css({"font-size": "18px", "color": "magenta"});
                    countDefeated++;
                }
                //If Luke dies
                else if($(".def.char2").attr("health") <=0)
                {
                    maulCount--;
                    sidCount--;
                    obiCount--;
                    $(".def").remove();
                    $(".defender").html("<p>" + "You have defeated " + charName +". Choose your next enemy.").css({"font-size": "18px", "color": "magenta"});
                    countDefeated++;
                }
                //If Darth Sid dies
                else if($(".def.char3").attr("health") <=0)
                {
                    maulCount--;
                    lukeCount--;
                    obiCount--;
                    $(".def").remove();
                    $(".defender").html("<p>" + "You have defeated " + charName +". Choose your next enemy.").css({"font-size": "18px", "color": "magenta"});
                    countDefeated++;
                }
                //If Darth Maul dies
                else if($(".def.char4").attr("health") <=0)
                {
                    lukeCount--;
                    sidCount--;
                    obiCount--;
                    $(".def").remove();
                    $(".defender").html("<p>" + "You have defeated " + charName +". Choose your next enemy.").css({"font-size": "18px", "color": "magenta"});
                    countDefeated++;
                }

                //Do not allow clicks after game is over
                //end game functionality
                if(countDefeated === 3)
                {
                    this.disabled = true;
                    $(".defender").html("<p>"+"YOU WON!"+"</p>").css({"font-size":"30px","color": "magenta"})
                    $(".end").remove();
                }

            }
            
        };
    });

        
});


