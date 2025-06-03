document.addEventListener('DOMContentLoaded', () => {
    const keyPoints = [
        {
            icon: 'fas fa-lightbulb',
            title: 'Inovação Tecnológica',
            description: 'Utilizamos IA e Big Data para prever com precisão cenários de risco.'
        },
        {
            icon: 'fas fa-users',
            title: 'Impacto Social',
            description: 'Empoderamos comunidades com alertas e treinamentos personalizados.'
        },
        {
            icon: 'fas fa-hand-holding-water',
            title: 'Sustentabilidade',
            description: 'Solução de baixo custo e alta escalabilidade, com foco na resiliência urbana.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Dados em Tempo Real',
            description: 'Monitoramento contínuo de níveis de água e condições climáticas.'
        }
    ];

    const keyPointsContainer = document.getElementById('key-points-container');
    if (keyPointsContainer) {
        keyPoints.forEach(point => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-6 col-lg-3 reveal';
            colDiv.innerHTML = `
                <div class="key-point-card">
                    <div class="icon-circle" style="background-color: var(--light-blue);"><i class="${point.icon}" style="color: var(--primary-blue);"></i></div>
                    <h3>${point.title}</h3>
                    <p class="text-muted">${point.description}</p>
                </div>
            `;
            keyPointsContainer.appendChild(colDiv);
        });
    }

    const animateBounceLightButton = document.querySelector('.animate-bounce-light');
    if (animateBounceLightButton) {
        const removeBounceLight = () => {
            animateBounceLightButton.classList.remove('animate-bounce-light');
            animateBounceLightButton.removeEventListener('animationiteration', removeBounceLight);
            animateBounceLightButton.removeEventListener('click', removeBounceLight);
            window.removeEventListener('scroll', removeBounceLight);
        };
        animateBounceLightButton.addEventListener('animationiteration', removeBounceLight);
        animateBounceLightButton.addEventListener('click', removeBounceLight);
        window.addEventListener('scroll', removeBounceLight);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const keyPoints = [
        { icon: 'fas fa-lightbulb', title: 'Inovação Tecnológica', description: 'IA e Big Data para prever enchentes com precisão.' },
        { icon: 'fas fa-users', title: 'Impacto Social', description: 'Empoderamos comunidades com alertas e treinamentos.' },
        { icon: 'fas fa-hand-holding-water', title: 'Sustentabilidade', description: 'Solução acessível e ecológica com alta escalabilidade.' },
        { icon: 'fas fa-chart-line', title: 'Dados em Tempo Real', description: 'Monitoramento constante de clima e rios.' },
        { icon: 'fas fa-shield-alt', title: 'Segurança Automatizada', description: 'Ativa barreiras e envia alertas automáticos.' },
        { icon: 'fas fa-globe-americas', title: 'Visão Global', description: 'Escalável para diferentes cidades e países.' }
    ];

    const container = document.getElementById('key-points-container');
    keyPoints.forEach(point => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
        <div class="key-point-card">
            <i class="${point.icon} mb-3"></i>
            <h3>${point.title}</h3>
            <p>${point.description}</p>
        </div>`;
        container.appendChild(col);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-on-scroll, .animate-zoom-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
});