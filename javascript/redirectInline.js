// requires oldName and newName to have been set up

// This is used because, if you're using # to indicate the start of your (client-side) parameters, you
// can't re-load the page you're on just by linking to it because the browser won't bother.
// So, you make a new page to redirect, parameters and all, to your main page. Then you make
// all links point to that. The downside is the double load, but it makes the code neater.

var temp = document.location.href;
var i = temp.indexOf(oldName);	// locate the page name in the URL
if (i != -1)
{
	temp = temp.substring(0, i) + newName + temp.substring(i + oldName.length);
	document.location.href = temp;
}
else
	document.write("This page is meant to be called \"" + oldName + "\", and will not work if it has been renamed.");