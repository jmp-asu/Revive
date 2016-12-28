/**
 *
 * ゲームデータ
 *
 */
var data = {
	"player": {
		"money": 1000,
		"items": {
			"blanket": 5, 
			"medicine": 1,
			"shizai": 0,
			"human": 0,
			}
	},
	"city": {
		"fukkoudo": 0,
		"kenkoudo": 20,
		"season": 1,
		"nouhin": 0,
	},
	"items": {
		"blanket": {
			"name": "毛布",
			"money": 0,
			"kenkoudo": 10,
			"fukkoudo": 0,
			"daizi": 0,
		},
		"medicine": {
			"name": "薬",
			"money": 0,
			"kenkoudo": 20,
			"fukkoudo": 0,
			"daizi": 0,
		},
		"water": {
			"name": "水",
			"money": 0,
			"kenkoudo": 5,
			"fukkoudo": 0,
			"daizi": 0,
		},
		"food": {
			"name": "食糧",
			"money": 0,
			"kenkoudo": 5,
			"fukkoudo": 0,
			"daizi": 0,
		},
		"radio": {
			"name": "ラジオ",
			"money": 0,
			"kenkoudo": 0,
			"fukkoudo": 0,
			"daizi": 0,
			
		},
		"shizai": {
			"name": "資材",
			"money": 0,
			"kenkoudo": 0,
			"fukkoudo": 0,
			"daizi": 1,
		},
		"human": {
			"name": "人手",
			"money": 0,
			"kenkoudo": 0,
			"fukkoudo": 0,
			"daizi": 1,
		}
		
	},
	"events": [
		{
			"name": "火災 (所持金：300億円、健康度：50%、復興度10% 下げる)",
			"money": -300,
			"kenkoudo": -50,
			"fukkoudo": -10,
			"prob":0.1
		},
		{
			"name": "津波 (所持金：300億円、健康度：20%、復興度5% 下げる)",
			"money": -300,
			"kenkoudo": -20,
			"fukkoudo": -5,
			"prob":1
		},
		{
			"name": "地震 (所持金：500億円、健康度：20%、復興度5% 下げる)",
			"money": -500,
			"kenkoudo": -20,
			"fukkoudo": -5,
			"prob":1
		},
		{
			"name": "台風 (所持金：200億円、健康度：10%、復興度3% 下げる)",
			"money": -200,
			"kenkoudo": -10,
			"fukkoudo": -3,
			"prob":1
		},	
		{
			"name": "洪水 (所持金：100億円、健康度：5% 下げる)",
			"money": -100,
			"kenkoudo": -5,
			"fukkoudo": 0,
			"prob":1
		},	
		{
			"name": "ボランティア (健康度：10% 上げる)",
			"money": 0,
			"kenkoudo": 10,
			"fukkoudo": 0,
			"prob":1
		},
		{
			"name": "自衛隊 (健康度：20%、復興度2% 上げる)",
			"money": 0,
			"kenkoudo": 20,
			"fukkoudo": 2,
			"prob":1
		},
		{
			"name": "チャリティー (所持金：200億円、健康度：10%、復興度2% 上げる)",
			"money": 200,
			"kenkoudo": 10,
			"fukkoudo": 2,
			"prob":1
		},
        {
			"name": "天皇陛下 (所持金：50000億円、健康度：100%、復興度100% 上げる)",
			"money": 50000,
			"kenkoudo": 100,
			"fukkoudo": 100,
			"prob":1
		},
		{
			"name": "募金 (所持金：50億円、健康度：5% 上げる)",
			"money": 50,
			"kenkoudo": 5,
			"fukkoudo": 0,
			"prob":1
		}	
	]	
};


 /**
 *
 * アクション
 *
 */
 
 // 直す
 function repair() {
	// 入力データを取得する
	var money = get_repair_money();
	if (money > data.player.money) {
		money = data.player.money;
	}
	
	var repair_val = Math.round(money * 0.1);
	data.city.fukkoudo += repair_val;
	data.player.money -= money;
	
	update_turn();
}

// 実験
function experiment() {
	//TODO
	update_turn();
}

// アイテムを使う
function use_item() {
	var item = get_item_used();
	if (item) {
		if (data.player.items[item] > 0) {
			data.player.items[item]--;
			data.city.fukkoudo += data.items[item].fukkoudo;
			data.city.kenkoudo += data.items[item].kenkoudo;
			data.city.nouhin += data.items[item].daizi;
			
		}
	}
	
	clear1();
	
}
 
 
 
// 村長とお話する（１）
function talk1_1() {
	
	var q1_1 = document.getElementById("quest1_1");
	var q1 = document.getElementById("quest1");
	var q1_2 = document.getElementById("quest1_2");
	var q1_3 = document.getElementById("quest1_3");
	var q1_4 = document.getElementById("quest1_4");

	
	q1_1.style.display = "none";
	q1.style.display = "";
	q1_2.style.display = "";
	q1_3.style.display = "";
	q1_4.style.display = "";

}
 
// 村人Aとお話する
function talk1_2() {
	
	var q1_2 = document.getElementById("quest1_2");
	var i1 = document.getElementById("item1");
	q1_2.style.display = "none";
	i1.style.display = "";
	
	data.player.items.human = data.player.items.human + 1;
	update_views();
	
}
 
// 村人Bとお話する
function talk1_3() {
	
	var q1_3 = document.getElementById("quest1_3");
	var i2 = document.getElementById("item2");
	q1_3.style.display = "none";
	i2.style.display = "";
	
	data.player.items.shizai = data.player.items.shizai + 1;
	update_views();
}
 
 // 村長とお話する（2）
