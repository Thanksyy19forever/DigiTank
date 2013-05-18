$(function() {
var context = new webkitAudioContext();

// Start Of Web Audio API Buffer & Playback Abstraction

function audioBoing(domNode,fileDirectory,bufferFunctionName,incomingBuffer,savedBuffer,xhr) {

this.domNode=domNode;
this.fileDirectory = fileDirectory;
this.bufferFunctionName= bufferFunctionName;
this.incomingBuffer = incomingBuffer;
this.savedBuffer = savedBuffer;
this.xhr = xhr;

bufferFunctionName = function () {
var source = context.createBufferSource();
source.buffer = savedBuffer;
source.connect(delay.input);
delay.connect(convolver.input);
convolver.connect(context.destination);
source.noteOn(0); // Play sound immediately
};



var xhr = new XMLHttpRequest();
xhr.open('get',fileDirectory, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function () {
        context.decodeAudioData(xhr.response,
             function(incomingBuffer) {
                 //save the buffer, we'll reuse it
                 savedBuffer = incomingBuffer;
                 //once the file has been loaded, we can start listening for click on the div, and use playAudioFile since it no longer requires a buffer to be passed to it
                 var note = document.getElementById(domNode);
                 note.addEventListener("click", bufferFunctionName , false);
             }
        );
};
xhr.send();
};
