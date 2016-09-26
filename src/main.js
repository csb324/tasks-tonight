function updateTasks(inputField) {
	var candidate = $(inputField).attr('name');
	var inputString = $(inputField).val();

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

function seed() {
	$('.input__candidate--trump')
		.val('Stop lying \nThen again, we\'re not fact checkers')

	updateTasks('.input__candidate--trump');

	$('.input__candidate--clinton')
		.val('Be the Clinton who shines in a smaller crowd \nIn front of the entire country');

	updateTasks('.input__candidate--clinton');
}

seed();

$('.input__candidate').keyup(function() {
	updateTasks(this);
})


$('#go').on('click', function(){

	html2canvas($("#tasks-canvas"), {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
			$('.image').attr('src', myImage);
			$('#lightbox').modal('show')
    }
  });

});
