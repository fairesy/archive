function convertToNotes(inputCharArray){
	var resultNotes = '';
	for(var i=0; i<inputCharArray.length; i++){
		var character = inputCharArray[i];
		var noteTemplate = "<note><pitch><step><%step%></step><octave><%octave%></octave></pitch><duration>1</duration></note>";
		var step,octave;

		// switch(character){
		// 	case 'ㄱ':
		// 		step = 'E';
		// 		octave = 3;
		// 	case 'ㄴ':
		// 		step = 'F';
		// 		octave = 3;
		// 	case 'ㄷ':
		// 		step = 'G';
		// 		octave = 3;
		// 	case 'ㄹ':
		// 		step = 'A';
		// 		octave = 3;
		// 	case 'ㅁ':
		// 		step = 'B';
		// 		octave = 3;
		// 	case 'ㅂ':
		// 		step = 'C';
		// 		octave = 4;
		// 	case 'ㅅ':
		// 		step = 'D';
		// 		octave = 4;
		// 	case 'ㅇ':
		// 		step = 'E';
		// 		octave = 4;
		// 	case 'ㅈ':
		// 		step = 'F';
		// 		octave = 4;
		// 	case 'ㅊ':
		// 		step = 'G';
		// 		octave = 4;
		// 	case 'ㅋ':
		// 		step = 'A';
		// 		octave = 4;
		// 	case 'ㅌ':
		// 		step = 'B';
		// 		octave = 4;
		// 	case 'ㅍ':
		// 		step = 'C';
		// 		octave = 5;
		// 	case 'ㅎ':
		// 		step = 'D';
		// 		octave = 5;
		// 	case 'ㄲ':
		// 		step = 'G';
		// 		octave = 2;
		// 	case 'ㄸ':
		// 		step = 'A';
		// 		octave = 2;
		// 	case 'ㅃ':
		// 		step = 'B';
		// 		octave = 2;
		// 	case 'ㅆ':
		// 		step = 'C';
		// 		octave = 2;
		// 	case 'ㅉ':
		// 		step = 'D';
		// 		octave = 2;
		// 	case 'ㄳ':
		// 		step = 'C';
		// 		octave = 1;
		// 	case 'ㄵ':
		// 		step = 'D';
		// 		octave = 1;
		// 	case 'ㄶ':
		// 		step = 'E';
		// 		octave = 1;
		// 	case 'ㄺ':
		// 		step = 'F';
		// 		octave = 1;
		// 	case 'ㄻ':
		// 		step = 'G';
		// 		octave = 1;
		// 	case 'ㄼ':
		// 		step = 'A';
		// 		octave = 1;
		// 	case 'ㄽ':
		// 		step = 'B';
		// 		octave = 1;
		// 	case 'ㄾ':
		// 		step = 'C';
		// 		octave = 2;
		// 	case 'ㄿ':
		// 		step = 'D';
		// 		octave = 2;
		// 	case 'ㅀ':
		// 		step = 'E';
		// 		octave = 2;
		// 	case 'ㅄ':
		// 		step = 'F';
		// 		octave = 2;
		// 	case 'ㅏ':
		// 		step = 'E';
		// 		octave = 5;
		// 	case 'ㅑ':
		// 		step = 'F';
		// 		octave = 5;
		// 	case 'ㅓ':
		// 		step = 'G';
		// 		octave = 5;
		// 	case 'ㅕ':
		// 		step = 'A';
		// 		octave = 5;
		// 	case 'ㅗ':
		// 		step = 'B';
		// 		octave = 5;
		// 	case 'ㅛ':
		// 		step = 'C';
		// 		octave = 6;
		// 	case 'ㅜ':
		// 		step = 'D';
		// 		octave = 6;
		// 	case 'ㅠ':
		// 		step = 'E';
		// 		octave = 6;
		// 	case 'ㅡ':
		// 		step = 'F';
		// 		octave = 6;
		// 	case 'ㅣ':
		// 		step = 'G';
		// 		octave = 6;
		// 	case 'ㅐ':
		// 		step = 'A';
		// 		octave = 6;
		// 	case 'ㅒ':
		// 		step = 'B';
		// 		octave = 6;
		// 	case 'ㅔ':
		// 		step = 'C';
		// 		octave = 7;
		// 	case 'ㅖ':
		// 		step = 'D';
		// 		octave = 7;
		// 	case 'ㅘ':
		// 		step = 'E';
		// 		octave = 7;
		// 	case 'ㅙ':
		// 		step = 'F';
		// 		octave = 7;
		// 	case 'ㅚ':
		// 		step = 'G';
		// 		octave = 7;
		// 	case 'ㅝ':
		// 		step = 'A';
		// 		octave = 7;
		// 	case 'ㅞ':
		// 		step = 'B';
		// 		octave = 7;
		// 	case 'ㅟ':
		// 		step = 'C';
		// 		octave = 8;
		// 	case 'ㅢ':
		// 		step = 'D';
		// 		octave = 8;
		// }

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
		var ruledNote = noteTemplate.replace("<%step%>", step);
		var finalNote = ruledNote.replace("<%octave%>", octave);
		resultNotes = resultNotes.concat(finalNote);
	}	
	return resultNotes;
}

