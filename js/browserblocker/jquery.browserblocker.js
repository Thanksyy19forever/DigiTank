




                if ('webkitAudioContext' in window || 'AudioContext' in window) {
                    myAudioContext = new webkitAudioContext() || AudioContext();
                } else {
                    alert('Your browser does not support Web Audio API and therefore this application will not display correctly or make sound. Please upgrade your browser to Chrome 21+ or Safari 6+');
                    
                }

