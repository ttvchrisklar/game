// player class is made haere and its subclass and abiletys
class Player_Class extends Character {
    speed = 1;
    constructor(subclass) {
        super();
        this.difficulty = difficulty_mod;
        this.subclass = subclass;
        switch (subclass) {
            case "Ice_Wizard":
                this.stats.strength = 8;
                this.stats.dexterity = 8;
                this.stats.constitution = 10;
                this.stats.intelligence = 12;
                this.stats.wisdom = 12;
                this.stats.charisma = 12;
                this.calculateStatMod();
                this.other_Bonuses = 0;
                this.hp = this.stats.mod.constitution + this.level * 8;
                this.maxHP = this.hp;
                this.armer_Class = 10 + this.stats.mod.dexterity + this.other_Bonuses;
                this.spellSlots = 10;
                this.max_spellSlots = this.spellSlots;
                this.damigeResistens = 1;
                this.canWealdShild = false;
                this.canWealdWands = true;
                this.canWealdArmor = false;
                this.canWealdroedes = true;
                this.stat_update();
                break;

            case "Fire_Wizard":
                this.stats.strength = 8;
                this.stats.dexterity = 8;
                this.stats.constitution = 10;
                this.stats.intelligence = 12;
                this.stats.wisdom = 12;
                this.stats.charisma = 12;
                this.strengthMod = 4;
                this.calculateStatMod();
                this.other_Bonuses = 0;
                this.hp = this.constitutionMod + this.level * 8;
                this.maxHP = this.hp;
                this.armer_Class = 10 + (this.dexterityMod + this.other_Bonuses);
                this.spellSlots = 10;
                this.max_spellSlots = this.spellSlots;
                this.damigeResistens = 1;
                this.canWealdShild = false;
                this.canWealdWands = true;
                this.canWealdArmor = false;
                this.canWealdroedes = true;
                break;

            case "Necromanser":
                this.stats.strength = 8;
                this.stats.dexterity = 8;
                this.stats.constitution = 10;
                this.stats.intelligence = 12;
                this.stats.wisdom = 12;
                this.stats.charisma = 12;
                this.calculateStatMod();
                this.other_Bonuses = 0;
                this.hp = this.constitutionMod + this.level * 8;
                this.maxHP = this.hp;
                this.armer_Class = 10 + (this.dexterityMod + this.other_Bonuses);
                this.spellSlots = 10;
                this.max_spellSlots = this.spellSlots;
                this.damigeResistens = 1;
                this.canWealdShild = false;
                this.canWealdWands = true;
                this.canWealdArmor = false;
                this.canWealdroedes = true;
                break;

            case "Tank":
                this.stats.strength = 12;
                this.stats.dexterity = 12;
                this.stats.constitution = 10;
                this.stats.intelligence = 8;
                this.stats.wisdom = 8;
                this.stats.charisma = 8;
                this.calculateStatMod();
                this.other_Bonuses = Math.floor(this.constitutionMod / 2);
                this.hp = this.constitutionMod + this.level * 12;
                this.maxHP = this.hp;
                this.armer_Class = 10 + (this.dexterityMod + this.other_Bonuses);
                this.damigeResistens = 0.75;
                this.canWealdWands = false;
                this.canWealdroedes = false;
                this.canWealdArmor = true;
                this.canWealdShild = true;
                break;

            case "Barberian":
                this.stats.strength = 12;
                this.stats.dexterity = 12;
                this.stats.constitution = 10;
                this.stats.intelligence = 8;
                this.stats.wisdom = 8;
                this.stats.charisma = 8;
                this.calculateStatMod();
                this.other_Bonuses = Math.floor(this.constitutionMod / 4);
                this.hp = this.constitutionMod + this.level * 12;
                this.maxHP = this.hp;
                this.armer_Class = 10 + (this.dexterityMod + this.other_Bonuses);
                this.damigeResistens = 0.5;
                this.canWealdArmor = false;
                this.canWealdShild = true;
                this.canWealdWands = false;
                this.canWealdroedes = false;
                break;

            case "Weapons_Master":
                this.stats.strength = 12;
                this.stats.dexterity = 12;
                this.stats.constitution = 10;
                this.stats.intelligence = 8;
                this.stats.wisdom = 8;
                this.stats.charisma = 8;
                this.calculateStatMod();
                this.other_Bonuses = 0;
                this.hp = this.constitutionMod + this.level * 12;
                this.maxHP = this.hp;
                this.armer_Class = 10 + (this.dexterityMod + this.other_Bonuses);
                this.damigeResistens = 1;
                this.canWealdWands = false;
                this.canWealdArmor = true;
                this.canWealdShild = false;
                this.canWealdroedes = false;
                break;

            default:
                console.log("subclass not selected");
                break;
        }
    }
    calculateStatMod() {
        this.stats.mod = {};
        Object.entries(this.stats)
            .filter(([key]) => key != "mod")
            .forEach((statKey, statValue) => {
                this.stats.mod[statKey] = statValue / 2;
            });
    }
    // updates the stats for the player to see.
    //this is also my difolt for any player update.
    stat_update() {
        t_hp.innerText = `Max hp: ${this.maxHP} || Curent hp: ${this.hp}.`;
        t_ac.innerText = `AC:  ${this.armer_Class}.`;
        t_strength.innerText = `Strength: ${this.stats.strength} || Strength Mod: ${this.stats.mod.strength}.`;
        t_dexterity.innerText = `Dexterity: ${this.stats.dexterity} || Dexterity Mod: ${this.stats.mod.dexterity}.`;
        t_constitution.innerText = `Constitution: ${this.stats.constitution} || Constitution Mod: ${this.stats.mod.constitution}.`;
        t_wisdom.innerText = `Wisdom:  ${this.stats.wisdom} || Wisdom Mod: ${this.stats.mod.wisdom}.`;
        t_intelligence.innerText = `Intelligence: ${this.stats.intelligence} || Intelligence Mod: ${this.stats.mod.intelligence}.`;
        t_charisma.innerText = `Charisma: ${this.stats.charisma} || Charisma Mod: ${this.stats.mod.charisma}.`;
        t_xp.innerText = `XP: ${this.xp}/${this.xp_Requirements}.`;
        t_level.innerText = `Level: ${this.level} / ${this.maxLevel} || Skill points to spend: ${this.skill_points}.`;
        if ((Class = "Wizard")) {
            t_spellslots.innerText = `SpellSlots: ${this.spellSlots} / ${this.max_spellSlots}.`;
        }
        mony.innerText = `Gold: ${this.gold} || Silver: ${this.silver} || Copper: ${this.copper}`;
        console.log("stat_update");
        console.log("this.stats.mod.strength:", this.stats.mod.strength);
    }
    //when the player send a request to levle up then it will set teh buttons to ther repesented text
    //if a stat is 100 that is its max and it will display maxd at the end of the text and the button is not poseble to be presd
    level_up_request() {
        if (leveluprequest == 1) {
            if (this.skill_points > 0) {
                b1.innerText = "Strength";
                b2.innerText = "Dexterity";
                b3.innerText = "Constitution";
                b4.innerText = "Wisdom";
                b5.innerText = "Intelligence";
                b6.innerText = "Charisma";
                if (this.stats.strength == 100) {
                    b1.innerText = "Strength is maxed";
                }
                if (this.stats.dexterity == 100) {
                    b2.innerText = "Dexterity is maxed";
                }
                if (this.stats.constitution == 100) {
                    b3.innerText = "Constitution is maxed";
                }
                if (this.stats.wisdom == 100) {
                    b4.innerText = "Wisdom is maxed";
                }
                if (this.stats.intelligence == 100) {
                    b5.innerText = "Intelligence is maxed";
                }
                if (this.stats.charisma == 100) {
                    b6.innerText = "Charisma is maxed";
                }
                player.level_Availability = 1;
            } else {
                //if the player dosent have any more skill ponts it will tell the player that it dosent.
                alert(`can not level UP you need: ${this.xp_Requirements - this.xp} xp to level UP to level ${this.level + 1}.`);
                b1.innerText = "tester 1";
                b2.innerText = "tester 2";
                b3.innerText = "tester 3";
                b4.innerText = "tester 4";
                b5.innerText = "tester 5";
                b6.innerText = "tester 6";
                this.level_Availability = 0;
                this.stat_update();
            }
        }
        console.log("level_up_request");
    }
    skill_points_main() {
        if (this.skill_points >= 1) {
            this.skill_points -= 1;
            this.level_up_request();
        }
        this.stat_update();
        console.log("skill_points_main");
    }
    stat_increase(statToincrease) {
        this.stats[statToincrease] += 1;
        this.stats.mod[statToincrease] = Math.floor(this.stats[statToincrease] / 2);
    }

