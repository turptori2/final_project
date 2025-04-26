// project card flip
document.querySelectorAll('.project-card').forEach(card => {
	card.addEventListener('click', () => {
		card.classList.toggle('flipped');
	});
});

// autoscroll smooth for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// fade in fade out sections
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Don’t fade out skills section — keep it visible once shown
        if (entry.target.id !== "skills") {
          entry.target.classList.remove("visible");
        }
      }
    });
  },
  {
    threshold: 0.2, // A bit lower for short sections like skills
  }
);

sections.forEach((section) => observer.observe(section));



  // Auto-scroll skills section
const scrollContainer = document.getElementById('autoScroll');

let scrollAmount = 0;
function autoScrollSkills() {
	scrollAmount += 1;
	if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
		scrollAmount = 0; // reset
	}
	scrollContainer.scrollTo({
		left: scrollAmount,
		behavior: 'smooth'
	});
}
setInterval(autoScrollSkills, 30); // speed

