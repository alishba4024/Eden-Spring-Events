
 // JavaScript for toggling the navbar
 document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('active');
});

// BANNER SECTION

// Toggle background active
const slideNavigator= name =>{
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide =>{
        slide.classList.remove('active');
        if(slide.classList.contains(name)){
            slide.classList.add('active');
        }
    });
};

// switch background
window.addEventListener('load', ()=>{
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn =>{
        btn.addEventListener('click', function (e){
            e.preventDefault();
            slideBtnList.forEach(el =>{
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});


// FOOTER SECTION
const marqueeElement = document.getElementById('dynamicMarquee');
  
  function updateMarquee() {
    const now = new Date();
    const dateTimeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    const locationString = 'Karachi, Pakistan';
    marqueeElement.textContent = `Date/Time: ${dateTimeString} | Location: ${locationString}`;
  }
  
  // Update marquee content every second (1000 milliseconds)
  setInterval(updateMarquee, 1000);
  
  // Pause marquee when mouse enters
  marqueeElement.addEventListener('mouseenter', function() {
    marqueeElement.setAttribute('scrollamount', '0');
  });
  
  // Resume marquee when mouse leaves
  marqueeElement.addEventListener('mouseleave', function() {
    marqueeElement.setAttribute('scrollamount', '4'); // Set the scroll speed you want here
  });
  
  // Initial update when the page loads
  updateMarquee();
  







