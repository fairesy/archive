function convertToNotes(inputCharArray){
	var notes = new Array();

	for(var i=0; i<inputCharArray.length; i++){
		var character = inputCharArray[i];
		//8분음표 음표 템플릿
		var noteTemplate = "<note><pitch><%=stepAndOctave=></pitch><duration>1</duration><voice>1</voice><type>quarter</type><stem>down</stem></note>";
		//4분음표-프로토타입 템플릿
		//var noteTemplate = "<note><pitch><step><%step%></step><octave><%octave%></octave></pitch><duration>1</duration></note>";
		var step,octave;

		if(character == 'ㄱ'){
			step = 'E';
			octave = 3;
		}else if(character == 'ㄴ'){
			step = 'F';
			octave = 3;
		}else if(character == 'ㄷ'){
			step = 'G';
			octave = 3;
		}else if(character == 'ㄹ'){
			step = 'A';
			octave = 3;
		}else if(character == 'ㅁ'){
			step = 'B';
			octave = 3;
		}else if(character == 'ㅂ'){
			step = 'C';
			octave = 4;
		}else if(character == 'ㅅ'){
			step = 'D';
			octave = 4;
		}else if(character == 'ㅇ'){
			step = 'E';
			octave = 4;
		}else if(character == 'ㅈ'){
			step = 'F';
			octave = 4;
		}else if(character == 'ㅊ'){
			step = 'G';
			octave = 4;
		}else if(character == 'ㅋ'){
			step = 'A';
			octave = 4;
		}else if(character == 'ㅌ'){
			step = 'B';
			octave = 4;
		}else if(character == 'ㅍ'){
			step = 'C';
			octave = 5;
		}else if(character == 'ㅎ'){
			step = 'D';
			octave = 5;
		}else if(character == 'ㄲ'){
			step = 'G';
			octave = 2;
		}else if(character == 'ㄸ'){
			step = 'A';
			octave = 2;
		}else if(character == 'ㅃ'){
			step = 'B';
			octave = 2;
		}else if(character == 'ㅆ'){
			step = 'C';
			octave = 2;
		}else if(character == 'ㅉ'){
			step = 'D';
			octave = 2;
		}else if(character == 'ㄳ'){
			step = 'C';
			octave = 1;
		}else if(character == 'ㄵ'){
			step = 'D';
			octave = 1;
		}else if(character == 'ㄶ'){
			step = 'E';
			octave = 1;
		}else if(character == 'ㄺ'){
			step = 'F';
			octave = 1;
		}else if(character == 'ㄻ'){
			step = 'G';
			octave = 1;
		}else if(character == 'ㄼ'){
			step = 'A';
			octave = 1;
		}else if(character == 'ㄽ'){
			step = 'B';
			octave = 1;
		}else if(character == 'ㄾ'){
			step = 'C';
			octave = 2;
		}else if(character == 'ㄿ'){
			step = 'D';
			octave = 2;
		}else if(character == 'ㅀ'){
			step = 'E';
			octave = 2;
		}else if(character == 'ㅄ'){
			step = 'F';
			octave = 2;
		}else if(character == 'ㅏ'){
			step = 'E';
			octave = 5;
		}else if(character == 'ㅑ'){
			step = 'F';
			octave = 5;
		}else if(character == 'ㅓ'){
			step = 'G';
			octave = 5;
		}else if(character == 'ㅕ'){
			step = 'A';
			octave = 5;
		}else if(character == 'ㅗ'){
			step = 'B';
			octave = 5;
		}else if(character == 'ㅛ'){
			step = 'C';
			octave = 6;
		}
		else if(character == 'ㅜ'){
			step = 'D';
			octave = 6;
		}
		else if(character == 'ㅠ'){
			step = 'E';
			octave = 6;
		}
		else if(character == 'ㅡ'){
			step = 'F';
			octave = 6;
		}else if(character == 'ㅣ'){
			step = 'G';
			octave = 6;
		}else if(character == 'ㅐ'){
			step = 'A';
			octave = 6;
		}else if(character == 'ㅒ'){
			step = 'B';
			octave = 6;
		}else if(character == 'ㅔ'){
			step = 'C';
			octave = 7;
		}else if(character == 'ㅖ'){
			step = 'D';
			octave = 7;
		}else if(character == 'ㅘ'){
			step = 'E';
			octave = 7;
		}else if(character == 'ㅙ'){
			step = 'F';
			octave = 7;
		}else if(character == 'ㅚ'){
			step = 'G';
			octave = 7;
		}else if(character == 'ㅝ'){
			step = 'A';
			octave = 7;
		}else if(character == 'ㅞ'){
			step = 'B';
			octave = 7;
		}else if(character == 'ㅟ'){
			step = 'C';
			octave = 8;
		}else if(character == 'ㅢ'){
			step = 'D';
			octave = 8;
		}

		// console.log(character + typeof(character) + "	step:" + step + " octave:" + octave);
		var replaceNoteOctaveString = "<step>" + step + "</step>" + "<octave>" + octave + "</octave>";
		var ruledNote = noteTemplate.replace("<%=stepAndOctave=>", replaceNoteOctaveString);
		notes[i] = ruledNote;		
		// resultNotes = resultNotes.concat(finalNote);
	}	
	return notes;
};

function convertToMeasures(notesArray){
	var measureCount = 1;
	var noteCount = 1;
	var partCount = 1;
	var printAndAttributes = "<print><system-layout><system-margins><left-margin>0.00</left-margin><right-margin>-0.00</right-margin></system-margins><top-system-distance>170.00</top-system-distance></system-layout></print><attributes><divisions>2</divisions><key><fifths>0</fifths></key><time><beats>4</beats><beat-type>4</beat-type></time><clef><sign>G</sign><line>2</line></clef></attributes>";
	var measureOpen = "<measure number='" + measureCount + "'>"; //width무쓸모.....
	var measureClose = "</measure>";
	var measures = "";

	for (var i = 0; i<notesArray.length; i++) {
		//첫번째 마디 첫번째 음표.
		if(i==0){
			measures += measureOpen;
			measures += printAndAttributes;
			measures += notesArray[i];
			noteCount++;
		}else{
			measures += notesArray[i];
			if(noteCount%4 == 0){
				measures += measureClose;
				measureCount++;
				measures += measureOpen;
			}
			noteCount++;
		}
	};
	return measures;
}
