'use strict';

class Pet extends Sprite
{
    constructor()
    {
        this.frames = ["assets/baby.png"]
        this.health = 3;
        this.pos = [canvas.width / 2, canvas.height - this.size[1] - 5]
        this.speed = 2
        this.isPlaying = false;
        this.isEating = false;
        this.targetPos = this.pos
        this.hunger = 2000;
        this.happiness = 2000;
        this.poop = 2500;
    }

    constructor(frames, pos, size)
    {
        super(frames, pos, size);
        this.health = 3;
        this.pos = [canvas.width / 2, canvas.height - this.size[1] - 5]
        this.speed = 2
        this.isPlaying = false;
        this.isEating = false;
        this.targetPos = this.pos
        this.hunger = 2000;
        this.happiness = 2000;
        this.poop = 2500;
    }
}