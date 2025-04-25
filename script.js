document.addEventListener('DOMContentLoaded', function() {
    // Product Showcase Slider
    const showcaseSlider = document.querySelector('.showcase-slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    nextBtn.addEventListener('click', () => {
        showcaseSlider.scrollBy({ left: 320, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        showcaseSlider.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    // Optional: Auto-advance every 5 seconds
    setInterval(() => {
        showcaseSlider.scrollBy({ left: 320, behavior: 'smooth' });
    }, 5000);
});