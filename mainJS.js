const player_stats = document.getElementById("player_stats"),
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
    game_area = document.getElementById("game_area"),
    headerbuttons = document.getElementById("headerbuttons"),
    P0 = document.getElementById("P0"),
    P1 = document.getElementById("P1"),
    P2 = document.getElementById("P2"),
    P3 = document.getElementById("P3"),
    intro = document.getElementById("intro"),
    H1 = document.getElementById("H1"),
    stats = document.getElementById("stats"),
    choics_aria = document.getElementById("choics_aria");
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
    turn;
var player,
    Enemy = [];
//into cean
function introdone() {
    intro.style.display = "none";
    game_area.style.display = "";
    choics_aria.style.display = "";
    setscreen();
    choics_aria.innerHTML = `<p id="ClassMaster1"> || <button id="classsub1" class="button" onclick="selecter(this)">Wizard</button> || <button id="classsub2" class="button" onclick="selecter(this)">Figther</button> ||</p>`;
}
function setscreen() {
    headerbuttons.style = "";
    P0.style = "";
    H1.style = "";
    stats.style = "";
    game_area.innerHTML = ``;
    choics_aria.innerHTML = ``;
}
//if the stats arnt seet
//this is whar i do my button selections and other uppdate requests.
function selecter(presdButton) {
    console.log(presdButton.id);
    switch (presdButton.id) {
        case "LUR":
            leveluprequest = 1;
            player.level_up_request();
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
            console.log(player.HP);
            break;

        case "B28":
            player.Damige_Taken(100);
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
                P3.innerText = " Ice";
                player = new Player_Class("Ice_Wizard");
                player.stat_update();
                return;
            }
            if (Class == "Fighter") {
                P3.innerText.innerText = " Tank";
                player = new Player_Class("Tank");
                player.stat_update();
                return;
            }
            break;

        case "classsub2":
            if (Class == undefined) {
                Fighter_select();
                return;
            }
            if (Class == "Wizard") {
                P3.innerText.innerText = " Fire";
                player = new Player_Class("Fire_Wizard");
                player.stat_update();
                return;
            }
            if (Class == "Fighter") {
                P3.innerText.innerText = " Barberian";
                player = new Player_Class("Barberian");
                player.stat_update();
                return;
            }
            break;

        case "classsub3":
            if (Class == "Wizard") {
                P3.innerText.innerText = " Necromanser";
                player = new Player_Class("Necromanser");
                player.stat_update();
                return;
            }
            if (Class == "Fighter") {
                P3.innerText.innerText = " Weapons Master";
                player = new Player_Class("Weapons_Master");
                player.stat_update();
                return;
            }
            break;

        default:
            console.log("not a diffind button", presdButton.id);
    }
}

//comenly used functions.

// this is wher theplayer selects the Wizard class.
function Wizard_select() {
    P1.innerText = "Wizard";
    P2.innerText = " || ";
    choics_aria.innerHTML = `<p id="ClassMaster1"> || <button id="classsub1" class="button" onclick="selecter(this)">Ice Wizard</button> || <button id="classsub2" class="button" onclick="selecter(this)">Fire Wizard</button> || <button id="classsub3" class="button" onclick="selecter(this)">Necromanser</button>||
</p>`;
    spellslotsshow.style.display = "";
    HI1.style.display = "";
    Class = "Wizard";
}

// this is wher the player selects the Fighter class.
function Fighter_select() {
    P1.innerText = "Fighter";
    P2.innerText = " || ";
    choics_aria.innerHTML = `<p id="ClassMaster1"> || <button id="classsub1" class="button" onclick="selecter(this)">Tank</button> || <button id="classsub2" class="button" onclick="selecter(this)">Barberian</button> || <button id="classsub3" class="button" onclick="selecter(this)">Weapons Master</button>||
    </p>`;
    HI1.style.display = "";
    Class = "Fighter";
}
//combat system.

console.log("mainJS.js loaded");
