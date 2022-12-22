function preload() {
    
}
function setup() {
    canvas = createCanvas(1200,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = 'black';

}

function draw() {
    image(video,500,100,200,200);
    tint(tint_color);

    fill(20,221,134);
    stroke(0,0,0);
    circle(100,200,200);
    circle(1100,200,200);

    fill(185,38,223);
    stroke(0,0,0);
    ellipse(600,50,150,90)
    ellipse(600,350,150,90)


}

function take_snapshot() {
    save("filterImage.png");

}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
    
}