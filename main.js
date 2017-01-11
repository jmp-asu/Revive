enchant();

window.onload = function(){

    var game = new Game(800, 640);
    game.fps = 15;
    game.preload("images/radio.png",
				"sound/radio.mp3",
				"images/start1.png",
				"images/start2.png",
				"images/radio2.png",
				"images/huki.png",
				"images/next.png"
				);
	
    
	game.onload = function(){
		
		var title = function(){
		
			var scene = new scene();
	
			var a = new Sprite(800,640);
			a.image = game.assets["images/start1.png"];
			scene.addChild(a);
		
			var b = new Sprite(146,58);
			b.image = game.assets["images/start2.png"];
			b.x = 325;
			b.y = 500;
			scene.addChild(b);		
			
			return scene;
		
		};
		
		game.replaceScene(title());
		
	};
		
    game.start();
	
}
