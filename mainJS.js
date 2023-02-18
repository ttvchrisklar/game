console.log("mainJS.js loaded");
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
    spellslotsshow = document.getElementById("spellslotsshow"),
    div1 = document.getElementById("div1"),
    headerbuttons = document.getElementById("headerbuttons"),
    P0 = document.getElementById("P0"),
    intro = document.getElementById("intro"),
    H1 = document.getElementById("H1");
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
    turn,
    death = '<p style="color: red; font-size: 200px;text-align: center;">you died! <br> ;(<br> <button class="button" onclick="setscreen()">get revived</button></p>';
var player;
//into cean
function introdone() {
    intro.style.display = "none";
    class_select1.style.display = "";
}
function setscreen() {
    headerbuttons.style = "";
    Stats.style = "";
    P0.style = "";
    H1.style = "";
    div1.innerHTML = "";
}
//if the stats arnt seet
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
                player.resting();
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
            player.Damige_Taken(1);
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
                document.getElementById("P1.5").innerText = " Weapons Master";
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
}

// this is wher the player selects the Fighter class.
function Fighter_select() {
    document.getElementById("P1").innerText = "Fighter";
    document.getElementById("P1.25").innerText = " || ";
    preclasssub3.attributes.getNamedItem("style").value = "";
    classsub1.innerText = "Tank";
    classsub2.innerText = "Barberian";
    classsub3.innerText = "Weapons Master";
    HI1.attributes.getNamedItem("style").value = "";
    Class = "Fighter";
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
    DamigeResistens = 0;
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
                break;
        }
        setscreen();
    }
    stat_update() {
        T_HP.innerText = "Max HP: " + this.MaxHP + " || " + "Curent HP: " + this.HP + ".";
        T_AC.innerText = "AC: " + this.Armer_Class + ".";
        T_Strength.innerText = "Strength: " + this.Strength + " || " + "Strength Mod: " + this.StrengthMod + ".";
        T_Dexterity.innerText = "Dexterity: " + this.Dexterity + " || " + "Dexterity Mod: " + this.DexterityMod + ".";
        T_Constitution.innerText = "Constitution: " + this.Constitution + " || " + "Constitution Mod: " + this.ConstitutionMod + ".";
        T_Wisdom.innerText = "Wisdom: " + this.Wisdom + " || " + "Wisdom Mod: " + this.WisdomMod + ".";
        T_Intelligence.innerText = "Intelligence: " + this.Intelligence + " || " + "Intelligence Mod: " + this.IntelligenceMod + ".";
        T_Charisma.innerText = "Charisma: " + this.Charisma + " || " + "Charisma Mod: " + player.CharismaMod + ".";
        T_XP.innerText = "XP: " + this.XP + " / " + this.XP_Requirements + ".";
        T_Level.innerText = "Level: " + this.Level + " / 600" + " || " + "+" + this.Skill_points + ".";
        if ((Class = "Wizard")) {
            T_Spellslots.innerText = "spellslots: " + this.SpellSlots + "/" + this.max_spellslots + ".";
        }
        console.log("stat_update");
    }
    level_up_request(leveluprequest) {
        if (leveluprequest == 1) {
            if (this.Skill_points > 0) {
                B1.innerText = "Strength";
                B2.innerText = "Dexterity";
                B3.innerText = "Constitution";
                B4.innerText = "Wisdom";
                B5.innerText = "Intelligence";
                B6.innerText = "Charisma";
                if (this.Strength == 100) {
                    B1.innerText = "Strength is maxed";
                }
                if (this.Dexterity == 100) {
                    B2.innerText = "Dexterity is maxed";
                }
                if (this.Constitution == 100) {
                    B3.innerText = "Constitution is maxed";
                }
                if (this.Wisdom == 100) {
                    B4.innerText = "Wisdom is maxed";
                }
                if (this.Intelligence == 100) {
                    B5.innerText = "Intelligence is maxed";
                }
                if (this.Charisma == 100) {
                    B6.innerText = "Charisma is maxed";
                }
                player.Level_Availability = 1;
            } else {
                alert("can not Level UP you need: " + (this.XP_Requirements - this.XP) + " XP to Level UP to Level " + (this.Level + 1) + ".");
            }
        }
        console.log("level_up_request");
    }
    Skill_points_main() {
        if (this.Skill_points >= 1) {
            this.Skill_points -= 1;
        } else {
            B1.innerText = "tester 1";
            B2.innerText = "tester 2";
            B3.innerText = "tester 3";
            B4.innerText = "tester 4";
            B5.innerText = "tester 5";
            B6.innerText = "tester 6";
            this.Level_Availability = 0;
        }
        player.stat_update();
        console.log("Skill_points_main");
    }
    Strength_increase() {
        this.Strength += 1;
        this.Sub_SthrengthMod += 1;
        if (this.Sub_SthrengthMod == 2) {
            this.StrengthMod += 1;
            this.Sub_SthrengthMod = 0;
        }
        player.Skill_points_main();
        console.log("Strength_increase");
    }
    Dexterity_increase() {
        this.Dexterity += 1;
        this.Sub_DexterityMod += 1;
        if (this.Sub_DexterityMod == 2) {
            this.DexterityMod += 1;
            this.Sub_DexterityMod = 0;
        }
        player.Skill_points_main();
        console.log("Dexterity_increase");
    }
    Constitution_increase() {
        this.Constitution += 1;
        this.Sub_ConstitutionMod += 1;
        if (this.Sub_ConstitutionMod == 2) {
            this.ConstitutionMod += 1;
            this.Sub_ConstitutionMod = 0;
        }
        player.Skill_points_main();
        console.log("Constitution_increase");
    }
    Wisdom_increase() {
        this.Wisdom += 1;
        this.Sub_WisdomMod += 1;
        if (this.Sub_WisdomMod == 2) {
            this.WisdomMod += 1;
            this.Sub_WisdomMod = 0;
        }
        player.Skill_points_main();
        console.log("Wisdom_increase");
    }
    Intelligence_increase() {
        this.Intelligence += 1;
        this.Sub_IntelligenceMod += 1;
        if (this.Sub_IntelligenceMod == 2) {
            this.IntelligenceMod += 1;
            this.Sub_IntelligenceMod = 0;
        }
        player.Skill_points_main();
        console.log("Intelligence_increase");
    }
    Charisma_increase() {
        this.Charisma += 1;
        this.Sub_CharismaMod += 1;
        if (this.Sub_CharismaMod == 1) {
            this.CharismaMod += 1;
            this.Sub_CharismaMod = 0;
        }
        player.Skill_points_main();
        console.log("Charisma_increase");
    }
    LevelUp() {
        if (this.XP >= this.XP_Requirements) {
            this.XP -= this.XP_Requirements;
            this.Skill_points += 1;
            this.Level += 1;
            this.XP_Requirements = 1000 * (this.Level + 1);
            if (Class == "Wizard") {
                this.HP = this.ConstitutionMod + this.Level * 8;
            }
            if (Class == "Fighter") {
                this.HP = this.ConstitutionMod + this.Level * 12;
            }
            this.MaxHP = this.HP;
        }
        player.stat_update();
        console.log("LevelUp");
    }
    Damige_Taken(damige) {
        console.log(damige);
        if (this.DamigeResistens == 0) {
            this.HP -= damige;
            console.log(this.HP, damige);
        }
        if (this.DamigeResistens < 0) {
            this.HP += Math.floor(damige * this.DamigeResistens);
            console.log(Math.floor(damige * this.DamigeResistens));
        }
        if (this.DamigeResistens > 0) {
            this.HP -= Math.floor(damige / this.DamigeResistens);
            console.log(Math.floor(damige / this.DamigeResistens));
        }
        if (this.HP <= 0) {
            this.HP = 0;
            document.getElementById("headerbuttons").style = "display: none;";
            document.getElementById("stats").style = "display: none;";
            document.getElementById("P0").style = "display: none;";
            document.getElementById("H1").style = "display: none;";
            document.getElementById("div1").innerHTML = `${death}`;
        }
        player.stat_update();
        console.log("Damige_Taken", player.HP);
    }
    resting() {
        if (combat == false) {
            if (Class == "Wizard") {
                this.HP = this.MaxHP;
                this.SpellSlots = this.max_spellslots;
            }
            if (Class == "Fighter") {
                this.HP = this.MaxHP;
            }
            player.LevelUp();
        }
        stat_update();
        console.log("resting");
    }
}
