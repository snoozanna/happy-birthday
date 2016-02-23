$(function(){
	//bind to radio buttons (check indivual)
	var $radios = $('input[type=radio]');
	var results = [];

	var isfirstOpen = false;

	//hide all panels except first
	var $triggers = $('.accordionTrigger');

	//


	//hide other triggers onclick
	$triggers.on('click.hide', function(){

	});



	//console.log($radios);
	$radios.on('click.select', function(){

		//find radio button
		var $this = $(this);

		//get value
		var name = $this.val();
		console.log('name: ', name);

		//check if beatle is already in the results
		var beatle = _.find(results, {name: name});
		console.log('beatle: ', beatle);

		if(beatle){ // if so, then increment score
			console.log('adding 1 to '+beatle.name);
			beatle.score += 1;
		} else { // otherwise put a new beatle object in to represent him
			console.log('adding '+ name);
			results.push({
				name: name,
				score: 1
			});
		}

		console.log('results: ', results);

		// TODO: think if we're closing the panels once answered. If not
		// then we'll need to disable buttons once the quetion has been answered

	});


	$('#findOut').on('click.total', function(){
		console.log('finding out: ', results);
		var result = _.countBy(results);
		console.log('sort', result);

		var diagnosis = {
       		primary: null,
       		secondary: null
  	 	};

	//var beatles = [{name: 'lennon', score: 3}];

	var sorted = _.sortBy(results, ['score']);
	console.log('ordered', sorted);
	console.log('pre diagnosis', diagnosis);
		diagnosis.primary = (sorted.pop()).name;
		console.log('diagnosis 1', diagnosis);


		if(sorted.length > 0){
			console.log('secondary diagnosis', diagnosis.secondary);
  		 diagnosis.secondary = (sorted.pop()).name;
		} else {
				diagnosis.secondary="";
				diagnosis.primary = "double " + diagnosis.primary;
			console.log('doubling up: secondary diagnosis', diagnosis.primary, diagnosis.secondary);
		}







		$('#primary-result').text(diagnosis.primary);
		$('#secondary-result').text(diagnosis.secondary);

		$('#myModal').modal();


		return false;
	});










});
