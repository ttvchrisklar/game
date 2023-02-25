//all of my variabals
const T_difficulty = document.getElementById("difficulty"),
    player_stats = document.getElementById("player_stats"),
    hI1 = document.getElementById("HI1"),
    LUR = document.getElementById("LUR"),
    classsub1 = document.getElementById("classsub1"),
    classsub2 = document.getElementById("classsub2"),
    classsub3 = document.getElementById("classsub3"),
    preclasssub3 = document.getElementById("preclasssub3"),
    class_select1 = document.getElementById("class_select1"),
    b1 = document.getElementById("B1"),
    b2 = document.getElementById("B2"),
    b3 = document.getElementById("B3"),
    b4 = document.getElementById("B4"),
    b5 = document.getElementById("B5"),
    b6 = document.getElementById("B6"),
    t_hp = document.getElementById("HP"),
    t_ac = document.getElementById("AC"),
    t_strength = document.getElementById("Strength"),
    t_dexterity = document.getElementById("Dexterity"),
    t_constitution = document.getElementById("Constitution"),
    t_wisdom = document.getElementById("Wisdom"),
    t_intelligence = document.getElementById("Intelligence"),
    t_charisma = document.getElementById("Charisma"),
    t_xp = document.getElementById("XP"),
    t_level = document.getElementById("Level"),
    t_spellslots = document.getElementById("spellslots"),
    game_area = document.getElementById("game_area"),
    headerbuttons = document.getElementById("headerbuttons"),
    p0 = document.getElementById("P0"),
    p1 = document.getElementById("P1"),
    p2 = document.getElementById("P2"),
    p3 = document.getElementById("P3"),
    intro = document.getElementById("intro"),
    h1 = document.getElementById("H1"),
    stats = document.getElementById("stats"),
    choics_aria = document.getElementById("choics_aria"),
    stat_numbs = document.getElementById("stat_numbs"),
    enemy_stats = document.getElementById("enemy_stats"),
    game_screen = document.getElementById("game_screen"),
    mony = document.getElementById("mony"),
    difficulty_text = document.getElementById("difficulty_text");
let total_deat,
    Class,
    subclass,
    leveluprequest = 0,
    canrest = false,
    difficulty_mod;
var player,
    Enemy = [];
var enemiesInRoom = [];
var newEnemy;
//into sequens
function introdone() {
    intro.style.display = "none";
    setscreen(false);
    game_screen.style.display = "";
    choics_aria.style.display = "";
    game_area.innerHTML = ` `;
}
// this sets my screen and if the intro isnt done it will send a request to game start to set tehr
// screen so the player can select ther class
function setscreen(introdone) {
    switch (introdone) {
        case false:
            headerbuttons.style = "";
            p0.style.display = "";
            h1.style.display = "";
            stats.style.display = "";
            game_area.style.display = "";
            gamestart(1);
            break;
        case true:
            headerbuttons.style.display = "";
            p0.style.display = "";
            h1.style.display = "";
            stats.style.display = "";
            game_area.style.display = "";
            game_area.innerHTML = ``;
            choics_aria.innerHTML = ``;
            stat_numbs.style.display = "";

            break;
        default:
            console.log("seting screen error?");
    }
}
// this is wheare when a player clicks a button somthing will hapen i might not have buttons in my html doc but making them in my story.
function selecter(presdButton) {
    console.log(presdButton.id);
    switch (presdButton.id) {
        case "LUR":
            leveluprequest = 1;
            player.level_up_request();
            break;

        case "B1":
            if (player.level_Availability == 1) {
                if (player.stats.strength != 100) {
                    player.stat_increase("strength");
                }
            }
            break;

        case "B2":
            if (player.level_Availability == 1) {
                if (player.stats.dexterity != 100) {
                    player.stat_increase("dexterity");
                }
            }
            break;

        case "B3":
            if (player.level_Availability == 1) {
                if (player.stats.constitution != 100) {
                    player.stat_increase("constitution");
                }
            }
            break;

        case "B4":
            if (player.level_Availability == 1) {
                if (player.stats.wisdom != 100) {
                    player.stat_increase("wisdom");
                }
            }
            break;

        case "B5":
            if (player.level_Availability == 1) {
                if (player.stats.intelligence != 100) {
                    player.stat_increase("intelligence");
                }
            }

            break;

        case "B6":
            if (player.level_Availability == 1) {
                if (player.stats.charisma != 100) {
                    player.stat_increase("charisma");
                }
            }
            break;

        case "B7":
            if (canrest == true) {
                player.resting();
            }

            break;

        case "B8":
            player.stat_increase("strength");
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
            player.xp += player.xp_Requirements;
            player.levelUp();
            break;

        case "B25":
            break;

        case "B26":
            break;

        case "B27":
            console.log(player.HP);
            break;

        case "B28":
            player.damige_Taken(6);
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
            console.log(enemiesInRoom[2].hp, enemiesInRoom[2]);
            break;

        case "B36":
            for (var i = 0; i < 10; i++) {
                newEnemy = new Enemy_Class("goblin", 100, difficulty_mod);
                enemiesInRoom.push(newEnemy);
                console.log("[mainJS:281]: newEnemy", newEnemy);
                console.log(enemiesInRoom[i], "enemy nub", i);
            }
            break;

        case "B37":
            break;

        case "Wizard":
            Wizard_select();
            break;
        case "Fighter":
            Fighter_select();
            break;
        case "Ice_Wizard":
            p3.innerText = "Ice Wizard";
            p3.style.color = "blue";
            player = new Player_Class("Ice_Wizard");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "Fire_Wizard":
            p3.innerText = "Fire Wizard";
            p3.style.color = "red";
            player = new Player_Class("Fire_Wizard");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "Necromanser":
            p3.innerText = "Necromanser";
            p3.style.color = "gray";
            player = new Player_Class("Necromanser");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "Tank":
            p3.innerText = "Tank";
            p3.style.color = "lightgray";
            player = new Player_Class("Tank");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "Barberian":
            p3.innerText = "Barberian";
            p3.style.color = "darkred";
            player = new Player_Class("Barberian");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "Weapons_Master":
            p3.innerText = "Weapons Master";
            p3.style.color = "darkgreen";
            player = new Player_Class("Weapons_Master");
            setscreen(true);
            player.stat_update();
            gamestart(3);
            break;
        case "easy":
            difficulty_mod = difficulty("Easy");
            T_difficulty.innerText = "Easy";
            T_difficulty.style.color = "green";
            player.total_debt = 500000 * difficulty_mod;
            break;
        case "Medium":
            difficulty_mod = difficulty("Medium");
            T_difficulty.innerText = "Medium";
            T_difficulty.style.color = "yellow";
            player.total_debt = 500000 * difficulty_mod;
            break;
        case "hard":
            difficulty_mod = difficulty("Hard");
            T_difficulty.innerText = "Hard";
            T_difficulty.style.color = "red";
            player.total_debt = 500000 * difficulty_mod;
            break;
        case "hardcore":
            difficulty_mod = difficulty("HardCore");
            T_difficulty.innerText = "HardCore";
            T_difficulty.style.color = "darkred";
            player.total_deat = 500000 * difficulty_mod;
            break;
        default:
            console.log("not a diffind button", presdButton.id);
    }
}