    strength_increase() {
        this.strength += 1;
        this.strengthMod = Math.floor(this.strength / 2);
        this.skill_points_main();
        console.log("strength_increase");
    }
    dexterity_increase() {
        this.dexterity += 1;
        this.dexterityMod = Math.floor(this.dexterity / 2);
        this.skill_points_main();
        this.speed = 1 + Math.floor(this.dexterityMod / 20 + this.level / 10);
        console.log("speed: ", (this.speed = 1 + Math.floor(this.dexterityMod / 20 + this.level / 10)));
        console.log("dexterity_increase");
    }
    constitution_increase() {
        this.constitution += 1;
        this.constitutionMod = Math.floor(this.constitution / 2);
        this.skill_points_main();
        console.log("constitution_increase");
    }
    wisdom_increase() {
        this.wisdom += 1;
        this.wisdomMod = Math.floor(this.wisdom / 2);
        this.skill_points_main();
        console.log("wisdom_increase");
    }
    intelligence_increase() {
        this.intelligence += 1;
        this.intelligenceMod = Math.floor(this.intelligence / 2);
        this.skill_points_main();
        console.log("intelligence_increase");
    }
    charisma_increase() {
        this.charisma += 1;
        this.charismaMod = Math.floor(this.charisma / 2);
        this.skill_points_main();
        console.log("charisma_increase");
    }
    levelUp() {
        if (this.level == this.maxlevel) return;
        if (this.xp >= this.xp_Requirements) {
            this.xp -= this.xp_Requirements;
            this.skill_points += 1;
            this.level += 1;
            this.xp_Requirements = 1000 * (this.level + 1);
            if (Class == "Wizard") {
                this.hp = this.constitutionMod + this.level * 8;
            }
            if (Class == "Fighter") {
                this.hp = this.constitutionMod + this.level * 12;
            }
            this.maxHP = this.hp;
        }
        this.stat_update();
        console.log('[player_Script:312]: "levelUp"');
    }

