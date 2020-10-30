// each issue contains an ID, a name, a description
var issues = new Array(
new Array(40, "Lack of connectivity","Members of the group have limited connectivity to Powergen resources when they are not in the office. Obvious examples of this include time spent at home, in hotel rooms and while travelling in the car or on the train."),
new Array(4, "Poor utilisation of competencies","The Powergen group does not have enough explicit knowledge about the range of competencies within the group and the organisation at large. The result of this is a reduction in its ability to make the best possible use of the people it has available."),
new Array(42, "Uncertain group image","The company is uncertain of what the role of the group is and therefore does not know how to use it as a resource."),
new Array(45, "Poor access to other directors","There are barriers in the way of directors gaining access to each other. Examples of this include closed calendars, lack of connectivity outside the office and a lack of time set aside to communicate with each other."),
new Array(41, "Poor information availability","Directors do not often use the resources of the Web or the intranet because they have a feeling that the information they need is not available. A significant for this is the length of time they have spent searching unsuccessfully in the past."),
new Array(6, "Unclear objectives","The group does not have a clear understanding of the objectives of individuals within the group. This can lead to confusion about who does what and how tasks should be shared out between group members."),
new Array(5, "Lack of information continuity","Meetings and conversations occur between individuals who have inconsistent information but who both believe their own versions to be the most timely and accurate. This lack of continuity of information &#151; particularly when it is not immediately aware &#151; can cause confusion and lead to mistakes being made."),
new Array(3, "Wasted time","Members of the group waste time attempting tasks unsuccessfully. Examples of this include downloading documentation from UK servers when in the US and searching for files on the Powergen network."),
new Array(37, "Skills gaps","It is taken for granted that the group directors have all the necessary skills they need. This assumption is not correct in every case and some directors would benefit from basic training with e-mail and other desktop applications."),
new Array(44, "Inefficient meetings","Poor preparation and/or organisation can result in inefficient meetings. Examples of this include lack of agendas, people using out of date information, not reading materials beforehand or failing to follow up the meeting action points."),
new Array(43, "Too much information","Directors are presented with a great deal of information every day. The sheer quantity of information makes the process of filtering the important factors from the less important an extremely difficult one."),
new Array(39, "Two steps forward, one step back","Sometimes initiatives are associated with improvements on one hand and the loss of useful elements on the other. The image of new initiatives suffers as a result of this."),
new Array(1, "Security risk","Some communication that occurs outside Powergen could lead to a breach of security. An example of this is when confidential mail is forwarded onto Hotmail accounts."),
new Array(47, "Lack of a sharing culture","There is evidence that the culture of the Powergen group is not  primarily one of sharing.")
);

function getIssueIndexFromID(issueID)
{
	var i;

	for (i=0; i < issues.length; i++)
		if (issues[i][0] == issueID)
			return i;

	return -1;
}