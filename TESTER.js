var enemyDisplay = document.getElementById("enemyDisplay");

class Player {
    level;
    health;
    subclass;
    inventory = new Inventory();
    spd = Math.floor(Math.random() * 10);
    constructor(subclass) {
        this.subclass = subclass;
        switch (subclass) {
            case "warrior":
                this.health = 100;
                break;
            case "mage":
                this.health = 10;
                break;
        }
    }
    takeDmg(dmg) {
        if (this.health - dmg > 0) {
            console.log(`Current Health: ${this.health} - Dmg:${dmg} = ${this.health - dmg}`);
            this.health -= dmg;
            return;
        }
        console.log("[acript:24]: dead");
        this.die();
    }
    die() {
        this.isDead = true;
    }
    equipWeapon(weaponType) {
        this.weapon = new Weapon(weaponType);
    }
    dealDmg(target) {
        target.takeDmg(this.weapon.dmg);
    }
    heal(amount) {
        this.health += amount;
    }
    pickupItem(item) {
        this.inventory.items.addItem(new Item(item, this));
    }
    useItem(invItemNumber) {
        this.inventory.items[invItemNumber].use();
    }
}

class Inventory {
    items = [];
    removeItem() {}
    addItem() {}
    use() {}
}

class Item {
    use;
    constructor(itemType, player) {
        this.player = player;
        switch (itemType) {
            case "Flashlight":
                this.use = () => {
                    // blind
                };
                break;
            case "meat":
                this.duration = 10;
                this.amount = 10;
                this.use = (target) => {
                    // heal
                    target.heal(this.amount * this.player.level);
                };
                break;
        }
    }
}

class Weapon {
    constructor(weaponType) {
        switch (weaponType) {
            case "sword":
                this.name = "sword";
                this.dmg = 10;
                this.damageType = 1;
                break;
            case "wand":
                this.dmg = 1;
                this.fireRate = 10;
                break;
        }
    }
}

class Enemy {
    type;
    name;
    health;
    constructor(type, name, subclass) {
        this.name = name;
        this.subclass = subclass;
        this.level = 1;
        this.spd = Math.floor(Math.random() * 10);
        switch (type) {
            case "warrior":
                this.health = 15;
                this.resitance = 10;
                this.damageMod = 10;
                break;
            case "mage":
                this.health = 5;
                this.damageMod = 20;
                break;
        }
    }
    doDamage(target) {
        var dmg = Math.floor(Math.random() * this.damageMod) * this.level;
        target.takeDmg(dmg);
    }
    makeMinion() {
        if (this.health == 0) {
            // make friendly
        }
    }
}

var player = new Player("warrior");

player.equipWeapon("sword");

var enemiesInRoom = [];
for (var i = 0; i < 15; i++) {
    var newEnemy;
    switch (true) {
        case i < 5:
            newEnemy = new Enemy("warrior");
            break;
        case i > 5:
            newEnemy = new Enemy("mage");
            break;
    }
    enemiesInRoom.push(newEnemy);
    enemyDisplay.innerHTML += "enemy" + (i + 1) + "<br>";
}
var minions = new Array(10);

function enemyTurn() {
    enemiesInRoom.forEach((enemy) => {
        if (player.isDead) return;
        if (Math.random() >= 0.5) {
            enemy.doDamage(player);
            return;
        }
        var randomMinion = minions[Math.floor(Math.random() * minions.length - 1)];
        enemy.doDamage(randomMinion);
    });
}
