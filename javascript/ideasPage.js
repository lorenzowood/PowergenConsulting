function generateIdeasTable(x)
{
	s = "";

	var i;
	for (i=0; i < ideas.length; i++)
	{
		s = s + "<b>"+ ideas[i][1] + "</b><br>" + ideas[i][2];
	}

	return s + "<br>";
}

function writeIdeaDetail(doc, url)
{
	var i = getURLParameter(new String(url), "ideaindex");
	s = "";

	s = s + "<b>"+ ideas[i][1] + "</b><br>" + ideas[i][2];

	// now look for coverage of issues
	var ideaID = ideas[i][0];
	var coverage = "";
	
	for (i=0; i < ideaIssueLinks.length; i++)
	{
		if (ideaIssueLinks[i][0] == ideaID)
		{
			var issueID = ideaIssueLinks[i][1];
			var issueIndex = getIssueIndexFromID(issueID);
			var coverageLevel = ideaIssueLinks[i][2];
			var comment = ideaIssueLinks[i][3];

			var issueDescription = issues[issueIndex][1];
			if (coverageLevel == 4)
				issueDescription = "<b>" + issueDescription + "</b>";

			if (comment != "")
				issueDescription = issueDescription + " ("+ comment + ")";

			var j;
			var peopleComments = "";
			for (j=0; j < issueNoteLinks.length; j++)
			{
				if (issueNoteLinks[j][0] == issueID)
				{
					var personID = issueNoteLinks[j][1];
					var personIndex = getPersonIndexFromID(personID);

					var firstName = people[personIndex][2];
					var lastName = people[personIndex][1];

					peopleComments = peopleComments + ", <a href=\"issueNoteFrame.htm#noteindex=" + j + "\" target=_top>" + firstName + " " + lastName + "</a>";
				}
			}
			if (peopleComments != "")
				issueDescription = issueDescription + "<br>" + peopleComments.substring(2);

			coverage = coverage + "<li>" + issueDescription + "</li>";
		}
	}

	if (coverage != "")
		s = s + "<p>Relevant <a href=\"issues_main.htm\" target=_top>issues</a>:<ul>" + coverage + "</ul></p>";

	doc.write(s);
}

function writeIdeaSelector(doc, widthInPixels, fontFace, fontSize)
{
	var s = "";

	var principleIndex;
	for (principleIndex = 0; principleIndex < superconnectivityPrinciples.length; principleIndex++)
	{
		s = s + "<a name=\"" + principleIndex + "\"></a>";

		var principleID = superconnectivityPrinciples[principleIndex][0];

		var i;
		for (i=0; i < superconnectivityPrinciples.length; i++)
		{
			s = s + "<a href=\"#" + i + "\"><b>" + superconnectivityPrinciples[i][1] + "</b></a></br>";
			if (i == principleIndex)
			{	// display the ideas under this heading
				var j;
				for (j=0; j < scpIdeaLinks.length; j++)
				{
					var linkPrincipleID = scpIdeaLinks[j][0];
					var linkIdeaID = scpIdeaLinks[j][1];

					if (linkPrincipleID == principleID)
					{
						var ideaIndex = getIdeaIndexFromID(linkIdeaID);

						//s = s + "&nbsp;&nbsp;"+ ideas[ideaIndex][1] + "<br>";


						s = s + "&nbsp;&nbsp;<a href=\"idea_detail.htm#ideaindex=" + ideaIndex + "\" target=\"ideadetail\">" + ellipsise(ideas[ideaIndex][1], widthInPixels, fontFace, fontSize) + "</a><br>";
					}
				}
			}
		}

		for (i=0; i < 75; i++)
			s = s + "<br>";
	}

	doc.write(s);
}


	