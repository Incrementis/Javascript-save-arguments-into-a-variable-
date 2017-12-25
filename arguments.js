//Purpose: Defines all the functionality that the Gallery needs
function imageGallery()
{
	var current = 0;
	var overall = arguments.length - 1;
	var images = arguments;
	
	var Gallery =
	{
		
		Next: function()
		{
			current++
			
			//Checking if it is the last image
			if( this.showsLastImage() )
			{
				return images[overall];
			}
			
			return images[current];
			
		},
		Previous: function()
		{
			current--;
			
			//Checking if it is the first image
			if( this.showsFirstImage() )
			{
				return images[0];
			}
			
			
			return images[current];
			
		},
		showsFirstImage: function()
		{
			
			if(current < 0)
			{
				alert("This is the first image. There are no previous images!");
				
				current = 0;
				
				return true;
			}
			
		},
		showsLastImage: function()
		{
			
			if(current > overall)
			{
				alert("This is the last image. There are no next images!");
				
				current = overall;
				
				return true;
			}
			
		}
		
	}
	
	return Gallery;
	
}



//Initializing Gallery
var initGallery = imageGallery( "Heart.png", "Junk.png", "Star.png" );


//Purpose: Checks which button is pressed and changes the needed Picture if possible
function buttonPressed(Button)
{
	var picture = document.getElementById('picture'); 
	
	if(Button === "Next")
	{
		
		picture.src = initGallery.Next();
		
	}
	else if(Button === "Previous")
	{
		
		picture.src = initGallery.Previous();
		
	}
	
	
}


