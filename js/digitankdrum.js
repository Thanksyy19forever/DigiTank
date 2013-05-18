$(function() {



/*   buttonClickResult = function (){
   var button = document.getElementById('distortionOffSwitch'); 
   button.onmousedown = function buttonClicked() 
{  
  
        if(button.className=="distortionOffSwitchClass")    //if class name is "off"
      {
          button.className="distortionOnSwitch";     // assign it to "on" and....
          button.src='on.png'; 
 
      }
      else if(button.className=="distortionOnSwitchClass")       //if class name IS "on"
      {  
          button.className="distortionOffSwitchClass";           //Change it to "off"
          button.src='off.png';     

      }               

}  
   };
   
buttonClickResult();



*/





  
     var humSnd = new Audio('audio/hum.wav');
   var button = document.getElementById('btn1'); 


   buttonClickResult = function ()  {
         function playClickSound(filename)    {
         var snd = new Audio(filename);
         snd.play();

          }

   button.onmousedown = function buttonClicked()  {  
  
        if (button.className=="off")  {

            button.className="on";     
            button.src='imgs/on.png'; 
            playClickSound('audio/click.wav'); 
            humSnd.play();
            humSnd.loop = true;
          }         
      
      else if(button.className=="on")    {  
          button.className="off";           
          button.src='imgs/off.png';     
          playClickSound('audio/click.wav'); 
          humSnd.pause();
        
          
          }               

        }  
    };
   
buttonClickResult();




var distortionSwitch = overdrive; 

var context = new webkitAudioContext();


// Start Of Web Audio API Buffer & Playback Abstraction

function audioApiKey(domNode,fileDirectory,bufferFunctionName,incomingBuffer,savedBuffer,xhr) {

this.domNode=domNode;
this.fileDirectory = fileDirectory;
this.bufferFunctionName= bufferFunctionName;
this.incomingBuffer = incomingBuffer;
this.savedBuffer = savedBuffer;
this.xhr = xhr;



bufferFunctionName = function () {



if(button.className=="off")    {

  var distortionSwitch = emptyCable;
     
  }

      else if(button.className=="on")    {  
      
      var distortionSwitch = overdrive;
        
          
      }    




var source = context.createBufferSource();
source.buffer = savedBuffer;
source.connect(distortionSwitch.input);

distortionSwitch.connect(delay.input);

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

var orangeDrumtongueOne   = new audioApiKey("noteOneDrumOneBig","audio/F.mp3","playAudioFileOneDrumOneBig","incomingBuffer", "savedBuffer","request1");
var orangeDrumtongueTwo   = new audioApiKey("noteTwoDrumOneBig","audio/C_Large.mp3","playAudioFileTwoDrumOneBig","incomingBuffer","savedBuffer","request2");
var orangeDrumtongueThree = new audioApiKey("noteThreeDrumOneBig","audio/Bb.mp3","playAudioFileThreeDrumOneBig","incomingBuffer","savedBuffer","request3");
var orangeDrumtongueFour  = new audioApiKey("noteFourDrumOneBig","audio/D.mp3","playAudioFileFourDrumOneBig","incomingBuffer","savedBuffer","request4");
var orangeDrumtongueFive  = new audioApiKey("noteFiveDrumOneBig","audio/G.mp3","playAudioFileFiveDrumOneBig","incomingBuffer","savedBuffer","request5");
var orangeDrumtongueSix   = new audioApiKey("noteSixDrumOneBig","audio/E.mp3","playAudioFileSixDrumOneBig","incomingBuffer","savedBuffer","request6");
var orangeDrumtongueSeven = new audioApiKey("noteSevenDrumOneBig","audio/B.mp3","playAudioFileSevenDrumOneBig","incomingBuffer","savedBuffer","request7");
var orangeDrumtongueEight = new audioApiKey("noteEightDrumOneBig","audio/A.mp3","playAudioFileEightDrumOneBig","incomingBuffer","savedBuffer","request8");
var orangeDrumtongueNine  = new audioApiKey("noteNineDrumOneBig","audio/C_Small.mp3","playAudioFileNineDrumOneBig","incomingBuffer","savedBuffer","request9");

var redDrumtongueOne   = new audioApiKey("noteOneDrumTwoBig","audio/F.mp3","playAudioFileOneDrumTwoBig","incomingBuffer", "savedBuffer","request1");
var redDrumtongueTwo   = new audioApiKey("noteTwoDrumTwoBig","audio/C_Large.mp3","playAudioFileTwoDrumTwoBig","incomingBuffer","savedBuffer","request2");
var redDrumtongueThree = new audioApiKey("noteThreeDrumTwoBig","audio/Bb.mp3","playAudioFileThreeDrumTwoBig","incomingBuffer","savedBuffer","request3");
var redDrumtongueFour  = new audioApiKey("noteFourDrumTwoBig","audio/D.mp3","playAudioFileFourDrumTwoBig","incomingBuffer","savedBuffer","request4");
var redDrumtongueFive  = new audioApiKey("noteFiveDrumTwoBig","audio/G.mp3","playAudioFileFiveDrumTwoBig","incomingBuffer","savedBuffer","request5");
var redDrumtongueSix   = new audioApiKey("noteSixDrumTwoBig","audio/E.mp3","playAudioFileSixDrumTwoBig","incomingBuffer","savedBuffer","request6");
var redDrumtongueSeven = new audioApiKey("noteSevenDrumTwoBig","audio/B.mp3","playAudioFileSevenDrumTwoBig","incomingBuffer","savedBuffer","request7");
var redDrumtongueEight = new audioApiKey("noteEightDrumTwoBig","audio/A.mp3","playAudioFileEightDrumTwoBig","incomingBuffer","savedBuffer","request8");
var redDrumtongueNine  = new audioApiKey("noteNineDrumTwoBig","audio/C_Small.mp3","playAudioFileNineDrumTwoBig","incomingBuffer","savedBuffer","request9");


var purpleDrumtongueOne   = new audioApiKey("noteOneDrumThreeBig","audio/F.mp3","playAudioFileOneDrumThreeBig","incomingBuffer", "savedBuffer","request1");
var purpleDrumtongueTwo   = new audioApiKey("noteTwoDrumThreeBig","audio/C_Large.mp3","playAudioFileTwoDrumThreeBig","incomingBuffer","savedBuffer","request2");
var purpleDrumtongueThree = new audioApiKey("noteThreeDrumThreeBig","audio/Bb.mp3","playAudioFileThreeDrumThreeBig","incomingBuffer","savedBuffer","request3");
var purpleDrumtongueFour  = new audioApiKey("noteFourDrumThreeBig","audio/D.mp3","playAudioFileFourDrumThreeBig","incomingBuffer","savedBuffer","request4");
var purpleDrumtongueFive  = new audioApiKey("noteFiveDrumThreeBig","audio/G.mp3","playAudioFileFiveDrumThreeBig","incomingBuffer","savedBuffer","request5");
var purpleDrumtongueSix   = new audioApiKey("noteSixDrumThreeBig","audio/E.mp3","playAudioFileSixDrumThreeBig","incomingBuffer","savedBuffer","request6");
var purpleDrumtongueSeven = new audioApiKey("noteSevenDrumThreeBig","audio/B.mp3","playAudioFileSevenDrumThreeBig","incomingBuffer","savedBuffer","request7");
var purpleDrumtongueEight = new audioApiKey("noteEightDrumThreeBig","audio/A.mp3","playAudioFileEightDrumThreeBig","incomingBuffer","savedBuffer","request8");
var purpleDrumtongueNine  = new audioApiKey("noteNineDrumThreeBig","audio/C_Small.mp3","playAudioFileNineDrumThreeBig","incomingBuffer","savedBuffer","request9");



var greenDrumtongueOne   = new audioApiKey("noteOneDrumFourBig","audio/F.mp3","playAudioFileOneDrumFourBig","incomingBuffer", "savedBuffer","request1");
var greenDrumtongueTwo   = new audioApiKey("noteTwoDrumFourBig","audio/C_Large.mp3","playAudioFileTwoDrumFourBig","incomingBuffer","savedBuffer","request2");
var greenDrumtongueThree = new audioApiKey("noteThreeDrumFourBig","audio/Bb.mp3","playAudioFileThreeDrumFourBig","incomingBuffer","savedBuffer","request3");
var greenDrumtongueFour  = new audioApiKey("noteFourDrumFourBig","audio/D.mp3","playAudioFileFourDrumFourBig","incomingBuffer","savedBuffer","request4");
var greenDrumtongueFive  = new audioApiKey("noteFiveDrumFourBig","audio/G.mp3","playAudioFileFiveDrumFourBig","incomingBuffer","savedBuffer","request5");
var greenDrumtongueSix   = new audioApiKey("noteSixDrumFourBig","audio/E.mp3","playAudioFileSixDrumFourBig","incomingBuffer","savedBuffer","request6");
var greenDrumtongueSeven = new audioApiKey("noteSevenDrumFourBig","audio/B.mp3","playAudioFileSevenDrumFourBig","incomingBuffer","savedBuffer","request7");
var greenDrumtongueEight = new audioApiKey("noteEightDrumFourBig","audio/A.mp3","playAudioFileEightDrumFourBig","incomingBuffer","savedBuffer","request8");
var greenDrumtongueNine  = new audioApiKey("noteNineDrumFourBig","audio/C_Small.mp3","playAudioFileNineDrumFourBig","incomingBuffer","savedBuffer","request9");


















    $("#drumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#749CD5"}, 220 );
});
    
   $("#noteOneDrumOneBig").mousedown(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
      $("#noteTwoDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
         $("#noteThreeDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
            $("#noteFourDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
               $("#noteFiveDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                  $("#noteSixDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                     $("#noteSevenDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150);
});
                        $("#noteEightDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

                        $("#noteNineDrumOneBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});


    $("#drumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#749CD5"}, 220 );
});
    
   $("#noteOneDrumTwoBig").mousedown(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
      $("#noteTwoDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
         $("#noteThreeDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
            $("#noteFourDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
               $("#noteFiveDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                  $("#noteSixDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                     $("#noteSevenDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150);
});
                        $("#noteEightDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

                        $("#noteNineDrumTwoBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

    $("#drumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#749CD5"}, 220 );
});
    
   $("#noteOneDrumThreeBig").mousedown(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
      $("#noteTwoDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
         $("#noteThreeDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
            $("#noteFourDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
               $("#noteFiveDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                  $("#noteSixDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                     $("#noteSevenDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150);
});
                        $("#noteEightDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

                        $("#noteNineDrumThreeBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});


                            $("#drumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#749CD5"}, 220 );
});
    
   $("#noteOneDrumFourBig").mousedown(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
      $("#noteTwoDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
         $("#noteThreeDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
            $("#noteFourDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
               $("#noteFiveDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                  $("#noteSixDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});
                     $("#noteSevenDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150);
});
                        $("#noteEightDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

                        $("#noteNineDrumFourBig").click(function () {
      $(this).effect( "highlight",{color:"#669966"}, 150 );
});

//Start Of Effect Controls (JQuery Slider connections to Tuna Effects)
$(function() {
    var delayTimeFader = document.getElementById('delayTime');
    delayTimeFader.addEventListener('change', function () {
        delay.delayTime.value = this.value;
        output.val(delay.delayTime.value);
    });

    var output = $('#delayTime');
     var sliderParams = {
        'orientation': "horizontal",
        'range': "min",
        'min': 0,
        'max': 1,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {  
            delay.delayTime.value = ui.value;
            output.val(delay.delayTime.value);
         },
        'stop': function(event, ui) {
            console.log(delay.delayTime.value);
        }
      };

    $('#sliderOne').slider(sliderParams);
    


});


$(function() {
    var delayWetLevelFader = document.getElementById('delayWetLevel');
    delayWetLevelFader.addEventListener('change', function () {
        delay.wetLevel.value = this.value;
        output.val(delay.wetLevel.value);
    });
    var output = $('#delayWetLevel');
     var sliderParams2 = {
        'orientation': "horizontal",
        'range': "min",
        'min': 0,
        'max': 1,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {  
            delay.wetLevel.value = ui.value;
            output.val(delay.wetLevel.value);
         },
        'stop': function(event, ui) {
            console.log(delay.wetLevel.value);
        }
      };

    $('#sliderTwo').slider(sliderParams2);
    


});



$(function() {
    var convolverWetLevelFader = document.getElementById('reverb');
    convolverWetLevelFader.addEventListener('change', function () {
        convolver.wetLevel.value = this.value;
        output.val(convolver.wetLevel.value);
    });
    var output = $('#reverb');
     var sliderParams3 = {
        'orientation': "horizontal",
        'range': "min",
        'min': 0,
        'max': 1,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {  
            convolver.wetLevel.value = ui.value;
            output.val(convolver.wetLevel.value);
         },
        'stop': function(event, ui) {
            console.log(convolver.wetLevel.value);
        }
      };

    $('#sliderThree').slider(sliderParams3);
    


});


document.getElementById('delayTime').addEventListener('change', function() {
delay.delayTime.value  = this.value;
}); 

document.getElementById('delayWetLevel').addEventListener('change', function() {
delay.wetLevel.value  = this.value;
}); 

document.getElementById('reverb').addEventListener('change', function() {
convolver.wetLevel.value  = this.value;
}); 


//END OF Effects Controls


// Start Of Tuna Effects

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
                dryLevel: 0,       //0 to 1+
                cutoff: 300,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: 0
            });

var overdrive = new tuna.Overdrive({
                    outputGain: .1,         //0 to 1+
                    drive: 0.3
                    ,              //0 to 1
                    curveAmount: .4,          //0 to 1
                    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
                    bypass: 1
                });

var cabinet = new tuna.Cabinet({
                  makeupGain: 10,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: 0
              });

var convolver = new tuna.Convolver({
                    highCut: 1050,                         //20 to 22050
                    lowCut: 20,                             //20 to 22050
                    dryLevel: 0,                            //0 to 1+
                    wetLevel: 0,                            //0 to 1+
                    level: .2,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: 1
                });

var emptyCable = new tuna.Convolver({
                    highCut: 0,                         //20 to 22050
                    lowCut: 0,                             //20 to 22050
                    dryLevel: 0,                            //0 to 1+
                    wetLevel: 0,                            //0 to 1+
                    level: .0,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "",    //the path to your impulse response
                    bypass: 1
                });
//END OF Tuna Effects

});

