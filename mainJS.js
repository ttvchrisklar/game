const Stats = document.getElementById("stats"),
    HI1 = document.getElementById("HI1"),
    LUR = document.getElementById("LUR"),
    classsub1 = document.getElementById("classsub1"),
    classsub2 = document.getElementById("classsub2"),
    classsub3 = document.getElementById("classsub3"),
    preclasssub3 = document.getElementById("preclasssub3"),
    class_select1 = document.getElementById("class_select1"),
    B1 = document.getElementById("B1"),
    B2 = document.getElementById("B2"),
    B3 = document.getElementById("B3"),
    B4 = document.getElementById("B4"),
    B5 = document.getElementById("B5"),
    B6 = document.getElementById("B6"),
    death = '<p style="color: red; font-size: 200px;text-align: center;">you died! <br> ;(<br> <button class="button" onclick="setscreen()">get revived</button></p>';
let XP_Requirements,
    Other_Bonuses,
    MaxHP,
    piercing,
    bludgeoning,
    slashing,
    fire,
    ice,
    nectotic,
    SpellSlots,
    regain,
    healing,
    damige,
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma,
    HP,
    Armer_Class,
    Action_Point,
    Level,
    XP,
    Gold,
    Level_Availability,
    StrengthMod,
    DexterityMod,
    ConstitutionMod,
    IntelligenceMod,
    WisdomMod,
    CharismaMod,
    Skill_points,
    Class,
    subclass,
    Sub_SthrengthMod = 0,
    Sub_DexterityMod = 0,
    Sub_ConstitutionMod = 0,
    Sub_IntelligenceMod = 0,
    Sub_WisdomMod = 0,
    Sub_CharismaMod = 0,
    max_spellslots,
    leveluprequest = 0,
    canrest = false,
    DamigeResistens,
    CanWearArmor,
    CanWealdShild,
    damige_type,
    turn;
(Class = "undefined"), (subclass = "undefined"), (combat = false);
//into cean
function introdone() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("class_select1").style.display = "";
}
function setscreen() {
    document.getElementById("headerbuttons").style = "";
    document.getElementById("stats").style = "";
    document.getElementById("P0").style = "";
    document.getElementById("H1").style = "";
    document.getElementById("div1").innerHTML = "";
    resting();
}
//if the stats arnt seet
function prestart() {
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
    StrengthMod = 1;
    DexterityMod = 1;
    ConstitutionMod = 1;
    IntelligenceMod = 1;
    WisdomMod = 1;
    CharismaMod = 1;
}
//this is whar i do my button selections and other uppdate requests.
function selecter(presdButton) {
    console.log(presdButton.id);
    switch (presdButton.id) {
        case "LUR":
            leveluprequest = 1;
            level_up_request();
            break;

        case "B1":
            if (Level_Availability == 1) {
                if (Strength != 100) {
                    Strength_increase();
                }
            }
            break;

        case "B2":
            if (Level_Availability == 1) {
                if (Dexterity != 100) {
                    Dexterity_increase();
                }
            }
            break;

        case "B3":
            if (Level_Availability == 1) {
                if (Constitution != 100) {
                } else {
                    Constitution_increase();
                }
            }
            break;

        case "B4":
            if (Level_Availability == 1) {
                if (Wisdom != 100) {
                    Wisdom_increase();
                }
            }
            break;

        case "B5":
            if (Level_Availability == 1) {
                if (Intelligence != 100) {
                    Intelligence_increase();
                }
            }

            break;

        case "B6":
            if (Level_Availability == 1) {
                if (Charisma != 100) {
                    Charisma_increase();
                }
            }
            break;

        case "B7":
            if (canrest == true) {
                resting();
            }
            break;

        case "B8":
            break;

        case "B9":
            break;

        case "B10":
            break;

        case "B11":
            break;

        case "B12":
            break;

        case "B13":
            break;

        case "B14":
            break;

        case "B15":
            break;

        case "B16":
            break;

        case "B17":
            break;

        case "B18":
            break;

        case "B19":
            break;

        case "B20":
            break;

        case "B21":
            break;

        case "B22":
            break;

        case "B23":
            break;

        case "B24":
            XP += XP_Requirements;
            stats_uppduate();
            LevelUp();
            break;

        case "B25":
            break;

        case "B26":
            break;

        case "B27":
            break;

        case "B28":
            Damige_Taken(5);
            break;

        case "B29":
            break;

        case "B30":
            break;

        case "B31":
            break;

        case "B32":
            break;

        case "B33":
            break;

        case "B34":
            break;

        case "B35":
            break;

        case "B36":
            break;

        case "B37":
            break;

        case "classsub1":
            if (Class == "undefined") {
                Wizard_select();
                return;
            }
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Ice";
                subclass = "Ice_Wizard";
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Tank";
                subclass = "Tank";
                tank();
                buttonremover();
                return;
            }
            break;

        case "classsub2":
            if (Class == "undefined") {
                Fighter_select();
                return;
            }
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Fire";
                subclass = "Fire_Wizard";
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Barberian";
                subclass = "Barberian";
                barberian();
                buttonremover();
                return;
            }
            break;

        case "classsub3":
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Necromanser";
                subclass = "Necromanser";
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Archerer";
                subclass = "Archerer";
                buttonremover();
                return;
            }
            break;

        default:
            console.log("not a diffind button", presdButton.id);
    }
}
function buttonremover() {
    class_select1.attributes.getNamedItem("style").value = "display: none;";
}
//comenly used functions.

