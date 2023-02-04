let b1 = document.getElementById("B1"), Stats = document.getElementById("stats");
let HI1 = document.getElementById("HI1");
let LUR = document.getElementById("LUR");
let classsub1 = document.getElementById("classsub1");
let classsub2 = document.getElementById("classsub2");
let classsub3= document.getElementById("classsub3");
let preclasssub3 = document.getElementById("preclasssub3");
let class_select1 = document.getElementById("class_select1");       
let XP_Requirements, Other_Bonuses, MaxHP, PClass, piercing, bludgeoning, slashing, fire, ice, nectotic ,SpellSlots, regain, healing, damige, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma, HP, Armer_Class, Action_Point, Level, XP, Gold, Level_Availability;
let StrengthMod, DexterityMod, ConstitutionMod, IntelligenceMod, WisdomMod, CharismaMod, Skill_points, Class, subclass;
let Sub_SthrengthMod =0, Sub_DexterityMod =0, Sub_ConstitutionMod =0, Sub_IntelligenceMod =0, Sub_WisdomMod =0, Sub_CharismaMod =0;
let max_spellslots, leveluprequest=0, canrest = false;
let text;
text = '<p style="font-size: 20px;color: blue; "> test <button class="button" onclick="selecter(35)">omg</button> </p>';    
Class = "undefined";
subclass = "undefined";
combat = false;
//into cean 
function introdone(){
    document.getElementById("intro").style.display="none";
    document.getElementById('class_select1').style.display="";    
}
//if the stats arnt seet
function prestart(){
        Strength = 2;
        Dexterity = 2; 
        Constitution = 2; 
        Intelligence = 2; 
        Wisdom = 2; 
        Charisma = 2;
        HP = 10; //HP is also calcalated difrently for ech class for Fighter its, hp=conMOD+(Level*12) and for Wizard, hp=conmod+(Level*8).
        MaxHP = HP;
        Armer_Class = 10; // Armer Class also konown as AC, AC is calculatecd diffrent its, AC=(10 + DexMOD + other boneses).
        Level = 1; 
        XP = 0;
        Gold = 0;
        XP_Requirements = 2000;
        Skill_points = 0; //Skill_points = over Level.
        StrengthMod =1 ;
        DexterityMod =1 ;
        ConstitutionMod =1 ;
        IntelligenceMod =1 ;
        WisdomMod =1 ;
        CharismaMod =1 ;  
        }
        //this is whar i do my button selections and other uppdate requests.
