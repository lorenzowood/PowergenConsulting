function generateInterviewMenu()
{
	var s = "<p>";
	var i;

	for (i=0; i < people.length; i++)
	{
		var interviewNotes = people[i][7];
		if (interviewNotes != "")
		{
			var firstName = people[i][2];
			var lastName = people[i][1];
			var jobTitle = people[i][4];

			s = s + "<a href=\"" + interviewNotes + "\" target=interviewNotes>" + firstName + " " + lastName + "</a><br>";
		}
	}

	return s + "</p>";
}