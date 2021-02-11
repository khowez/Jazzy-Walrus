$(".button-list-item").on("click", function() {
// pull out the pet image url from the element's attributes
	var petimageUrl = $(this).attr('data-list-item')
  // log the pet image url to the console
  console.log(petimageUrl)

  $('#jazzy-images').empty()

  $('#jazzy-images').css('background-image', `url(${petimageUrl})`)
})

$("#button1").click(function(){
  $(".reaction-text").text("Meh- could be better!");
});
$("#button2").click(function(){
  $(".reaction-text").text("BINGO! Happy pup acheived!");
});
$("#button3").click(function(){
  $(".reaction-text").text("WHOA! Danger Zone!");
});
