document.addEventListener("DOMContentLoaded", function() {
	console.log("The DOM has loaded");
	DOMContentLoaded()
  });
   
  console.log(
	"This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function DOMContentLoaded() {
	let oldText = document.getElementById('text')
	oldText.innerHTML = "This is really cool!";
  }
