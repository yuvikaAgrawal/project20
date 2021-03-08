var garImg,garden,catImg,catImg1,catImg2,cat,mouseImg,mouse,mouseImg1,mouseImg2;
function preload() {
    //load the images here
   garImg=loadImage("images/garden.png");
   catImg=loadAnimation("images/cat1.png");
   mouseImg=loadAnimation("images/mouse1.png");
   catImg1=loadAnimation("images/cat2.png","images/cat3.png");
   catImg2=loadAnimation("images/cat4.png");
   mouseImg1=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,1000,800);
    garden.addImage(garImg);
    garden.scale=1.2;
    cat=createSprite(800,600,20,20);
    cat.addAnimation("catImage",catImg);
   cat.scale=0.15;
   mouse=createSprite(200,600,20,20);
   mouse.addAnimation("mouseImage",mouseImg);
   mouse.scale=0.1;
}

function draw() {
    
    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("lastImg",catImg2);
        cat.changeAnimation("lastImg");
        cat.velocityX=0;
        mouse.addAnimation("lastMouse",mouseImg2);
        mouse.changeAnimation("lastMouse");
    }
    
    drawSprites();
    
}


function keyPressed(){
    
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRun",catImg1);
      cat.changeAnimation("catRun");
      mouse.addAnimation("mouseRun",mouseImg1);
      mouse.changeAnimation("mouseRun");
  }

}




