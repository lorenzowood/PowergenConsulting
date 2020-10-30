// each principle contains and ID, a name, a description and two flags: one for relevance to "predictable connections", and one for relevance to "unpredictable connections"

var superconnectivityPrinciples = new Array(
new Array(1,"Remove resistance to connections","The logistics/mechanics of connection to people and information should be as easy as possible.",-1,-1),                                                                                                                                  
new Array(2,"Be available","Connection should be available at all times and locations (applies to remote access and within a single location, such as a building).",-1,-1),                                                                                    
new Array(3,"Exploit channels","Connections should be made through the appropriate channels or combinations of channels, understanding the benefits and limitations of each.",-1,-1),                                                                          
new Array(4,"Make space","By definition, unpredictable connections do not happen when all time is allocated to pre-designated tasks.",0,-1),                                                                                                                   
new Array(5,"Create awareness","Make visible the presence, interests, behaviour and activity of the individuals in a group or team.",0,-1)
);

function getSuperconnectivityPrincipleIndexFromID(superconnectivityPrincipleID)
{
	var i;

	for (i=0; i < superconnectivityPrinciples.length; i++)
		if (superconnectivityPrincples[i][0] == superconnectivityPrincipleID)
			return i;

	return -1;
}