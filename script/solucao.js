document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    const solutionPillarsData = [
        {
            iconClass: 'bi-broadcast-pin',
            title: 'Sensores de Última Geração',
            description: 'Nossa rede de sensores IoT de alta precisão monitora em tempo real níveis de rios, córregos, volume de chuva e umidade do solo, enviando dados cruciais para a plataforma central.',
            aosDelay: '0'
        },
        {
            iconClass: 'bi-cpu',
            title: 'Inteligência Artificial Preditiva',
            description: 'Utilizamos algoritmos avançados de IA para analisar dados históricos e em tempo real, prevendo riscos de inundação com alta acurácia e identificando padrões críticos.',
            aosDelay: '100'
        },
        {
            iconClass: 'bi-megaphone-fill',
            title: 'Alertas Instantâneos e Multicanais',
            description: 'Alertamos a população e autoridades em tempo real via SMS, aplicativo, redes sociais e sirenes inteligentes, garantindo evacuação segura e rápida.',
            aosDelay: '200'
        },
        {
            iconClass: 'bi-houses-fill',
            title: 'Infraestrutura Resiliente',
            description: 'Integramos soluções para otimizar o escoamento de água, como comportas automatizadas, sistemas de drenagem inteligentes e barreiras de contenção flexíveis.',
            aosDelay: '300'
        },
        {
            iconClass: 'bi-people-fill',
            title: 'Comunidade Ativa e Capacitada',
            description: 'Capacitamos voluntários e moradores locais com treinamentos e informações claras, transformando-os em agentes de prevenção e resposta nas suas próprias comunidades.',
            aosDelay: '400'
        },
        {
            iconClass: 'bi-shield-check-fill',
            title: 'Segurança e Redução de Danos',
            description: 'Nosso objetivo principal é salvar vidas e minimizar perdas materiais, construindo um futuro mais seguro e resiliente para as comunidades afetadas por enchentes.',
            aosDelay: '500'
        }
    ];

    const technologiesData = [
        {
            iconClass: 'bi-cloud-fill',
            title: 'IoT Cloud Computing',
            description: 'Para processamento e armazenamento massivo de dados de sensores.'
        },
        {
            iconClass: 'bi-robot',
            title: 'Machine Learning',
            description: 'Para análise preditiva e identificação de padrões de risco.'
        },
        {
            iconClass: 'bi-phone-fill',
            title: 'Mobile App',
            description: 'Para alertas instantâneos e comunicação com a comunidade.'
        },
        {
            iconClass: 'bi-database-fill',
            title: 'Big Data Analytics',
            description: 'Para insights aprofundados e otimização do sistema.'
        },
        {
            iconClass: 'bi-wifi',
            title: 'Rede de Sensores',
            description: 'Hardware robusto para coleta de dados ambientais em tempo real.'
        },
        {
            iconClass: 'bi-bezier2',
            title: 'APIs Integradas',
            description: 'Para comunicação fluida com sistemas de emergência e parceiros.'
        }
    ];

    const solutionPillarsContainer = document.getElementById('solution-pillars-container');
    const technologiesContainer = document.getElementById('technologies-container');

    // Função para criar cards genéricos
    function createCard(data, type) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'col-lg-4', 'mb-4');
        colDiv.setAttribute('data-aos', 'fade-up');
        if (data.aosDelay) {
            colDiv.setAttribute('data-aos-delay', data.aosDelay);
        }

        const cardDiv = document.createElement('div');
        cardDiv.classList.add(type === 'pillar' ? 'card-solution' : 'technology-card', 'h-100');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        if (type === 'pillar') {
            const iconWrapper = document.createElement('div');
            iconWrapper.classList.add('icon-wrapper');
            const icon = document.createElement('i');
            icon.classList.add('bi', data.iconClass);
            iconWrapper.appendChild(icon);
            cardBody.appendChild(iconWrapper);
        } else {
            const icon = document.createElement('i');
            icon.classList.add('bi', data.iconClass, 'mb-3');
            cardBody.appendChild(icon);
        }

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = data.title;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = data.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        return colDiv;
    }
    
    solutionPillarsData.forEach(pillar => {
        solutionPillarsContainer.appendChild(createCard(pillar, 'pillar'));
    });

    technologiesData.forEach(tech => {
        technologiesContainer.appendChild(createCard(tech, 'technology'));
    });
});