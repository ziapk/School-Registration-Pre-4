jQuery(document).ready(function(){
	jQuery("select").change(function () {
		if(jQuery(this).val() == "0") 
		{
			jQuery(this).addClass("ya-empty");
		}	
		else 
		{
			jQuery(this).removeClass("ya-empty");
		}	
	});

	jQuery("select").change();
	
});



