document.addEventListener("DOMContentLoaded", function() {

    function getKeyChar(pressedKey){
        var keyChar = '';
        if(pressedKey == 65 || pressedKey == 97)    keyChar = 'A';
        if(pressedKey == 66 || pressedKey == 98)    keyChar = 'B';
        if(pressedKey == 67 || pressedKey == 99)    keyChar = 'C';
        if(pressedKey == 68 || pressedKey == 100)    keyChar = 'D';
        if(pressedKey == 69 || pressedKey == 101)    keyChar = 'E';
        if(pressedKey == 70 || pressedKey == 102)    keyChar = 'F';
        if(pressedKey == 71 || pressedKey == 103)    keyChar = 'G';
        if(pressedKey == 72 || pressedKey == 104)    keyChar = 'H';
        if(pressedKey == 73 || pressedKey == 105)    keyChar = 'I';
        if(pressedKey == 74 || pressedKey == 106)    keyChar = 'J';
        if(pressedKey == 75 || pressedKey == 107)    keyChar = 'K';
        if(pressedKey == 76 || pressedKey == 108)    keyChar = 'L';
        if(pressedKey == 77 || pressedKey == 109)    keyChar = 'M';
        if(pressedKey == 78 || pressedKey == 110)    keyChar = 'N';
        if(pressedKey == 79 || pressedKey == 111)    keyChar = 'O';
        if(pressedKey == 80 || pressedKey == 112)    keyChar = 'P';
        if(pressedKey == 81 || pressedKey == 113)    keyChar = 'Q';
        if(pressedKey == 82 || pressedKey == 114)    keyChar = 'R';
        if(pressedKey == 83 || pressedKey == 115)    keyChar = 'S';
        if(pressedKey == 84 || pressedKey == 116)    keyChar = 'T';
        if(pressedKey == 85 || pressedKey == 117)    keyChar = 'U';
        if(pressedKey == 86 || pressedKey == 118)    keyChar = 'V';
        if(pressedKey == 87 || pressedKey == 119)    keyChar = 'W';
        if(pressedKey == 88 || pressedKey == 120)    keyChar = 'X';
        if(pressedKey == 89 || pressedKey == 121)    keyChar = 'Y';
        if(pressedKey == 90 || pressedKey == 122)    keyChar = 'Z';
        
        return keyChar;
    }
    
    document.body.addEventListener('keydown',function(event){
        var pressedKeyChar = getKeyChar(event.keyCode);
        var target; var targetSound;
        if(pressedKeyChar !== ''){
            target = document.getElementById(pressedKeyChar);
            target.style.background = 'grey';
            target.style.color = '#ffffff';
            targetSound = document.getElementById('sound'+pressedKeyChar);
            targetSound.play();
            console.log('play : '+targetSound);
        }
    },false);
    document.body.addEventListener('keyup',function(event){
        var pressedKeyChar = getKeyChar(event.keyCode);
        var target; var targetSound;
        if(pressedKeyChar !== ''){
            target = document.getElementById(pressedKeyChar);
            target.style.background = 'transparent';
            target.style.color = '#909090';
            targetSound = document.getElementById('sound'+pressedKeyChar);
            console.log('stop : '+targetSound);
            targetSound.pause();
        }
    },false);
});