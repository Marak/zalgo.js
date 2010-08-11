var up = [
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
];


var down = [
      '̖','̗','̘','̙',
      '̜','̝','̞','̟',
      '̠','̤','̥','̦',
      '̩','̪','̫','̬',
      '̭','̮','̯','̰',
      '̱','̲','̳','̹',
      '̺','̻','̼','ͅ',
      '͇','͈','͉','͍',
      '͎','͓','͔','͕',
      '͖','͙','͚','̣'];


var mid = [
      '̕','̛','̀','́',
      '͘','̡','̢','̧',
      '̨','̴','̵','̶',
      '͜','͝','͞',
      '͟','͠','͢','̸',
      '̷','͡',' ҉'];

var all = [].concat(up,down,mid);
var sys = require('sys');


var zalgo = {};

function randomNumber(range) {
  r = Math.floor(Math.random()*range);
  return r;
};

function is_char(character) {
  var bool = false;
  all.filter(function(i){
   bool = (i == character);
  })
  return bool;
}

zalgo.heComes = function(text, u, m, d, size){
    result = '';
    
    var options = {"up" : u || true, "down" :  d || true, "mid" : m || false, "size" : size || "maxi"};    
    
    text = text.split('');
     for(var l in text){
       if(is_char(l)) {
         continue;
       } 
       result = result + text[l];

       
       
       var counts = {"up" : 0, "down" : 0, "mid" : 0};    

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
        var index = arr[d]
        for (var i = 0 ; i <= counts[index]; i++)
        {
          if(options[index]) {
              p = eval(index)
              result = result + p[randomNumber(p.length)]
            }
          }
        }
      }
    return result;
};

var colors = require('colors');

sys.puts('\n\n\n\n\n\n\n');
sys.puts(zalgo.heComes('it started out with one commit and then things started to get out of hand...'));
sys.puts('\n\n\n\n\n\n\n');

