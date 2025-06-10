// Neural Network Background Animation
function createNeuralNetwork() {
    const container = document.getElementById('neuralNodes');
    const nodes = [];
    const connections = [];
    
    // Create nodes
    for (let i = 0; i < 20; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(node);
        nodes.push(node);
    }
    
    // Create connections
    for (let i = 0; i < 15; i++) {
        const connection = document.createElement('div');
        connection.className = 'connection';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.width = Math.random() * 200 + 100 + 'px';
        connection.style.transform = `rotate(${Math.random() * 360}deg)`;
        connection.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(connection);
    }
}

// Matrix Rain Effect
function createMatrixRain() {
    const container = document.getElementById('matrixRain');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 10 + 10) + 's';
        column.style.animationDelay = Math.random() * 5 + 's';
        
        let text = '';
        for (let j = 0; j < 20; j++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = text;
        
        container.appendChild(column);
    }
}

// Animated Chart
function createChart() {
    const container = document.getElementById('chartContainer');
    const data = [85, 92, 78, 96, 88, 94, 82, 90, 87, 91];
    
    data.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.left = (index * 25) + 'px';
        bar.style.setProperty('--height', value * 2 + 'px');
        bar.style.animationDelay = (index * 0.2) + 's';
        container.appendChild(bar);
    });
}

// Smooth scrolling
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Terminal typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Dynamic skill bars animation
function animateSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = (index * 0.2) + 's';
    });
}

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const metrics = this.querySelectorAll('.metric-value');
        metrics.forEach(metric => {
            metric.style.transform = 'scale(1.1)';
            metric.style.color = '#00ffff';
        });
    });
    
    card.addEventListener('mouseleave', function() {
        const metrics = this.querySelectorAll('.metric-value');
        metrics.forEach(metric => {
            metric.style.transform = 'scale(1)';
            metric.style.color = '#00ff7f';
        });
    });
});

// Parallax effect for neural network
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const nodes = document.querySelectorAll('.node');
    const connections = document.querySelectorAll('.connection');
    
    nodes.forEach((node, index) => {
        const speed = 0.05 + (index % 3) * 0.02;
        node.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    connections.forEach((connection, index) => {
        const speed = 0.03 + (index % 4) * 0.01;
        connection.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

// Active navigation highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        link.style.borderColor = 'transparent';
        if (link.getAttribute('href').includes(current)) {
            link.style.color = '#00ffff';
            link.style.borderColor = '#00ffff';
        }
    });
});

// Counter animation for metrics
function animateCounters() {
    const counters = document.querySelectorAll('.metric-value');
    counters.forEach(counter => {
        const target = counter.innerText;
        if (target.includes('%')) {
            const value = parseFloat(target);
            animateValue(counter, 0, value, 2000, '%');
        } else if (target.includes('ms')) {
            const value = parseInt(target);
            animateValue(counter, 0, value, 2000, 'ms');
        }
    });
}

function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = progress * (end - start) + start;
        element.innerHTML = current.toFixed(1) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize all animations
window.addEventListener('load', () => {
    createNeuralNetwork();
    createMatrixRain();
    createChart();
    animateSkillBars();
    
    // Delay counter animation
    setTimeout(animateCounters, 2000);
});

// Cursor trail effect
let mouseX = 0, mouseY = 0;
let trailElements = [];

for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.background = '#00ffff';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.opacity = (5 - i) / 5;
    trail.style.transition = 'all 0.1s ease';
    document.body.appendChild(trail);
    trailElements.push(trail);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trailElements.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = mouseX - 2 + 'px';
            trail.style.top = mouseY - 2 + 'px';
        }, index * 20);
    });
});