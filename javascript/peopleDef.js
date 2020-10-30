// each person contains an a person ID, a last name, a first name, a reports-to ID, a job title, an e-mail address, notes and an interview filename
var people = new Array(
new Array(1,"Baldwin","Nick",0,"CEO","nick.baldwin@pgen.com","","nick_baldwin.htm"),                                                                                                                                                                           
new Array(13,"Barrow","Audrey",12,"PA","audrey.barrow@pgen.com","","audrey_barrow.htm"),                                                                                                                                                                       
new Array(17,"Baxter","John",1,"Chief Engineer","john.baxter@pgen.com","Not interviewed",""),                                                                                                                                                                  
new Array(3,"Bonnie","Rhonda",2,"PA","rhonda.bonnie@pgen.com","","rhonda_bonnie.htm"),                                                                                                                                                                         
new Array(8,"Green","Chris",17,"Head of R&D","chris.green@pgen.com","","chris_green.htm"),                                                                                                                                                                     
new Array(7,"Hart","John",1,"Personnel Director","john.hart@pgen.com","","john_hart.htm"),                                                                                                                                                                     
new Array(4,"Hickson","Peter",1,"Financial Director","peter.hickson@pgen.com","Not interviewed",""),                                                                                                                                                           
new Array(6,"Hodgkin","Jonathan",1,"Strategy & Development Group Director","jonathan.hodgkin@pgen.com","","jonathan_hodgkin.htm"),                                                                                                                             
new Array(14,"Inman","Karen",4,"PA","karen.inman@pgen.com","Also covers Chris Salame+ head of Regulation (Sara Vaughan)","karen_inman.htm"),                                                                                                                   
new Array(2,"Jackson","David",1,"Company Secretary & Group Council","david.jackson@pgen.com","","david_jackson.htm"),                                                                                                                                          
new Array(11,"Lidiard","Mark",4,"Head of Investor Relations","mark.lidiard@pgen.com","Not interviewed",""),                                                                                                                                                    
new Array(16,"Mulligan","Mary",8,"PA","mary.mulligan@pgen.com","","mary_mulligan.htm"),                                                                                                                                                                        
new Array(12,"Sheers","Caroline",4,"Mergers & Acquisitions","caroline.sheers@pgen.com","","caroline_sheers.htm"),                                                                                                                                              
new Array(5,"Vevers","Maureen",1,"Director Group IT","maureen.vevers@pgen.com","Not interviewed",""),                                                                                                                                                          
new Array(10,"Wood","Carol",4,"Group Director Planning & Performance","carol.wood@pgen.com","","carol_wood.htm"),                                                                                                                                              
new Array(15,"Wright","Kim",1,"PA","kim.wright@pgen.com","","kim_wright.htm"),                                                                                                                                                                                 
new Array(9,"Wynn","Gareth",1,"Corporate Affairs","gareth.wynn@pgen.com","","gareth_wynn.htm")                                                                                                                                                               

);


function getPersonIndexFromID(personID)
{
	var i;

	for (i=0; i < people.length; i++)
		if (people[i][0] == personID)
			return i;

	return -1;
}