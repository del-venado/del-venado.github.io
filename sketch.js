// - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// tsikua mee - 

let xspacing = 65; // How far apart should each horizontal position be spaced
let w; // Width of entire wave
let maxwaves = 20; // total # of waves to add together

var lines, markov;

let theta = 0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues; // Using an array to store height values for the wave (not entirely necessary)

var contador = 1;
var contando = 1;


var font,
    fontsize = 14;

var contacolor = 0;
var dato = 1;


function preload() {

    //tlaloc = loadImage("img/tlaloc.svg");

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    w = width;
    xon_w = width;
    ton_w = width;
    cuecue_w = width;

    noCursor();

    //textFont("Marta-Italic");
    //textFont("Varela Round");
    textFont("Didact Gothic");


    for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = 1000;
        let period = 1000; // How many pixels before the wave repeats
        dx[i] = (TWO_PI / period) * xspacing;
    }

    yvalues = [];


}

function draw() {


    contando++;

    if (contando <= 600) {
        tlalocan();
    }

    
    if (contando >= 601) {
        contando = 0;
                window.location.reload();

    }

}


function tlalocan() {

    contacolor = contacolor + dato;

    if (contacolor <= 0) {
        dato = 0.5;
        contacolor += 0.5;
    }

    if (contacolor >= 255) {
        dato = -0.5;
        contacolor -= 0.5;
    }

    contador++;

    clear();

    //background( 57, 51, 62);
    calcWave();

    push();
    tonaltzintli();
    pop();

    if (contador <= 600) {
        tsikua();
    }

    if (contador >= 601) {
         contador = 1;
     }

    // if (contador >= 600 && contador <= 1000) {
    //     tlaaloc();
    // }

    // if (contador >= 1000) {
    //     ohuaya();
    // }

    // if (contador >= 1400) {
    //     contador = 1;
    // }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

