/* add in your functions here */
document.write('<header>'+ '<h2>Share Your Travel</h2></header>'+'<div class="flex-container justify">');

function outputcountrybox(name,continent,cities,photos)
{
		document.write('<div class="item">'+'<h2>'+ name +'</h2>');
		document.write('<p>'+ continent +'</p>');
		outputcities(cities);
		outputphotos(photos);
		function outputcities(cities)
      {    
         
        document.write('<div class="inner-box">' +
                        '<h3>Cities</h3><ul>');
        for (var i=0; i<cities.length; i++)
         {
            document.write('<li>'+ cities[i]+'</li>');
           
         }
		document.write('</ul>');
		document.write("</div>");  
		     
         
	   }

	 function outputphotos(photos)
     {

         document.write('<div class="inner-box">'  +  '<h3>Popular Photos</h3>');
         for (var i=0; i<photos.length; i++) 
         {
          document.write('<img src="images/' + photos[i] + '"class="photo"/>');
         }
         document.write('</div>');  
     }  
     
	 document.write('<button>visit</button>');
	 document.write('</div>');
	 
	}
	for(let i=0; i<countries.length; i++)
	{
         outputcountrybox(countries[i][0], countries[i][1], countries[i][2], countries[i][3]);
	 }
    
      document.write('</div>');      
	 
	 




	