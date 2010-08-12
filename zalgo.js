var sys = require('sys');

soul = { 
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

var zalgo = {};

function randomNumber(range) {
  r = Math.floor(Math.random()*range);
  return r;
};

function is_char(character) {
  var bool = false;
  all.filter(function(i){
   bool = (i == character);
  });
  return bool;
}

zalgo.heComes = function(text, options){
    result = '';
    
    options = options || {};
    options["up"] = options["up"] || true;
    options["mid"] = options["mid"] || true;
    options["down"] = options["down"] || true;
    options["size"] = options["size"] || "maxi";
    var counts;
    text = text.split('');
     for(var l in text){
       if(is_char(l)) { continue; } 
       result = result + text[l];
       
      counts = {"up" : 0, "down" : 0, "mid" : 0}; 
         
      switch(options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.min= randomNumber(2);
          counts.down = randomNumber(8);
        break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.min = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
        break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down= randomNumber(8) + 1;
        break;
      }
      
      var arr = ["up", "mid", "down"];
      for(var d in arr){
        var index = arr[d];
        for (var i = 0 ; i <= counts[index]; i++)
        {
          if(options[index]) {
              result = result + soul[index][randomNumber(soul[index].length)];
            }
          }
        }
      }
    return result;
};

sys.puts('\n\n\n\n\n\n\n');
sys.puts(zalgo.heComes('its a chain'));
sys.puts('\n\n\n\n\n\n\n');

