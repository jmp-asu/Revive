﻿enchant();

var game;

function talk1_1() {
	// 現在のシーン：
	// game.currentScene
	// 例：
	// var img = new Sprite(146, 58);                   
	// img.image = game.assets['img/start2.png'];     
	// img.x = 325;                                      
	// img.y = 500;
	// game.currentScene.addChild(img);
}

window.onload = function() {
	
    game = new Game(800, 640); 
    game.fps = 15;                 
    game.preload("img/start2.png",
				"img/start1.png",
				"img/radio.png",
				"img/huki.png",
				"img/radio2.png",
				"img/staff.png",
				"img/map.png",
				"img/waku.png"
				); 
				
	game.preload("sound/title.mp3",
				"sound/radio.mp3",
				"sound/main1.mp3"
				);
				
	game.preload("se/start.mp3"
				);			
		
	game.onload = function() { 
	
//-----------------------------------------------------------------------------------------
// データ
	
	var BGM1 = Sound.load("sound/title.mp3");
	var BGM2 = Sound.load("sound/radio.mp3");
	var BGM3 = Sound.load("sound/main1.mp3");
	
	var SE1 = Sound.load("se/start.mp3");
	
	
//-----------------------------------------------------------------------------------------


		var startScene = function() {
			
			var scene = new Scene();                              
	   

			var titleImage = new Sprite(800, 640);                   
			titleImage.image = game.assets['img/start1.png'];     
			scene.addChild(titleImage);                                         
            
			var startImage = new Sprite(146, 58);                   
			startImage.image = game.assets['img/start2.png'];     
			startImage.x = 325;                                      
			startImage.y = 500;

			startImage.ontouchstart = function(){
				game.assets["se/start.mp3"].play();
			};
			
			scene.addChild(startImage); 
			
			scene.addChild(BGM1);
            scene.addEventListener(Event.ENTER_FRAME, function(){
               BGM1.play();
            });
			

			startImage.addEventListener(Event.TOUCH_START, function(e) {
            game.replaceScene(staffScene());    
            });
 	
            return scene;
         };
		 
		var prologueScene = function() {
			
			var scene = new Scene();
			
			var img1 = new Sprite(800,640); 
			img1.image = game.assets["img/radio.png"];
			img1.x = 0;
			scene.addChild(img1);
			
			var img2 = new Sprite(452,332); 
			img2.image = game.assets["img/radio2.png"];
			img2.x = 170;
			img2.y = 270;
			img2.scale(0.5,0.5);
			scene.addChild(img2);
			
			var img3 = new Sprite(200,200); 
			img3.image = game.assets["img/huki.png"];
			img3.x = 170;
			img3.y = 180;
			img3.scale(1.8,1.5)
			scene.addChild(img3);　　　
           
			var label = new enchant.Label();
			label.text = "１２月１２日午前８時３０分頃、H県F市を震源地とする震度７の地震が発生しました。現在震源地付近の市町村では避難勧告が発令されており、２次災害に注意して避難を・・・・・・・";
			label.color = "white";
			label.width = 200;
			label.height = 50;
			label.x = 170;
			label.y = 220;
			label.font = "normal normal 15px/1.0 monospace";
			scene.addChild(label);

			scene.addChild(BGM2);
			scene.addEventListener(Event.ENTER_FRAME, function(){
               BGM2.play();
            });
			
			scene.addEventListener(Event.TOUCH_START, function(e) {
				game.replaceScene(gameScene());    
            });

			return scene;

		}; 
	
		var staffScene = function() {
			
			var scene = new Scene();
			           
			var staff = new Sprite(800, 640);
			staff.image = game.assets["img/staff.png"];
			scene.addChild(staff);
			
			scene.addEventListener(Event.TOUCH_START, function(e) {
            game.replaceScene(prologueScene());    
            });
	
			return scene;

		}; 
		 
        var gameScene = function() {
			
			var scene = new Scene();
			           
			var map = new Sprite(640,640);
			map.image = game.assets["img/map.png"];
			scene.addChild(map);
			
			var waku = new Sprite(160,640);
			waku.image = game.assets["img/waku.png"];
			waku.x = 640;
			waku.y = 0;
			scene.addChild(waku);
			
			document.getElementById("ui").style.display = "block";
			
			//scene.addChild(BGM3);
            //scene.addEventListener(Event.ENTER_FRAME, function(){
               //BGM3.play();
            //});
	
			return scene;

		}; 
                
        game.replaceScene(startScene());
        
    
	};
    game.start();

    

}

