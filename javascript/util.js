// uses # as a marker rather than ? so it works in a filesystem
function getURLParameter(url, param)
{
	// first, move past the # that marks the start of parameters
	var i = url.indexOf("#");
	if (i == -1)
		return null;	// couldn't find an example

	// next, find the parameter in the string
	i = url.indexOf(param + "=", i);
	if (i == -1)
		return null;	// couldn't find the parameter

	// next, strip the string down to the content + any remaining parameters
	url = url.substr(i + param.length + 1);

	// finally, remove any other parameters, if present
	i = url.indexOf("&");
	if (i != -1)
		url = url.substr(0, i);

	// finally, return the extracted parameter in unescaped form
	return unescape(url);
}

function convertCommaSeparatedNumbersToArray(csn)
{
//	return csn.split(",");

	var a = new Array();
	var i = csn.indexOf(",");
	var j = 0;

	while (i != -1)
	{
		a[a.length] = Number(csn.substr(j, i-j));
		j = i + 1;
		i = csn.indexOf(",", j);
	}
	a[a.length] = Number(csn.substr(j));

	return a;

}

// makes an elliptical version of a string to the stated width
// this implementation is highly approximate, and has been tuned only
// for 11-pixel verdana -- for other fonts it makes a crude approximation
// of 1 character width = 80% of font size

// within this array, the arrays for each known character width start with four elements, containing:
// 1. the font face
// 2. the font size
// 3. the starting character
// 4. the end character
// The fifth element is the width of the starting character in pixels
var knownCharacterWidths = new Array(
new Array("verdana", 11, 32, 127, 5,3,4,8,6,12,8,4,4,4,6,7,3,4,3,5,6,6,6,6,6,6,6,6,6,6,3,3,7,8,8,5,9,7,7,8,8,6,6,8,7,4,4,7,6,8,7,8,6,8,7,7,7,7,7,11,7,7,7,4,5,4,8,7,3,6,6,6,6,6,4,6,6,3,3,6,3,11,6,6,6,6,5,5,4,6,6,8,6,6,5,6,3,6,8)
);

function ellipsise(s, widthInPixels, fontFace, fontSize)
{
	// first, determine whether we know the font widths
	var knownCharacterWidthsIndex = knownCharacterWidths.length - 1;

	while (knownCharacterWidthsIndex > -1)
	{
		if (fontFace == knownCharacterWidths[knownCharacterWidthsIndex][0]	&& fontSize == knownCharacterWidths[knownCharacterWidthsIndex][1])
			break;
		knownCharacterWidthsIndex = knownCharacterWidthsIndex-1;
	}

	// now set up start and end characters
	var startCharacter, endCharacter;
	if (knownCharacterWidthsIndex != -1)
	{
		startCharacter = knownCharacterWidths[knownCharacterWidthsIndex][2];
		endCharacter = knownCharacterWidths[knownCharacterWidthsIndex][3];
	}
	else
		startCharacter = endCharacter = -1;

	// now make a new string, allowing for the width of an ellipsis
	widthInPixels = widthInPixels - 3*fontSize/2 // reasonable approximation for three full stops in most fonts; under-estimate for fixed-width fonts, but in that case ellipsise with a fixed number of characters

	var i;
	var runningWidth = 0;
	for (i=0; i < s.length; i++)
	{
		var c = s.charCodeAt(i);
		
		if (c <= endCharacter && c >= startCharacter)
			// in this case, look up the width
			runningWidth = runningWidth + 1 + knownCharacterWidths[knownCharacterWidthsIndex][4 + c - startCharacter];
		else 
			runningWidth = runningWidth + 1 + ((80 * fontSize)/100);

		if (runningWidth > widthInPixels)
			// we've exceeded the maximum width, so return an ellipsised string
			return s.substring(0, i) + "...";
	}

	return s;
}