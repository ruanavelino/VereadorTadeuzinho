// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerCenter = document.querySelector('.header-center');
    const body = document.body;
    
    if (mobileMenuBtn && headerCenter) {
        const navLinks = document.querySelectorAll('nav a');
        
        mobileMenuBtn.addEventListener('click', function() {
            headerCenter.classList.toggle('active');
            
            // Toggle between hamburger and X icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                body.style.overflow = 'auto'; // Allow scrolling when menu is closed
            }
        });
        
        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (headerCenter.classList.contains('active')) {
                    headerCenter.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    body.style.overflow = 'auto';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (headerCenter.classList.contains('active') && 
                !headerCenter.contains(e.target) && 
                e.target !== mobileMenuBtn && 
                !mobileMenuBtn.contains(e.target)) {
                headerCenter.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                body.style.overflow = 'auto';
            }
        });
    }
    
    // Remove Header Scroll Effect (removed)
    
    // Gallery Modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let openedFromProjectModal = false;
    
    // Initialize the gallery if elements exist
    if (galleryItems.length > 0 && modal && modalImg) {
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                const imgSrc = item.querySelector('img').src;
                modalImg.src = imgSrc;
                
                // Reset modal position and display
                modal.style.display = 'flex';
                modal.style.alignItems = 'center';
                modal.style.justifyContent = 'center';
                
                // Force reflow before adding the fade-in class
                void modal.offsetWidth;
                modal.classList.add('fade-in');
                document.body.style.overflow = 'hidden';
                openedFromProjectModal = false;
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            closeImageModal();
        });

        // Navigation buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                modalImg.src = galleryItems[currentIndex].querySelector('img').src;
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % galleryItems.length;
                modalImg.src = galleryItems[currentIndex].querySelector('img').src;
            });
        }
    }
    
    // Function to close image modal
    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.remove('fade-in');
        
        setTimeout(() => {
            modal.style.display = 'none';
            
            // If not opened from project modal, restore body scroll
            if (!openedFromProjectModal) {
                document.body.style.overflow = 'auto';
            }
            
            // Reset flag
            openedFromProjectModal = false;
        }, 300);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const imageModal = document.getElementById('imageModal');
        const projectModal = document.getElementById('projectModal');
        
        // Handle ESC key for image modal with priority
        if (imageModal && imageModal.classList.contains('fade-in') && e.key === 'Escape') {
            closeImageModal();
            e.stopPropagation(); // Prevent event from bubbling up
            e.preventDefault();
            return; // Stop execution here
        }
        
        // Only process keyboard events when image modal is open
        if (imageModal && imageModal.classList.contains('fade-in')) {
            // Arrow keys for navigation
            if (e.key === 'ArrowRight') {
                const nextBtn = document.getElementById('nextBtn');
                if (nextBtn) nextBtn.click();
                e.preventDefault();
            }
            
            if (e.key === 'ArrowLeft') {
                const prevBtn = document.getElementById('prevBtn');
                if (prevBtn) prevBtn.click();
                e.preventDefault();
            }
        }
        // Handle ESC key for project modal only when image modal is not open or not visible
        else if (projectModal && projectModal.classList.contains('fade-in') && e.key === 'Escape') {
            // Check that image modal is not visible
            if (!imageModal || !imageModal.classList.contains('fade-in')) {
                const projectCloseBtn = projectModal.querySelector('.close');
                if (projectCloseBtn) projectCloseBtn.click();
                e.preventDefault();
            }
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a, .hero a.btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash
            if (this.hash !== '') {
                e.preventDefault();
                
                const targetId = this.hash;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Fade In Animations on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Function to handle scroll and show elements
    function handleScroll() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check for elements in view
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Projects Category Filter
    // COMMENTING OUT DUPLICATE CODE TO AVOID CONFLICTS WITH initCategoryFilters
    /*
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event to category buttons
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the category to filter
                const filterCategory = this.getAttribute('data-category');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterCategory === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-category') === filterCategory) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                    
                    // Reset the fade-in animation
                    card.classList.remove('visible');
                    setTimeout(() => {
                        handleScroll(); // Re-check visibility after display changes
                    }, 10);
                });
            });
        });
    }
    */
    
    // Animate cards on scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.card, .missao-card, .projeto-item');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for cards
    const initCards = function() {
        const cards = document.querySelectorAll('.card, .missao-card, .projeto-item');
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Call once to animate cards already in view
        animateOnScroll();
    };
    
    // Initialize cards and set up scroll event
    initCards();
    window.addEventListener('scroll', animateOnScroll);

    // Improve scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just a "#" link
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Smooth scroll with header offset
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
                
                // Update URL without causing page jump
                history.pushState(null, null, targetId);
            }
        });
    });

    // Add smooth reveal animations when scrolling
    const revealElements = document.querySelectorAll('.fade-in');

    const revealOnScroll = function() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('visible');
            }
        }
    };

    // Initial check on page load
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Category filter functionality for projects and gallery
    function initCategoryFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (categoryButtons.length > 0) {
            // Show all project cards initially
            projectCards.forEach(card => {
                card.style.display = 'block';
            });

            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    
                    // Show/hide project cards based on category
                    projectCards.forEach(card => {
                        const itemCategory = card.getAttribute('data-category');
                        if (category === 'all') {
                            // Show all items
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, 10);
                        } else if (itemCategory === category) {
                            // Show items matching the selected category
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, 10);
                        } else {
                            // Hide items not matching the selected category
                            card.style.display = 'none';
                            card.classList.remove('visible');
                        }
                    });
                });
            });
        }
    }

    // Initialize category filters when DOM is loaded
    initCategoryFilters();

    // Project Modal functionality
    function initProjectModal() {
        const projectModal = document.getElementById('projectModal');
        const projectBtns = document.querySelectorAll('.project-card .btn-outline');
        const closeBtn = projectModal.querySelector('.close');
        
        // Sample project data - in a real application, this would come from a database
        const projectsData = {
            'project-1': {
                title: 'Melhoria de Vias Urbanas',
                category: 'Infraestrutura',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                date: 'Janeiro 2023 - Em andamento',
                location: 'Centro e Bairros',
                status: 'Em execução - 65% concluído',
                description: 'O projeto de pavimentação e recuperação das principais vias do município tem como foco melhorar a mobilidade urbana em Gravatá. Este trabalho inclui a recuperação de vias danificadas, instalação de nova sinalização, e melhorias no escoamento de águas pluviais para evitar alagamentos em períodos de chuva.',
                objectives: [
                    'Pavimentar 15 km de vias urbanas nos principais bairros',
                    'Instalar nova sinalização horizontal e vertical',
                    'Melhorar o sistema de drenagem em pontos críticos',
                    'Criar acessibilidade com rampas e piso tátil'
                ],
                results: 'Até o momento, foram concluídos 9,8 km de pavimentação, beneficiando diretamente mais de 20 mil moradores. A nova sinalização já foi implementada em 80% das vias concluídas, e os sistemas de drenagem foram melhorados em 5 pontos críticos da cidade, reduzindo significativamente os alagamentos durante o período chuvoso.',
                gallery: [
                    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1464519046765-f6d70654fac3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1536145232043-e1d812eed6fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                ]
            },
            'project-2': {
                title: 'Revitalização de Praças',
                category: 'Infraestrutura',
                image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                date: 'Março 2023 - Em andamento',
                location: 'Diversos Bairros',
                status: 'Em execução - 40% concluído',
                description: 'O projeto de revitalização das principais praças da cidade tem foco em criar espaços de lazer e convivência para a população. Estamos transformando praças abandonadas em locais agradáveis com áreas verdes, equipamentos de exercício, playgrounds para crianças e espaços para eventos comunitários.',
                objectives: [
                    'Revitalizar 8 praças nos diversos bairros de Gravatá',
                    'Instalar novos equipamentos de ginástica ao ar livre',
                    'Criar playgrounds seguros para crianças',
                    'Melhorar a iluminação pública para aumentar a segurança'
                ],
                results: 'Já foram concluídas as reformas de 3 praças nos bairros Centro, São Miguel e Prado. Os novos espaços já contam com iluminação de LED, equipamentos de ginástica, bancos renovados e paisagismo. A população já está utilizando ativamente estes espaços, especialmente nos fins de semana.',
                gallery: [
                    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                ]
            },
            'project-3': {
                title: 'Biblioteca Comunitária',
                category: 'Educação',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                date: 'Abril 2023 - Em andamento',
                location: 'Bairros Periféricos',
                status: 'Em execução - 75% concluído',
                description: 'O projeto das bibliotecas comunitárias visa levar acesso à cultura e educação para áreas periféricas da cidade. Cada biblioteca é implementada em um espaço comunitário existente, com acervo inicial de 2.000 livros, computadores com acesso à internet, e programação cultural regular para crianças e adultos.',
                objectives: [
                    'Criar 5 bibliotecas comunitárias em bairros periféricos',
                    'Montar acervo com literatura diversificada e material didático',
                    'Oferecer acesso digital com computadores e internet gratuita',
                    'Promover atividades culturais e de incentivo à leitura'
                ],
                results: 'Foram inauguradas 3 bibliotecas nos bairros Novo Horizonte, Jardim Primavera e Santa Mônica. Juntas, elas já receberam mais de 3.500 visitantes e realizaram 1.200 empréstimos de livros. Os computadores são utilizados diariamente por estudantes para pesquisas escolares e por adultos para cursos online e busca de empregos.',
                gallery: [
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                ]
            },
            'project-4': {
                title: 'Cursos Profissionalizantes',
                category: 'Educação',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                date: 'Fevereiro 2023 - Em andamento',
                location: 'Centro de Capacitação',
                status: 'Em execução - 85% concluído',
                description: 'O programa de cursos profissionalizantes gratuitos oferece capacitação para jovens e adultos em parceria com instituições de ensino. Os cursos incluem áreas como tecnologia, construção civil, gastronomia, serviços administrativos e turismo, com foco nas oportunidades do mercado local.',
                objectives: [
                    'Capacitar 500 moradores em diversas áreas profissionais',
                    'Oferecer 15 cursos diferentes ao longo do ano',
                    'Facilitar a inserção dos formandos no mercado de trabalho',
                    'Reduzir o índice de desemprego no município'
                ],
                results: 'Já foram realizados 10 cursos diferentes, formando 320 pessoas. Destas, 145 já conseguiram colocação no mercado de trabalho. Os cursos de gastronomia e informática tiveram os maiores índices de empregabilidade, com mais de 70% dos alunos empregados após a conclusão.',
                gallery: [
                    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                ]
            }
        };
        
        // Add data-project-id to each project card button
        if (projectBtns.length > 0) {
            let idCounter = 1;
            projectBtns.forEach(btn => {
                const projectId = 'project-' + idCounter;
                btn.setAttribute('data-project-id', projectId);
                idCounter++;
            });
        }
        
        // Open project modal when clicking on "Saiba Mais" buttons
        projectBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-project-id');
                
                // If we have data for this project, populate the modal
                if (projectsData[projectId]) {
                    const project = projectsData[projectId];
                    
                    // Set modal content
                    document.getElementById('projectTitle').textContent = project.title;
                    document.getElementById('projectCategory').textContent = project.category;
                    document.getElementById('projectImage').src = project.image;
                    document.getElementById('projectDate').textContent = project.date;
                    document.getElementById('projectLocation').textContent = project.location;
                    document.getElementById('projectStatus').textContent = project.status;
                    document.getElementById('projectDescription').textContent = project.description;
                    
                    // Set objectives
                    const objectivesList = document.getElementById('projectObjectives');
                    objectivesList.innerHTML = '';
                    project.objectives.forEach(objective => {
                        const li = document.createElement('li');
                        li.textContent = objective;
                        objectivesList.appendChild(li);
                    });
                    
                    // Set results
                    document.getElementById('projectResults').textContent = project.results;
                    
                    // Set gallery images
                    const gallery = document.getElementById('projectGallery');
                    gallery.innerHTML = '';
                    project.gallery.forEach(imgSrc => {
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = project.title;
                        img.addEventListener('click', () => {
                            // Open image in the existing image modal
                            const imageModal = document.getElementById('imageModal');
                            const modalImage = document.getElementById('modalImage');
                            if (imageModal && modalImage) {
                                // Ensure the modal is positioned at the top layer
                                imageModal.style.position = 'fixed';
                                imageModal.style.zIndex = '2000';
                                document.body.appendChild(imageModal); // Move to end of body to avoid stacking context issues
                                
                                // Set image source and display modal
                                modalImage.src = imgSrc;
                                imageModal.style.display = 'flex';
                                imageModal.style.alignItems = 'center';
                                imageModal.style.justifyContent = 'center';
                                
                                // Force reflow before adding the fade-in class
                                void imageModal.offsetWidth;
                                imageModal.classList.add('fade-in');
                                
                                // Set flag that we opened from project modal
                                openedFromProjectModal = true;
                            }
                        });
                        gallery.appendChild(img);
                    });
                    
                    // Show the modal
                    projectModal.style.display = 'flex';
                    void projectModal.offsetWidth;
                    projectModal.classList.add('fade-in');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal when clicking on close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                projectModal.classList.remove('fade-in');
                setTimeout(() => {
                    projectModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            });
        }
        
        // Close modal when clicking outside of modal content
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeBtn.click();
            }
        });
    }

    // Initialize project modal functionality
    initProjectModal();
}); 