function calcWave() {

    theta += 0.00000000000000000001;

    for (let i = 0; i < w / xspacing; i++) {
        yvalues[i] = 0;
    }

    for (let j = 0; j < maxwaves; j+=0.1) {
        let x = theta;
        for (let i = 0; i < yvalues.length; i+=0.1) {
            if (j % 2 === 0) yvalues[i] += sin(x) * amplitude[j];
            else yvalues[i] += sin(x) * amplitude[j];
            x += dx[j];
        }
    }
}


function tsikua() {

    var ruidoX = 0.00008;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.000008;
    var posC = noise(millis() * ruidoC) * 130;

    var ruidoC4 = 0.00001;
    var posC4 = noise(millis() * ruidoC4) * 4;

translate(width/2, height/2);

    for (let x = 0; x < yvalues.length; x++) {
        
        stroke(205, 141, 193);
        strokeWeight(2);
rotate(2);
        //line(x * xspacing, posX, x * xspacing, height / 4 + yvalues[x]);
        
        //var words = RiTa.tokenize("Tsikua mee kuaku yàà yu´u, ka’mà chikui xiniku,")

var words = RiTa.tokenize("La noche que lloré la ceniza en tu boca, el golpeteo del agua en tu cabeza,")


        noStroke();
        textSize(fontsize+posC4);
        fill(105, 141, 193);
     
        for (var i = 0, j = words.length; i < j; i++) {

            text(words[i], x * xspacing, x + yvalues[x] + i * posC);
        }
    }
}


function tonaltzintli() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 1.5;

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        fill(255, 168, 92, 30);
        strokeWeight(5);
        noStroke(); 
        scale(posC4);
        ellipse(0, 0, 20, 20);
    }
}


