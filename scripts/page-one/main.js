$(function(){

//set track variables

var trackOne = {
	id: 1,
	bearing: 275,
	name: 'change',
	src: './music/page-one/change.mp3'
};

var trackTwo = {
	id: 2,
	bearing: 35,
	name: 'fairly rhythmical',
	src: './music/page-one/fairly-rhythmical.mp3'
};

var trackThree = {
	id: 3,
	bearing: 105,
	name: '@figsinwigs',
	src: './music/page-one/figsinwigs.mp3'
};

var trackFour = {
	id: 4,
	bearing: 195,
	name: 'true (i need a wee)',
	src: './music/page-one/true-i-need-a-wee.mp3'
};

//create an array of tracks
var tracks = [trackOne, trackTwo, trackThree, trackFour];

//Page elements
var $fig = $("#fig-img");
var $player = $('#player')[0];

var currentBearing;

// console.log(tracks[0].name);

// Create a function which returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary() {
	var limit = tracks.length;
	var  trackNumber = Math.floor(Math.random() * limit).toFixed(0);
	console.log(trackNumber);
  	return trackNumber;
}

function getNewTrack(){
	var Rn = getRandomArbitrary();
  	var newTrack = tracks[Rn];
  	console.log('newTrack', newTrack);
  	return newTrack;
}



function changeTrack() {

  var newTrack = getNewTrack();
  var newBearing = newTrack.bearing;


  $player.pause();
  $('#trackAudio').attr("src", newTrack.src);
  console.log(newTrack.name)
  $player.load();//suspends and restores all audio element
  $player.autoplay = true;

  return newBearing;
}


// handles rotation
function rotateFig(startBearing, endBearing){
  $fig.rotate({
    angle: startBearing,
    animateTo: endBearing,
  });
  currentBearing = endBearing;
}

//fullrotation before the main rotation??



// click to change track and rotate
$fig.on('click.jukebox', function(){
    var endBearing = changeTrack();
    rotateFig(currentBearing, endBearing); // currentBearing, newBearing
});




// onload
rotateFig(0, 360);

});
