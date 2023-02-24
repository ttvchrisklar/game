class Enemy_Class extends Character {
    type = "";
    speed = 0;
    difficulty = 1;
    constructor(type, level, difficulty_mod) {
        super();
        this.type = type;
        this.level = level;
        this.difficulty = difficulty_mod;
        switch (type) {
            case "goblin":
                this.strength = this.statCalculation(10, level, 4);
                this.dexterity = this.statCalculation(10, level, 4);
                this.constitution = this.statCalculation(10, level, 4);
                this.intelligence = this.statCalculation(5, level, 8);
                this.wisdom = this.statCalculation(5, level, 8);
                this.charisma = this.statCalculation(5, level, 8);
                this.strengthMod = this.statMod(this.strength);
                this.dexterityMod = this.statMod(this.dexterity);
                this.constitutionMod = this.statMod(this.constitution);
                this.intelligenceMod = this.statMod(this.intelligence);
                this.wisdomMod = this.statMod(this.wisdom);
                this.charismaMod = this.statMod(this.charisma);
                this.other_Bonuses = this.statCalculation(0, level, 10);
                this.hp = Math.floor((10 + this.constitutionMod + level) * this.difficulty);
                this.maxHP = this.hp;
                this.armer_Class = Math.floor((5 + this.dexterityMod + this.other_Bonuses) * this.difficulty);
                this.speed = Math.floor((1 + this.dexterityMod + level / 10) * this.difficulty);
                break;
            case "thief":
                this.strength = this.statCalculation(20, level, 4);
                this.dexterity = this.statCalculation(20, level, 4);
                this.constitution = this.statCalculation(20, level, 4);
                this.intelligence = this.statCalculation(10, level, 8);
                this.wisdom = this.statCalculation(10, level, 8);
                this.charisma = this.statCalculation(10, level, 8);
                this.strengthMod = this.statMod(this.strength);
                this.dexterityMod = this.statMod(this.dexterity);
                this.constitutionMod = this.statMod(this.constitution);
                this.intelligenceMod = this.statMod(this.intelligence);
                this.wisdomMod = this.statMod(this.wisdom);
                this.charismaMod = this.statMod(this.charisma);
                this.other_Bonuses = this.statCalculation(0, level, 10);
                this.hp = Math.floor((25 + this.constitutionMod + level) * this.difficulty);
                this.maxHP = this.hp;
                this.armer_Class = Math.floor((10 + this.dexterityMod + this.other_Bonuses) * this.difficulty);
                this.speed = Math.floor((2 + this.dexterityMod + level / 10) * this.difficulty);
                break;
            case "orc":
                this.strength = this.statCalculation(40, level, 4);
                this.dexterity = this.statCalculation(40, level, 4);
                this.constitution = this.statCalculation(40, level, 4);
                this.intelligence = this.statCalculation(20, level, 8);
                this.wisdom = this.statCalculation(20, level, 8);
                this.charisma = this.statCalculation(20, level, 8);
                this.strengthMod = this.statMod(this.strength);
                this.dexterityMod = this.statMod(this.dexterity);
                this.constitutionMod = this.statMod(this.constitution);
                this.intelligenceMod = this.statMod(this.intelligence);
                this.wisdomMod = this.statMod(this.wisdom);
                this.charismaMod = this.statMod(this.charisma);
                this.other_Bonuses = this.statCalculation(0, level, 10);
                this.hp = Math.floor((50 + this.constitutionMod + level) * this.difficulty);
                this.maxHP = this.hp;
                this.armer_Class = Math.floor((10 + this.dexterityMod + this.other_Bonuses) * this.difficulty);
                this.speed = Math.floor((3 + this.dexterityMod + level / 10) * this.difficulty);
                break;
            case "dragon":
                this.strength = this.statCalculation(60, level, 4);
                this.dexterity = this.statCalculation(60, level, 4);
                this.constitution = this.statCalculation(60, level, 4);
                this.intelligence = this.statCalculation(30, level, 8);
                this.wisdom = this.statCalculation(30, level, 8);
                this.charisma = this.statCalculation(30, level, 8);
                this.strengthMod = this.statMod(this.strength);
                this.dexterityMod = this.statMod(this.dexterity);
                this.constitutionMod = this.statMod(this.constitution);
                this.intelligenceMod = this.statMod(this.intelligence);
                this.wisdomMod = this.statMod(this.wisdom);
                this.charismaMod = this.statMod(this.charisma);
                this.other_Bonuses = this.statCalculation(0, level, 10);
                this.hp = Math.floor((100 + this.constitutionMod + level) * this.difficulty);
                this.maxHP = this.hp;
                this.armer_Class = Math.floor((20 + this.dexterityMod + this.other_Bonuses) * this.difficulty);
                this.speed = Math.floor((4 + this.dexterityMod + level / 10) * this.difficulty);
                break;
            default:
                console.error("[enemy_Script:90] ERROR: could not find case for ", type);
        }
    }
    statCalculation = (orgStat, level, mod) => Math.floor(orgStat + Math.floor(level / mod) * this.difficulty);
    statMod = (orgStat) => Math.floor(orgStat / 2);
}
console.log("Enemy Script loded");
