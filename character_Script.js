console.log("[character_Script:0]: loaded");

class Character {
    constructor() {}
    subclass = "";
    Strength = 0;
    Dexterity = 0;
    Constitution = 0;
    Intelligence = 0;
    Wisdom = 0;
    Charisma = 0;
    StrengthMod = 0;
    DexterityMod = 0;
    ConstitutionMod = 0;
    IntelligenceMod = 0;
    WisdomMod = 0;
    CharismaMod = 0;
    Other_Bonuses = 0;
    HP = 0; //HP is also calcalated difrently for ech class for Fighter its, hp=conMOD+(Level*12) and for Wizard, hp=conmod+(Level*8).
    MaxHP = 0;
    Armer_Class = 0; // Armer Class also konown as AC, AC is calculatecd diffrent its, AC=(10 + DexMOD + other boneses).
    level = 1;
    XP = 0;
    Gold = 0;
    silver = 0;
    copper = 0;
    XP_Requirements = 2000;
    Skill_points = 0; //Skill_points = over Level.
    SpellSlots = 0;
    max_spellslots = 0;
    CanWearArmor = true;
    CanWealdShild = true;
    CanWealdWands = true;
    CanWealdroedes = true;
    Level_Availability = 0;
    DamigeResistens = 0;
    killcounter = 0;
    deathcounter = 0;
    maxLevel = 600;
}
