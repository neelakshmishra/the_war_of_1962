var player1,p1Img
var enemie1,e1Img,enemie2,e2Img
var fireing,f1Img
function preload(){
p1Img = loadImage("Img/soldger.png");
e1Img = loadAnimation("Img/enemie1/1_terrorist_1_Attack1_000.png",
"Img/enemie1/1_terrorist_1_Attack1_001.png",
"Img/enemie1/1_terrorist_1_Attack1_002.png",
"Img/enemie1/1_terrorist_1_Attack1_003.png",
"Img/enemie1/1_terrorist_1_Attack1_004.png",
"Img/enemie1/1_terrorist_1_Attack1_005.png")
e2Img = loadAnimation("Img/enemie2/1_terrorist_1_Attack4_000.png",
"Img/enemie2/1_terrorist_1_Attack4_001.png",
"Img/enemie2/1_terrorist_1_Attack4_002.png",
"Img/enemie2/1_terrorist_1_Attack4_003.png",
"Img/enemie2/1_terrorist_1_Attack4_004.png",
"Img/enemie2/1_terrorist_1_Attack4_005.png")
f1Img = loadAnimation("Img/fireing/Flash_A_01.png",
"Img/fireing/Flash_A_02.png",
"Img/fireing/Flash_A_03.png")
}
function setup(){
 var canvas = createCanvas(1500,1500);
 enemie1 = createSprite(400,200,10,10);
 enemie2 = createSprite(400,400,10,10)
      
}

function draw(){
    background("black");
   player1 = createSprite(600,200,25,25);
   player1.addImage("pc",p1Img);
   player1.scale=0.5
   enemies();
   
   drawSprites();
}
function enemies(){
   
    enemie1.addAnimation("helo",e1Img)
    enemie1.scale = 0.3
   
    if (frameCount%80 === 0){
        enemie2 = createSprite(400,500,10,10)
    enemie2.addAnimation("he",e2Img)
    enemie2.scale = 0.2
    enemie2.velocityX = 5
    }
   


}
function soldierFire(){
     fireing = createSprite(player1.x+5,player1.y,15,15)
     fireing.addAnimation('fire',f1Img)
     fireing.scale =0.6
     fireing.velocityX = 4
    }
    function keyPressed(){
        if(keyCode === 32){
          console.log('key pressed')
          soldierFire();
        }
    }