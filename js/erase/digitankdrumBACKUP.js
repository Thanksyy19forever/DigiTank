$(function() {
var context = initializeNewWebAudioContext();

document.getElementById('delayTime').addEventListener('change', function() {
delay.delayTime.value  = this.value;
}); 

document.getElementById('delayWetLevel').addEventListener('change', function() {
delay.wetLevel.value  = this.value;
}); 

document.getElementById('reverb').addEventListener('change', function() {
convolver.wetLevel.value  = this.value;
}); 


var playAudioFileOne = function () {
var source = context.createBufferSource();
source.buffer = savedBufferOne;

source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};





var AudioOneRequest = new XMLHttpRequest();
AudioOneRequest.open('get', 'audio/F.mp3', true);
AudioOneRequest.responseType = 'arraybuffer';
AudioOneRequest.onload = function () {
        context.decodeAudioData(AudioOneRequest.response,
             function(incomingBuffer1) {
                 //save the buffer, we'll reuse it
                 savedBufferTwo = incomingBuffer1;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteOne = document.getElementById("noteOne");
                 noteOne.addEventListener("click", playAudioFileOne , false);
             }
        );
};
AudioOneRequest.send();





var playAudioFileTwo = function () {
var source = context.createBufferSource();
source.buffer = savedBufferTwo;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioTwoRequest = new XMLHttpRequest();
AudioTwoRequest.open('get', 'audio/C_Large.mp3', true);
AudioTwoRequest.responseType = 'arraybuffer';
AudioTwoRequest.onload = function () {
        context.decodeAudioData(AudioTwoRequest.response,
             function(incomingBuffer2) {
                 //save the buffer, we'll reuse it
                 savedBufferOne = incomingBuffer2;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteTwo = document.getElementById("noteTwo");
                 noteTwo.addEventListener("click", playAudioFileTwo , false);
             }
        );
};

AudioTwoRequest.send();



var playAudioFileThree = function () {
var source = context.createBufferSource();
source.buffer = savedBufferThree;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};



var AudioThreeRequest = new XMLHttpRequest();
AudioThreeRequest.open('get', 'audio/Bb.mp3', true);
AudioThreeRequest.responseType = 'arraybuffer';
AudioThreeRequest.onload = function () {
        context.decodeAudioData(AudioThreeRequest.response,
             function(incomingBuffer3) {
                 //save the buffer, we'll reuse it
                 savedBufferThree = incomingBuffer3;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteThree = document.getElementById("noteThree");
                 noteThree.addEventListener("click", playAudioFileThree , false);
             }
        );
};

AudioThreeRequest.send();





var playAudioFileFour = function () {
var source = context.createBufferSource();
source.buffer = savedBufferFour;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioFourRequest = new XMLHttpRequest();
AudioFourRequest.open('get', 'audio/D.mp3', true);
AudioFourRequest.responseType = 'arraybuffer';
AudioFourRequest.onload = function () {
        context.decodeAudioData(AudioFourRequest.response,
             function(incomingBuffer4) {
                 //save the buffer, we'll reuse it
                 savedBufferFour = incomingBuffer4;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteFour = document.getElementById("noteFour");
                 noteFour.addEventListener("click", playAudioFileFour , false);
             }
        );
};

AudioFourRequest.send();



var playAudioFileFive = function () {
var source = context.createBufferSource();
source.buffer = savedBufferFive;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioFiveRequest = new XMLHttpRequest();
AudioFiveRequest.open('get', 'audio/G.mp3', true);
AudioFiveRequest.responseType = 'arraybuffer';
AudioFiveRequest.onload = function () {
        context.decodeAudioData(AudioFiveRequest.response,
             function(incomingBuffer5) {
                 //save the buffer, we'll reuse it
                 savedBufferFive = incomingBuffer5;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteFive = document.getElementById("noteFive");
                 noteFive.addEventListener("click", playAudioFileFive , false);
             }
        );
};

AudioFiveRequest.send();




var playAudioFileSix = function () {
var source = context.createBufferSource();
source.buffer = savedBufferSix;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioSixRequest = new XMLHttpRequest();
AudioSixRequest.open('get', 'audio/E.mp3', true);
AudioSixRequest.responseType = 'arraybuffer';
AudioSixRequest.onload = function () {
        context.decodeAudioData(AudioSixRequest.response,
             function(incomingBuffer6) {
                 //save the buffer, we'll reuse it
                 savedBufferSix = incomingBuffer6;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteSix = document.getElementById("noteSix");
                 noteSix.addEventListener("click", playAudioFileSix , false);
             }
        );
};

AudioSixRequest.send();




var playAudioFileSeven = function () {
var source = context.createBufferSource();
source.buffer = savedBufferSeven;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioSevenRequest = new XMLHttpRequest();
AudioSevenRequest.open('get', 'audio/B.mp3', true);
AudioSevenRequest.responseType = 'arraybuffer';
AudioSevenRequest.onload = function () {
        context.decodeAudioData(AudioSevenRequest.response,
             function(incomingBuffer7) {
                 //save the buffer, we'll reuse it
                 savedBufferSeven = incomingBuffer7;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteSeven = document.getElementById("noteSeven");
                 noteSeven.addEventListener("click", playAudioFileSeven , false);
             }
        );
};

AudioSevenRequest.send();


var playAudioFileEight = function () {
var source = context.createBufferSource();
source.buffer = savedBufferEight;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioEightRequest = new XMLHttpRequest();
AudioEightRequest.open('get', 'audio/A.mp3', true);
AudioEightRequest.responseType = 'arraybuffer';
AudioEightRequest.onload = function () {
        context.decodeAudioData(AudioEightRequest.response,
             function(incomingBuffer8) {
                 //save the buffer, we'll reuse it
                 savedBufferEight = incomingBuffer8;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteEight = document.getElementById("noteEight");
                 noteEight.addEventListener("click", playAudioFileEight , false);
             }
        );
};

AudioEightRequest.send();


var playAudioFileNine = function () {
var source = context.createBufferSource();
source.buffer = savedBufferNine;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};

var AudioNineRequest = new XMLHttpRequest();
AudioNineRequest.open('get', 'audio/C_Small.mp3', true);
AudioNineRequest.responseType = 'arraybuffer';
AudioNineRequest.onload = function () {
        context.decodeAudioData(AudioNineRequest.response,
             function(incomingBuffer9) {
                 //save the buffer, we'll reuse it
                 savedBufferNine = incomingBuffer9;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var noteNine = document.getElementById("noteNine");
                 noteNine.addEventListener("click", playAudioFileNine , false);
             }
        );
};

AudioNineRequest.send();










var tuna = new Tuna(context);


var wahwah = new tuna.WahWah({
                 automode: true,                //true/false
                 baseFrequency: 0.3,            //0 to 1
                 excursionOctaves: .4,           //1 to 6
                 sweep: 0.9,                    //0 to 1
                 resonance: 10,                 //1 to 100
                 sensitivity: 0.5,              //-1 to 1
                 bypass: 0
             });

var delay = new tuna.Delay({
                feedback: 0.58,    //0 to 1+
                delayTime: 1250,    //how many milliseconds should the wet signal be delayed? 
                wetLevel: 0,    //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 700,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: 0
            });

var overdrive = new tuna.Overdrive({
                    outputGain: .0,         //0 to 1+
                    drive: 0.0,              //0 to 1
                    curveAmount: .0,          //0 to 1
                    algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
                    bypass: 0
                });

var cabinet = new tuna.Cabinet({
                  makeupGain: 10,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: 0
              });

var convolver = new tuna.Convolver({
                    highCut: 2050,                         //20 to 22050
                    lowCut: 20,                             //20 to 22050
                    dryLevel: 0,                            //0 to 1+
                    wetLevel: 0,                            //0 to 1+
                    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: 0
                });



// JQRumble Code

    $('#noteOne').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteOne').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});


    $('#noteTwo').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteTwo').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});


    $('#noteThree').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteThree').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});


    


    $('#noteFour').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteFour').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});





    $('#noteFive').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteFive').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});




    $('#noteSix').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteSix').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});



    $('#noteSeven').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteSeven').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});



    $('#noteEight').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteEight').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});



    $('#noteNine').jrumble({
        x: .1,
        y: .1,
        rotation: .2
    })
    
    var demoTimeout;
    $('#noteNine').click(function(){
    $this = $(this);
    clearTimeout(demoTimeout);
    $this.trigger('startRumble');
    demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 100)
});
    
});
