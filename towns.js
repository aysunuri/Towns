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
		showMessage(townName + " deleted.");
	else
		showMessage(townName + " not found.");
}

function addTown() {
	let townName = $('#newTownName').val();
	$('#newTownName').val('');
	if (townName.trim() === '') {
		showMessage("Please enter a town name.");
		return;
	}
	$('#towns').append($('<option>').text(townName));
	showMessage(townName + " added.");
}

function shuffleTowns() {
	let options = $('#towns option').toArray();
	for (let i = options.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[options[i], options[j]] = [options[j], options[i]];
	}
	$('#towns').empty();
	$('#towns').append(options);
	showMessage("Towns shuffled.");
}

function showMessage(msg) {
	$('#result').text(msg);
	$('#result').show();
	setTimeout(function() {
		$('#result').hide();
	}, 3000);
}