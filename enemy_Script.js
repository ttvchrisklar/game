class Enemy_Class extends Character {
    type = "";
    Speed = 0;
    difficulty = 1;
    constructor(type, level, difficulty_mod) {
        super();
        this.type = type;
        this.level = level;
        this.difficulty = difficulty_mod;
        switch (type) {
            case "goblin":
                this.Strength = this.statCalculation(10, level, 4);
                this.Dexterity = this.statCalculation(10, level, 4);
                this.Constitution = this.statCalculation(10, level, 4);
                this.Intelligence = this.statCalculation(5, level, 8);
                this.Wisdom = this.statCalculation(5, level, 8);
                this.Charisma = this.statCalculation(5, level, 8);
                this.StrengthMod = this.statMod(this.Strength);
                this.DexterityMod = this.statMod(this.Dexterity);
                this.ConstitutionMod = this.statMod(this.Constitution);
                this.IntelligenceMod = this.statMod(this.Intelligence);
                this.WisdomMod = this.statMod(this.Wisdom);
                this.CharismaMod = this.statMod(this.Charisma);
                this.Other_Bonuses = Math.floor(level / 10) * this.difficulty;
                this.HP = (10 + (this.ConstitutionMod + this.Level * 8)) * this.difficulty;
                this.MaxHP = this.HP;
                this.Armer_Class = (10 + this.DexterityMod + this.Other_Bonuses) * this.difficulty;
                this.Speed = (1 + Math.floor(level / 10) + this.DexterityMod) * this.difficulty;
                break;
            // case "thief":
            //     this.Strength = (20 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Dexterity = (20 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Constitution = (20 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Intelligence = (10 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Wisdom = (10 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Charisma = (10 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.StrengthMod = Math.floor(this.Strength / 2);
            //     this.DexterityMod = Math.floor(this.Dexterity / 2);
            //     this.ConstitutionMod = Math.floor(this.Constitution / 2);
            //     this.IntelligenceMod = Math.floor(this.Intelligence / 2);
            //     this.WisdomMod = Math.floor(this.Wisdom / 2);
            //     this.CharismaMod = Math.floor(this.Charisma / 2);
            //     this.Other_Bonuses = Math.floor(this.level / 10) * this.difficulty;
            //     this.HP = (25 + (this.ConstitutionMod + this.Level * 8)) * this.difficulty;
            //     this.MaxHP = this.HP;
            //     this.Armer_Class = (10 + (this.DexterityMod + this.Other_Bonuses)) * this.difficulty;
            //     this.Speed = (2 + (Math.floor(this.level / 10) + this.DexterityMod)) * this.difficulty;
            //     break;
            // case "orc":
            //     this.Strength = (40 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Dexterity = (40 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Constitution = (40 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Intelligence = (20 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Wisdom = (20 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Charisma = (20 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.StrengthMod = Math.floor(this.Strength / 2);
            //     this.DexterityMod = Math.floor(this.Dexterity / 2);
            //     this.ConstitutionMod = Math.floor(this.Constitution / 2);
            //     this.IntelligenceMod = Math.floor(this.Intelligence / 2);
            //     this.WisdomMod = Math.floor(this.Wisdom / 2);
            //     this.CharismaMod = Math.floor(this.Charisma / 2);
            //     this.Other_Bonuses = Math.floor(this.level / 10) * this.difficulty;
            //     this.HP = (50 + (this.ConstitutionMod + this.Level * 8)) * this.difficulty;
            //     this.MaxHP = this.HP;
            //     this.Armer_Class = (10 + (this.DexterityMod + this.Other_Bonuses)) * this.difficulty;
            //     this.Speed = (3 + (Math.floor(this.level / 10) + this.DexterityMod)) * this.difficulty;
            //     break;
            // case "dragon":
            //     this.Strength = (60 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Dexterity = (60 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Constitution = (60 + Math.floor(this.level / 4)) * this.difficulty;
            //     this.Intelligence = (30 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Wisdom = (30 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.Charisma = (30 + Math.floor(this.level / 8)) * this.difficulty;
            //     this.StrengthMod = Math.floor(this.Strength / 2);
            //     this.DexterityMod = Math.floor(this.Dexterity / 2);
            //     this.ConstitutionMod = Math.floor(this.Constitution / 2);
            //     this.IntelligenceMod = Math.floor(this.Intelligence / 2);
            //     this.WisdomMod = Math.floor(this.Wisdom / 2);
            //     this.CharismaMod = Math.floor(this.Charisma / 2);
            //     this.Other_Bonuses = Math.floor(this.level / 10) * this.difficulty;
            //     this.HP = (100 + (this.ConstitutionMod + this.Level * 8)) * this.difficulty;
            //     this.MaxHP = this.HP;
            //     this.Armer_Class = (10 + (this.DexterityMod + this.Other_Bonuses)) * this.difficulty;
            //     this.Speed = (4 + (Math.floor(this.level / 10) + this.DexterityMod)) * this.difficulty;
            //     break;
            default:
                console.error("[enemy_Script:90] ERROR: could not find case for ", type);
        }
    }
    statCalculation = (orgStat, level, mod) => Math.floor(orgStat + Math.floor(level / mod) * this.difficulty);
    statMod = (orgStat) => Math.floor(orgStat / 2);
}
console.log("Enemy Script loded");
