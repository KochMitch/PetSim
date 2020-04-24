'use strict';

(function ()
{

    window.renderer =
    {
        draw: function (sprite)
        {
            ctx.drawImage(
                resources.get(sprite.image),
                sprite.pos[0], sprite.pos[1],
                sprite.size[0], sprite.size[1]);
        }
    }
})();