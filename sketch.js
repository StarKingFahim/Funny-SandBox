const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var PLAY=1;

var END=0;

var SERVE=-1;

var gameState = PLAY;

var back1,back2,back_group, backImg;

var boy, boy_running, boy_collided;

var loot=0;

var gameOver,gameOverImg;

var Tital,Tital_Img;

var Start,Start_Img;

//to contain Images
var ground1Img;
var ground2Img;
var ground3Img;
var ground4Img;
var ground5Img;
var ground6Img;

var base;

var obs,boxImg;

var earth, E_group;


var hill_group;
var hillside1,hillside2,hillside3,hillside4,hillside5,hillside6,hillside7,hillside8;
var hillside1_Img,hillside2_Img,hillside3_Img,hillside4_Img;
var hilltop1_Img,hilltop2_Img,hilltop3_Img,col;


var boy1;

var longGrassImg;


function preload() 
{
  backImg = loadImage("BG.png"); 
   
  ground1Img = loadImage("Tiles/1.png");
  ground2Img = loadImage("Tiles/2.png");
  ground3Img = loadImage("Tiles/3.png");
  ground4Img = loadImage("Tiles/4.png");
  ground5Img = loadImage("Tiles/5.png");
  ground6Img = loadImage("Tiles/6.png");

  longGrassImg = loadImage("longGrass.png");

  
  hillside1_Img = loadImage("Tiles/7.png");
  hillside2_Img = loadImage("Tiles/8.png");
  hillside3_Img = loadImage("Tiles/10.png");
  hillside4_Img = loadImage("Tiles/11.png");
  
  hilltop1_Img = loadImage("Tiles/1.png");
  hilltop2_Img = loadImage("Tiles/2.png");
  hilltop3_Img = loadImage("Tiles/3.png");


  

  boxImg=loadImage("Props/Crate.png");
  
  
  Tital_Img=loadImage("Rush Mayhem.jpg");
  
  Start_Img=loadImage("start.png");
  
  gameOverImg=loadImage("well-played.jpg");

for(var i=0;i<15;i++)
{
  boy1Img=loadImage("boy/Walk (1).png");
}
  
}




function setup() 
{
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;

  
  back_group = createGroup();
  
  hill_group = createGroup();
  
  
  /*back1 = createSprite(200, 300, 10, 10);
  back1.addImage(backImg);
  back1.scale = 1;
  back1.velocityX=-0.5;
  back2= createSprite(1200, 300, 10, 10);
  back2.addImage(backImg);
  back2.scale = 1;
  back2.velocityX=-0.5;*/
    

  
  
  base=createSprite(350,490, 700, 10);
  base.visible=false;

  g_group1 = createGroup();
  g_group2 = createGroup();
  g_group3 = createGroup();

  E_group = createGroup();

 
    

  



//UnderConstruction Portion_____________________________________________________________________________________________________________________________________________________________________

  

  ground= new Ground(400,755,5000,100,0,longGrassImg); 


  boy1= new Boy(90, 200,125,125,0,boy1Img);
  //boy1.add(world,boy1);

  Box1= new EarthClass(300,620,50,70,0,ground1Img);
  Box2= new EarthClass(350,620,50,70,0,ground2Img);
  Box3= new EarthClass(400,620,50,70,0,ground3Img);
  Box4= new EarthClass(300,690,50,70,0,ground4Img);
  Box5= new EarthClass(350,690,50,70,0,ground5Img);
  Box6= new EarthClass(400,690,50,70,0,ground6Img);


  

//_______________________________________________________________________________________________________________________________________________________________________________________________

}

function TerrainMaker()
{
  //In future Updates more terrain will be available
  

  if (frameCount%Math.round(random(300,1000)) === 0)
{
   
      
  
  //hill_group hillside1 ground5
  
  hillside1 = createSprite(750, 516, 65, 65); 
  hillside1.addImage(hillside1_Img);
  hillside1.scale = 0.5;
  hillside1.velocityX=-2;
  hill_group.add(hillside1);
  
  
  
  hillside2 = createSprite(814, 516, 65, 65); 
  hillside2.addImage(hillside2_Img);
  hillside2.scale = 0.5;
  hill_group.add(hillside2);
  
  
  
  hillside3 = createSprite(878, 516, 65, 65);  
  hillside3.addImage(ground5Img);
  hillside3.scale = 0.5;
  hill_group.add(hillside3);
  
  
  
  hillside4 = createSprite(942, 516, 65, 65);  
  hillside4.addImage(hillside3_Img);
  hillside4.scale = 0.5;
  hill_group.add(hillside4);
  
  
  
  hillside5 = createSprite(1006, 516, 65, 65); 
  hillside5.addImage(hillside4_Img);
  hillside5.scale = 0.5;
  hill_group.add(hillside5);
  
  hillside6 = createSprite(814, 452, 65, 65); 
  hillside6.addImage(hilltop1_Img);
  hillside6.scale = 0.5;
  hill_group.add(hillside6);
   
  
  hillside7 = createSprite(878, 452, 65, 65);  
  hillside7.addImage(hilltop2_Img);
  hillside7.scale = 0.5;
  hill_group.add(hillside7);
      
      
  hillside8 = createSprite(942, 452, 65, 65);  
  hillside8.addImage(hilltop3_Img);
  hillside8.scale = 0.5;
  hill_group.add(hillside8);
      
  
  }

     
      
 
}




function draw() 
{
  
  background(backImg);
  //image(back1, 0,-displayHeight*4,displayWidth, displayHeight*5);
 
  Engine.update(engine);
  
 // back1.display()

  ground.display();


  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();





  boy1.display();

  console.log();

  //console.log(frameCount);
     
  
   /* if(back1.x<=-502)
      {
        back1.x=1495;      
      }
  
   if(back2.x<=-502)
      {
        back2.x=1495;      
      }*/


  
  
  

  if(gameState===PLAY)
    {
      for (var i = 0; i <=800; i=i+50) 
     {
      
      if(World.frameCount%50===0)
      {

        ground5 = new Ground(i, 200, 130, 130,ground5Img);
        ground5.scale = 0.5
        E_group.add(ground5);
        
        
        ground2 = new Ground(i, 200, 130, 130,ground2Img);
        ground2.scale = 0.5;
        E_group.add(ground2);
      

        ground5.display();
        ground2.display();
        
      }

      
    

     }
      
      
      
     //TerrainMaker()
      
     //Obstacles()
      
      //Character()
  
     
    }

  if(gameState===END)
    {
      EndScreen()
    }
  
  
  drawSprites();
      
}

function keyPressed()
{
  if(keyCode === UP_ARROW)  
  {
	   Matter.Body.applyForce(boy1.body, boy1.body.position, {x:0, y: -500})
  }
  if(keyCode === DOWN_ARROW)  
  {
	   Matter.Body.applyForce(boy1.body, boy1.body.position, {x:0, y: 500})
  }
  if(keyCode === RIGHT_ARROW)  
  {
	   Matter.Body.applyForce(boy1.body, boy1.body.position, {x:500, y: 0 })
  }
  if(keyCode === LEFT_ARROW)  
  {
	   Matter.Body.applyForce(boy1.body, boy1.body.position, {x:-500, y: 0})
  }
}

function EndScreen()
{
  
  gameOver=createSprite(350,300,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale=1.8;

}
