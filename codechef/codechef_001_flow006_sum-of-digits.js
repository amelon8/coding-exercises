process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_data = "";  // standard input is stored into arr
var input_arr = [];

process.stdin.on('data', function(chunk){
  input_data += chunk;
});

process.stdin.on('end', function() {
  input_arr = input_data.split("\n");

  var N = parseInt(input_arr.shift());
  // console.log("N:", N);

  for (var i=0; i < N; i++) {
    var str = input_arr[i];
    var sum = 0;
    for (var j=0; j < str.length; j++) {
      sum += str[j] - "0";
    }
    console.log(sum);
  }
});

