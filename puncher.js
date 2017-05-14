function punch () {
	$('.puncher').animate({top: 100}, {
		duration: 300,
		complete: function() {
			$('.puncher').animate({top: 0}, {
				duration: 300
			});
		}
	});
}

// function Puncher() {
// 	this.CreateNew() = 
// }
