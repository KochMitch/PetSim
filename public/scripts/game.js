'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var pet = new Pet();
var tool = new Tool();
var dung = [];

// Load resources and start game
resources.load([
    'img/adult.png',
    'img/baby.png',
    'img/teen.png',
    'img/ball.png',
    'img/food.png',
    'img/gravestone.png',
    'img/heart.png',
    'img/poop.png',
    'img/scoop.png',
]);
resources.onReady(init);

// Setup
function init()
{
    reset();
    lastTime = Date.now();
    main();
}

// Main loop
function main()
{
    update();
    draw();

    requestAnimationFrame(main);
};


// Update
function update()
{
    // Update the time.
    gameTime += Date.now();

    pet.update();
    tool.update();

    for (var i = 0; i < dung.length; i++)
    {
        dung[i].update();
    }
}

// Draw
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pet.draw();
    tool.update();

    for (var i = 0; i < dung.length; i++)
    {
        dung[i].draw();
    }
}

// Random int.
function getRandInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
