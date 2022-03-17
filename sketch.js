function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0,255),random(0,255),random(0,255));
  botoncito = createButton('Descargar');
  botoncito.position (10, 10);
  botoncito.mousePressed(algo);
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  triangle (mouseX+0, mouseY+0, mouseX+20, mouseY+20, mouseX-20, mouseY+20)
}

function algo(){
 saveCanvas("imagen", "jpg");
}