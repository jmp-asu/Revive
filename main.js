enchant();

window.onload = function(){

    var game = new Game(320, 320);
    game.fps = 15;
    game.preload("radio.png");
    
	game.onload = function(){
	
		var img = new Sprite(140,93); 
		img.image = game.assets["radio.png"];
		img.x = 20; 
		img.y = 50;
		game.rootScene.addChild(img);　
		
		
		var label = new enchant.Label();
        label.text = "１２月１２日午前８時３０分頃、H県F市を震源地とする震度７の地震が発生しました。現在震源地付近の市町村では避難勧告が発令されており、２次災害に注意して避難を・・・・・・・ブツン";
        label.width = 128;
        label.height = 64;
		label.x = 20;
		label.y = 150;
        label.font = "12px 'Arial'";
		game.rootScene.addChild(label);
	

        //bear = new Sprite(0, 0);
        //bear.image = game.assets["chara1.png"];
        //bear.x = 0;
        //bear.y = 0;
        //bear.frame = 5;
        //game.rootScene.addChild(bear);

        //bear.addEventListener("enterframe", function(){
            //this.x += 1;
            //this.frame = this.age % 2 + 6;
        //});


        //bear.addEventListener("touchstart", function(){
            //game.rootScene.removeChild(bear);
        //});
    };

    game.start();
};
