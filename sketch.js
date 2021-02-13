var tom,tomSImg,tomMImg,tomLimg;
var bg,bgImg;
function preload(){
    tomSImg=loadImage("cat1.png")
    bgImg=loadImage("graden.png")
}
function setup() {
    createCanvas(1000,1000);

    bg=createSprite(500,500)
    bg.addImage("bgi",bgImg);
    
    tom=createSprite(700,700);
    tom.addImage("tom1",tomSImg);   
    tom.scale=0.5;
} 
function draw() {
    drawSprites();
    
}