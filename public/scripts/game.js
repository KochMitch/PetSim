'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var pet;
var player = new Player();
var dung = [];

var isGameOver = false;

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
    //background = ctx.drawImage(resources.get('assets/Background.png'));

    reset();
    lastTime = Date.now();
    main();
}

// Main loop
function main()
{
    let now = Date.now();
    let dt = (now - lastTime) / 1000.0

    update(dt);
    draw();

    requestAnimationFrame(main);
};


// Update
function update(time)
{
    // Update the time.
    gameTime += dt;

    petControl.update(dt);
    player.update(dt);

    for (var i = 0; i < dung.length; i++)
    {
        dung[i].update();
    }
}

// Draw
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderer.draw(pet);
    renderer.draw(player);

    for (var i = 0; i < dung.length; i++)
    {
        renderer.draw(dung[i]);
    }
}

function reset()
{
    pet = new Pet();
}

// Game over
function gameOver()
{
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over-overlay').style.display = 'block';
    isGameOver = true;
}

// Random int.
function getRandInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hnadle key input
function handleInput(dt)
{
    if (input.isDown('DOWN') || input.isDown('s'))
    {
    }

    if (input.isDown('UP') || input.isDown('w'))
    {
    }

    if (input.isDown('LEFT') || input.isDown('a'))
    {
    }

    if (input.isDown('RIGHT') || input.isDown('d'))
    {
    }

    if (input.isDown('SPACE') &&
        !isGameOver &&
        Date.now() - lastFire > 100)
    {
    }
}