function talk1_4() {
	
	var q1_4 = document.getElementById("quest1_4");
	var i3 = document.getElementById("item3");
	var nouhin = document.getElementById("nouhin");
	var a = document.getElementById("nouhin-label");
	q1_4.style.display = "none";
	i3.style.display = "";
	nouhin.style.display = "";
	a.style.display = "";
	
}

//クエストクリア①
function clear1(){
	
	
	
	var a = data.city.nouhin
	if( a == 2) {
		var i1 = document.getElementById("item1");
		var i2 = document.getElementById("item2");
		var i3 = document.getElementById("item3");
		var nouhin = document.getElementById("nouhin");
		var a = document.getElementById("nouhin-label");
		var end = document.getElementById("quest1END");
		var q1 = document.getElementById("quest1");
		var q1c = document.getElementById("quest1close");
		
		i1.style.display = "none";
		i2.style.display = "none";
		i3.style.display = "none";
		nouhin.style.display = "none";
		a.style.display = "none";
		quest1.style.display = "none";
		end.style.display = "";
		q1c.style.display = "";
		
		calendar();
		
		data.city.fukkoudo += 5;
		
		data.city.nouhin = 0;
		
		
	}
	update_views();
}

//クエストクリア①　非表示
function quest1_close() {
	
	var end = document.getElementById("quest1END");
	var q1c = document.getElementById("quest1close");
	end.style.display = "none";
	q1c.style.display = "none";
	
	
} 


//-----------------------------------------


/**
 *
 * 便利なツール
 *
 */
 
// 乱数を返す
function random(min, max) {
	return min + Math.random() * (max - min);
}

//アイテム受け取り
function get_item() {
	
	
	update_views();
	
}


// カレンディーシステム

var count = 0;

function calendar() {
	count = count += 1;
	if (count >= 3 ) {
		events();
		data.city.season += 1;
	　　　count = 0;	
	   
		}
		
	if(data.city.season >= 5) {
		game_end();
		data.city.season = 1;	
	}

	
}

// X周目を終わる
function end() {
	
	count = count += 2;
	calendar();
	kenkoudo_game_over();
	update_views();
	
}


function get_event_card_count() {
	var count = 0;
	for(var i = 0; i < data.events.length; i++) {
		count += data.events[i].prob;
	}
	return count;
}

function get_event_card(index) {
	var count = 0;
	for(var i = 0; i < data.events.length; i++) {
		count += data.events[i].prob;
		if (count > index) return data.events[i];
	}
	return data.events[data.events.length-1];
}

function events() {
	
        var card = Math.round(random(0,get_event_card_count()));	
		var event = get_event_card(card);
		
		data.player.money = event.money + data.player.money;
		data.city.kenkoudo = event.kenkoudo + data.city.kenkoudo;
		data.city.fukkoudo = event.fukkoudo + data.city.fukkoudo;
		
		
		data.city.fukkoudo = data.city.fukkoudo < 0 ? 0 : data.city.fukkoudo > 100 ? 100 : data.city.fukkoudo;
	    data.city.kenkoudo = data.city.kenkoudo < 0 ? 0 : data.city.kenkoudo > 100 ? 100 : data.city.kenkoudo;
	    data.player.money = data.player.money < 0 ? 0 : data.player.money ;
		
		document.getElementById("event-label").innerHTML = event.name;
		
					
}



// 直す資金の金額を取得
function get_repair_money() {
	return document.getElementById("build-money-input").value;
}

// 使用アイテムを取得
function get_item_used() {
	var item = document.getElementById("use-item-input").value;
	for (var p in data.player.items) {
		if (data.items[p].name == item) return p;
	}
	return null;
}

// 表示を更新する
function update_views() {
	document.getElementById("fukkoudo-label").innerHTML = data.city.fukkoudo + "%";
	document.getElementById("kenkoudo-label").innerHTML = data.city.kenkoudo + "%";
	document.getElementById("okane-label").innerHTML = data.player.money + "億円";
	document.getElementById("spring-label").innerHTML = data.city.season + "週目";
	document.getElementById("count-label").innerHTML = count;
	document.getElementById("nouhin-label").innerHTML = data.city.nouhin + "個";
	
	

	
	var items = "";
	var i = 0;
	for (var p in data.player.items) {
		if (data.player.items[p] > 0) {
			if (i > 0) items += ", ";
			items += data.items[p].name + " x " + data.player.items[p];
			i++;
		}
	}
	
	document.getElementById("items-label").innerHTML = items;	

	
}

// ゲームデータを更新する
function update_turn() {
	
	calendar();
	
	//data.city.fukkoudo += Math.round(random(-5,5));
	data.city.kenkoudo += Math.round(random(-5,5));
	
	data.city.fukkoudo = data.city.fukkoudo < 0 ? 0 : data.city.fukkoudo > 100 ? 100 : data.city.fukkoudo;
	data.city.kenkoudo = data.city.kenkoudo < 0 ? 0 : data.city.kenkoudo > 100 ? 100 : data.city.kenkoudo;
	data.player.money = data.player.money < 0 ? 0 : data.player.money ;
	
	kenkoudo_game_over();
		
	update_views();
}

//ゲーム終了
function game_end() {
	 
	var statu = document.getElementById("statu");
	var moves = document.getElementById("moves");
	var go = document.getElementById("go");
	var q1 = document.getElementById("quest01");
	
	statu.style.display = "none";
	moves.style.display = "none";
	q1.style.display = "none";
	go.style.display = "";
	
}

//健康度が0の時にゲームオーバー
function kenkoudo_game_over() {

	if(data.city.kenkoudo == 0) {
	
		game_end();
		
	}
 

}






/**
 *
 * ゲーム起動
 *
 */
window.onload = function() {
	update_views();
}