// Bilingual portfolio content. Publication rules and source notes: README.md.
export const content = {
  "en": {
    "meta": {
      "title": "Doruk Yeşil — Software Engineer",
      "description": "Portfolio of Doruk Yeşil — Computer Science & Engineering graduate from Sabancı University. Full-stack development, computer vision, and NLP projects."
    },
    "nav": {
      "links": [
        {
          "id": "about",
          "label": "About"
        },
        {
          "id": "skills",
          "label": "Skills"
        },
        {
          "id": "experience",
          "label": "Experience"
        },
        {
          "id": "projects",
          "label": "Projects"
        },
        {
          "id": "contact",
          "label": "Contact"
        }
      ]
    },
    "hero": {
      "eyebrow": "Hi, I’m",
      "name": "Doruk Yeşil",
      "roles": [
        "Full-Stack Developer",
        "CS & Engineering Graduate",
        "Computer Vision Enthusiast",
        "NLP Explorer"
      ],
      "location": "Istanbul, Türkiye",
      "tagline": "Computer Science & Engineering graduate from Sabancı University, minoring in Business Analytics. I build full-stack platforms, computer-vision pipelines, and NLP models — and enjoy turning ambiguous problems into working software.",
      "ctaPrimary": {
        "label": "View Projects",
        "href": "#projects"
      },
      "ctaSecondary": {
        "label": "Get in Touch",
        "href": "#contact"
      },
      "scrollHint": "Scroll"
    },
    "about": {
      "eyebrow": "About",
      "heading": "A bit about me",
      "paragraphs": [
        "I’m a Computer Science & Engineering graduate of Sabancı University (Sep 2022 – Jun 2026), with a minor in Business Analytics. I have hands-on experience across full-stack web development, modern frontend frameworks, and Agile methodologies.",
        "My academic and internship work spans building production-style platforms with React, Vue, and Spring Boot, as well as more exploratory work in computer vision, remote sensing, distributed systems, and NLP — I like projects that combine solid engineering with a bit of research.",
        "I care about clean component architecture, cross-functional collaboration, and shipping things that actually work end to end."
      ],
      "facts": [
        {
          "label": "Based in",
          "value": "Istanbul, Türkiye"
        },
        {
          "label": "Education",
          "value": "BSc Computer Science & Engineering, Sabancı University"
        },
        {
          "label": "Minor",
          "value": "Business Analytics"
        },
        {
          "label": "Languages",
          "value": "Turkish (Native), English (Advanced)"
        }
      ]
    },
    "skills": {
      "eyebrow": "Skills",
      "heading": "Technologies I work with",
      "categories": [
        {
          "title": "Languages",
          "items": [
            "C",
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "TypeScript",
            "HTML/CSS"
          ]
        },
        {
          "title": "Frontend",
          "items": [
            "React",
            "Vue.js 3",
            "TypeScript",
            "MUI",
            "TanStack Query",
            "React Hook Form",
            "React Router",
            "Quasar",
            "Bootstrap 5"
          ]
        },
        {
          "title": "Backend & APIs",
          "items": [
            "Spring Boot",
            "Java 21",
            "Node.js",
            "REST / OpenAPI",
            "OAuth2 / OIDC",
            "Keycloak",
            "JPA",
            "Kafka"
          ]
        },
        {
          "title": "Data & Cloud",
          "items": [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Docker",
            "AWS",
            "DigitalOcean"
          ]
        },
        {
          "title": "ML / Data Science",
          "items": [
            "PyTorch-style Deep Learning",
            "Transformers (BERTurk, GPT-2)",
            "Remote Sensing (NBR / dNBR)",
            "Image Processing",
            "Model Evaluation"
          ]
        },
        {
          "title": "Tools & Practices",
          "items": [
            "Git / GitHub",
            "Jira",
            "Agile / Scrum",
            "Docker",
            "CI-style workflows"
          ]
        }
      ]
    },
    "experience": {
      "eyebrow": "Experience",
      "heading": "Education & Work",
      "educationLabel": "Education",
      "workLabel": "Work Experience",
      "education": [
        {
          "school": "Sabancı University",
          "degree": "BSc in Computer Science & Engineering, Minor in Business Analytics",
          "location": "Istanbul, Türkiye",
          "period": "Sep 2022 – Jun 2026"
        }
      ],
      "work": [
        {
          "role": "Software Development Intern (Frontend)",
          "company": "NovaFinz A.Ş.",
          "location": "Ataşehir, Istanbul",
          "period": "Jun 2025 – Aug 2025 · 40 business days",
          "bullets": [
            "Researched and evaluated Vue 3 / TypeScript-compatible grid libraries for enterprise dashboard interfaces, then built a Grid Component Comparison Dashboard with CSV/PDF export, multi-condition filtering, and drag-and-drop.",
            "Designed a draggable dashboard layout system on Quasar’s 12-column grid — including preview-commit editing, collision handling, pushDownCollisions behavior, and layout persistence via localStorage.",
            "Built an interactive financial dashboard layout with pure Vue.js and CSS Grid (no external libraries), plus the company’s first responsive landing pages.",
            "Implemented a Firebase Firestore backend with JWT-based authentication.",
            "Built Google Blockly demos with custom blocks, generating JavaScript, Python, PHP, and JSON code, and prototyped Turkish/English i18n using Vue Router and Pinia."
          ],
          "tags": [
            "Vue 3",
            "TypeScript",
            "Quasar",
            "Pinia",
            "Firebase",
            "Google Blockly"
          ]
        },
        {
          "role": "Lifeguard",
          "company": "Kalahari Resorts",
          "location": "Work and Travel Program · Texas, USA",
          "period": "Jun 2024 – Sep 2024",
          "bullets": [
            "Ensured guest safety at a waterpark through proactive monitoring and emergency response procedures.",
            "Performed First Aid procedures and water rescue operations as part of the safety team."
          ],
          "tags": [
            "First Aid",
            "Emergency Response",
            "Teamwork"
          ]
        }
      ]
    },
    "projects": {
      "eyebrow": "Projects",
      "heading": "Selected Projects",
      "items": [
        {
          "id": "mini-bank",
          "title": "Mini Banking Application",
          "subtitle": "Bonus Work · Personal Practice",
          "meta": "Self-directed exercise outside the internship",
          "description": "A self-directed banking demo built for practice during a later job, outside the internship. Combines a Java 21/Spring Boot API with Vue 3/TypeScript, PostgreSQL and Redis; explores role-based access, JWT authentication, account transactions and IBAN transfers.",
          "tags": [
            "Spring Boot",
            "Vue 3",
            "PostgreSQL",
            "Redis",
            "JWT"
          ],
          "links": [
            {
              "href": "https://github.com/doruk-yesil/StajProj",
              "private": true
            }
          ],
          "startDate": "2026-10",
          "endDate": "2026-10-07",
          "period": "Oct 2026"
        },
        {
          "id": "bibliocast",
          "title": "Bibliocast",
          "subtitle": "ENS491 / ENS492 Graduation Project · Sabancı University",
          "meta": "Supervisor: Prof. Albert Levi · Team of 4",
          "description": "Team project on the React and TypeScript frontend of an AI-powered e-learning platform. Includes role-based student, instructor and admin dashboards, a course catalogue, video playback, cart and mock checkout flows, discussions and certificate verification. Uses Keycloak authentication and TanStack Query for API state.",
          "tags": [
            "React",
            "TypeScript",
            "Material UI",
            "TanStack Query",
            "Keycloak",
            "Video.js"
          ],
          "links": [
            {
              "href": "https://github.com/Bibliocast-Frontend/Bibliocast-Frontend",
              "private": false
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-06-10",
          "period": "Nov 2025 – Jun 2026"
        },
        {
          "id": "clarity",
          "title": "CLARITY",
          "subtitle": "CS445 Natural Language Processing",
          "meta": "Political question-answer classification · Team project",
          "description": "NLP project classifying political interview question-answer pairs as clear replies, ambivalent replies or clear non-replies. Compares classical models using TF-IDF and linguistic features with MLP, RoBERTa and Llama/LoRA approaches on QEvasion data.",
          "tags": [
            "Python",
            "PyTorch",
            "Hugging Face",
            "RoBERTa",
            "LoRA"
          ],
          "links": [
            {
              "href": "https://github.com/Akseldindisyan/CS445_CLARITY_Unmasking-Political-Question-Evasions"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-01-30",
          "period": "Nov 2025 – Jan 2026"
        },
        {
          "id": "forest-fire",
          "title": "Unsupervised Forest Fire Detection",
          "subtitle": "CS419 Digital Image & Video Analysis",
          "meta": "Team of 3",
          "description": "Contributed feature engineering, segmentation implementation and experimental evaluation for unsupervised burned-area detection in Sentinel-2 imagery. Combined FIRMS event selection and cloud masking with NBR thresholding and K-Means, comparing F1 and IoU against dNBR-derived reference masks.",
          "tags": [
            "Python",
            "Sentinel-2",
            "NBR / dNBR",
            "K-Means",
            "F1 / IoU"
          ],
          "links": [
            {
              "href": "https://github.com/Yesimtsn/ForestFireDetection_CS419"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-01-14",
          "period": "Nov 2025 – Jan 2026"
        },
        {
          "id": "2048-dl",
          "title": "2048 · Policy Gradient Agent",
          "subtitle": "CS415 Deep Learning",
          "meta": "Game AI · Model development",
          "description": "Team project implementing a PyTorch REINFORCE agent for 2048. Covers the game environment, board representation, a running baseline, entropy bonus and reward shaping, with training, evaluation and score plots. Includes a Pygame interface for manual play.",
          "tags": [
            "Python",
            "PyTorch",
            "REINFORCE",
            "NumPy",
            "Pygame"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/415_Project"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2025-12-30",
          "period": "Nov – Dec 2025"
        },
        {
          "id": "frontend-experiments",
          "title": "Frontend Grid & Editor Demos",
          "subtitle": "Internship work · Vue 3 / TypeScript",
          "meta": "Grid comparison · Dashboards · Blockly",
          "description": "A comparison of nine data-grid integrations, Quasar employee-table and dashboard experiments, and a Blockly editor with a custom toolbox and local workspace persistence. Explores filtering, pagination, CSV export and visual-programming interfaces.",
          "tags": [
            "Vue 3",
            "TypeScript",
            "Quasar",
            "Data Grids",
            "Blockly"
          ],
          "links": [
            {
              "href": "https://github.com/doruk-yesil/grid-comparison",
              "label": "Grid Comparison"
            },
            {
              "href": "https://github.com/doruk-yesil/quasar-limit-testing",
              "label": "Quasar Demos"
            },
            {
              "href": "https://github.com/doruk-yesil/blockly-demo",
              "label": "Blockly Demo"
            }
          ],
          "startDate": "2025-06",
          "endDate": "2025-08-05",
          "period": "Jun – Aug 2025"
        },
        {
          "id": "ecommerce",
          "title": "E-Commerce Platform",
          "subtitle": "CS308 Software Engineering",
          "meta": "Team project · Temporary Product Owner",
          "description": "Team-built e-commerce application with React, Spring Boot and MongoDB: product search, cart, orders, PDF invoices and customer/product-manager/sales-manager roles. Uses Firebase Authentication; contributed to sprint planning and daily coordination as temporary Product Owner.",
          "tags": [
            "React",
            "Spring Boot",
            "MongoDB",
            "Firebase Auth",
            "Scrum"
          ],
          "links": [
            {
              "href": "https://github.com/idemelisy/CS308"
            }
          ],
          "startDate": "2025-03",
          "endDate": "2025-05-22",
          "period": "Mar – May 2025"
        },
        {
          "id": "drone-network",
          "title": "Drone-Based Sensor Network Architecture",
          "subtitle": "CS408 Computer Networks",
          "meta": "Distributed systems · Networking",
          "description": "Designed a distributed sensor-to-drone-to-server architecture using TCP communication, structured data formats, edge processing concepts, drone battery tracking, and return-to-base behavior.",
          "tags": [
            "TCP",
            "Distributed Systems",
            "Edge Computing",
            "JSON/CSV"
          ],
          "startDate": "2025-05",
          "endDate": "2025-05-18",
          "period": "May 2025 · report record"
        },
        {
          "id": "tourism-network",
          "title": "Tourism & Flight Network Data",
          "subtitle": "CS414 Network Science",
          "meta": "Data preparation · Graph enrichment",
          "description": "Python data-preparation work on tourism and flight networks. Uses Pandas and NetworkX to explore enriching GraphML flight connections with API-based prices, handling missing or failed responses and saving the resulting graph.",
          "tags": [
            "Python",
            "Pandas",
            "NetworkX",
            "GraphML",
            "HTTP APIs"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/CS414"
            }
          ],
          "startDate": "2025-03",
          "endDate": "2025-05-08",
          "period": "Mar – May 2025"
        },
        {
          "id": "how-u-doin",
          "title": "How U Doin",
          "subtitle": "CS310 Mobile Application Development",
          "meta": "Mobile messaging · Team project",
          "description": "Mobile chat project with a React Native interface and Java/Spring Boot backend. Covers authentication, friend management, direct messages and group-chat flows. The backend uses MongoDB, Spring Security and JWT.",
          "tags": [
            "React Native",
            "Java",
            "Spring Boot",
            "MongoDB",
            "JWT"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/CS310"
            }
          ],
          "startDate": "2024-11",
          "endDate": "2024-12-29",
          "period": "Nov – Dec 2024"
        }
      ],
      "sourceLabel": "GitHub repository",
      "privateSourceLabel": "Private repository · access required"
    },
    "contact": {
      "eyebrow": "Contact",
      "heading": "Let’s work together",
      "description": "I’m open to new opportunities and interesting conversations. The fastest way to reach me is by email.",
      "email": "doruk.yesil@sabanciuniv.edu",
      "phone": "+90 (537) 550 1817",
      "linkedin": "linkedin.com/in/doruk-yeşil",
      "linkedinUrl": "https://www.linkedin.com/in/doruk-ye%C5%9Fil-80450a1b1/",
      "github": "github.com/doruk-yesil",
      "githubUrl": "https://github.com/doruk-yesil",
      "cta": {
        "label": "Say hello",
        "href": "mailto:doruk.yesil@sabanciuniv.edu"
      }
    },
    "footer": {
      "tagline": "Designed & built by Doruk Yeşil.",
      "backToTop": "Back to top"
    }
  },
  "tr": {
    "meta": {
      "title": "Doruk Yeşil — Yazılım Mühendisi",
      "description": "Doruk Yeşil portfolyosu — Sabancı Üniversitesi Bilgisayar Mühendisliği mezunu. Full-stack geliştirme, bilgisayarlı görü ve NLP projeleri."
    },
    "nav": {
      "links": [
        {
          "id": "about",
          "label": "Hakkımda"
        },
        {
          "id": "skills",
          "label": "Beceriler"
        },
        {
          "id": "experience",
          "label": "Deneyim"
        },
        {
          "id": "projects",
          "label": "Projeler"
        },
        {
          "id": "contact",
          "label": "İletişim"
        }
      ]
    },
    "hero": {
      "eyebrow": "Merhaba, ben",
      "name": "Doruk Yeşil",
      "roles": [
        "Full-Stack Geliştirici",
        "Bilgisayar Mühendisliği Mezunu",
        "Bilgisayarlı Görü Meraklısı",
        "NLP Araştırmacısı"
      ],
      "location": "İstanbul, Türkiye",
      "tagline": "Sabancı Üniversitesi Bilgisayar Mühendisliği mezunuyum, Business Analytics yandalı yaptım. Full-stack platformlar, bilgisayarlı görü pipeline’ları ve NLP modelleri geliştiriyorum — belirsiz problemleri çalışan yazılımlara dönüştürmekten keyif alıyorum.",
      "ctaPrimary": {
        "label": "Projelere Git",
        "href": "#projects"
      },
      "ctaSecondary": {
        "label": "İletişime Geç",
        "href": "#contact"
      },
      "scrollHint": "Kaydır"
    },
    "about": {
      "eyebrow": "Hakkımda",
      "heading": "Kısaca ben",
      "paragraphs": [
        "Sabancı Üniversitesi Bilgisayar Mühendisliği bölümünden mezunum (Eylül 2022 – Haziran 2026), Business Analytics yandalı yaptım. Full-stack web geliştirme, modern frontend framework’leri ve Agile metodolojileri konusunda uygulamalı deneyime sahibim.",
        "Akademik ve staj çalışmalarım; React, Vue ve Spring Boot ile üretim kalitesinde platformlar geliştirmekten, bilgisayarlı görü, uzaktan algılama, dağıtık sistemler ve NLP gibi daha araştırma ağırlıklı alanlara kadar uzanıyor — sağlam mühendisliği biraz araştırmayla birleştiren projelerden hoşlanıyorum.",
        "Temiz bileşen mimarisine, ekipler arası iş birliğine ve uçtan uca gerçekten çalışan ürünler ortaya koymaya önem veriyorum."
      ],
      "facts": [
        {
          "label": "Konum",
          "value": "İstanbul, Türkiye"
        },
        {
          "label": "Eğitim",
          "value": "BSc Bilgisayar Mühendisliği, Sabancı Üniversitesi"
        },
        {
          "label": "Yandal",
          "value": "Business Analytics"
        },
        {
          "label": "Diller",
          "value": "Türkçe (Ana dil), İngilizce (İleri düzey)"
        }
      ]
    },
    "skills": {
      "eyebrow": "Beceriler",
      "heading": "Çalıştığım teknolojiler",
      "categories": [
        {
          "title": "Diller",
          "items": [
            "C",
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "TypeScript",
            "HTML/CSS"
          ]
        },
        {
          "title": "Frontend",
          "items": [
            "React",
            "Vue.js 3",
            "TypeScript",
            "MUI",
            "TanStack Query",
            "React Hook Form",
            "React Router",
            "Quasar",
            "Bootstrap 5"
          ]
        },
        {
          "title": "Backend & API",
          "items": [
            "Spring Boot",
            "Java 21",
            "Node.js",
            "REST / OpenAPI",
            "OAuth2 / OIDC",
            "Keycloak",
            "JPA",
            "Kafka"
          ]
        },
        {
          "title": "Veri & Bulut",
          "items": [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Docker",
            "AWS",
            "DigitalOcean"
          ]
        },
        {
          "title": "ML / Veri Bilimi",
          "items": [
            "Deep Learning",
            "Transformer Modelleri (BERTurk, GPT-2)",
            "Uzaktan Algılama (NBR / dNBR)",
            "Görüntü İşleme",
            "Model Değerlendirme"
          ]
        },
        {
          "title": "Araçlar & Pratikler",
          "items": [
            "Git / GitHub",
            "Jira",
            "Agile / Scrum",
            "Docker",
            "CI benzeri iş akışları"
          ]
        }
      ]
    },
    "experience": {
      "eyebrow": "Deneyim",
      "heading": "Eğitim & İş Deneyimi",
      "educationLabel": "Eğitim",
      "workLabel": "İş Deneyimi",
      "education": [
        {
          "school": "Sabancı Üniversitesi",
          "degree": "BSc Bilgisayar Mühendisliği, Business Analytics Yandalı",
          "location": "İstanbul, Türkiye",
          "period": "Eylül 2022 – Haziran 2026"
        }
      ],
      "work": [
        {
          "role": "Yazılım Geliştirme Stajyeri (Frontend)",
          "company": "NovaFinz A.Ş.",
          "location": "Ataşehir, İstanbul",
          "period": "Haziran 2025 – Ağustos 2025 · 40 iş günü",
          "bullets": [
            "Kurumsal dashboard arayüzleri için Vue 3 / TypeScript uyumlu grid kütüphanelerini araştırıp değerlendirdi; ardından CSV/PDF dışa aktarma, çok koşullu filtreleme ve sürükle-bırak özellikli bir Grid Component Comparison Dashboard geliştirdi.",
            "Quasar’ın 12 kolonlu grid sistemi üzerinde sürüklenebilir bir dashboard layout sistemi tasarladı — preview-commit düzenleme, çakışma (collision) yönetimi, pushDownCollisions davranışı ve localStorage ile layout kalıcılığı dahil.",
            "Harici kütüphane kullanmadan, saf Vue.js ve CSS Grid ile interaktif bir finansal dashboard layout’u ve şirketin ilk responsive giriş sayfalarını oluşturdu.",
            "JWT tabanlı kimlik doğrulamayla Firebase Firestore backend’i uyguladı.",
            "Özel bloklarla Google Blockly demoları oluşturdu (JavaScript, Python, PHP, JSON kod üretimi) ve Vue Router ile Pinia kullanarak Türkçe/İngilizce i18n denemeleri yaptı."
          ],
          "tags": [
            "Vue 3",
            "TypeScript",
            "Quasar",
            "Pinia",
            "Firebase",
            "Google Blockly"
          ]
        },
        {
          "role": "Cankurtaran (Lifeguard)",
          "company": "Kalahari Resorts",
          "location": "Work and Travel Programı · Teksas, ABD",
          "period": "Haziran 2024 – Eylül 2024",
          "bullets": [
            "Proaktif gözetim ve acil durum müdahale prosedürleriyle bir su parkında misafir güvenliğini sağladı.",
            "Güvenlik ekibinin bir parçası olarak İlk Yardım prosedürleri ve su kurtarma operasyonları gerçekleştirdi."
          ],
          "tags": [
            "İlk Yardım",
            "Acil Müdahale",
            "Takım Çalışması"
          ]
        }
      ]
    },
    "projects": {
      "eyebrow": "Projeler",
      "heading": "Seçilmiş Projeler",
      "items": [
        {
          "id": "mini-bank",
          "title": "Mini Bankacılık Uygulaması",
          "subtitle": "Bonus Work · Kişisel Çalışma",
          "meta": "Staj kapsamı dışında, kişisel pratik",
          "description": "Stajdan sonraki iş döneminde, kendi isteğimle pratik yapmak için geliştirdiğim bankacılık demosu. Java 21/Spring Boot API’sini Vue 3/TypeScript, PostgreSQL ve Redis ile birleştirir; rol bazlı erişim, JWT kimlik doğrulama, hesap hareketleri ve IBAN transferlerini ele alır.",
          "tags": [
            "Spring Boot",
            "Vue 3",
            "PostgreSQL",
            "Redis",
            "JWT"
          ],
          "links": [
            {
              "href": "https://github.com/doruk-yesil/StajProj",
              "private": true
            }
          ],
          "startDate": "2026-10",
          "endDate": "2026-10-07",
          "period": "Ekim 2026"
        },
        {
          "id": "bibliocast",
          "title": "Bibliocast",
          "subtitle": "ENS491 / ENS492 Bitirme Projesi · Sabancı Üniversitesi",
          "meta": "Danışman: Prof. Albert Levi · 4 kişilik takım",
          "description": "AI destekli e-öğrenme platformunun React ve TypeScript arayüzü üzerinde ekip çalışması. Rol bazlı öğrenci, eğitmen ve yönetici panelleri; kurs kataloğu, video izleme, sepet ve mock ödeme akışları, tartışmalar ve sertifika doğrulama ekranları içerir. Keycloak ile kimlik doğrulama ve TanStack Query ile API veri yönetimi kullanılır.",
          "tags": [
            "React",
            "TypeScript",
            "Material UI",
            "TanStack Query",
            "Keycloak",
            "Video.js"
          ],
          "links": [
            {
              "href": "https://github.com/Bibliocast-Frontend/Bibliocast-Frontend",
              "private": false
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-06-10",
          "period": "Kasım 2025 – Haziran 2026"
        },
        {
          "id": "clarity",
          "title": "CLARITY",
          "subtitle": "CS445 Natural Language Processing",
          "meta": "Politik soru-cevap sınıflandırması · Ekip projesi",
          "description": "Politik röportajlardaki soru-cevap çiftlerini açık yanıt, muğlak yanıt ve açık yanıt vermeme olarak sınıflandıran NLP projesi. QEvasion verisi üzerinde TF-IDF ve dilsel özellikler kullanan klasik modeller, MLP, RoBERTa ve Llama/LoRA yaklaşımları karşılaştırıldı.",
          "tags": [
            "Python",
            "PyTorch",
            "Hugging Face",
            "RoBERTa",
            "LoRA"
          ],
          "links": [
            {
              "href": "https://github.com/Akseldindisyan/CS445_CLARITY_Unmasking-Political-Question-Evasions"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-01-30",
          "period": "Kasım 2025 – Ocak 2026"
        },
        {
          "id": "forest-fire",
          "title": "Gözetimsiz Orman Yangını Tespiti",
          "subtitle": "CS419 Digital Image & Video Analysis",
          "meta": "3 kişilik takım",
          "description": "Sentinel-2 görüntülerinde NBR tabanlı özellik mühendisliği, segmentasyon yöntemlerinin uygulanması ve deneysel değerlendirmeye katkı. FIRMS ile olay seçimi, bulut maskeleme, eşikleme ve K-Means yöntemleri; dNBR’den türetilmiş referans maskeleri üzerinde F1 ve IoU ile karşılaştırıldı.",
          "tags": [
            "Python",
            "Sentinel-2",
            "NBR / dNBR",
            "K-Means",
            "F1 / IoU"
          ],
          "links": [
            {
              "href": "https://github.com/Yesimtsn/ForestFireDetection_CS419"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2026-01-14",
          "period": "Kasım 2025 – Ocak 2026"
        },
        {
          "id": "2048-dl",
          "title": "2048 · Policy Gradient Ajanı",
          "subtitle": "CS415 Deep Learning",
          "meta": "Oyun AI’ı · Model geliştirme",
          "description": "PyTorch ile REINFORCE tabanlı 2048 ajanı geliştiren ekip projesi. Oyun ortamı, tahta temsili, hareketli baseline, entropy bonus ve ödül şekillendirme; eğitim, değerlendirme ve skor çizimleriyle birlikte ele alındı. Pygame ile manuel oyun arayüzü de bulunur.",
          "tags": [
            "Python",
            "PyTorch",
            "REINFORCE",
            "NumPy",
            "Pygame"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/415_Project"
            }
          ],
          "startDate": "2025-11",
          "endDate": "2025-12-30",
          "period": "Kasım – Aralık 2025"
        },
        {
          "id": "frontend-experiments",
          "title": "Frontend Tablo ve Editör Demoları",
          "subtitle": "Staj çalışmaları · Vue 3 / TypeScript",
          "meta": "Grid karşılaştırması · Dashboard · Blockly",
          "description": "Dokuz veri-grid entegrasyonunu karşılaştıran uygulama, Quasar çalışan tablosu ve dashboard denemeleri, ayrıca özel toolbox ve yerel çalışma alanı kaydı içeren Blockly editörü. Demolar filtreleme, sayfalama, CSV dışa aktarma ve görsel programlama gibi arayüz ihtiyaçlarını araştırır.",
          "tags": [
            "Vue 3",
            "TypeScript",
            "Quasar",
            "Data Grids",
            "Blockly"
          ],
          "links": [
            {
              "href": "https://github.com/doruk-yesil/grid-comparison",
              "label": "Grid Comparison"
            },
            {
              "href": "https://github.com/doruk-yesil/quasar-limit-testing",
              "label": "Quasar Demos"
            },
            {
              "href": "https://github.com/doruk-yesil/blockly-demo",
              "label": "Blockly Demo"
            }
          ],
          "startDate": "2025-06",
          "endDate": "2025-08-05",
          "period": "Haziran – Ağustos 2025"
        },
        {
          "id": "ecommerce",
          "title": "E-Ticaret Platformu",
          "subtitle": "CS308 Software Engineering",
          "meta": "Ekip projesi · Geçici Product Owner",
          "description": "React, Spring Boot ve MongoDB tabanlı ekip projesi: ürün arama, sepet, sipariş, PDF fatura ve müşteri/ürün yöneticisi/satış yöneticisi rolleri. Firebase Authentication ile kimlik doğrulama kullanıldı; geçici Product Owner olarak sprint planlama ve günlük toplantıların koordinasyonuna katkı sağlandı.",
          "tags": [
            "React",
            "Spring Boot",
            "MongoDB",
            "Firebase Auth",
            "Scrum"
          ],
          "links": [
            {
              "href": "https://github.com/idemelisy/CS308"
            }
          ],
          "startDate": "2025-03",
          "endDate": "2025-05-22",
          "period": "Mart – Mayıs 2025"
        },
        {
          "id": "drone-network",
          "title": "Drone Tabanlı Sensör Ağı Mimarisi",
          "subtitle": "CS408 Computer Networks",
          "meta": "Dağıtık sistemler · Ağ mimarisi",
          "description": "TCP iletişimi, yapılandırılmış veri formatları, edge processing kavramları, drone batarya takibi ve üsse geri dönüş davranışı kullanan dağıtık bir sensör-drone-sunucu mimarisi tasarlandı.",
          "tags": [
            "TCP",
            "Dağıtık Sistemler",
            "Edge Computing",
            "JSON/CSV"
          ],
          "startDate": "2025-05",
          "endDate": "2025-05-18",
          "period": "Mayıs 2025 · rapor kaydı"
        },
        {
          "id": "tourism-network",
          "title": "Turizm ve Uçuş Ağı Verileri",
          "subtitle": "CS414 Network Science",
          "meta": "Veri hazırlama · Graf zenginleştirme",
          "description": "Turizm ve uçuş ağı verileri üzerinde Python tabanlı veri hazırlama çalışması. Pandas ve NetworkX kullanılarak GraphML uçuş grafının bağlantılarına API yanıtlarından fiyat bilgisi ekleme, eksik/hatalı sonuçları işleme ve grafı kaydetme adımları araştırıldı.",
          "tags": [
            "Python",
            "Pandas",
            "NetworkX",
            "GraphML",
            "HTTP APIs"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/CS414"
            }
          ],
          "startDate": "2025-03",
          "endDate": "2025-05-08",
          "period": "Mart – Mayıs 2025"
        },
        {
          "id": "how-u-doin",
          "title": "How U Doin",
          "subtitle": "CS310 Mobile Application Development",
          "meta": "Mobil mesajlaşma · Ekip projesi",
          "description": "React Native arayüzü ve Java/Spring Boot backend’i olan mobil sohbet projesi. Kullanıcı kimlik doğrulama, arkadaş yönetimi, doğrudan mesajlaşma ve grup sohbeti akışlarını içerir. Backend MongoDB, Spring Security ve JWT kullanır.",
          "tags": [
            "React Native",
            "Java",
            "Spring Boot",
            "MongoDB",
            "JWT"
          ],
          "links": [
            {
              "href": "https://github.com/ilke-demirkir/CS310"
            }
          ],
          "startDate": "2024-11",
          "endDate": "2024-12-29",
          "period": "Kasım – Aralık 2024"
        }
      ],
      "sourceLabel": "GitHub reposu",
      "privateSourceLabel": "Özel repo · erişim gerekir"
    },
    "contact": {
      "eyebrow": "İletişim",
      "heading": "Birlikte çalışalım",
      "description": "Yeni fırsatlara ve ilginç sohbetlere açığım. Bana ulaşmanın en hızlı yolu e-posta.",
      "email": "doruk.yesil@sabanciuniv.edu",
      "phone": "+90 (537) 550 1817",
      "linkedin": "linkedin.com/in/doruk-yeşil",
      "linkedinUrl": "https://www.linkedin.com/in/doruk-ye%C5%9Fil-80450a1b1/",
      "github": "github.com/doruk-yesil",
      "githubUrl": "https://github.com/doruk-yesil",
      "cta": {
        "label": "Merhaba de",
        "href": "mailto:doruk.yesil@sabanciuniv.edu"
      }
    },
    "footer": {
      "tagline": "Doruk Yeşil tarafından tasarlandı & geliştirildi.",
      "backToTop": "Başa dön"
    }
  }
}

export default content
