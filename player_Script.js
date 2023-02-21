class Player_Class {
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
    MaxHP;
    Armer_Class; // Armer Class also konown as AC, AC is calculatecd diffrent its, AC=(10 + DexMOD + other boneses).
    Level = 1;
    XP = 0;
    Gold = 0;
    silver = 0;
    copper = 0;
    XP_Requirements = 2000;
    Skill_points = 0; //Skill_points = over Level.
    SpellSlots;
    max_spellslots;
    CanWearArmor;
    CanWealdShild;
    CanWealdWands;
    CanWealdroedes = true;
    Level_Availability = 0;
    DamigeResistens = 0;
    killcounter = 0;
    deathcounter = 0;
    maxLevel = 600;
    constructor(subclass) {
        this.subclass = subclass;
        switch (subclass) {
            case "Ice_Wizard":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 10;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 5;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.DamigeResistens = -1.5;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Fire_Wizard":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 10;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 5;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.DamigeResistens = 0;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Necromanser":
                this.Strength = 8;
                this.Dexterity = 8;
                this.Constitution = 10;
                this.Intelligence = 12;
                this.Wisdom = 12;
                this.Charisma = 12;
                this.StrengthMod = 4;
                this.DexterityMod = 4;
                this.ConstitutionMod = 5;
                this.IntelligenceMod = 6;
                this.WisdomMod = 6;
                this.CharismaMod = 6;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 8;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.SpellSlots = 10;
                this.max_spellslots = this.SpellSlots;
                this.DamigeResistens = 0;
                this.CanWealdShild = false;
                this.CanWealdWands = true;
                this.CanWearArmor = false;
                break;

            case "Tank":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 10;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 5;
                this.IntelligenceMod = 4;
                this.WisdomMod = 4;
                this.CharismaMod = 4;
                this.Other_Bonuses = Math.floor(this.ConstitutionMod / 2);
                this.HP = this.ConstitutionMod + this.Level * 12;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.DamigeResistens = 1;
                this.CanWealdWands = false;
                this.CanWealdroedes = false;
                this.CanWearArmor = true;
                this.CanWealdShild = true;
                break;

            case "Barberian":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 10;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 5;
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
                this.CanWealdroedes = false;
                break;

            case "Weapons_Master":
                this.Strength = 12;
                this.Dexterity = 12;
                this.Constitution = 10;
                this.Intelligence = 8;
                this.Wisdom = 8;
                this.Charisma = 8;
                this.StrengthMod = 6;
                this.DexterityMod = 6;
                this.ConstitutionMod = 5;
                this.IntelligenceMod = 4;
                this.WisdomMod = 4;
                this.CharismaMod = 4;
                this.Other_Bonuses = 0;
                this.HP = this.ConstitutionMod + this.Level * 12;
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.DamigeResistens = 0;
                this.CanWealdWands = false;
                this.CanWearArmor = true;
                this.CanWealdShild = false;
                this.CanWealdroedes = false;
                break;

            default:
                console.log("subclass not selected");
                break;
        }
        setscreen();
    }
    stat_update() {
        T_HP.innerText = `Max HP: ${this.MaxHP} || Curent HP: ${this.HP}.`;
        T_AC.innerText = `AC:  ${this.Armer_Class}.`;
        T_Strength.innerText = `Strength: ${this.Strength} || Strength Mod: ${this.StrengthMod}.`;
        T_Dexterity.innerText = `Dexterity: ${this.Dexterity} || Dexterity Mod: ${this.DexterityMod}.`;
        T_Constitution.innerText = `Constitution: ${this.Constitution} || Constitution Mod: ${this.ConstitutionMod}.`;
        T_Wisdom.innerText = `Wisdom:  ${this.Wisdom} || Wisdom Mod: ${this.WisdomMod}.`;
        T_Intelligence.innerText = `Intelligence: ${this.Intelligence} || Intelligence Mod: ${this.IntelligenceMod}.`;
        T_Charisma.innerText = `Charisma: ${this.Charisma} || Charisma Mod: ${this.CharismaMod}.`;
        T_XP.innerText = `XP: ${this.XP}/${this.XP_Requirements}.`;
        T_Level.innerText = `Level: ${this.Level} / ${this.maxLevel} || Skill points to spend: ${this.Skill_points}.`;
        if ((Class = "Wizard")) {
            T_Spellslots.innerText = `Spellslots: ${this.SpellSlots} / ${this.max_spellslots}.`;
        }
        mony.innerText = `Gold: ${this.Gold} || Silver: ${this.silver} || Copper: ${this.copper}`;
        console.log("stat_update");
    }
    level_up_request() {
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
                alert(`can not Level UP you need: ${this.XP_Requirements - this.XP} XP to Level UP to Level ${this.Level + 1}.`);
            }
        }
        console.log("level_up_request");
    }
    Skill_points_main() {
        if (this.Skill_points >= 1) {
            this.Skill_points -= 1;
            this.level_up_request();
        } else {
            B1.innerText = "tester 1";
            B2.innerText = "tester 2";
            B3.innerText = "tester 3";
            B4.innerText = "tester 4";
            B5.innerText = "tester 5";
            B6.innerText = "tester 6";
            this.Level_Availability = 0;
        }
        this.stat_update();
        console.log("Skill_points_main");
    }
    Strength_increase() {
        this.Strength += 1;
        this.StrengthMod = Math.floor(this.Strength / 2);
        this.Skill_points_main();
        console.log("Strength_increase");
    }
    Dexterity_increase() {
        this.Dexterity += 1;
        this.DexterityMod = Math.floor(this.Dexterity / 2);
        this.Skill_points_main();
        console.log("Dexterity_increase");
    }
    Constitution_increase() {
        this.Constitution += 1;
        this.ConstitutionMod = Math.floor(this.Constitution / 2);
        this.Skill_points_main();
        console.log("Constitution_increase");
    }
    Wisdom_increase() {
        this.Wisdom += 1;
        this.WisdomMod = Math.floor(this.Wisdom / 2);
        this.Skill_points_main();
        console.log("Wisdom_increase");
    }
    Intelligence_increase() {
        this.Intelligence += 1;
        this.IntelligenceMod = Math.floor(this.Intelligence / 2);
        this.Skill_points_main();
        console.log("Intelligence_increase");
    }
    Charisma_increase() {
        this.Charisma += 1;
        this.CharismaMod = Math.floor(this.Charisma / 2);
        this.Skill_points_main();
        console.log("Charisma_increase");
    }
    LevelUp() {
        if (this.Level == this.maxLevel) return;
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

        this.stat_update();
        console.log('[player_Script:312]: "LevelUp"');
    }

    Damige_Taken(damige) {
        console.log(damige);
        switch (true) {
            case this.DamigeResistens < -1:
                this.HP += Math.floor(damige * this.DamigeResistens);
                break;
            case this.DamigeResistens > 1:
                this.HP -= Math.floor(damige / this.DamigeResistens);
                break;
            default:
                this.HP -= damige;
        }
        if (this.HP <= 0) {
            this.HP = 0;
            this.deathcounter += 1;
            game_area.innerHTML = `<p id="deathText" style="color: red; text-align: center;">you died!</p>`;
            var deathText = document.getElementById("deathText");
            var deathTextSize = 1;
            var textSpeed = 1;
            var interval = setInterval(() => {
                deathTextSize += 2;
                deathText.style.fontSize = `${deathTextSize}px`;
                if (deathTextSize >= 100) {
                    clearInterval(interval);
                    choics_aria.innerHTML = `<div> <button class="button" onclick="player.revival();">get revived</button></div>`;
                }
            }, textSpeed);
        }
        this.stat_update();
        console.log("Damige Taken: ", this.HP);
    }
    resting() {
        if (combat == false) {
            if (Class == "Wizard") {
                this.HP = this.MaxHP;
                this.SpellSlots = this.max_spellslots;
                console.log("curent hp", this.HP, "max HP", this.MaxHP);
            }
            if (Class == "Fighter") {
                this.HP = this.MaxHP;
                console.log("curent hp", this.HP, "max HP", this.MaxHP);
            }
            this.LevelUp();
        }
        stat_update();
        console.log("resting");
    }
    revival() {
        if (Class == "Wizard") {
            this.HP = this.MaxHP;
            this.SpellSlots = this.max_spellslots;
            console.log(this.HP, this.MaxHP);
        }
        if (Class == "Fighter") {
            this.HP = this.MaxHP;
        }
        this.stat_update();
        setscreen();
        console.log("revival");
    }
}
console.log("player script loded");
