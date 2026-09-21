$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
	$('#btnAdd').click(addTown)
        $('#btnShuffle').click(shuffleTowns)
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown() {
	let townName = $('#newTownName').val();
	$('#newTownName').val('');
	if (townName.trim() === '') {
		$('#result').text("Please enter a town name.");
		return;
	}
	$('#towns').append($('<option>').text(townName));
	$('#result').text(townName + " added.");
}

function shuffleTowns() {
	let options = $('#towns option').toArray();
	for (let i = options.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[options[i], options[j]] = [options[j], options[i]];
	}
	$('#towns').empty();
	$('#towns').append(options);
	$('#result').text("Towns shuffled.");
}