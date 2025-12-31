document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Animate skill bars on page load
window.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        const width = fill.getAttribute('data-width'); // read from data-width
        fill.style.width = width;
    });
});

