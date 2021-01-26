/* add in your functions here */
document.write('<header>'+ '<h2>Share Your Travel</h2></header>'+'<div class="flex-container justify">');


function outputcountrybox(name,continent,cities,photos)
{
		document.write('<div class="item">'+'<h2>'+ name+'</h2>');
		document.write('<p>'+ continent +'</p> </div>');
}

for(let i=0; i<countries.length; i++)
		{
			outputcountrybox(countries[i][0], countries[i][1], countries[i][2], countries[i][3]);
		}

document.write('</div>');