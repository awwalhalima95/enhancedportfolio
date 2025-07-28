// Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     // Get form values
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const subject = document.getElementById('subject').value;
        //     const message = document.getElementById('message').value;
            
        //     // Here you would normally send the form data to a server
        //     console.log({ name, email, subject, message });
            
        //     // Show success message
        //     alert('Thank you for your message! I will get back to you soon.');
            
        //     // Reset form
        //     contactForm.reset();
        // });

        // Animation on Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-card, .service-card, .project-card, .stat-box');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.skill-card, .service-card, .project-card, .stat-box').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        });

        // Trigger animations on scroll
        window.addEventListener('scroll', animateOnScroll);
        // Trigger on load for elements in view
        window.addEventListener('load', animateOnScroll);