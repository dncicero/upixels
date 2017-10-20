// Select color input
// Select size input

// // When size is submitted by the user, call makeGrid()


// Prevent submit click from refreshing page
// Look for tr elements and delete all table children if one exists  
// Generate a new grid (add tr and td elements) based on user input

$('#submit').click(function makeGrid(evt){
	evt.preventDefault();
	const height = $('#input_height').val();
	const width = $('#input_width').val();
	if($('tr').eq(0).length){
		$('#pixel_canvas').empty();
	}
	for (let i = 1; i <= height; i++){
		$('<tr></tr>').appendTo('#pixel_canvas');
	}
	for (let i = 1; i <= width; i++){
		$('<td></td>').appendTo('tr');
	}
});

// Delegate listener to table element
// Use current color value for grid cell (td) background

$('#pixel_canvas').on('click', 'td', function(evt){
	const color = $('#colorPicker').val();
	$(evt.target).css('background', color);
});
