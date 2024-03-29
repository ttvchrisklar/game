// player class is made haere and its subclass and abiletys
class Player_Class extends Character {
    speed = 1;
    constructor(subclass) {
        super();
        this.difficulty = difficulty_mod;
        this.subclass = subclass;
        switch (subclass) {
            case "Ice_Wizard" || "Fire_Wizard" || "Necromanser":
                this.stats = this.wizardStats;
                this.calculateAll(8);
                this.spellSlots = 10;
                this.max_spellSlots = this.spellSlots;
                this.stat_update();
            case "Ice_Wizard":
                this.canWealdShild = false;
                this.canWealdArmor = false;
                break;
            case "Fire_Wizard":
                this.canWealdShild = false;
                this.canWealdArmor = false;
                break;
            case "Necromanser":
                this.canWealdShild = false;
                this.canWealdArmor = false;
                break;
            case "Tank" || "Barberian" || "Weapons_Master":
                this.stats = this.fighterStats;
                this.calculateAll(12);
                this.canWealdWands = false;
                this.canWealdroedes = false;
                this.stat_update();
            case "Tank":
                this.other_Bonuses = Math.floor(this.constitutionMod / 2);
                this.damigeResistens = 0.75;
                break;
            case "Barberian":
                this.other_Bonuses = Math.floor(this.constitutionMod / 4);
                this.damigeResistens = 0.5;
                this.canWealdArmor = false;
                break;
            case "Weapons_Master":
                this.canWealdShild = false;
                break;

            default:
                console.log("subclass not selected");
                break;
        }
        this.maxHP = this.hp;
    }

    calculateAll(hpMod) {
        this.calculateStatMod();
        this.hp = this.calculateHp(hpMod);
        this.armer_Class = this.calculateArmerClass();
    }

    calculateHp = (x) => this.stats.mod.constitution + this.level * x;
    calculateArmerClass = () => 10 + this.stats.mod.dexterity + this.other_Bonuses;

    calculateStatMod() {
        this.stats.mod = {};
        Object.entries(this.stats)
            .filter(([key]) => key != "mod")
            .forEach(([statKey, statValue]) => {
                this.stats.mod[statKey] = statValue / 2;
            });
    }
    // updates the stats for the player to see.
    //this is also my difolt for any player update.
    stat_update() {
        t_hp.innerText = `Curent hp: ${this.hp} || Max hp: ${this.maxHP}.`;
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
                this.level_Availability = 1;
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
        if (statToincrease == "dexterity") {
            this.stats.speed = Math.floor(this.stats.mod.dexterity / 4);
        }
        if (statToincrease == "constitution") {
            if (Class == "Wizard") {
                this.hp = this.stats.mod.constitution + this.level * 8;
            }
            if (Class == "Fighter") {
                this.hp = this.stats.mod.constitution + this.level * 12;
            }
            this.maxHP = this.hp;
        }
        console.log("[player_Script:146]: statToincrease", statToincrease);
        this.skill_points--;
        this.level_up_request();
    }

    levelUp() {
        if (this.level == this.maxlevel) return;
        if (this.xp >= this.xp_Requirements) {
            this.xp -= this.xp_Requirements;
            this.skill_points += 1;
            this.level += 1;
            this.xp_Requirements = 1000 * (this.level + 1);
            if (Class == "Wizard") {
                this.hp = this.stats.mod.constitution + this.level * 8;
            }
            if (Class == "Fighter") {
                this.hp = this.stats.mod.constitution + this.level * 12;
            }
            this.maxHP = this.hp;
        }
        this.stat_update();
        console.log('[player_Script:312]: "levelUp"');
    }

    takeDamige(damige) {
        this.hp -= Math.floor(damige * this.damigeResistens);
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
                    choice_area.innerHTML = `<div><button class="button" onclick="player.revival();">get revived</button></div>`;
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
