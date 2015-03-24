//Original by Marak Squires, five years ago... :-)
//2015-03-24 jorge@jorgechamorro.com
//node zalgo.js 'The text' up down mid

var soul = { 
  "up" : [
    '̍','̎','̄','̅',
    '̿','̑','̆','̐',
    '͒','͗','͑','̇',
    '̈','̊','͂','̓',
    '̈','͊','͋','͌',
    '̃','̂','̌','͐',
    '̀','́','̋','̏',
    '̒','̓','̔','̽',
    '̉','ͣ','ͤ','ͥ',
    'ͦ','ͧ','ͨ','ͩ',
    'ͪ','ͫ','ͬ','ͭ',
    'ͮ','ͯ','̾','͛',
    '͆','̚'
    ],
  "down" : [
    '̖','̗','̘','̙',
    '̜','̝','̞','̟',
    '̠','̤','̥','̦',
    '̩','̪','̫','̬',
    '̭','̮','̯','̰',
    '̱','̲','̳','̹',
    '̺','̻','̼','ͅ',
    '͇','͈','͉','͍',
    '͎','͓','͔','͕',
    '͖','͙','͚','̣'
    ],
  "mid" : [
    '̕','̛','̀','́',
    '͘','̡','̢','̧',
    '̨','̴','̵','̶',
    '͜','͝','͞',
    '͟','͠','͢','̸',
    '̷','͡',' ҉'
    ]
};

var all = [].concat(soul.up, soul.down, soul.mid);

Array.prototype.times= function (f) {
  while (this[0]) f(this[0]), --this[0];
};

function rnd (n) { return Math.floor(Math.random()*n) }

function is_char (character) {
  var bool = false;
  all.filter(function (i) { bool= (i === character) });
  return bool;
}

function zalgo (text, up, down, mid) {
	var result= '';
	text.split('').forEach(function (v,i,o) {
		if (!is_char(i)) {
			result+= v;
			var counts= {up:rnd(up), down:rnd(down), mid:rnd(mid)};
			Object.getOwnPropertyNames(counts).forEach(function (v,i,o) {
				[counts[v]].times(function () {
				  result+= soul[v][rnd(soul[v].length)];
				});
			});
		}
	});
  return result;
}

var args= process.argv;
var pad= '\n\n\n\n\n\n\n\n\n\n\n\n\n';
process.stdout.write(pad+zalgo(args[2], args[3], args[4], args[5])+pad);
