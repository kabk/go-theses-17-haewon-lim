var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
setpixelated(canvas.getContext('2d'));

function setpixelated(context){
    context['imageSmoothingEnabled'] = false;       /* standard */
    context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    context['oImageSmoothingEnabled'] = false;      /* Opera */
    context['webkitImageSmoothingEnabled'] = false; /* Safari */
    context['msImageSmoothingEnabled'] = false;     /* IE */
}

// to keep track of the dots:
var dots=[];
var numDots = 3000;
var width = canvas.width;
var height = canvas.height;
var bounce = -1;


// generate an array of random dots with x and y coordinates

for(var i=0 ; i<numDots ; i++){
  var x = Math.random();
  var y = Math.random();
  dots.push({
    x : x * width,
    y : y * height,
    vx : x,
    vy : y,
  })
}



function draw() {
    // clear the screen
    ctx.clearRect(0, 0, width, height);
    var j, dot;
    for(j = 0; j < numDots; j++) {
        dot = dots[j];
        // put the pen down
        ctx.beginPath();
        // draw a 360 degree arc (=circle! 4 is the size of dots)
        ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2, false);
        // set the fill style to black color
        ctx.fillStyle = "#0000";

        // set the fill style to a random color
       //ctx.fillStyle = "rgb("+
  //Math.floor(Math.random()*256)+","+
  //Math.floor(Math.random()*256)+","+
  //Math.floor(Math.random()*256)+")";
        // fill the arc
        ctx.fill();
        //ctx.stroke();

    }
}

function update(){
  // repositioning all the dots with current canvas size
  var width = canvas.width;
  var height = canvas.height;

  var i,dot;
  for( i=0 ; i< numDots ; i++){
    dot = dots[i];
    dot.x = dot.vx * width;
    dot.y = dot.vy * height;    
  }
}

setInterval(function() {
    update();
    draw();
}, 1000/24);



//for the foot note (it stays at the position where it belongs)
//@media screen and (max-width:768px;) {
//  .mycanvas {
//  position: static;
//}
//}