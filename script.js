$( document ).ready(function() {
    console.log( "ready!" );
});


function showSection(sectionId) {
	
  const targetSection = document.getElementById(sectionId);
	
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.remove('visible');
  });

  targetSection.classList.add('visible');
}
