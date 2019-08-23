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
        (this.hungry) ? console.log("fewd. yum.") : '';
    }
    this.sleep = function() {
        (this.sleepy) ? console.log('Zzz.') : "";
    }
    this.play = function() {
        (this.bored) ? console.log('Pleh!') : '';
    }
    this.increaseAge = function() {
        this.age++;
        console.log("hbd 2 meh. Om " + age + "now.");
    }
}
var animals = {};
animals.dog = new DigitalPal();
animals.dog.outside = false;
animals.dog.bark = function() {
    console.log("Woof! Woof!");
}
animals.dog.goOutside = function() {
    (animals.dog.outside = false) ? console.log("yeh! owsyd.") : console.log('we owsyd aready.');   
    animals.dog.outside = true;
}
animals.dog.goInside = function() {
    (animals.dog.outside = true) ? console.log("o wut?") : console.log('we insyd aready.');   
    animals.dog.outside = false;
}
animals.cat = new DigitalPal();
animals.cat.houseCondition = 100;
animals.cat.meow = function() {
    console.log("mehow!");
}
animals.cat.destroyFurniture = function() {
    console.log(animals.cat.houseCondition);
    while (animals.cat.houseCondition > 0) {
        animals.cat.houseCondition -= 10;
    }
    console.log(animals.cat.houseCondition);
    console.log('Muahaha. No mo shtuff.');
    animals.cat.bored = false;
    animals.cat.sleepy = true;
}
animals.cat.buyNewFurniture = function() {
    console.log(animals.cat.houseCondition);
    animals.cat.houseCondition += 50;
    console.log("u gud?");
}