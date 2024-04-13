document.getElementById('services').addEventListener('click', function() {
    alert('Thank you for exploring my services!');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
('submit', function(e) {
    e.preventDefault();
    
    // Perform form validation or data submission
});