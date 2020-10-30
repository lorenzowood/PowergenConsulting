function generateIssuesList ()
{
	var i;
	var s = "";

	for (i=0; i < issues.length; i++)
	{
		s = s + '<li><b>' + issues[i][1] + '</b><br>' + issues[i][2];
	}

	return "<ul>" + s + "</ul>";
}

function findIssueNoteLink(personID, issueID)
{	
	var i;
	for (i=0; i < issueNoteLinks.length; i++)
		if (issueID == issueNoteLinks[i][0] && personID == issueNoteLinks[i][1])
			return i;

	return -1;
}

function generateIssuesTable()
{
	var i, j;

	// step 1: build a table heading covering all the people
	var numberOfPeople = people.length;
	var tableHeading = "<table border=1><tr><td>&nbsp;</td>";

	for (i=0; i < numberOfPeople; i++)
	{
		var firstName = people[i][2];
		var lastName = people[i][1];
		var interviewFilename = people[i][7];

		if (interviewFilename != "")
			tableHeading = tableHeading + "<td onMouseOver=\"window.status='" + firstName + " " + lastName + "'\" onMouseOut=\"window.status=''\">" + firstName.substring(0,1) +  lastName.substring(0,1) + "</td>";

	}
	tableHeading = tableHeading + "</tr>";

	var s = "";

	for (i=0; i < issues.length; i++)
	{
		var issueID = issues[i][0];
		var issueName = issues[i][1];

		s = s + "<tr><td>" + issueName + "</td>";
		for (j=0; j<numberOfPeople; j++)
		{
			var personID = people[j][0];
			var firstName = people[j][2];
			var lastName = people[j][1];
			var  interviewFilename = people[j][7];

			if (interviewFilename != "")
			{
				issueNoteLinkIndex = findIssueNoteLink(personID, issueID);

				if (issueNoteLinkIndex >= 0)
				{
					var commentary = issueNoteLinks[issueNoteLinkIndex][2];
	
					s = s + "<td onMouseOver=\"window.status='" + firstName + " " + lastName + ": " + commentary + "'\" onMouseOut=\"window.status=''\"><center><a href=\"issueNoteFrame.htm#noteindex=" + issueNoteLinkIndex + "\">X</a></center></td>";
				}
				else
					s = s + "<td>&nbsp;</td>";
			}
		}
		s = s + "</tr>";
	}

	return tableHeading + s + "</table>";
}

	