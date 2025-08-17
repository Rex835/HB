// Crear confeti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#ffd93d', '#ff8e8e'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
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

// Efecto de aparición gradual para los elementos
function fadeInElements() {
    const elements = document.querySelectorAll('.wish, .sparkles span');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Efecto de partículas flotantes
function createFloatingParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 255, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float-particle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// Agregar estilos CSS para las partículas flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Efecto de música de cumpleaños (simulado con notas visuales)
function createMusicalNotes() {
    const notes = ['♪', '♫', '♬', '♩'];
    const container = document.querySelector('.container');
    
    setInterval(() => {
        const note = document.createElement('div');
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.position = 'absolute';
        note.style.fontSize = '2rem';
        note.style.color = 'rgba(255, 255, 255, 0.8)';
        note.style.left = Math.random() * 100 + '%';
        note.style.top = '100%';
        note.style.animation = 'note-float 4s linear forwards';
        container.appendChild(note);
        
        setTimeout(() => note.remove(), 4000);
    }, 1000);
}

// Agregar estilos para las notas musicales
const noteStyle = document.createElement('style');
noteStyle.textContent = `
    @keyframes note-float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(noteStyle);

// Inicializar todos los efectos cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear confeti
    createConfetti();
    
    // Efecto de escritura para el título
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    typeWriter(title, originalText, 150);
    
    // Aparición gradual de elementos
    setTimeout(fadeInElements, 2000);
    
    // Crear partículas flotantes
    createFloatingParticles();
    
    // Crear notas musicales
    createMusicalNotes();
    
    // Efecto de hover en los globos
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        balloon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efecto de click en el pastel
    const cake = document.querySelector('.cake');
    cake.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Crear más confeti al hacer click
        createConfetti();
    });
});

// Efecto de parallax suave en el fondo
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.container');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Efecto de brillo en el título
function addGlowEffect() {
    const title = document.querySelector('.title');
    title.style.textShadow = `
        0 0 5px #ff6b6b,
        0 0 10px #ff6b6b,
        0 0 15px #ff6b6b,
        0 0 20px #ff6b6b
    `;
    
    setTimeout(() => {
        title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
    }, 1000);
}

// Aplicar efecto de brillo cada 3 segundos
setInterval(addGlowEffect, 3000);