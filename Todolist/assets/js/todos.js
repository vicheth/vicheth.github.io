//Check Off Specific todos by clicking

//******LONG VERSION OF THE CODE THAT WORKS
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}

// 	//else
// 	else {
// 		//turn it gray
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

//END OF LONGER VERSION

//SHORTER CODE CHECK OFF SPECIFIC TODOS BY CLICKING
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type ='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();

});