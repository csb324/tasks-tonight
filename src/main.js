function updateTasks(candidate, inputString) {
	var tasks = inputString.split("\n");
	var $tasksList = $('.tasks__list--' + candidate);
	$tasksList.empty();

	for (var i = 0; i < tasks.length; i++) {
		var $task = $('<li>').addClass('tasks__list-item');
		if (tasks[i].length > 0) {
			$task.html("<span class='tasks__bullet'>-</span> " + tasks[i]);
			$tasksList.append($task);
		}
	}
}

$('.input__candidate').keyup(function() {
	var candidate = $(this).attr('name');
	var value = $(this).val();

	updateTasks(candidate, value);
})



function lightboxOn() {
	$('.lightbox').addClass('open');
	$('.wrapper').addClass('lightbox-open');
}

function lightboxOff() {
	$('.lightbox').removeClass('open');
	$('.wrapper').removeClass('lightbox-open');
}

$('#go').on('click', function(){
	
	html2canvas($("#tasks-canvas"), {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
			$('.image').attr('src', myImage);
			lightboxOn();
    }
  });

});


$('#close').on('click', function(){
	lightboxOff();
});