enchant();

window.onload = function() {
	
    var game = new Game(800, 640); 
    game.fps = 15;                 
    game.preload("images/start2.png",
				"images/start1.png",
				"sound/title.mp3",
				"images/chara0.gif"
				); 
		
	game.onload = function() { 
	
	// データ
	
	var BGM1 = Sound.load("sound/title.mp3");


		var startScene = function() {
			
			var scene = new Scene();                              
	   

			var titleImage = new Sprite(800, 640);                   
			titleImage.image = game.assets['images/start1.png'];     
			scene.addChild(titleImage);                                         
            
			var startImage = new Sprite(146, 58);                   
			startImage.image = game.assets['images/start2.png'];     
			startImage.x = 325;                                      
			startImage.y = 500;                                     
			scene.addChild(startImage); 
			
			scene.addChild(BGM1);
            scene.addEventListener(Event.ENTER_FRAME, function(){
               BGM1.play();
            });

			startImage.addEventListener(Event.TOUCH_START, function(e) {
            game.replaceScene(prologueScene());    
            });
 	
            return scene;
         };
		 
		
		var prologueScene = function() {
			
			var scene = new Scene();
			           
			var mob = new Sprite(32, 32);
			mob.image = game.assets["images/chara0.gif"];
			mob.x = 200;
			mob.y = 160;
			scene.addChild(mob);
	
			return scene;

	}; 
		 
        
                
        game.replaceScene(startScene());
        
    
	};
    game.start();

    

}

