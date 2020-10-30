function getIssueNoteFrameset(url)
{
	var noteIndex = getURLParameter(new String(url), "noteindex");
	if (noteIndex == null)
	{
		alert("Missing noteindex parameter");
		return;
	}	

	var personIndex = getPersonIndexFromID(issueNoteLinks[noteIndex][1]);
	var s = "<frameset onLoad='highlightElements(top.frames[2].document.childNodes[0],convertCommaSeparatedNumbersToArray(\"" + issueNoteLinks[noteIndex][3] +"\"), \"#ffff80\")' cols=120,150,* frameborder=0>";
	s = s + "<frame src=powergenMenu.htm scrolling=no>";
	s = s + "<frame src=\"issueNoteCommentary.htm#noteindex=" + noteIndex + "\" scrolling=no>";
	s = s + "<frame src=\"" + people[personIndex][7]+"\">";
	s = s + "</frameset>";

	return s;
}

function getIssueNoteCommentary(url)
{
	var noteIndex = getURLParameter(new String(url), "noteindex");

	var issueIndex = getIssueIndexFromID(issueNoteLinks[noteIndex][0]);

	var s = "<head><link rel=\"stylesheet\" href=\"styles/main.css\" type=\"text/css\"></head>";
	s = s + "<p><b>" + issues[issueIndex][1] + "</b>";
	s = s + "<hr>";
	s = s +  issueNoteLinks[noteIndex][2] + "</p>";
	s = s + "<br><a href=javascript:history.back() target=_top>Back</a>";

	return s;
}

function highlightElements(node, highlightedElements, highlightColor)
{
	highlightElementsRecurse(node, new Array(new Number(0)).concat(highlightedElements), highlightColor);
}

function highlightElementsRecurse(n, highlightArray, highlightColor)
{
	if (n == null)
		return highlightArray;

	if (highlightArray.length == 1)
		return highlightArray;	// short-cut the process if we've run out of things to highlight

	// check whether the current node is of a type in which we're interested
	if (n.nodeType == 1 /* element */ && (n.nodeName == "P" || n.nodeName == "LI"))
	{
		highlightArray[0] = highlightArray[0] + 1;	// increment the node counter, in the first element of the array
		if (highlightArray[0] == highlightArray[1])
		{
			n.style.backgroundColor = highlightColor;	// highlight the element
			highlightArray = new Array(new Number(highlightArray[0])).concat(highlightArray.slice(2));	// remove the first element of the list of highlighted elements
		}
	}

	// now do children
	highlightArray = highlightElementsRecurse(n.childNodes[0], highlightArray, highlightColor);

	// now do siblings
	highlightArray = highlightElementsRecurse(n.nextSibling, highlightArray, highlightColor);

	return highlightArray;
}

