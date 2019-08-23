var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var stopThis = function() {
    rl.close();
}
rl.question(">>animal? ", function(answer1) {
    console.log("Hey " + answer1);
    rl.question(">>method? ", function(answer2) {
        console.log("Ok, " + answer1 + ". Let's " + answer2);
        animals[answer1][answer2]();
        rl.question(">>what else do you want the " + [answer1] + " to do?", function(answer3) {
            console.log("Ok, let's see the " + answer1 + " " + answer3 + "!");
            animals[answer1][answer3]();
            rl.question(">>what next " + [answer1] + "?", function(answer4) {
                animals[answer1][answer4]();
                animals[answer1].printStats();
                console.log("Ok, that's enough. Say bye bye to the " + answer1 + ".");
                stopThis();   
            });
        });
    });
});
function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry) {
            console.log("fewd. yum.");
            this.hungry = false;
            this.sleepy = true; 
        } else {
            console.log("am ful.");
        }
    }
    this.sleep = function() {
        
        if (this.sleepy) {
            console.log('Zzz.');
            this.increaseAge();
            this.sleepy = false;
            this.bored = true;
        } else {
            console.log("am not schlep!");
        } 
        
    }
    this.play = function() {
        if (this.bored) {
            console.log('Pleh!');
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("I'm gud thx.");
        }
    }
    this.increaseAge = function() {
        this.age ++;
        console.log("hbd 2 meh. Om " + this.age + "now.");
    }
    this.printStats = function() {
        console.log(this.hungry);
        console.log(this.bored);
        console.log(this.age);
    }
}
var animals = {};
animals.dog = new DigitalPal();
animals.dog.outside = false;
animals.dog.bark = function() {
    console.log("Woof! Woof!");
}
animals.dog.goOutside = function() {
    if (this.outside = false) {
        console.log("yeh! owsyd.");
        this.outside = true;
    } else { 
        console.log('we owsyd aready.');   
    }
}
animals.dog.goInside = function() {
    if (this.outside = true) {
        console.log("o wut?");
        this.outside = false;
    } else {
        console.log('we insyd aready.');  
    } 
}
animals.cat = new DigitalPal();
animals.cat.houseCondition = 100;
animals.cat.meow = function() {
    console.log("mehow!");
}
animals.cat.destroyFurniture = function() {
    console.log(this.houseCondition);
    while (this.houseCondition > 0) {
        this.houseCondition -= 10;
    }
    console.log(this.houseCondition);
    console.log('Muahaha. No mo shtuff.');
    this.bored = false;
    this.sleepy = true;
}
animals.cat.buyNewFurniture = function() {
    console.log(this.houseCondition);
    this.houseCondition += 50;
    console.log("u gud?");
}