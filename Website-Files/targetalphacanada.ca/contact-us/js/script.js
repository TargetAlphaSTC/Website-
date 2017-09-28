function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$( document ).ready(function() {
	$("#conform").submit(function(e) {
		
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();			
		if (!name) {
			document.getElementById("name").style.backgroundColor = "#D7B4B5";
		}
		else {
			document.getElementById("name").style.backgroundColor = "#93B1AC";
		}
		if (!email || !validateEmail(email)) {
			document.getElementById("email").style.backgroundColor = "#D7B4B5";
		}
		else {
			document.getElementById("email").style.backgroundColor = "#93B1AC";
		}
		if (!subject) {
			document.getElementById("subject").style.backgroundColor = "#D7B4B5";
		}
		else {
			document.getElementById("subject").style.backgroundColor = "#93B1AC";
		}	
		if (!message) {
			document.getElementById("message").style.backgroundColor = "#D7B4B5";
		}
		else {
			document.getElementById("message").style.backgroundColor = "#93B1AC";
		}
		
		if (name && email && validateEmail(email) && subject && message) {
			var form = $("#conform");
			$.ajax({
			  url: form.attr('action'),
			  type: form.attr('method'),
			  data: form.serialize(),
			  success: function(response) {
				  $('input').css('background-color','#72BDA3');
				  $('textarea').css('background-color','#72BDA3');
				  $(".contactUsButton").prop('disabled', true);
				  $(".contactUsButton").prop('value', 'Sent!');
				  $("conform").fadeOut();
				  
			  }
			});
		}
		return false;
	});
});