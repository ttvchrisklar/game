let b1 = document.getElementById("B1");
let HI1 = document.getElementById("HI1");
let LUR = document.getElementById("LUR");
let classsub1 = document.getElementById("classsub1");
let classsub2 = document.getElementById("classsub2");
let classsub3= document.getElementById("classsub3");
let preclasssub3 = document.getElementById("preclasssub3");
let class_select1 = document.getElementById("class_select1");       
let XP_Requirements, Other_Bonuses, MaxHP, PClass, piercing, bludgeoning, slashing, fier, ice, nectotic ,SpellSlots, regain, healing, damige, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma, HP, Armer_Class, Action_Point, Level, XP, Gold, Level_Availability;
let StrengthMod, DexterityMod, ConstitutionMod, IntelligenceMod, WisdomMod, CharismaMod, Skill_points, Class, subclass;
let Sub_SthrengthMod =0, Sub_DexterityMod =0, Sub_ConstitutionMod =0, Sub_IntelligenceMod =0, Sub_WisdomMod =0, Sub_CharismaMod =0;
    Class = 0;
    subclass = 0;
function prestart(){
        Strength = 10;
        Dexterity = 10; 
        Constitution = 10; 
        Intelligence = 10; 
        Wisdom = 10; 
        Charisma = 10;
        HP = 10; //HP is also calcalated difrently for ech class for Fighter its, hp=conMOD+(Level*12) and for Wizerd, hp=conmod+(Level*8).
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
                {Intelligence += 1;            
                resetButtonone();}
            }           
            } 

            if (choice == 6) {
            if (Level_Availability == 1){
                if(Charisma==100)
                {}else
                {  
                Charisma += 1;             
                resetButtonone();}
                }
                }           
            

            if (choice ==24) {
                XP += 2000;
                stats_uppduate();
                LevelUp();                
            }

            if (choice == 25) {
                if (Class ==0) {
                Wizerd_select();
                return;
                }
                if (Class == 1) {
                document.getElementById("P1.5").innerHTML = " Ice";
                buttonremover()
                return;
                }
                if (Class == 2) {
                document.getElementById("P1.5").innerHTML = " Tank";
                buttonremover()
                return;
                }
            }

            if (choice == 26) {
            if (Class ==0) {
                Fighter_select();
                return;
            }
            if (Class == 1) {
                document.getElementById("P1.5").innerHTML = " Fire";
                buttonremover()
                return;
            }
            if (Class == 2) {
                document.getElementById("P1.5").innerHTML = " Barberian";
                buttonremover()
                return;                
            }
            }

            if (choice == 27) {
                if (Class == 1) {
                document.getElementById("P1.5").innerHTML = " Necromanser";
                buttonremover()
                return;
                }
                if (Class == 2) {
                document.getElementById("P1.5").innerHTML = " Archerer";
                buttonremover()
                return;
                }
            }
        }
function buttonremover() {
            class_select1.attributes.getNamedItem("style").value="display: none;";
        }
        //comenly used functions.
function Wizerd_select(){
                document.getElementById("P1").innerHTML ="Wizerd";
                document.getElementById("P1.25").innerHTML =" || ";
                preclasssub3.attributes.getNamedItem("style").value =""
                document.getElementById("classsub1").innerHTML = "Ice wizerd";
                document.getElementById("classsub2").innerHTML = "Fire wizerd";
                document.getElementById("classsub3").innerHTML = "Necromanser";
                prestart();
                Wizerd_stats();
                stats_uppduate();
                HI1.attributes.getNamedItem("style").value="";
                Class = 1;

            }
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
                Class = 2;

            }    
function stats_uppduate() {
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
        }

function LevelUp() {
        if (XP >= XP_Requirements) {
            XP -= XP_Requirements;
            Skill_points += 1;         
            Level += 1;         
            XP_Requirements = 1000*(Level+1);        
        }
        stats_uppduate();
        }
        
function level_up_request(){
            if(Skill_points >= 1)
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
                alert("can not Level UP you need: " + (XP_Requirements-XP) +" XP to Level UP")
            }           
        }        
function resetButtonone(){          
            Skill_points -= 1;
            if (Skill_points>=0) {
                Level_Availability = 0;
            document.getElementById("B1").innerHTML="tester 1";
            document.getElementById("B2").innerHTML="tester 2";
            document.getElementById("B3").innerHTML="tester 3";
            document.getElementById("B4").innerHTML="tester 4";
            document.getElementById("B5").innerHTML="tester 5";
            document.getElementById("B6").innerHTML="tester 6";
            }            
            stats_uppduate();
        }

function Strength_increase(){
    Strength += 1;
    Sub_SthrengthMod += 1;
    if (Sub_SthrengthMod == 2) {
    StrengthMod += 1; 
    Sub_SthrengthMod = 0;       
    }
    resetButtonone();
}
function Dexterity_increase(){
    Dexterity += 1;
    Sub_DexterityMod += 1;
    if (Sub_DexterityMod == 2) {
        DexterityMod += 1; 
    Sub_DexterityMod = 0;       
    }
    resetButtonone();
}
function Constitution_increase(){
    Constitution += 1;
    Sub_ConstitutionMod += 1;
    if (Sub_ConstitutionMod == 2) {
    ConstitutionMod += 1; 
    Sub_ConstitutionMod = 0;       
    }
    resetButtonone();
}
function Wisdom_increase(){
    Wisdom += 1;
    Sub_WisdomMod += 1;
    if (Sub_WisdomMod == 2) {
        WisdomMod += 1; 
    Sub_WisdomMod = 0;       
    }
    resetButtonone();
}
        
        //main Wizerd class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Wizerd_stats(){
        Strength = 8;
        Dexterity = 8; 
        Constitution = 8; 
        Intelligence = 12; 
        Wisdom = 12; 
        Charisma = 12;
        StrengthMod = 2;
        DexterityMod = 2;
        ConstitutionMod = 2;
        IntelligenceMod = 4;
        WisdomMod = 4;
        CharismaMod = 4;
        Other_Bonuses = 0;
        HP = ConstitutionMod + (Level*8); 
        MaxHP = ConstitutionMod + (Level*8);
        Armer_Class = 10 + (DexterityMod+Other_Bonuses); 
        Level = 1; 
        XP = 0;
        Gold = 0;
        XP_Requirements = 2000;
        Skill_points = 0;   
        }        


        //this is whear i will maike the spells and all the math for the ice wizerd.
        


   
        //this is whear i will maike the spells and all the math for the Fire wizerd.

 
    
   
        //this is whear i will maike the spells and all the math for the necromanser wizerd.

        //main fighter class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Fighter_stats(){
        Strength = 12;
        Dexterity = 12; 
        Constitution = 12; 
        Intelligence = 8; 
        Wisdom = 8; 
        Charisma = 8;
        StrengthMod = 3;
        DexterityMod = 3;
        ConstitutionMod = 3;
        IntelligenceMod = 2;
        WisdomMod = 2;
        CharismaMod = 2;
        Other_Bonuses = 0;
        HP = ConstitutionMod + (Level*12); 
        MaxHP = ConstitutionMod + (Level*12);
        Armer_Class = 10 + (DexterityMod+Other_Bonuses); 
        Level = 1; 
        XP = 0;
        Gold = 0;
        XP_Requirements = 2000;
        Skill_points = 0;          
        }  
   
     
        //this is wear the stats and abiletys for the tank sub-class for fighter.

 

        //this is wear the stats and abiletys for the barberian sub-class for fighter.

  

          
        //this is wear the stats and abiletys for the archerer sub-class for fighter.