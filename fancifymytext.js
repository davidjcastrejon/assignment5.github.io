document.addEventListener("DOMContentLoaded", function() {
	
	// Adding event listener to the "Bigger" button.
	document.getElementById("bigger-button").addEventListener("click", function() {
		document.getElementById("text-input").style.fontSize = "24pt";
	});

	// Adding event listener to the "FancyShmancy" radio button.
	document.getElementById("fancy-button").addEventListener("click", function() {
		document.getElementById("text-input").style.fontWeight = "bold";
		document.getElementById("text-input").style.color = "blue";
		document.getElementById("text-input").style.textDecoration = "underline";
	});

	// Adding event listener to the "BoringBetty" radio button.
	document.getElementById("boring-button").addEventListener("click", function() {
		document.getElementById("text-input").style.fontWeight = "normal";
		document.getElementById("text-input").style.color = "black";
		document.getElementById("text-input").style.textDecoration = "none";
	});

	// Adding event listener to the "Moo" button.
	document.getElementById("moo-button").addEventListener("click", function() {
		var text = document.getElementById("text-input").value;
		var sentences = text.split(".");
		for (var i = 0; i < sentences.length; i++) {
			var words = sentences[i].split(" ");
			words[words.length - 1] += "-Moo";
			sentences[i] = words.join(" ");
		}
		text = sentences.join(".");
		document.getElementById("text-input").value = text.toUpperCase();
	});
});

  
  
  