    damige_Taken(damige) {
        console.log(damige);
        this.hp -= Math.floor(damige * this.damigeResistens);
        console.log(Math.floor(damige * this.damigeResistens), "*");
        if (this.hp <= 0) {
            this.hp = 0;
            this.deathcounter += 1;
            game_area.innerHTML = `<p id="deathText" style="color: red; text-align: center;">you died!</p>`;
            var deathText = document.getElementById("deathText");
            var deathTextSize = 1;
            var textSpeed = 1;
            var interval = setInterval(() => {
                deathTextSize += 4;
                deathText.style.fontSize = `${deathTextSize}px`;
                if (deathTextSize >= 100) {
                    clearInterval(interval);
                    choics_aria.innerHTML = `<div><button class="button" onclick="player.revival();">get revived</button></div>`;
                }
            }, textSpeed);
        }
        this.stat_update();
    }
    resting() {
        if (combat == false) {
            if (Class == "Wizard") {
                this.hp = this.maxHP;
                this.spellSlots = this.max_spellSlots;
                console.log("curent hp", this.hp, "max hp", this.maxHP);
            }
            if (Class == "Fighter") {
                this.hp = this.maxHP;
                console.log("curent hp", this.hp, "max hp", this.maxHP);
            }
            this.levelUp();
        }
        stat_update();
        console.log("resting");
    }
    revival() {
        if (Class == "Wizard") {
            this.hp = this.maxHP;
            this.spellSlots = this.max_spellSlots;
            console.log(this.hp, this.maxHP);
        }
        if (Class == "Fighter") {
            this.hp = this.maxHP;
        }
        this.stat_update();
        setscreen(true);
        console.log("revival");
    }
}
console.log("player script loded");
