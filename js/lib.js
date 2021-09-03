var _CONTENT = [ 
	"叫蛋塔，我也常來這裡玩",
	"一個人住",
	"的房子還滿大的，歡迎你們來我家玩",
	"們玩累了就直接睡覺，沒問題的",
	"有時候有空會寫寫網頁",
	"架設過Minecraft伺服器",
	"目前擁有一個Discord社群",
	"曾買過20多個無用的網域"
];

var _PART = 0;

var _PART_INDEX = 0;

var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#text");

var _CURSOR = document.querySelector("#cursor");

function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 2000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 100);

var aAudio = new Audio('/media/a.mp3');
            function myAudioFunction(letter) {
                if(letter == 'a') {
                    aAudio.play();
                }
            }
