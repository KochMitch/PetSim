'use strict';

(function ()
{
    function update(pet, time)
    {
        if (pet.pos[0] === pet.targetPos[0] &&
            pet.pos[1] === pet.targetPos[1])
        {
            pet.move();
        }
        else
        {
            pet.changePosTarget();
        }
    }

    function move(pet)
    {
        pet.moveCoord(0);
        pet.moveCoord(1);
    }

    function changePosTarget(pet)
    {
        roll = getRandInt(0, 9);

        // Change direction on colliding with edges.
        if (pet.pos[0] + pet.speed[0] >= canvas.width - pet.size[0] ||
            pet.pos[0] + pet.dx <= pet.size[0])
        {
            pet.dx *= -1;
        }

        pet.pos[0] += pet.strafe * pet.dx;

        return roll;
    }

    // Update the specified position axis to be closer to the value of the target position
    function moveCoord(pet, axis)
    {
        // Find the difference between the two values
        let dif = Math.abs(pet.pos[axis] - pet.targetPos[axis])

        if (pet.pos[axis] > pet.targetPos[axis])
        {
            // Check if the difference is greater than the speed
            if (pet.speed > dif)
            {
                pet.pos[axis] -= pet.speed;
            }
            else
            {
                pet.pos[axis] -= pet.dif;
            }
        }
        else if (pet.pos[axis] < pet.targetPos[axis])
        {
            // Check if the difference is greater than the speed
            if (pet.speed > dif)
            {
                pet.pos[axis] += pet.speed;
            }
            else
            {
                pet.pos[axis] += pet.dif;
            }
        }
    }

    function reset(pet)
    {
        pet.frames = ["assets/baby.png"]
        pet.health = 3;
        pet.pos = [canvas.width / 2, canvas.height - pet.size[1] - 5]
        pet.speed = 2
        pet.isPlaying = false;
        pet.isEating = false;
        pet.targetPos = pet.pos
        pet.hunger = 2000;
        pet.happiness = 2000;
        pet.poop = 2500;
    }

    window.petControl =
    {
        update(pet, time);,
        reset(pet);
    };
});


//function draw()