// this is wher theplayer selects the Wizard class.
function Wizard_select() {
    document.getElementById("P1").innerText = "Wizard";
    document.getElementById("P1.25").innerText = " || ";
    preclasssub3.attributes.getNamedItem("style").value = "";
    document.getElementById("classsub1").innerText = "Ice Wizard";
    document.getElementById("classsub2").innerText = "Fire Wizard";
    document.getElementById("classsub3").innerText = "Necromanser";
    prestart();
    Wizard_stats();
    stats_uppduate();
    HI1.attributes.getNamedItem("style").value = "";
    document.getElementById("spellslots").innerText = "spellslots: " + SpellSlots + "/" + max_spellslots + ".";
    Class = "Wizard";
    document.getElementById("stats").style.display = "";
    document.getElementById("headerbuttons").style.display = "";
}

// this is wher the player selects the Fighter class.
function Fighter_select() {
    document.getElementById("P1").innerText = "Fighter";
    document.getElementById("P1.25").innerText = " || ";
    preclasssub3.attributes.getNamedItem("style").value = "";
    document.getElementById("classsub1").innerText = "Tank";
    document.getElementById("classsub2").innerText = "Barberian";
    document.getElementById("classsub3").innerText = "Archerer";
    prestart();
    Fighter_stats();
    stats_uppduate();
    HI1.attributes.getNamedItem("style").value = "";
    Class = "Fighter";
    document.getElementById("stats").style.display = "";
    document.getElementById("headerbuttons").style.display = "";
}