function selecter(choice) {
            console.log(choice);
            if (choice == 1) {                
                if (Level_Availability == 1){
                    if (Strength == 100) 
                    {}else{             
                    Strength_increase();                  
                    }                
                }          
            }

            if (choice == 2) {
                if (Level_Availability == 1){
                    if(Dexterity==100)
                    {}else
                    {Dexterity_increase();}
            }           
            } 

            if (choice == 3) {
                if (Level_Availability == 1){
                    if(Constitution==100)
                    {}else
                    {Constitution_increase();}
                    }           
            } 

            if (choice == 4) {
                if (Level_Availability == 1){
                    if(Wisdom==100)
                    {}else
                    {Wisdom_increase();}
                    }           
            } 

            if (choice == 5) {
                if (Level_Availability == 1){
                if(Intelligence==100){}else
                {Intelligence_increase();}
            }           
            } 

            if (choice == 6) {
            if (Level_Availability == 1){
                if(Charisma==100)
                {}else
                {  
                Charisma_increase();}
                }
                }           
            
            if (choice == 7){
                if (canrest == true){
                    resting()
                }
            }
            if (choice == 8){
                
            }

            if (choice == 9){
                
            }

            if (choice == 10){
                
            }

            if (choice == 11){
                
            }

            if (choice == 12){
                
            }

            if (choice == 13){
                
            }

            if (choice == 14){
                
            }

            if (choice == 15){
              
            }

            if (choice == 16){
                
            }

            if (choice == 17){
                
            }

            if (choice == 18){
                
            }

            if (choice == 19){
                
            }

            if (choice == 20){
                
            }

            if (choice == 21){
                
            }

            if (choice == 22){
                
            }

            if (choice == 23){
                
            }

            if (choice ==24) {
                XP += XP_Requirements;
                stats_uppduate();
                LevelUp();                
            }

            if (choice == 25) {
                if (Class == "undefined") {
                Wizard_select();
                return;
                }
                if (Class == "Wizard") {
                document.getElementById("P1.5").innerHTML = " Ice";
                subclass = "Ice_Wizard";
                buttonremover();
                return;
                }
                if (Class == "Fighter") {
                document.getElementById("P1.5").innerHTML = " Tank";
                subclass = "Tank";
                Tank();
                buttonremover();
                return;
                }
            }

            if (choice == 26) {
            if (Class =="undefined") {
                Fighter_select();
                return;
            }
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerHTML = " Fire";
                subclass = "Fire_Wizard";
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerHTML = " Barberian";
                subclass = "Barberian";
                buttonremover();
                return;                
            }
            }

            if (choice == 27) {
                if (Class == "Wizard") {
                document.getElementById("P1.5").innerHTML = " Necromanser";
                subclass = "Necromanser";
                buttonremover();
                                return;
                }
                if (Class == "Fighter") {
                document.getElementById("P1.5").innerHTML = " Archerer";
                subclass = "Archerer";
                buttonremover()
                return;
                }
            }
            if (choice == 28){
                
            }

            if (choice == 29){
                
            }

            if (choice == 30){
                
            }

            if (choice == 31){
                
            }

            if (choice == 32){
                
            }

            if (choice == 33){
                
            }

            if (choice == 34){
                
            }

            if (choice == 35){
                
            }

            if (choice == 36){
                
            }

            if (choice ==37) {
                leveluprequest=1;
                level_up_request();           
            }
        }
function buttonremover()
{
class_select1.attributes.getNamedItem("style").value="display: none;";
}
        //comenly used functions.

        // this is wher theplayer selects the Wizard class.
function Wizard_select(){
                document.getElementById("P1").innerHTML ="Wizard";
                document.getElementById("P1.25").innerHTML =" || ";
                preclasssub3.attributes.getNamedItem("style").value =""
                document.getElementById("classsub1").innerHTML = "Ice Wizard";
                document.getElementById("classsub2").innerHTML = "Fire Wizard";
                document.getElementById("classsub3").innerHTML = "Necroman";
                prestart();
                Wizard_stats();
                stats_uppduate();
                HI1.attributes.getNamedItem("style").value="";
                document.getElementById("spellslots").innerHTML="spellslots: " + SpellSlots + "/" + max_spellslots+".";
                Class = "Wizard";
                document.getElementById("stats").style.display="";
                document.getElementById("headerbuttons").style.display="";
            }

            // this is wher the player selects the Fighter class.
function Fighter_select(){
                document.getElementById("P1").innerHTML ="Fighter";
                document.getElementById("P1.25").innerHTML =" || ";
                preclasssub3.attributes.getNamedItem("style").value ="";
                document.getElementById("classsub1").innerHTML = "Tank";
                document.getElementById("classsub2").innerHTML = "Barberian";
                document.getElementById("classsub3").innerHTML = "Archerer";
                prestart();
                Fighter_stats();
                stats_uppduate();
                HI1.attributes.getNamedItem("style").value="";
                Class = "Fighter";
                document.getElementById("stats").style.display="";
                document.getElementById("headerbuttons").style.display="";
            } 

