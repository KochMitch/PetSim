'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var pet = new Pet();

// Game start

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

}

// Draw
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //pet.draw();
}
