document.addEventListener('DOMContentLoaded', function() {

    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });


});

document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');


    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 80);
    });

    document.addEventListener('mousedown', function() {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });


    const hoverElements = document.querySelectorAll('a, button, .tab-item, .feature-card, .component-card');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
            cursorFollower.style.borderWidth = '3px';
            cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.6)';
        });

        element.addEventListener('mouseleave', function() {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.borderWidth = '2px';
            cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.3)';
        });
    });


    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Tab functionality
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');

            // Remove active class from all items
            tabItems.forEach(item => item.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked item and corresponding pane
            this.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });


    const stats = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                const increment = Math.ceil(count / 50);
                const duration = 2000; // ms
                const interval = duration / (count / increment);

                const timer = setInterval(function() {
                    current += increment;
                    if (current >= count) {
                        target.textContent = count;
                        clearInterval(timer);
                    } else {
                        target.textContent = current;
                    }
                }, interval);

                observer.unobserve(target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        observer.observe(stat);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const position = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });

                // Update active navigation link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });


    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });


    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.parentElement;
            const code = codeBlock.querySelector('code').textContent;

            navigator.clipboard.writeText(code).then(() => {
                // Change icon to checkmark
                this.innerHTML = '<i class="fas fa-check"></i>';

                // Reset after 2 seconds
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
    });
});

