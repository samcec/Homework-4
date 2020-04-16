var balloonSize = 30;

const handler = function (event) {
	console.log(event.code)
	if (event.code === "KeyI") {
		balloonSize += 10;
	} else if (event.code === "KeyD") {
		balloonSize -= 10;
	}
	if (balloonSize > 60) {
		blow();
	} else if (balloonSize <= 0) {
		done();
	} else {
		changeBalloonSize(balloonSize);
	}
}

function changeBalloonSize(size) {
	balloon = document.getElementById('balloon');
	balloon.style.fontSize = size + 'px';
}

function blow() {
	balloon = document.getElementById('balloon');
	balloon.innerHTML = '💥';
	document.removeEventListener('keyup', handler);
}

function done() {
	balloon = document.getElementById('balloon');
	balloon.style.fontSize = 30 + 'px';
	balloon.innerHTML = "Done";
	document.removeEventListener('keyup', handler);
}

document.addEventListener('keyup', handler);
