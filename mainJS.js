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
    T_HP = document.getElementById("HP"),
    T_AC = document.getElementById("AC"),
    T_Strength = document.getElementById("Strength"),
    T_Dexterity = document.getElementById("Dexterity"),
    T_Constitution = document.getElementById("Constitution"),
    T_Wisdom = document.getElementById("Wisdom"),
    T_Intelligence = document.getElementById("Intelligence"),
    T_Charisma = document.getElementById("Charisma"),
    T_XP = document.getElementById("XP"),
    T_Level = document.getElementById("Level"),
    T_Spellslots = document.getElementById("spellslots"),
    spellslotsshow = document.getElementById("spellslotsshow");
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
var player;
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
function prestart() {}
//this is whar i do my button selections and other uppdate requests.
function selecter(presdButton) {
    console.log(presdButton.id);
    switch (presdButton.id) {
        case "LUR":
            player.leveluprequest = 1;
            player.level_up_request(player.leveluprequest);
            break;

        case "B1":
            if (player.Level_Availability == 1) {
                if (player.Strength != 100) {
                    player.Strength_increase();
                }
            }
            break;

        case "B2":
            if (player.Level_Availability == 1) {
                if (player.Dexterity != 100) {
                    player.Dexterity_increase();
                }
            }
            break;

        case "B3":
            if (player.Level_Availability == 1) {
                if (player.Constitution != 100) {
                } else {
                    player.Constitution_increase();
                }
            }
            break;

        case "B4":
            if (player.Level_Availability == 1) {
                if (player.Wisdom != 100) {
                    player.Wisdom_increase();
                }
            }
            break;

        case "B5":
            if (player.Level_Availability == 1) {
                if (player.Intelligence != 100) {
                    player.Intelligence_increase();
                }
            }

            break;

        case "B6":
            if (player.Level_Availability == 1) {
                if (player.Charisma != 100) {
                    player.Charisma_increase();
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
            player.XP += player.XP_Requirements;
            player.LevelUp();
            break;

        case "B25":
            break;

        case "B26":
            break;

        case "B27":
            break;

        case "B28":
            player.Damige_Taken(5);
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
            if (Class == undefined) {
                Wizard_select();
                return;
            }
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Ice";
                player = new Player("Ice_Wizard");
                player.stat_update();
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Tank";
                player = new Player("Tank");
                player.stat_update();
                buttonremover();
                return;
            }
            break;

        case "classsub2":
            if (Class == undefined) {
                Fighter_select();
                return;
            }
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Fire";
                player = new Player("Fire_Wizard");
                player.stat_update();
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Barberian";
                player = new Player("Barberian");
                player.stat_update();
                buttonremover();
                return;
            }
            break;

        case "classsub3":
            if (Class == "Wizard") {
                document.getElementById("P1.5").innerText = " Necromanser";
                player = new Player("Necromanser");
                player.stat_update();
                buttonremover();
                return;
            }
            if (Class == "Fighter") {
                document.getElementById("P1.5").innerText = " Weapons_Master";
                player = new Player("Weapons_Master");
                player.stat_update();
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
    classsub1.innerText = "Ice Wizard";
    classsub2.innerText = "Fire Wizard";
    classsub3.innerText = "Necromanser";
    spellslotsshow.style.display = "";
    HI1.style.display = "";
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
    HI1.attributes.getNamedItem("style").value = "";
    Class = "Fighter";
    document.getElementById("stats").style.display = "";
    document.getElementById("headerbuttons").style.display = "";
}
//combat system.

// enemys

// the end of the enemy script part
class Player {
    subclass;
    Strength;
    Dexterity;
    Constitution;
    Intelligence;
    Wisdom;
    Charisma;
    StrengthMod;
    DexterityMod;
    ConstitutionMod;
    IntelligenceMod;
    WisdomMod;
    CharismaMod;
    Other_Bonuses;
    HP; //HP is also calcalated difrently for ech class for Fighter its, hp=conMOD+(Level*12) and for Wizard, hp=conmod+(Level*8).
    MaxHP = this.HP;
    Armer_Class = 10 + this.Other_Bonuses; // Armer Class also konown as AC, AC is calculatecd diffrent its, AC=(10 + DexMOD + other boneses).
    Level = 1;
    XP = 0;
    Gold = 0;
    XP_Requirements = 2000;
    Skill_points = 0; //Skill_points = over Level.
    SpellSlots;
    max_spellslots;
    CanWearArmor;
    CanWealdShild;
    CanWealdWands;
    CanWealdroedes = true;
    Sub_SthrengthMod = 0;
    Sub_DexterityMod = 0;
    Sub_ConstitutionMod = 0;
    Sub_IntelligenceMod = 0;
    Sub_WisdomMod = 0;
    Sub_CharismaMod = 0;
    Level_Availability = 0;
    leveluprequest = 0;
    constructor(subclass) {
        this.subclass = subclass;
        switch (subclass) {
            case "Ice_Wizard":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 8;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 4;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Fire_Wizard":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 8;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 4;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Necromanser":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 8;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 4;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Tank":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 12;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 6;
                this.IntelligenceMod = 4;
                this.WisdomMod = 4;
                this.CharismaMod = 4;
                this.Other_Bonuses = Math.floor(this.ConstitutionMod / 2);
                this.HP = this.ConstitutionMod + this.Level * 12;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.DamigeResistens = 0;
                this.CanWealdWands = false;
                break;

            case "Barberian":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 12;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 6;
                this.IntelligenceMod = 4;
                this.WisdomMod = 4;
                this.CharismaMod = 4;
                this.Other_Bonuses = Math.floor(this.ConstitutionMod / 4);
                this.HP = this.ConstitutionMod + this.Level * 12;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.DamigeResistens = 2;
                this.CanWearArmor = false;
                this.CanWealdShild = true;
                this.CanWealdWands = false;
                break;

            case "Weapons_Master":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 12;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 6;
                this.IntelligenceMod = 4;
                this.WisdomMod = 4;
                this.CharismaMod = 4;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 12;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.DamigeResistens = 0;
                this.CanWealdWands = false;
                break;

            default:
                console.log("subclass not selected");
        }
    }
    stat_update() {
        T_HP.innerText = "Max HP: " + player.MaxHP + " || " + "Curent HP: " + player.HP + ".";
        T_AC.innerText = "AC: " + player.Armer_Class + ".";
        T_Strength.innerText = "Strength: " + player.Strength + " || " + "Strength Mod: " + player.StrengthMod + ".";
        T_Dexterity.innerText = "Dexterity: " + player.Dexterity + " || " + "Dexterity Mod: " + player.DexterityMod + ".";
        T_Constitution.innerText = "Constitution: " + player.Constitution + " || " + "Constitution Mod: " + player.ConstitutionMod + ".";
        T_Wisdom.innerText = "Wisdom: " + player.Wisdom + " || " + "Wisdom Mod: " + player.WisdomMod + ".";
        T_Intelligence.innerText = "Intelligence: " + player.Intelligence + " || " + "Intelligence Mod: " + player.IntelligenceMod + ".";
        T_Charisma.innerText = "Charisma: " + player.Charisma + " || " + "Charisma Mod: " + player.CharismaMod + ".";
        T_XP.innerText = "XP: " + player.XP + " / " + player.XP_Requirements + ".";
        T_Level.innerText = "Level: " + player.Level + " / 600" + " || " + "+" + player.Skill_points + ".";
        if ((Class = "Wizard")) {
            T_Spellslots.innerText = "spellslots: " + player.SpellSlots + "/" + player.max_spellslots + ".";
        }
        console.log("stat_update");
    }
    level_up_request(leveluprequest) {
        if (leveluprequest == 1) {
            if (player.Skill_points > 0) {
                B1.innerText = "Strength";
                B2.innerText = "Dexterity";
                B3.innerText = "Constitution";
                B4.innerText = "Wisdom";
                B5.innerText = "Intelligence";
                B6.innerText = "Charisma";
                if (player.Strength == 100) {
                    B1.innerText = "Strength is maxed";
                }
                if (player.Dexterity == 100) {
                    B2.innerText = "Dexterity is maxed";
                }
                if (player.Constitution == 100) {
                    B3.innerText = "Constitution is maxed";
                }
                if (player.Wisdom == 100) {
                    B4.innerText = "Wisdom is maxed";
                }
                if (player.Intelligence == 100) {
                    B5.innerText = "Intelligence is maxed";
                }
                if (player.Charisma == 100) {
                    B6.innerText = "Charisma is maxed";
                }
                player.Level_Availability = 1;
            } else {
                alert("can not Level UP you need: " + (player.XP_Requirements - player.XP) + " XP to Level UP to Level " + (player.Level + 1) + ".");
            }
        }
        console.log("level_up_request");
    }
    Skill_points_main() {
        if (player.Skill_points >= 1) {
            player.Skill_points -= 1;
        } else {
            B1.innerText = "tester 1";
            B2.innerText = "tester 2";
            B3.innerText = "tester 3";
            B4.innerText = "tester 4";
            B5.innerText = "tester 5";
            B6.innerText = "tester 6";
            player.Level_Availability = 0;
        }
        player.stat_update();
        console.log("Skill_points_main");
    }
    Strength_increase() {
        player.Strength += 1;
        player.Sub_SthrengthMod += 1;
        if (player.Sub_SthrengthMod == 2) {
            player.StrengthMod += 1;
            player.Sub_SthrengthMod = 0;
        }
        player.Skill_points_main();
        console.log("Strength_increase");
    }
    Dexterity_increase() {
        player.Dexterity += 1;
        player.Sub_DexterityMod += 1;
        if (player.Sub_DexterityMod == 2) {
            player.DexterityMod += 1;
            player.Sub_DexterityMod = 0;
        }
        player.Skill_points_main();
        console.log("Dexterity_increase");
    }
    Constitution_increase() {
        player.Constitution += 1;
        player.Sub_ConstitutionMod += 1;
        if (player.Sub_ConstitutionMod == 2) {
            player.ConstitutionMod += 1;
            player.Sub_ConstitutionMod = 0;
        }
        player.Skill_points_main();
        console.log("Constitution_increase");
    }
    Wisdom_increase() {
        player.Wisdom += 1;
        player.Sub_WisdomMod += 1;
        if (player.Sub_WisdomMod == 2) {
            player.WisdomMod += 1;
            player.Sub_WisdomMod = 0;
        }
        player.Skill_points_main();
        console.log("Wisdom_increase");
    }
    Intelligence_increase() {
        player.Intelligence += 1;
        player.Sub_IntelligenceMod += 1;
        if (player.Sub_IntelligenceMod == 2) {
            player.IntelligenceMod += 1;
            player.Sub_IntelligenceMod = 0;
        }
        player.Skill_points_main();
        console.log("Intelligence_increase");
    }
    Charisma_increase() {
        player.Charisma += 1;
        player.Sub_CharismaMod += 1;
        if (player.Sub_CharismaMod == 1) {
            player.CharismaMod += 1;
            player.Sub_CharismaMod = 0;
        }
        player.Skill_points_main();
        console.log("Charisma_increase");
    }
    LevelUp() {
        if (player.XP >= player.XP_Requirements) {
            player.XP -= player.XP_Requirements;
            player.Skill_points += 1;
            player.Level += 1;
            player.XP_Requirements = 1000 * (player.Level + 1);
            if (Class == "Wizard") {
                player.HP = player.ConstitutionMod + player.Level * 8;
            }
            if (Class == "Fighter") {
                player.HP = player.ConstitutionMod + player.Level * 12;
            }
            player.MaxHP = player.HP;
        }
        player.stat_update();
        console.log("LevelUp");
    }
    Damige_Taken(damige) {
        if (player.DamigeResistens == 0) {
            player.HP -= damige;
            console.log(player.HP, damige);
        }
        if (player.DamigeResistens < 0) {
            player.HP += Math.floor(damige * player.DamigeResistens);
            console.log(Math.floor(damige * player.DamigeResistens));
        }
        if (DamigeResistens > 0) {
            player.HP -= Math.floor(damige / player.DamigeResistens);
            console.log(Math.floor(damige / player.DamigeResistens));
        }
        if (player.HP <= 0) {
            player.HP = 0;
            document.getElementById("headerbuttons").style = "display: none;";
            document.getElementById("stats").style = "display: none;";
            document.getElementById("P0").style = "display: none;";
            document.getElementById("H1").style = "display: none;";
            document.getElementById("div1").innerHTML = `${death}`;
        }
        player.stat_update();
        console.log("Damige_Taken");
    }
    resting() {
        if (combat == false) {
            if (Class == "Wizard") {
                player.HP = player.MaxHP;
                player.SpellSlots = player.max_spellslots;
            }
            if (Class == "Fighter") {
                player.HP = player.MaxHP;
            }
            player.LevelUp();
        }
        stat_update();
        console.log("resting");
    }
}
