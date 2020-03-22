'use strict';

class Pet
{
    constructor()
    {

        this.health = 3;
        this.image = 'assets/baby.png'
        this.pos = [canvas.width / 2, canvas.height - this.size[1] - 5]
        this.speed = 2
        this.isPlaying = false;
        this.isEating = false;
        this.targetPos = this.pos
        this.lastPoop = Date.now();
        this.lastFeed = Date.now();
        this.lastPlay = Date.now();
    }

    update()
    {
        if (this.pos[0] === this.targetPos[0] &&
            this.pos[1] === this.targetPos[1])
        {
            this.move();
        }
        else
        {
            this.changePosTarget();
        }
    }

    draw()
    {

    }

    move()
    {
        this.moveCoord(0);
        this.moveCoord(1);
    }

    changePosTarget()
    {
        roll = getRandInt(0, 9);

        // Change direction on colliding with edges.
        if (this.pos[0] + this.speed[0] >= canvas.width - this.size[0] ||
            this.pos[0] + this.dx <= this.size[0])
        {
            this.dx *= -1;
        }

        this.pos[0] += this.strafe * this.dx;

        return roll;
    }

    // Update the specified position axis to be closer to the value of the target position
    moveCoord(axis)
    {
        // Find the difference between the two values
        let dif = Math.abs(this.pos[axis] - this.targetPos[axis])

        if (this.pos[axis] > this.targetPos[axis])
        {
            if (this.speed > dif)
            {
                this.pos[axis] -= this.speed;
            }
            else
            {
                this.pos[axis] -= this.dif;
            }
        }
        else if (this.pos[axis] < this.targetPos[axis])
        {
            if (this.speed > dif)
            {
                this.pos[axis] += this.speed;
            }
            else
            {
                this.pos[axis] += this.dif;
            }
        }
    }
}