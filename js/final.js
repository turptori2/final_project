<script>
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
</script>


// Add event listener for contact form
document.addEventListener("DOMContentLoaded", () => {
	  const form = document.querySelector("#contact-form");
	  form.addEventListener("submit", function (e) {
		    e.preventDefault();
	    alert("Thank you for contacting me! Your message has been sent.");
	    form.reset();
	});
});


