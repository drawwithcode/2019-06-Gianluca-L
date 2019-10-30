var balls = [];
var mouseC = 0; // mouseClicked
var animation_50Button;
var colorButton;
var bigButton;
var bBContainer;
var bigButtonClasses = ['bB_Center','bB_Left','bB_Down','bB_Right'];
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
    balls[i].addClass('scaling');
    balls[i].addClass('yellow');
    balls[i].addClass('ballPos_1');
    if (balls[i].hasClass('ballPos_1')) {
      balls[i].position(random() * width, random() * height);
    }
  }

  // button to trigger animation_50 (cyan) from CSS
  animation_50Button = createButton('Click me');
  //animation_50Button.position(width/3, height/2);
  animation_50Button.mouseClicked(animation_50);
  animation_50Button.style('position: absolute; top: 0%; padding: 0.3vw; background-color: black; border: solid #00ffff 0.15vw; color: #00ffff; font-family: Verdana');
  animation_50Button.parent(buttonsContainer);

  // button to change color (base color = yellow)
  colorButton = createButton('Click me');
  colorButton.class('yellow');
  colorButton.mouseClicked(changeColor);
  colorButton.style('position: absolute; top: 100%; left: 100%; transform: translateY(-100%); padding: 0.3vw; background-color: black; border-style: solid; border-width: 0.15vw; font-family: Verdana');
  colorButton.parent(buttonsContainer);

  // bigButton Container
  bBContainer = select('#bigButtonContainer');
  bBContainer.parent(buttonsContainer);
  bBContainer.addClass('bB_Center');
  bBContainer.style('width: 15vw; height: 10vw; transform: translate(-50%,-50%)');
  bBContainer.mouseOver(runAway);

  // don't click me button (bigButton)
  bigButton = createButton('Don\'t click me');
  bigButton.id('bigButton');
  bigButton.addClass('bB_Center'); // centered in the div
  bigButton.style('transform: translate(-50%, -50%); padding: 1.5vw; background-color: black; border-style: solid; border-width: 0.15vw; font-family: Verdana; font-size: 0.8vw');

  bigButton.parent(bBContainer);
}

function draw() {
  // counter to reset changeColor function
  if (j == 4) {
    jj++;
  }
  if (jj > 1) {
    j = 0;
    jj = 0;
  }
}
// the bigButtonContainer runs aways on mouseOver and the bigButton follows it
function runAway() {
  if (bigButton.hasClass('bB_Center')) {
    bBContainer.class(random(bigButtonClasses));
  }
  if (bigButton.hasClass('bB_UP')) {
    bBContainer.class(random(bigButtonClasses));
  }
  if (bigButton.hasClass('bB_Down')) {
    bBContainer.class(random(bigButtonClasses));
  }
  if (bigButton.hasClass('bB_Left')) {
    bBContainer.class(random(bigButtonClasses));
  }
  if (bigButton.hasClass('bB_Right')) {
    bBContainer.class(random(bigButtonClasses));
  }
}

function animation_50() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].toggleClass('animation_50');
  }
}
// adding classes from the colorList while removing the previous class
function changeColor() {
  j++;
  for (var i = 0; i < balls.length; i++) {
    {
      if (j < colorList.length) {
        balls[i].removeClass(colorList[j - 1]);
        balls[i].addClass(colorList[j]);
        colorButton.removeClass(colorList[j - 1]);
        colorButton.addClass(colorList[j]);
      } else if (j == 4) {
        balls[i].removeClass(colorList[j - 1]);
        balls[i].addClass(colorList[0]);
        colorButton.removeClass(colorList[j - 1]);
        colorButton.addClass(colorList[0]);
      }
    }
  }
}
