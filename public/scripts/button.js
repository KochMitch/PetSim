'use strict';

class Button
{
    constructor(name, image, buttonX, buttonY)
    {
        this.name = name;
        this.image = image;

        //position
        this.buttonX = buttonX;
        this.buttonY = buttonY;

        //size of image/button
        this.buttonW = 38;
        this.buttonH = 25;
    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//define a new button, the name should be taken from the id and the src from the image src
const button = new Button("food", "assets/food.png", 0, 0)

//Render button (clickable test version)
//ctx.fillStyle = 'red';
//ctx.fillRect(0, 0 , 30, 20);
//ctx.fillRect(Button.buttonX, Button.buttonY, Button.buttonW, Button.buttonH);

//DO SOMETHING LIKE BELOW, BUT USING THE RESOURCES.JS AND RENDERER.JS???
var img = document.getElementById("food"); //draw these images for all the buttons
ctx.drawImage(img, button.buttonX, button.buttonY, button.buttonW, button.buttonH);


// Add event listener to canvas element
canvas.addEventListener('click', function(event) {

    //if click occurs in the button area, do something
    if (
        event.x > button.buttonX && 
        event.x < button.buttonX + 2*button.buttonW + 20 &&
        event.y > button.buttonY && 
        event.y < button.buttonY + 4*button.buttonH
    )
    {
        console.log("clicked")

        //do something based on button name???
    }

    console.log("a click on the canvas")
}, true);
