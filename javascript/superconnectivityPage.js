function writeSuperconnectivityTable(doc)
{
	var i;
	var s = "";

	for (i=0; i < superconnectivityPrinciples.length; i++)
	{
		var name = superconnectivityPrinciples[i][1];
		var description = superconnectivityPrinciples[i][2];
		var predictable = superconnectivityPrinciples[i][3];
		var unpredictable = superconnectivityPrinciples[i][4];

		s = s + "<tr>";

		s = s + "<td><b>" + name + "</b><br>" + description + "</td>";

		s = s + "<td>";
		if (predictable != "0")
			s = s + "<center><font size=3>&#215;</font></center>";
		else
			s = s + "&nbsp;";
		s = s + "</td>";

		s = s + "<td>";
		if (unpredictable != "0")
			s = s + "<center><font size=3>&#215;</font></center>";
		else
			s = s + "&nbsp;";
		s = s + "</td>";

		s = s + "</tr>";
	}

	doc.write(s);
}