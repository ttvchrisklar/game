class Player_Class extends Character {
    constructor(subclass) {
        super();
        this.difficulty = difficulty_mod;
        this.subclass = subclass;
        switch (subclass) {
            case "Ice_Wizard":
                this.strength = 8;
                this.dexterity = 8;
                this.constitution = 10;
                this.intelligence = 12;
                this.wisdom = 12;
                this.charisma = 12;
                this.strengthMod = 4;
                this.dexterityMod = 4;
                this.constitutionMod = 5;
                this.intelligenceMod = 6;
                this.wisdomMod = 6;
                this.charismaMod = 6;
                this.other_Bonuses = 0;
                this.hp = this.constitutionMod + this.level * 8;
                this.maxHP = this.hp;
                this.armer_Class = 10 + this.dexterityMod + this.other_Bonuses;
                this.spellSlots = 10;
                this.max_spellSlots = this.spellSlots;
                this.damigeResistens = 1;
                this.canWealdShild = false;
                this.canWealdWands = true;
                this.canWealdArmor = false;
                break;

            case "Fire_Wizard":
                this.strength = 8;
                this.dexterity = 8;
                this.constitution = 10;
                this.intelligence = 12;
                this.wisdom = 12;
                this.charisma = 12;
                this.strengthMod = 4;
                this.dexterityMod = 4;
                this.constitutionMod = 5;
                this.intelligenceMod = 6;
                this.wisdomMod = 6;
                this.charismaMod = 6;
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
                break;

            case "Necromanser":
                this.strength = 8;
                this.dexterity = 8;
                this.constitution = 10;
                this.intelligence = 12;
                this.wisdom = 12;
                this.charisma = 12;
                this.strengthMod = 4;
                this.dexterityMod = 4;
                this.constitutionMod = 5;
                this.intelligenceMod = 6;
                this.wisdomMod = 6;
                this.charismaMod = 6;
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
                break;

            case "Tank":
                this.strength = 12;
                this.dexterity = 12;
                this.constitution = 10;
                this.intelligence = 8;
                this.wisdom = 8;
                this.charisma = 8;
                this.strengthMod = 6;
                this.dexterityMod = 6;
                this.constitutionMod = 5;
                this.intelligenceMod = 4;
                this.wisdomMod = 4;
                this.charismaMod = 4;
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
                this.strength = 12;
                this.dexterity = 12;
                this.constitution = 10;
                this.intelligence = 8;
                this.wisdom = 8;
                this.charisma = 8;
                this.strengthMod = 6;
                this.dexterityMod = 6;
                this.constitutionMod = 5;
                this.intelligenceMod = 4;
                this.wisdomMod = 4;
                this.charismaMod = 4;
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
                this.strength = 12;
                this.dexterity = 12;
                this.constitution = 10;
                this.intelligence = 8;
                this.wisdom = 8;
                this.charisma = 8;
                this.strengthMod = 6;
                this.dexterityMod = 6;
                this.constitutionMod = 5;
                this.intelligenceMod = 4;
                this.wisdomMod = 4;
                this.charismaMod = 4;
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
    stat_update() {
        t_hp.innerText = `Max hp: ${this.maxHP} || Curent hp: ${this.hp}.`;
        t_ac.innerText = `AC:  ${this.armer_Class}.`;
        t_strength.innerText = `Strength: ${this.strength} || Strength Mod: ${this.strengthMod}.`;
        t_dexterity.innerText = `Dexterity: ${this.dexterity} || Dexterity Mod: ${this.dexterityMod}.`;
        t_constitution.innerText = `Constitution: ${this.constitution} || Constitution Mod: ${this.constitutionMod}.`;
        t_wisdom.innerText = `Wisdom:  ${this.wisdom} || Wisdom Mod: ${this.wisdomMod}.`;
        t_intelligence.innerText = `Intelligence: ${this.intelligence} || Intelligence Mod: ${this.intelligenceMod}.`;
        t_charisma.innerText = `Charisma: ${this.charisma} || Charisma Mod: ${this.charismaMod}.`;
        t_xp.innerText = `XP: ${this.xp}/${this.xp_Requirements}.`;
        t_level.innerText = `Level: ${this.level} / ${this.maxLevel} || Skill points to spend: ${this.skill_points}.`;
        if ((Class = "Wizard")) {
            t_spellslots.innerText = `SpellSlots: ${this.spellSlots} / ${this.max_spellSlots}.`;
        }
        mony.innerText = `Gold: ${this.gold} || Silver: ${this.silver} || Copper: ${this.copper}`;
        console.log("stat_update");
    }
    level_up_request() {
        if (leveluprequest == 1) {
            if (this.skill_points > 0) {
                b1.innerText = "strength";
                b2.innerText = "dexterity";
                b3.innerText = "constitution";
                b4.innerText = "wisdom";
                b5.innerText = "intelligence";
                b6.innerText = "charisma";
                if (this.strength == 100) {
                    b1.innerText = "strength is maxed";
                }
                if (this.dexterity == 100) {
                    b2.innerText = "dexterity is maxed";
                }
                if (this.constitution == 100) {
                    b3.innerText = "constitution is maxed";
                }
                if (this.wisdom == 100) {
                    b4.innerText = "wisdom is maxed";
                }
                if (this.intelligence == 100) {
                    b5.innerText = "intelligence is maxed";
                }
                if (this.charisma == 100) {
                    b6.innerText = "charisma is maxed";
                }
                player.level_Availability = 1;
            } else {
                alert(`can not level UP you need: ${this.xp_Requirements - this.xp} xp to level UP to level ${this.level + 1}.`);
            }
        }
        console.log("level_up_request");
    }
    skill_points_main() {
        if (this.skill_points >= 1) {
            this.skill_points -= 1;
            this.level_up_request();
        } else {
            b1.innerText = "tester 1";
            b2.innerText = "tester 2";
            b3.innerText = "tester 3";
            b4.innerText = "tester 4";
            b5.innerText = "tester 5";
            b6.innerText = "tester 6";
            this.level_Availability = 0;
        }
        this.stat_update();
        console.log("skill_points_main");
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
