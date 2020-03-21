'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var pet = new Pet();

// Game start
init();

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
