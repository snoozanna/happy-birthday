$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      autoPlay: 500, //Set AutoPlay to 3 seconds

      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover : true,
      rewindSpeed:50,
      responsive:true

  });

var $whale = $("#whale");

var $player = $("#player");


//alert when whale is clicked
  $whale.on('click.whale', function(){
    alert("WINNER!! WINNER!!");
  });

//playtrack

  $player.get(0).play();

//onload play track


});