//comenly used functions.

// this is for the start of the game wher the player selects clsaa subclass and difficulty
function gamestart(phase) {
    console.log(phase);
    switch (phase) {
        case 1:
            choics_aria.innerHTML = `<p id="ClassMaster1"> chose a Class: <button id="Wizard" class="button" onclick="selecter(this)">Wizard</button> || <button id="Figther" class="button" onclick="selecter(this)">Figther</button> <b style ="font-size: 20px;">this can not be changed in the futere!!</b></p>`;
            break;
        case 2:
            if (Class == "Wizard") {
                choics_aria.innerHTML = `<p id="ClassMaster1"> chose a Sub Class: <button id="Ice_Wizard" class="button" onclick="selecter(this)">Ice Wizard</button> || <button id="Fire_Wizard" class="button" onclick="selecter(this)">Fire Wizard</button> || <button id="Necromanser" class="button" onclick="selecter(this)">Necromanser</button> <b style ="font-size: 20px;">this can not be changed in the futere!!</b></p>`;
            }
            if (Class == "Fighter") {
                choics_aria.innerHTML = `<p id="ClassMaster1"> chose a Sub Class: <button id="Tank" class="button" onclick="selecter(this)">Tank</button> || <button id="Barberian" class="button" onclick="selecter(this)">Barberian</button> || <button id="Weapons_Master" class="button" onclick="selecter(this)">Weapons Master</button> <b style ="font-size: 20px;">this can not be changed in the futere!!</b></p>`;
            }
            break;
        case 3:
            difficulty_text.style.display = "";
            choics_aria.innerHTML = `<div> chose a Difficulty <button class="button" id="easy" onclick="selecter(this)">Easy</button>||<button class="button" id="Medium" onclick="selecter(this)">Medium</button>||<button class="button" id="hard" onclick="selecter(this)">Hard</button>||<button style="color: red;" class="button" id="hardcore" onclick="selecter(this)">HardCore</button></div>`;
            break;
    }
}
// this is wher the player selects the Wizard class.
function Wizard_select() {
    p1.innerText = "Wizard";
    p2.innerText = " || ";
    p1.style.color = "lightblue";
    t_spellslots.style.display = "";
    hI1.style.display = "";
    Class = "Wizard";
    gamestart(2);
}

// this is wher the player selects the Fighter class.
function Fighter_select() {
    p1.innerText = "Fighter";
    p2.innerText = " || ";
    p1.style.color = "gray";
    hI1.style.display = "";
    Class = "Fighter";
    gamestart(2);
}
// sets the diddiculty of the game.
function difficulty(difficulty) {
    switch (difficulty) {
        case "Easy":
            setscreen(true);
            return 0.5;
        case "Medium":
            setscreen(true);
            return 1;
        case "Hard":
            setscreen(true);
            return 1.5;
        case "HardCore":
            setscreen(true);
            return 2;
        default:
            console.log("no difficulty selected");
    }
}

console.log("mainJS.js loaded");
