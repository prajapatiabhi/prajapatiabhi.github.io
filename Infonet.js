function print_values()
{
	var items=document.getElementsByName('interest');
		var selectedItems="";
		for(var i=0; i<items.length; i++)
		{
			if(items[i].type=='checkbox' && items[i].checked==true)
				selectedItems+=items[i].value+"\n";
		}

		var ex = document.getElementsByName('site')[0];
		var str= ex.options[ex.selectedIndex].value;
            
         alert("Name: "+document.getElementById('first_name').value+" "+
            			   document.getElementById('last_name').value+"\n"+
            	  "Email:"+document.getElementById('email').value+"\n"+
            	  "Address: "+document.getElementById('address').value+"\n"+
            	  "City: "+document.getElementById('city').value+"\n"+
            	  "Statte: "+document.getElementById('state').value+"\n"+
            	  "Postal: "+document.getElementById('postal').value+"\n"+
            	  "Country: "+document.getElementById('country').value+"\n"+
            	  "Option: "+document.getElementById('item').value+"\n"+
            	  "Interests: "+selectedItems+"\n"+
            	  "I learned about this site from:"+str+"\n"+
            	  "Comment: "+document.getElementById('comment').value);
            
}


function check_validity()
{
	if((document.getElementById('first_name').value == "") ||
		(document.getElementById('last_name').value == "") ||
		(document.getElementById('email').value == "") ||
		(document.getElementById('address').value == "") ||
		(document.getElementById('city').value == "") ||
		(document.getElementById('postal').value == "") ||
		(document.getElementById('country').value == ""))
	{
		alert("Fields empty. Fill all fields.");
	}
	else
		print_values();
	
            			   

}


function refresh()
{
	location.reload();
}
