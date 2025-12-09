    // Ensure page loads at the top
        window.addEventListener('load', function() {
            window.scrollTo(0, 0);
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Scroll Animations
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        function handleScroll() {
            // About Image Animation
            const aboutImage = document.getElementById('about-image');
            if (isElementInViewport(aboutImage)) {
                aboutImage.classList.add('visible');
            }
            
            // Skills Animation
            for (let i = 1; i <= 4; i++) {
                const skill = document.getElementById(`skill${i}`);
                if (skill && isElementInViewport(skill)) {
                    skill.classList.add('visible');
                }
            }
            
            // WordPress Skills Animation
            for (let i = 1; i <= 6; i++) {
                const wpSkill = document.getElementById(`wp-skill${i}`);
                if (wpSkill && isElementInViewport(wpSkill)) {
                    wpSkill.classList.add('visible');
                }
            }
            
            // Projects Animation
            for (let i = 1; i <= 3; i++) {
                const project = document.getElementById(`project${i}`);
                if (project && isElementInViewport(project)) {
                    project.classList.add('visible');
                }
            }
            
            // Timeline Animation
            for (let i = 1; i <= 9; i++) {
                const timelineItem = document.getElementById(`timeline${i}`);
                if (timelineItem && isElementInViewport(timelineItem)) {
                    timelineItem.classList.add('visible');
                }
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);