function stats_uppduate() {
    switch (subclass) {
        case "Tank":
            tank();
            break;
        case "barberian":
            barberian();
            break;
    }
    document.getElementById("HP").innerText = "Max HP: " + MaxHP + " || " + "Curent HP: " + HP + ".";
    document.getElementById("AC").innerText = "AC: " + Armer_Class + ".";
    document.getElementById("Strength").innerText = "Strength: " + Strength + " || " + "Strength Mod: " + StrengthMod + ".";
    document.getElementById("Dexterity").innerText = "Dexterity: " + Dexterity + " || " + "Dexterity Mod: " + DexterityMod + ".";
    document.getElementById("Constitution").innerText = "Constitution: " + Constitution + " || " + "Constitution Mod: " + ConstitutionMod + ".";
    document.getElementById("Wisdom").innerText = "Wisdom: " + Wisdom + " || " + "Wisdom Mod: " + WisdomMod + ".";
    document.getElementById("Intelligence").innerText = "Intelligence: " + Intelligence + " || " + "Intelligence Mod: " + IntelligenceMod + ".";
    document.getElementById("Charisma").innerText = "Charisma: " + Charisma + " || " + "Charisma Mod: " + CharismaMod + ".";
    document.getElementById("XP").innerText = "XP: " + XP + " / " + XP_Requirements + ".";
    document.getElementById("Level").innerText = "Level: " + Level + " / 600" + " || " + "+" + Skill_points + ".";
    document.getElementById("spellslots").innerText = "spellslots: " + SpellSlots + "/" + max_spellslots + ".";
}

function LevelUp() {
    if (XP >= XP_Requirements) {
        XP -= XP_Requirements;
        Skill_points += 1;
        Level += 1;
        XP_Requirements = 1000 * (Level + 1);
        if (Class == "Wizard") {
            HP = ConstitutionMod + Level * 8;
        }
        if (Class == "Fighter") {
            HP = ConstitutionMod + Level * 12;
        }
        MaxHP = HP;
    }
    stats_uppduate();
}
function level_up_request() {
    if (leveluprequest == 1) {
        if (Skill_points > 0) {
            B1.innerText = "Strength";
            B2.innerText = "Dexterity";
            B3.innerText = "Constitution";
            B4.innerText = "Wisdom";
            B5.innerText = "Intelligence";
            B6.innerText = "Charisma";
            if (Strength == 100) {
                B1.innerText = "Strength is maxed";
            }
            if (Dexterity == 100) {
                B2.innerText = "Dexterity is maxed";
            }
            if (Constitution == 100) {
                B3.innerText = "Constitution is maxed";
            }
            if (Wisdom == 100) {
                B4.innerText = "Wisdom is maxed";
            }
            if (Intelligence == 100) {
                B5.innerText = "Intelligence is maxed";
            }
            if (Charisma == 100) {
                B6.innerText = "Charisma is maxed";
            }
            Level_Availability = 1;
        } else {
            alert("can not Level UP you need: " + (XP_Requirements - XP) + " XP to Level UP to Level " + (Level + 1) + ".");
        }
    }
}
function Skill_points_main() {
    if (Skill_points >= 1) {
        Skill_points -= 1;
    } else {
        B1.innerText = "tester 1";
        B2.innerText = "tester 2";
        B3.innerText = "tester 3";
        B4.innerText = "tester 4";
        B5.innerText = "tester 5";
        B6.innerText = "tester 6";
        Level_Availability = 0;
    }
    stats_uppduate();
}

function Strength_increase() {
    Strength += 1;
    Sub_SthrengthMod += 1;
    Skill_points_main();
    if (Sub_SthrengthMod == 2) {
        StrengthMod += 1;
        Sub_SthrengthMod = 0;
    }
    stats_uppduate();
}
function Dexterity_increase() {
    Dexterity += 1;
    Sub_DexterityMod += 1;
    Skill_points_main();
    if (Sub_DexterityMod == 2) {
        DexterityMod += 1;
        Sub_DexterityMod = 0;
    }
    stats_uppduate();
}
function Constitution_increase() {
    Constitution += 1;
    Sub_ConstitutionMod += 1;
    Skill_points_main();
    if (Sub_ConstitutionMod == 2) {
        ConstitutionMod += 1;
        Sub_ConstitutionMod = 0;
    }
    stats_uppduate();
}
function Wisdom_increase() {
    Wisdom += 1;
    Sub_WisdomMod += 1;
    Skill_points_main();
    if (Sub_WisdomMod == 2) {
        WisdomMod += 1;
        Sub_WisdomMod = 0;
    }
    stats_uppduate();
}
function Intelligence_increase() {
    Intelligence += 1;
    Sub_IntelligenceMod += 1;
    Skill_points_main();
    if (Sub_IntelligenceMod == 2) {
        IntelligenceMod += 1;
        Sub_IntelligenceMod = 0;
    }
    stats_uppduate();
}
function Charisma_increase() {
    Charisma += 1;
    Sub_CharismaMod += 1;
    Skill_points_main();
    if (Sub_CharismaMod == 1) {
        CharismaMod += 1;
        Sub_CharismaMod = 0;
    }
    stats_uppduate();
}

