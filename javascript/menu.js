// Put the menu items into the array. Each item has an HTML fragment (mostly just the
// name of the item, but can also be (eg,) the HTML for an image) and a link.
// Special logic:
// 1. If a link is null, the HTML fragment is not wrapped in an <a href=...></a> element;
// 2. If a link begins with "http", the target is automatically set to "_new", to pop up a new window;
// 3. If a non-null "target" parameter is applied to the function, and (2) does not apply, the target of the link is set to the supplied target.

var menuItems = new Array(
	new Array("<img src=\"img/powergen_logo.gif\" width=63 height=59>", null),
	new Array("Summary", "intro.htm"),
	new Array("Ideas", "ideas_frame.htm"),
	new Array("Super connectivity", "superconnectivity.htm"),
	new Array("Building value in a people business", "buildingvalueinapeoplebusiness.htm"),
	new Array("Issues", "issues.htm"),
	new Array("Interviews", "interviews.htm")
	);

function getMenuHTML(target) {
	var i;
	var s = "";
	for (i=0; i < menuItems.length; i++)
	{
		var item = menuItems[i][0];
		var link =menuItems[i][1];

		if (link != null)
		{
			s  = s + "<a href=\"" + link + "\"";
			if (link.indexOf("http") == 0)
				s = s +" target=_new";
			else if (target != null)
				s = s + " target=\"" + target + "\"";
			s = s + ">";
		}

		s = s + item;

		if (link != null)
			s = s + "</a>";

		s = s + "<br><br>";
	}
	return s;
}

function writeMenu(doc, target)
{
	doc.write(getMenuHTML(target));
}