function stats_uppduate() {   
 if (subclass=="Tank"){
    GraterArmer();
}
        document.getElementById("HP").innerHTML = "Max HP: " + MaxHP + " || " +"Curent HP: " + HP+".";
        document.getElementById("AC").innerHTML = "AC: " + Armer_Class +".";
        document.getElementById("Strength").innerHTML = "Strength: " + Strength +" || "+"Strength Mod: " +StrengthMod+".";
        document.getElementById("Dexterity").innerHTML = "Dexterity: " + Dexterity +" || "+"Dexterity Mod: " +DexterityMod+".";
        document.getElementById("Constitution").innerHTML = "Constitution: " + Constitution + " || "+"Constitution Mod: " +ConstitutionMod+".";
        document.getElementById("Wisdom").innerHTML = "Wisdom: " + Wisdom + " || "+"Wisdom Mod: " +WisdomMod+".";
        document.getElementById("Intelligence").innerHTML = "Intelligence: " + Intelligence + " || "+"Intelligence Mod: " +IntelligenceMod+".";
        document.getElementById("Charisma").innerHTML = "Charisma: " + Charisma + " || "+"Charisma Mod: " +CharismaMod+".";
        document.getElementById("XP").innerHTML = "XP: "+ XP +" / "+ XP_Requirements +".";
        document.getElementById("Level").innerHTML = "Level: "+ Level+"/600" + " || " + "+" + Skill_points + ".";
        document.getElementById("spellslots").innerHTML="spellslots: " + SpellSlots + "/" + max_spellslots+".";        
        }

function LevelUp() {
        if (XP >= XP_Requirements) {
            XP -= XP_Requirements;
            Skill_points += 1;         
            Level += 1;         
            XP_Requirements = 1000*(Level+1);
            if (Class=="Wizard"){
                HP = ConstitutionMod + (Level*8);
            }
            if (Class=="Fighter"){
                HP = ConstitutionMod + (Level*12);
            }             
            MaxHP = HP;        
        }
        stats_uppduate();
        }
function level_up_request(){
    if (leveluprequest == 1){
            if(Skill_points > 0)
            {  
            document.getElementById("B1").innerHTML= "Strength";
            document.getElementById("B2").innerHTML= "Dexterity";
            document.getElementById("B3").innerHTML= "Constitution";
            document.getElementById("B4").innerHTML= "Wisdom";
            document.getElementById("B5").innerHTML= "Intelligence";
            document.getElementById("B6").innerHTML= "Charisma";
            if (Strength==100) {
            document.getElementById("B1").innerHTML= "Strength is maxed";
            }
            if (Dexterity==100) {
                document.getElementById("B2").innerHTML= "Dexterity is maxed";
            }
            if (Constitution==100) {
                document.getElementById("B3").innerHTML= "Constitution is maxed";
            }
            if (Wisdom==100) {
                document.getElementById("B4").innerHTML= "Wisdom is maxed";
            }
            if (Intelligence==100) {
                document.getElementById("B5").innerHTML= "Intelligence is maxed";
            }
            if (Charisma==100) {
                document.getElementById("B6").innerHTML= "Charisma is maxed";
            }
            Level_Availability = 1;
            }else{
                alert("can not Level UP you need: " + (XP_Requirements-XP) +" XP to Level UP to Level "+ (Level+1)+".")
            }           
        } 
    }       
function Skill_points_main(){          
           if (Skill_points >=1){
            Skill_points -=1;}
           if(Skill_points == 0){ 
            document.getElementById("B1").innerHTML="tester 1";
            document.getElementById("B2").innerHTML="tester 2";
            document.getElementById("B3").innerHTML="tester 3";
            document.getElementById("B4").innerHTML="tester 4";
            document.getElementById("B5").innerHTML="tester 5";
            document.getElementById("B6").innerHTML="tester 6";
            stats_uppduate();
                Level_Availability = 0;
            }            
            stats_uppduate();
        }



