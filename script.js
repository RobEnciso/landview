document.addEventListener('DOMContentLoaded', function() {
    console.log('LandView page loaded and script is running.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of handling CTA button clicks if needed in the future
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const action = this.textContent.trim();
            console.log(`CTA button clicked: "${action}"`);
            // Further logic for handling different CTAs can be added here.
            // For example, opening a modal or redirecting to another page.
        });
    });
});