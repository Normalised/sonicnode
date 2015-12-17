var osc = require('node-osc');
var fs = require('fs');

var exec = require('child_process').execFile;
var client = new osc.Client('localhost',4557);

var startSC = function() {
   console.log("Start SC");

   var server = 'piserve.bat';
   exec(server, function(err, data) {
        if(err) {
          console.log("ERROR:",err)
        } else {
          console.log(data.toString());
        }
    });
}

var quitNicely = function() {
  client.send('/exit',0, function() {
    process.exit();
  });
};

if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

process.on("SIGINT", function () {
  quitNicely();
});

//startSC();

//var stats = fs.statSync('music.rb');

if(!fs.existsSync('music.rb')) {
  console.log('music.rb is not a file. creating.');
  var newMusic = "play 60\nsleep 0.25\nplay 65\nsleep 0.25\nplay 69";
  fs.writeFileSync('music.rb', newMusic, 'utf8', function(err) {
    if(err) {
      console.error("Couldn't create music.rb, exiting");
    }
  });
}

var sendToPi = function(filename) {
  var text = fs.readFileSync(filename,'utf8');
  client.send('/run-code', 0, text, function(t) {});
}

fs.watch('./', function (event, filename) {
  if(filename == 'music.rb') {
    sendToPi('music.rb');
  }
});

sendToPi('music.rb');
