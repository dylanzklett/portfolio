$(document).ready(function(){
	
$("h1").hide();
$("h1").fadeIn(2000);

$("h2").hide();
$("h2").fadeIn(2000);

$("ul li").hide();
$("ul li").slideDown(2000);

$("#home").click(
	function(){
		alert("I'm so shy!");
		$("#home").hide();
	}
);	

});