class Enemy_Class {
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
    HP;
    MaxHP;
    Armer_Class;
    Level;
    SpellSlots;
    max_spellslots;
    DamigeResistens;
    type;
    Speed;
    constructor(type, level) {
        this.type = type;
        this.Level = level;
        switch (type) {
            case "goblin":
                this.Strength = 10 + Math.floor(this.level / 4);
                this.Dexterity = 10 + Math.floor(this.level / 4);
                this.Constitution = 10 + Math.floor(this.level / 4);
                this.Intelligence = 5 + Math.floor(this.level / 8);
                this.Wisdom = 5 + Math.floor(this.level / 8);
                this.Charisma = 5 + Math.floor(this.level / 8);
                this.StrengthMod = Math.floor(this.Strength / 2);
                this.DexterityMod = Math.floor(this.Dexterity / 2);
                this.ConstitutionMod = Math.floor(this.Constitution / 2);
                this.IntelligenceMod = Math.floor(this.Intelligence / 2);
                this.WisdomMod = Math.floor(this.Wisdom / 2);
                this.CharismaMod = Math.floor(this.Charisma / 2);
                this.Other_Bonuses = Math.floor(this.level / 10);
                this.HP = 10 + (this.ConstitutionMod + this.Level * 8);
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.Speed = 1 + (Math.floor(this.level / 10) + this.DexterityMod);
                break;
            case "thief":
                this.Strength = 20 + Math.floor(this.level / 4);
                this.Dexterity = 20 + Math.floor(this.level / 4);
                this.Constitution = 20 + Math.floor(this.level / 4);
                this.Intelligence = 10 + Math.floor(this.level / 8);
                this.Wisdom = 10 + Math.floor(this.level / 8);
                this.Charisma = 10 + Math.floor(this.level / 8);
                this.StrengthMod = Math.floor(this.Strength / 2);
                this.DexterityMod = Math.floor(this.Dexterity / 2);
                this.ConstitutionMod = Math.floor(this.Constitution / 2);
                this.IntelligenceMod = Math.floor(this.Intelligence / 2);
                this.WisdomMod = Math.floor(this.Wisdom / 2);
                this.CharismaMod = Math.floor(this.Charisma / 2);
                this.Other_Bonuses = Math.floor(this.level / 10);
                this.HP = 25 + (this.ConstitutionMod + this.Level * 8);
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.Speed = 2 + (Math.floor(this.level / 10) + this.DexterityMod);
                break;
            case "orc":
                this.Strength = 40 + Math.floor(this.level / 4);
                this.Dexterity = 40 + Math.floor(this.level / 4);
                this.Constitution = 40 + Math.floor(this.level / 4);
                this.Intelligence = 20 + Math.floor(this.level / 8);
                this.Wisdom = 20 + Math.floor(this.level / 8);
                this.Charisma = 20 + Math.floor(this.level / 8);
                this.StrengthMod = Math.floor(this.Strength / 2);
                this.DexterityMod = Math.floor(this.Dexterity / 2);
                this.ConstitutionMod = Math.floor(this.Constitution / 2);
                this.IntelligenceMod = Math.floor(this.Intelligence / 2);
                this.WisdomMod = Math.floor(this.Wisdom / 2);
                this.CharismaMod = Math.floor(this.Charisma / 2);
                this.Other_Bonuses = Math.floor(this.level / 10);
                this.HP = 50 + (this.ConstitutionMod + this.Level * 8);
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.Speed = 3 + (Math.floor(this.level / 10) + this.DexterityMod);
                break;
            case "dragon":
                this.Strength = 60 + Math.floor(this.level / 4);
                this.Dexterity = 60 + Math.floor(this.level / 4);
                this.Constitution = 60 + Math.floor(this.level / 4);
                this.Intelligence = 30 + Math.floor(this.level / 8);
                this.Wisdom = 30 + Math.floor(this.level / 8);
                this.Charisma = 30 + Math.floor(this.level / 8);
                this.StrengthMod = Math.floor(this.Strength / 2);
                this.DexterityMod = Math.floor(this.Dexterity / 2);
                this.ConstitutionMod = Math.floor(this.Constitution / 2);
                this.IntelligenceMod = Math.floor(this.Intelligence / 2);
                this.WisdomMod = Math.floor(this.Wisdom / 2);
                this.CharismaMod = Math.floor(this.Charisma / 2);
                this.Other_Bonuses = Math.floor(this.level / 10);
                this.HP = 100 + (this.ConstitutionMod + this.Level * 8);
                this.MaxHP = this.HP;
                this.Armer_Class = 10 + (this.DexterityMod + this.Other_Bonuses);
                this.Speed = 4 + (Math.floor(this.level / 10) + this.DexterityMod);
                break;
        }
    }
}
console.log("Enemy Script loded");
