var type = "WebGL";

if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

// test PIXI, should output a test message in the Console
PIXI.utils.sayHello(type);

// Aliases to be used from this point forward, simplifies the code
// use http://pixijs.download/release/docs/index.html for more info on each of these
var
  Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite,
  Graphics = PIXI.Graphics,
  Texture = PIXI.Texture,
  Text = PIXI.Text,
  collisionDetection = new Bump(); // collision detection

// Create a Pixi stage and renderer
var
  stage,
  containerElement = $("#stage"), // jQuery object, grab a handle on the <div id="stage"></div> from index.html
  containerWidth, containerHeight, // actual container height/width, determined later
  stageWidth, stageHeight, // stage height/width, determined later
  renderer = autoDetectRenderer(0, 0); // PIXI graphical renderer, don't care about size here

// attach the drawing board to the View
containerElement.html(renderer.view);

// get the actual height and width of the HTML container from index.html
containerWidth = containerElement.innerWidth();
containerHeight = containerElement.innerHeight();

// set the stage height and width
stageWidth = containerWidth;
stageHeight = containerHeight / 2;

// create a JSON object container to use when checking stage wall collisions
var stageContainer = {
  x: 0, // top left corner X position
  y: 0, // top left corner Y position
  height: stageHeight,
  width: stageWidth
};

// allow renderer to resize itself as needed
renderer.autoResize = true;

// make sure the drawing board has the size we want, width first, then height
renderer.resize(stageWidth, stageHeight);

// build a PIXI.js stage
stage = new Container();

// the text object to be used later on
// defined here so it behaves like a global variable for all functions created below
var text;

// simple function that builds a text object and adds it to the stage
function buildTextObject() {

  // build some text
  text = new Text(
    "Polich Games!", { // "Hello World!" will be the initial text value
      fontFamily: "Arial",
      fontSize: 24,
      fill: "white"
    }
  );

  // set the text position roughly at the centre of the stage
  text.position.set(stageWidth / 2, stageHeight / 2);
  
  // set the text movement speed
  text.vx = 5;
  text.vy = 5;

  // add the text to the stage so it becomes visible once rendered below
  stage.addChild(text);

}

function animateText() {
  if (
    ( text.x + text.width ) >= stageWidth ||
    ( text.x <= 0 )
  ) {
    text.vx *= -1;
  }
  if (
    ( text.y + text.height ) >= stageHeight ||
    ( text.y <= 0 )
  ) {
    text.vy *= -1;
  }
  text.x += text.vx;
  text.y += text.vy;
}

// a test function to set up a stage with text and render it
function runAnimationTest() {
  // Loop this function at a default rate of 60 frames per second
  requestAnimationFrame(runAnimationTest);
  animateText();
  renderer.render(stage);

}

buildTextObject();
runAnimationTest();