function resting() {
    if (combat == false) {
        if (Class == "Wizard") {
            HP = MaxHP;
            SpellSlots = max_spellslots;
        }
        if (Class == "Fighter") {
            HP = MaxHP;
        }
    }
    stats_uppduate();
}

function Damige_Taken(Edamige) {
    if (DamigeResistens == 0) {
        HP -= Edamige;
        console.log(HP, Edamige);
    }
    if (DamigeResistens < 0) {
        HP += Math.floor(Edamige * DamigeResistens);
        console.log(Math.floor(Edamige * DamigeResistens));
    }
    if (DamigeResistens > 0) {
        HP -= Math.floor(Edamige / DamigeResistens);
        console.log(Math.floor(Edamige / DamigeResistens));
    }
    if (HP <= 0) {
        HP = 0;
        document.getElementById("headerbuttons").style = "display: none;";
        document.getElementById("stats").style = "display: none;";
        document.getElementById("P0").style = "display: none;";
        document.getElementById("H1").style = "display: none;";
        document.getElementById("div1").innerHTML = `${death}`;
    }
    stats_uppduate();
}
//main Wizard class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Wizard_stats() {
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
    HP = ConstitutionMod + Level * 8;
    MaxHP = ConstitutionMod + Level * 8;
    Armer_Class = 10 + (DexterityMod + Other_Bonuses);
    Level = 1;
    XP = 0;
    Gold = 0;
    XP_Requirements = 2000;
    Skill_points = 0;
    SpellSlots = 10;
    max_spellslots = SpellSlots;
    document.getElementById("spellslotsshow").style.display = "";
    document.getElementById("spellslots").innerText = SpellSlots;
    DamigeResistens = 0;
    CanWealdShild = false;
}

//this is whear i will maike the spells and all the math for the ice Wizard.

//this is whear i will maike the spells and all the math for the Fire Wizard.

//this is whear i will maike the spells and all the math for the necromanser Wizard.

//main fighter class this is wear ewrything is going to be colectet for the sub-class and other starts.

function Fighter_stats() {
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
    HP = ConstitutionMod + Level * 12;
    MaxHP = ConstitutionMod + Level * 12;
    Armer_Class = 10 + (DexterityMod + Other_Bonuses);
    Level = 1;
    XP = 0;
    Gold = 0;
    XP_Requirements = 2000;
    Skill_points = 0;
    DamigeResistens = 0;
}

//this is wear the stats and abiletys for the Tank sub-class for fighter.
function tank() {
    GraterArmer();
}
function GraterArmer() {
    Other_Bonuses = Math.floor(ConstitutionMod / 2);
    Armer_Class = 10 + (DexterityMod + Other_Bonuses);
}
// end of Tank sub class.

//this is wear the stats and abiletys for the barberian sub-class for fighter.
//thay cant ware armer but can wild a shild
function barberian() {
    graterresilions();
}
function graterresilions() {
    DamigeResistens = 2;
    Other_Bonuses = Math.floor(ConstitutionMod / 4);
    Armer_Class = 10 + (DexterityMod + Other_Bonuses);
    CanWearArmor = false;
    CanWealdShild = true;
    console.log(Other_Bonuses, Armer_Class);
}
// end of barberian sub class.

//this is wear the stats and abiletys for the archerer sub-class for fighter.

// end of archerer sub class.

//combat system.

// enemys

// the end of the enemy script part
