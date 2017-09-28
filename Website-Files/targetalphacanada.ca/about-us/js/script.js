// JavaScript Document
$( document ).ready(function() {
	$(".ontario").hide();
	$(".alberta").hide();
	$(".bc").hide();
	$(".one").on("click", function() {
		$(".ontario").slideToggle("slow");
	});
	$(".two").on("click", function() {
		$(".alberta").slideToggle("slow");
	});
	$(".three").on("click", function() {
		$(".bc").slideToggle("slow");
	});
});