/*
total word count
analyse and display number of words
-
Unique
make array of unique words and query number of elements in array
strip case toLOwer
srip punctuation

-
calculate word total length then divide by number of words
-
number of words in sentence
*/

var totalWordCount = 0;

function findTotalWords(text) {
	var textArray = text.trim().split(' ');
	var textArrayLength = textArray.length;
	$('#wordCount').text(textArrayLength);
}


function submitAnalyse(event) {
	event.preventDefault();
	findTotalWords($('#user-text').val());
	countUniqueWords($('#user-text').val());
	avgWordLength($('#user-text').val());
	avgSentenceLength($('#user-text').val());
}

$('form').submit(submitAnalyse);
//
//Begin rough code
//count unique words


function countUniqueWords(text) {
	var textArray = text.toLowerCase().replace(/[.!?]+/g,'').trim().split(' ');
	//regEx OR just '.'
	var uniqueWordsArray = [];
	var found = false;
	for (var i = 0; i < textArray.length; i++) {
		found = false;
		for (var j = 0; j < uniqueWordsArray.length; j++) {
			if (textArray[i] === uniqueWordsArray[j]) {
				found = true;
				break;
			}
		}
		if (!found) {
			uniqueWordsArray.push(textArray[i]);
		}
	}
	$('#uniqueWordCount').text(uniqueWordsArray.length);
}

//convert array toLower
//remove duplicates from array
//count array length

function avgWordLength(text) {
	var textArray = text.toLowerCase().replace(/[.!?]+/g,'').trim().split(' ');
	var totalLength = textArray.join('');
	var avgWordLengthVar = totalLength.length / textArray.length;
	$('#avgWordLength').text(avgWordLengthVar);
}


function avgSentenceLength(text) {
	var sentenceArray = text.trim().split(/[.!?]+/g);
	var sentenceLengthVar = 0;
	for (var i = 0; i < sentenceArray.length; i++) {
		sentenceLengthVar += sentenceArray[i].trim().length;
		//abbreviated from x = x + y
	}
	sentenceLengthVar = sentenceLengthVar / sentenceArray.length;
	$('#avgSentenceLength').text(sentenceLengthVar);
}




//end