function Strength_increase(){
    Strength += 1;
    Sub_SthrengthMod += 1;
    Skill_points_main();
    if (Sub_SthrengthMod == 2) {
    StrengthMod += 1; 
    Sub_SthrengthMod = 0;       
    }
    stats_uppduate();
}
function Dexterity_increase(){
    Dexterity += 1;
    Sub_DexterityMod += 1;
    Skill_points_main();
    if (Sub_DexterityMod == 2) {
        DexterityMod += 1; 
    Sub_DexterityMod = 0;       
    }
    stats_uppduate();
}
function Constitution_increase(){
    Constitution += 1;
    Sub_ConstitutionMod += 1;
    Skill_points_main();
    if (Sub_ConstitutionMod == 2) {
    ConstitutionMod += 1; 
    Sub_ConstitutionMod = 0;       
    }
    stats_uppduate();
}
function Wisdom_increase(){
    Wisdom += 1;
    Sub_WisdomMod += 1;
    Skill_points_main();
    if (Sub_WisdomMod == 2) {
        WisdomMod += 1; 
    Sub_WisdomMod = 0;       
    }
    stats_uppduate();
}
function Intelligence_increase(){
    Intelligence += 1;
    Sub_IntelligenceMod += 1;
    Skill_points_main();
    if (Sub_IntelligenceMod == 2) {
        IntelligenceMod += 1;
        Sub_IntelligenceMod = 0;        
    }
    stats_uppduate();
}
function Charisma_increase(){
    Charisma += 1;
    Sub_CharismaMod += 1;
    Skill_points_main();
    if (Sub_CharismaMod == 1) {
        CharismaMod += 1;
        Sub_CharismaMod = 0;         
    }
    stats_uppduate();
}  

function resting(){
    if(combat==false){
        if (Class=="Wizard"){
        HP = ConstitutionMod + (Level*8);
        MaxHP = HP;
        SpellSlots = max_spellslots;
    }
    if (Class=="Fighter"){
        HP = ConstitutionMod + (Level*12);
        MaxHP = HP;
        if (subclass=="Tank"){}
    }
 } 
    stats_uppduate();
}
//main Wizard class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Wizard_stats(){
        Strength = 8;
        Dexterity = 8; 
        Constitution = 8; 
        Intelligence = 12; 
        Wisdom = 12; 
        Charisma = 12;
        StrengthMod = 4;
        DexterityMod = 4;
        ConstitutionMod = 4;
        IntelligenceMod = 6;
        WisdomMod = 6;
        CharismaMod = 6;
        Other_Bonuses = 0;
        HP = ConstitutionMod + (Level*8); 
        MaxHP = ConstitutionMod + (Level*8);
        Armer_Class = 10 + (DexterityMod+Other_Bonuses); 
        Level = 1; 
        XP = 0;
        Gold = 0;
        XP_Requirements = 2000;
        Skill_points = 0;   
        SpellSlots = 10;
        max_spellslots = SpellSlots;
        document.getElementById("spellslotsshow").style.display="";
        document.getElementById("spellslots").innerHTML=SpellSlots;
        }        

    
        //this is whear i will maike the spells and all the math for the ice Wizard.
        


   
        //this is whear i will maike the spells and all the math for the Fire Wizard.

 
    
   
        //this is whear i will maike the spells and all the math for the necromanser Wizard.

        //main fighter class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Fighter_stats(){
        Strength = 12;
        Dexterity = 12; 
        Constitution = 12; 
        Intelligence = 8; 
        Wisdom = 8; 
        Charisma = 8;
        StrengthMod = 6;
        DexterityMod = 6;
        ConstitutionMod = 6;
        IntelligenceMod = 4;
        WisdomMod = 4;
        CharismaMod = 4;
        Other_Bonuses = 0;
        HP = ConstitutionMod + (Level*12); 
        MaxHP = ConstitutionMod + (Level*12);
        Armer_Class = 10 + (DexterityMod + Other_Bonuses); 
        Level = 1; 
        XP = 0;
        Gold = 0;
        XP_Requirements = 2000;
        Skill_points = 0;          
        }  
   
     
        //this is wear the stats and abiletys for the Tank sub-class for fighter.
        function Tank(){
            GraterArmer();
            stats_uppduate();
        }
        function GraterArmer(){
            Other_Bonuses = Math.floor(Constitution/12);
            Armer_Class = 10 + (DexterityMod + Other_Bonuses + Math.floor(ConstitutionMod / 4));            
        }
        // end of Tank sub class.
       
        //this is wear the stats and abiletys for the barberian sub-class for fighter.
        
        // end of barberian sub class.          
        
        //this is wear the stats and abiletys for the archerer sub-class for fighter.

        // end of archerer sub class.