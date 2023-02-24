console.log("[character_Script:0]: loaded");

class Character {
    constructor() {}
    subclass = "";
    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;
    strengthMod = 0;
    dexterityMod = 0;
    constitutionMod = 0;
    intelligenceMod = 0;
    wisdomMod = 0;
    charismaMod = 0;
    other_Bonuses = 0;
    hp = 0; //HP is also calcalated difrently for ech class for Fighter its, hp=conMOD+(Level*12) and for Wizard, hp=conmod+(Level*8).
    maxHP = 0;
    armer_Class = 0; // Armer Class also konown as AC, AC is calculatecd diffrent its, AC=(10 + DexMOD + other boneses).
    level = 1;
    xp = 0;
    gold = 0;
    silver = 0;
    copper = 0;
    xp_Requirements = 2000;
    skill_points = 0; //Skill_points = over Level.
    spellSlots = 0;
    max_spellslots = 0;
    canWearArmor = true;
    canWealdShild = true;
    canWealdWands = true;
    canWealdroedes = true;
    level_Availability = 0;
    damigeResistens = 0;
    killcounter = 0;
    deathcounter = 0;
    maxLevel = 600;
    total_debt;
}
