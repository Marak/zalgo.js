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
      '͏','͜','͝','͞',
      '͟','͠','͢',' ','̸',
      '̷',' ͡',' ҉','_]',''];

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

zalgo.heComes = function(text, u, m, d){
    result = '';
    
    var options = {"up" : u, "down" : d, "mid" : m, "size" : "maxi"};    
    
    text = text.split('');
     for(var l in text){
       if(is_char(l)) {continue;} 
       result = result + text[l];
       var counts = {"up" : 0, "down" : 0, "mid" : 0};    

       
      switch(options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.min= randomNumber(2);
          counts.down = randomNumber(8);
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.min = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down= randomNumber(8) + 1;
      }
      var arr = ["up", "mid", "down"];
      for(var d in arr){
        var index = arr[d]
        for (var i = 0 ; i <= counts[index]; i++)
        {
          if(true) {
              p = eval(index)
              result = result + p[randomNumber(p.length)]
            }
          }
        }
      }
    return result;
};

sys.puts(zalgo.heComes('fuck fuck fuck we are dead.'));

