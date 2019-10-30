function preload() {
  // put preload code here
}
var balls = [];
var mouseC = 0; // mouseClicked
var animation_50Button;
var colorButton;
var colorList = ['yellow', 'cyan', 'magenta', 'white'];
var j = 0; // counter to pick a color from ColorList
var jj = 0; // timer to reset changeColor function

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');

  // creating the balls

  for (var i = 0; i < 100; i++) {
    balls[i] = createDiv();
    balls[i].id('ball');
    balls[i].addClass('yellow');
    balls[i].addClass('ballPos_1');
    if (balls[i].hasClass('ballPos_1')) {
      balls[i].position(random() * width, random() * height);
    }
  }

  // button to trigger animation_50 (cyan)
  animation_50Button = createButton('Click me');
  //animation_50Button.position(width/3, height/2);
  animation_50Button.mouseClicked(animation_50);
  animation_50Button.style('position: absolute; top: 0%; padding: 0.3vw; background-color: black; border: solid #00ffff 0.15vw; color: #00ffff; font-family: Verdana');
  animation_50Button.parent(buttonsContainer);
  // button to change color (base color = yellow)
  colorButton = createButton('Click me');
  colorButton.class('yellow');
  colorButton.mouseClicked(changeColor);
  colorButton.style('position: absolute; top: 100%; left: 100%; transform: translateY(-100%); padding: 0.3vw; background-color: black; font-family: Verdana');
  colorButton.parent(buttonsContainer);

}

function draw() {
  // reset changeColor function
  if (j == 4) {
    jj++;
  }
  if (jj > 1) {
    j = 0;
    jj = 0;
  }
}

function mouseClicked() {

}

function animation_50() {
  // mouseC++;
  // for (var i = 0; i < balls.length; i++) {
  //   if (mouseC == 1) {
  //     balls[i].addClass('animation_50');
  //   } else {
  //     balls[i].removeClass('animation_50')
  //     mouseC = 0;
  //   }
  //   }
  for (var i = 0; i < balls.length; i++) {
    balls[i].toggleClass('animation_50');
  }
}

function changeColor() {
  j++;
  for (var i = 0; i < balls.length; i++) {
    {
      if (j < colorList.length) {
        balls[i].removeClass(colorList[j - 1]);
        balls[i].addClass(colorList[j]);
      } else if (j == 4) {
        balls[i].removeClass(colorList[j - 1]);
        balls[i].addClass(colorList[0]);
      }
    }
  }
}
