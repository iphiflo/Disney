
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
	   
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '69')
{
	new_image('elsa.jpg');
	console.log("e")
}
if(keyPressed == '065')
{
	block_x = 250;
	new_image('anna.png'); 
	console.log("a");
}

if(keyPressed == '79')
{
	block_x =500;
	new_image('olaf.png'); 
	console.log("o");
}
if(keyPressed == '75')
{
	block_x = 850;
	new_image('Kristoff_Bjorgman.png'); 
	console.log("k");
}
	
}

