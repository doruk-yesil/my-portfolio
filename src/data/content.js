// Bilingual (EN/TR) content for the portfolio site.
// Edit the copy here — components just render whatever lives in this file.

export const content = {
  en: {
    meta: {
      title: 'Doruk Yeşil — Software Engineer',
      description:
        'Portfolio of Doruk Yeşil — Computer Science & Engineering graduate from Sabancı University. Full-stack development, computer vision, and NLP projects.',
    },
    nav: {
      links: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      eyebrow: 'Hi, I’m',
      name: 'Doruk Yeşil',
      roles: [
        'Full-Stack Developer',
        'CS & Engineering Graduate',
        'Computer Vision Enthusiast',
        'NLP Explorer',
      ],
      location: 'Istanbul, Türkiye',
      tagline:
        'Computer Science & Engineering graduate from Sabancı University, minoring in Business Analytics. I build full-stack platforms, computer-vision pipelines, and NLP models — and enjoy turning ambiguous problems into working software.',
      ctaPrimary: { label: 'View Projects', href: '#projects' },
      ctaSecondary: { label: 'Get in Touch', href: '#contact' },
      scrollHint: 'Scroll',
    },
    about: {
      eyebrow: 'About',
      heading: 'A bit about me',
      paragraphs: [
        'I’m a Computer Science & Engineering graduate of Sabancı University (Sep 2022 – Jun 2026), with a minor in Business Analytics. I have hands-on experience across full-stack web development, modern frontend frameworks, and Agile methodologies.',
        'My academic and internship work spans building production-style platforms with React, Vue, and Spring Boot, as well as more exploratory work in computer vision, remote sensing, distributed systems, and NLP — I like projects that combine solid engineering with a bit of research.',
        'I care about clean component architecture, cross-functional collaboration, and shipping things that actually work end to end.',
      ],
      facts: [
        { label: 'Based in', value: 'Istanbul, Türkiye' },
        { label: 'Education', value: 'BSc Computer Science & Engineering, Sabancı University' },
        { label: 'Minor', value: 'Business Analytics' },
        { label: 'Languages', value: 'Turkish (Native), English (Advanced)' },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      heading: 'Technologies I work with',
      categories: [
        {
          title: 'Languages',
          items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
        },
        {
          title: 'Frontend',
          items: [
            'React', 'Vue.js 3', 'TypeScript', 'MUI', 'TanStack Query',
            'React Hook Form', 'React Router', 'Quasar', 'Bootstrap 5',
          ],
        },
        {
          title: 'Backend & APIs',
          items: [
            'Spring Boot', 'Java 21', 'Node.js', 'REST / OpenAPI',
            'OAuth2 / OIDC', 'Keycloak', 'JPA', 'Kafka',
          ],
        },
        {
          title: 'Data & Cloud',
          items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Docker', 'AWS', 'DigitalOcean'],
        },
        {
          title: 'ML / Data Science',
          items: [
            'PyTorch-style Deep Learning', 'Transformers (BERTurk, GPT-2)',
            'Remote Sensing (NBR / dNBR)', 'Image Processing', 'Model Evaluation',
          ],
        },
        {
          title: 'Tools & Practices',
          items: ['Git / GitHub', 'Jira', 'Agile / Scrum', 'Docker', 'CI-style workflows'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'Education & Work',
      educationLabel: 'Education',
      workLabel: 'Work Experience',
      education: [
        {
          school: 'Sabancı University',
          degree: 'BSc in Computer Science & Engineering, Minor in Business Analytics',
          location: 'Istanbul, Türkiye',
          period: 'Sep 2022 – Jun 2026',
        },
      ],
      work: [
        {
          role: 'Software Development Intern (Frontend)',
          company: 'NovaFinz A.Ş.',
          location: 'Ataşehir, Istanbul',
          period: 'Jun 2025 – Aug 2025 · 40 business days',
          bullets: [
            'Researched and evaluated Vue 3 / TypeScript-compatible grid libraries for enterprise dashboard interfaces, then built a Grid Component Comparison Dashboard with CSV/PDF export, multi-condition filtering, and drag-and-drop.',
            'Designed a draggable dashboard layout system on Quasar’s 12-column grid — including preview-commit editing, collision handling, pushDownCollisions behavior, and layout persistence via localStorage.',
            'Built an interactive financial dashboard layout with pure Vue.js and CSS Grid (no external libraries), plus the company’s first responsive landing pages.',
            'Implemented a Firebase Firestore backend with JWT-based authentication.',
            'Built Google Blockly demos with custom blocks, generating JavaScript, Python, PHP, and JSON code, and prototyped Turkish/English i18n using Vue Router and Pinia.',
          ],
          tags: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'Firebase', 'Google Blockly'],
        },
        {
          role: 'Lifeguard',
          company: 'Kalahari Resorts',
          location: 'Work and Travel Program · Texas, USA',
          period: 'Jun 2024 – Sep 2024',
          bullets: [
            'Ensured guest safety at a waterpark through proactive monitoring and emergency response procedures.',
            'Performed First Aid procedures and water rescue operations as part of the safety team.',
          ],
          tags: ['First Aid', 'Emergency Response', 'Teamwork'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Selected Projects',
      items: [
        {
          id: 'bibliocast',
          title: 'Bibliocast',
          subtitle: 'ENS491 / ENS492 Graduation Project · Sabancı University',
          meta: 'Supervisor: Prof. Albert Levi · Team of 4',
          description:
            'Designed and developed a full-stack AI-powered e-learning platform with role-based dashboards, secure authentication, course management, video delivery, mock checkout flows, moderation tools, community features, and AI-generated learning content.',
          tags: [
            'React', 'TypeScript', 'Spring Boot', 'Java 21', 'PostgreSQL',
            'Keycloak', 'AWS S3', 'Kafka', 'Docker',
          ],
        },
        {
          id: 'forest-fire',
          title: 'Unsupervised Forest Fire Detection',
          subtitle: 'CS419 Digital Image & Video Analysis',
          meta: 'Team of 3',
          description:
            'Developed an unsupervised forest fire detection pipeline using Sentinel-2 satellite imagery, FIRMS fire points, FireCCI burned-area data, NBR/dNBR indices, thresholding, morphological operations, and pixel-level evaluation.',
          tags: ['Python', 'Sentinel-2', 'Remote Sensing', 'NBR/dNBR', 'Otsu Thresholding', 'F1 Evaluation'],
        },
        {
          id: 'drone-network',
          title: 'Drone-Based Sensor Network Architecture',
          subtitle: 'CS408 Computer Networks',
          meta: 'Distributed systems · Networking',
          description:
            'Designed a distributed sensor-to-drone-to-server architecture using TCP communication, structured data formats, edge processing concepts, drone battery tracking, and return-to-base behavior.',
          tags: ['TCP', 'Distributed Systems', 'Edge Computing', 'JSON/CSV'],
        },
        {
          id: 'ecommerce',
          title: 'E-Commerce Platform',
          subtitle: 'CS308 Software Engineering',
          meta: 'Team of 4 · Temporary Product Owner',
          description:
            'Built a full-stack e-commerce platform with React, Spring Boot, and MongoDB, including product browsing, search, filtering, cart management, checkout flow, user authentication, reviews, ratings, and invoice generation. Led the 5-person Scrum team as temporary Product Owner, managing sprint planning and daily stand-ups.',
          tags: ['React', 'Spring Boot', 'MongoDB', 'Firebase Auth', 'Scrum'],
        },
        {
          id: '2048-dl',
          title: '2048 Deep Learning Model',
          subtitle: 'CS415 Deep Learning',
          meta: 'Game AI · Model development',
          description:
            'Developed a deep learning model for the 2048 game, focusing on board-state representation, model-based decision-making, training, evaluation, and gameplay performance improvement.',
          tags: ['Deep Learning', 'Game AI', 'Model Training', 'Evaluation'],
        },
        {
          id: 'turkish-nlp',
          title: 'Turkish Sentiment Classification',
          subtitle: 'CS445 Natural Language Processing',
          meta: 'BERTurk · GPT-2 · mT5/BART comparison',
          description:
            'Compared transformer-based approaches for Turkish sentiment classification — BERTurk reached ~0.94 validation F1, ahead of a GPT-2-based model (~0.876 F1) and mT5/BART variants. Covered preprocessing, model selection, hyperparameter tuning, evaluation, and limitations. Coursework also included a VGG-16-based CelebA transfer-learning assignment and an information-retrieval/NLP homework.',
          tags: ['Python', 'BERTurk', 'GPT-2', 'mT5/BART', 'Transfer Learning', 'VGG-16'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Let’s work together',
      description:
        'I’m open to new opportunities and interesting conversations. The fastest way to reach me is by email.',
      email: 'doruk.yesil@sabanciuniv.edu',
      phone: '+90 (537) 550 1817',
      linkedin: 'linkedin.com/in/doruk-yeşil',
      linkedinUrl: 'https://www.linkedin.com/in/doruk-ye%C5%9Fil-80450a1b1/',
      github: 'github.com/doruk-yesil',
      githubUrl: 'https://github.com/doruk-yesil',
      cta: { label: 'Say hello', href: 'mailto:doruk.yesil@sabanciuniv.edu' },
    },
    footer: {
      tagline: 'Designed & built by Doruk Yeşil.',
      backToTop: 'Back to top',
    },
  },

  tr: {
    meta: {
      title: 'Doruk Yeşil — Yazılım Mühendisi',
      description:
        'Doruk Yeşil portfolyosu — Sabancı Üniversitesi Bilgisayar Mühendisliği mezunu. Full-stack geliştirme, bilgisayarlı görü ve NLP projeleri.',
    },
    nav: {
      links: [
        { id: 'about', label: 'Hakkımda' },
        { id: 'skills', label: 'Beceriler' },
        { id: 'experience', label: 'Deneyim' },
        { id: 'projects', label: 'Projeler' },
        { id: 'contact', label: 'İletişim' },
      ],
    },
    hero: {
      eyebrow: 'Merhaba, ben',
      name: 'Doruk Yeşil',
      roles: [
        'Full-Stack Geliştirici',
        'Bilgisayar Mühendisliği Mezunu',
        'Bilgisayarlı Görü Meraklısı',
        'NLP Araştırmacısı',
      ],
      location: 'İstanbul, Türkiye',
      tagline:
        'Sabancı Üniversitesi Bilgisayar Mühendisliği mezunuyum, Business Analytics yandalı yaptım. Full-stack platformlar, bilgisayarlı görü pipeline’ları ve NLP modelleri geliştiriyorum — belirsiz problemleri çalışan yazılımlara dönüştürmekten keyif alıyorum.',
      ctaPrimary: { label: 'Projelere Git', href: '#projects' },
      ctaSecondary: { label: 'İletişime Geç', href: '#contact' },
      scrollHint: 'Kaydır',
    },
    about: {
      eyebrow: 'Hakkımda',
      heading: 'Kısaca ben',
      paragraphs: [
        'Sabancı Üniversitesi Bilgisayar Mühendisliği bölümünden mezunum (Eylül 2022 – Haziran 2026), Business Analytics yandalı yaptım. Full-stack web geliştirme, modern frontend framework’leri ve Agile metodolojileri konusunda uygulamalı deneyime sahibim.',
        'Akademik ve staj çalışmalarım; React, Vue ve Spring Boot ile üretim kalitesinde platformlar geliştirmekten, bilgisayarlı görü, uzaktan algılama, dağıtık sistemler ve NLP gibi daha araştırma ağırlıklı alanlara kadar uzanıyor — sağlam mühendisliği biraz araştırmayla birleştiren projelerden hoşlanıyorum.',
        'Temiz bileşen mimarisine, ekipler arası iş birliğine ve uçtan uca gerçekten çalışan ürünler ortaya koymaya önem veriyorum.',
      ],
      facts: [
        { label: 'Konum', value: 'İstanbul, Türkiye' },
        { label: 'Eğitim', value: 'BSc Bilgisayar Mühendisliği, Sabancı Üniversitesi' },
        { label: 'Yandal', value: 'Business Analytics' },
        { label: 'Diller', value: 'Türkçe (Ana dil), İngilizce (İleri düzey)' },
      ],
    },
    skills: {
      eyebrow: 'Beceriler',
      heading: 'Çalıştığım teknolojiler',
      categories: [
        {
          title: 'Diller',
          items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
        },
        {
          title: 'Frontend',
          items: [
            'React', 'Vue.js 3', 'TypeScript', 'MUI', 'TanStack Query',
            'React Hook Form', 'React Router', 'Quasar', 'Bootstrap 5',
          ],
        },
        {
          title: 'Backend & API',
          items: [
            'Spring Boot', 'Java 21', 'Node.js', 'REST / OpenAPI',
            'OAuth2 / OIDC', 'Keycloak', 'JPA', 'Kafka',
          ],
        },
        {
          title: 'Veri & Bulut',
          items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Docker', 'AWS', 'DigitalOcean'],
        },
        {
          title: 'ML / Veri Bilimi',
          items: [
            'Deep Learning', 'Transformer Modelleri (BERTurk, GPT-2)',
            'Uzaktan Algılama (NBR / dNBR)', 'Görüntü İşleme', 'Model Değerlendirme',
          ],
        },
        {
          title: 'Araçlar & Pratikler',
          items: ['Git / GitHub', 'Jira', 'Agile / Scrum', 'Docker', 'CI benzeri iş akışları'],
        },
      ],
    },
    experience: {
      eyebrow: 'Deneyim',
      heading: 'Eğitim & İş Deneyimi',
      educationLabel: 'Eğitim',
      workLabel: 'İş Deneyimi',
      education: [
        {
          school: 'Sabancı Üniversitesi',
          degree: 'BSc Bilgisayar Mühendisliği, Business Analytics Yandalı',
          location: 'İstanbul, Türkiye',
          period: 'Eylül 2022 – Haziran 2026',
        },
      ],
      work: [
        {
          role: 'Yazılım Geliştirme Stajyeri (Frontend)',
          company: 'NovaFinz A.Ş.',
          location: 'Ataşehir, İstanbul',
          period: 'Haziran 2025 – Ağustos 2025 · 40 iş günü',
          bullets: [
            'Kurumsal dashboard arayüzleri için Vue 3 / TypeScript uyumlu grid kütüphanelerini araştırıp değerlendirdi; ardından CSV/PDF dışa aktarma, çok koşullu filtreleme ve sürükle-bırak özellikli bir Grid Component Comparison Dashboard geliştirdi.',
            'Quasar’ın 12 kolonlu grid sistemi üzerinde sürüklenebilir bir dashboard layout sistemi tasarladı — preview-commit düzenleme, çakışma (collision) yönetimi, pushDownCollisions davranışı ve localStorage ile layout kalıcılığı dahil.',
            'Harici kütüphane kullanmadan, saf Vue.js ve CSS Grid ile interaktif bir finansal dashboard layout’u ve şirketin ilk responsive giriş sayfalarını oluşturdu.',
            'JWT tabanlı kimlik doğrulamayla Firebase Firestore backend’i uyguladı.',
            'Özel bloklarla Google Blockly demoları oluşturdu (JavaScript, Python, PHP, JSON kod üretimi) ve Vue Router ile Pinia kullanarak Türkçe/İngilizce i18n denemeleri yaptı.',
          ],
          tags: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'Firebase', 'Google Blockly'],
        },
        {
          role: 'Cankurtaran (Lifeguard)',
          company: 'Kalahari Resorts',
          location: 'Work and Travel Programı · Teksas, ABD',
          period: 'Haziran 2024 – Eylül 2024',
          bullets: [
            'Proaktif gözetim ve acil durum müdahale prosedürleriyle bir su parkında misafir güvenliğini sağladı.',
            'Güvenlik ekibinin bir parçası olarak İlk Yardım prosedürleri ve su kurtarma operasyonları gerçekleştirdi.',
          ],
          tags: ['İlk Yardım', 'Acil Müdahale', 'Takım Çalışması'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projeler',
      heading: 'Seçilmiş Projeler',
      items: [
        {
          id: 'bibliocast',
          title: 'Bibliocast',
          subtitle: 'ENS491 / ENS492 Bitirme Projesi · Sabancı Üniversitesi',
          meta: 'Danışman: Prof. Albert Levi · 4 kişilik takım',
          description:
            'Rol bazlı panellere, güvenli kimlik doğrulamaya, kurs yönetimine, video sunumuna, mock ödeme akışlarına, moderasyon araçlarına, topluluk özelliklerine ve AI tarafından üretilen öğrenme içeriğine sahip full-stack, AI destekli bir e-öğrenme platformu tasarlandı ve geliştirildi.',
          tags: [
            'React', 'TypeScript', 'Spring Boot', 'Java 21', 'PostgreSQL',
            'Keycloak', 'AWS S3', 'Kafka', 'Docker',
          ],
        },
        {
          id: 'forest-fire',
          title: 'Gözetimsiz Orman Yangını Tespiti',
          subtitle: 'CS419 Digital Image & Video Analysis',
          meta: '3 kişilik takım',
          description:
            'Sentinel-2 uydu görüntüleri, FIRMS yangın noktaları, FireCCI yanmış alan verisi, NBR/dNBR indeksleri, eşikleme ve morfolojik işlemler ile piksel bazlı değerlendirme kullanan gözetimsiz bir orman yangını tespit pipeline’ı geliştirildi.',
          tags: ['Python', 'Sentinel-2', 'Uzaktan Algılama', 'NBR/dNBR', 'Otsu Eşikleme', 'F1 Değerlendirme'],
        },
        {
          id: 'drone-network',
          title: 'Drone Tabanlı Sensör Ağı Mimarisi',
          subtitle: 'CS408 Computer Networks',
          meta: 'Dağıtık sistemler · Ağ mimarisi',
          description:
            'TCP iletişimi, yapılandırılmış veri formatları, edge processing kavramları, drone batarya takibi ve üsse geri dönüş davranışı kullanan dağıtık bir sensör-drone-sunucu mimarisi tasarlandı.',
          tags: ['TCP', 'Dağıtık Sistemler', 'Edge Computing', 'JSON/CSV'],
        },
        {
          id: 'ecommerce',
          title: 'E-Ticaret Platformu',
          subtitle: 'CS308 Software Engineering',
          meta: '4 kişilik takım · Geçici Product Owner',
          description:
            'React, Spring Boot ve MongoDB ile ürün gezinme, arama, filtreleme, sepet yönetimi, checkout akışı, kullanıcı kimlik doğrulama, yorumlar, puanlama ve fatura oluşturma içeren full-stack bir e-ticaret platformu geliştirildi. 5 kişilik Scrum takımına geçici Product Owner olarak liderlik edilip sprint planlama ve daily stand-up’lar yönetildi.',
          tags: ['React', 'Spring Boot', 'MongoDB', 'Firebase Auth', 'Scrum'],
        },
        {
          id: '2048-dl',
          title: '2048 Deep Learning Modeli',
          subtitle: 'CS415 Deep Learning',
          meta: 'Oyun AI’ı · Model geliştirme',
          description:
            '2048 oyunu için, tahta durumu temsili, model tabanlı karar verme, eğitim, değerlendirme ve oyun performansı iyileştirmesine odaklanan bir deep learning modeli geliştirildi.',
          tags: ['Deep Learning', 'Oyun AI', 'Model Eğitimi', 'Değerlendirme'],
        },
        {
          id: 'turkish-nlp',
          title: 'Türkçe Duygu Analizi Sınıflandırması',
          subtitle: 'CS445 Natural Language Processing',
          meta: 'BERTurk · GPT-2 · mT5/BART karşılaştırması',
          description:
            'Türkçe duygu analizi sınıflandırması için transformer tabanlı yaklaşımlar karşılaştırıldı — BERTurk ~0.94 doğrulama F1 skoruna ulaşarak GPT-2 tabanlı modelin (~0.876 F1) ve mT5/BART varyantlarının önüne geçti. Çalışma; ön işleme, model seçimi, hiperparametre ayarlama, değerlendirme ve kısıtlamaları kapsadı. Ders kapsamında ayrıca VGG-16 tabanlı bir CelebA transfer learning ödevi ve bir bilgi erişimi/NLP ödevi de yer aldı.',
          tags: ['Python', 'BERTurk', 'GPT-2', 'mT5/BART', 'Transfer Learning', 'VGG-16'],
        },
      ],
    },
    contact: {
      eyebrow: 'İletişim',
      heading: 'Birlikte çalışalım',
      description:
        'Yeni fırsatlara ve ilginç sohbetlere açığım. Bana ulaşmanın en hızlı yolu e-posta.',
      email: 'doruk.yesil@sabanciuniv.edu',
      phone: '+90 (537) 550 1817',
      linkedin: 'linkedin.com/in/doruk-yeşil',
      linkedinUrl: 'https://www.linkedin.com/in/doruk-ye%C5%9Fil-80450a1b1/',
      github: 'github.com/doruk-yesil',
      githubUrl: 'https://github.com/doruk-yesil',
      cta: { label: 'Merhaba de', href: 'mailto:doruk.yesil@sabanciuniv.edu' },
    },
    footer: {
      tagline: 'Doruk Yeşil tarafından tasarlandı & geliştirildi.',
      backToTop: 'Başa dön',
      },
  },
}

export default content
