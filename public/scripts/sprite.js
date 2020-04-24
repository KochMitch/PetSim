'use strict';

class Sprite
{
    constructor(frames, pos, size)
    {
        this.frames = frames
        this.currFrame = frames[0]
        this.pos = pos
        this.size = size
    }

    get image()
    {
        return this.currFrame;
    }

    set image(newImage)
    {
        this.currFrame = newImage;
    }

    update()
    {
    }

    draw()
    {

    }
}