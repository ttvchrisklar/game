// every class that is a creature inharets from this class
console.log("[character_Script:0]: loaded");

class Character {
    constructor() {}
    subclass = "";
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
    max_spellslots = this.spellSlots;
    canWearArmor = true;
    canWealdShild = true;
    canWealdWands = true;
    canWealdroedes = true;
    level_Availability = 0;
    damigeResistens = 1;
    killcounter = 0;
    deathcounter = 0;
    maxLevel = 600;
    total_debt;
    speed = 1 + Math.floor(this.dexterityMod + this.level / 5);
    wizardStats = {
        strength: 8,
        dexterity: 8,
        constitution: 10,
        intelligence: 12,
        wisdom: 12,
        charisma: 12,
        speed: 1,
    };
    fighterStats = {
        strength: 12,
        dexterity: 12,
        constitution: 10,
        intelligence: 8,
        wisdom: 8,
        charisma: 8,
        speed: 1,
    };
}
