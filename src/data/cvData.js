
export const cvData = {
  hero: {
    name: "Juan Pablo Palomares Ávila",
    title: "Software Engineer Full Stack",
    subtitles: [
      "Java 17 | Spring Boot",
      "Microservicios",
      "Lit & React",
      "Cloud (K8s)"
    ],
    bio: "Ingeniero de Software especializado en el desarrollo de arquitecturas distribuidas con Java 17 y Spring Boot. Experto en la construcción de sistemas críticos bajo entornos Cloud (Kubernetes/OpenShift). Con una sólida mentalidad de resolución de problemas en producción y capacidad de liderazgo técnico de equipos, habilidades que potencio también a través de mi faceta como entrenador de baloncesto de competición.",
    contact: {
      phone: "654509792",
      email: "juanppa86@gmail.com",
      linkedin: "https://www.linkedin.com/in/juan-pablo-palomares-ávila-07aaab205",
      cvFile: "cv-juanpablo.pdf",
      location: "Sevilla, España"
    }
  },
  experience: [
    {
      date: "SEPTIEMBRE 2025 - ACTUALIDAD",
      role: "Software Engineer",
      company: "NTT DATA",
      responsibilities: [
        "Desarrollo Full Stack en el ecosistema Diraya (SAS): Ingeniería de backend y creación de interfaces modernas para el núcleo del sistema sanitario andaluz.",
        "Programa de Cribado de Cáncer: Liderazgo técnico en el desarrollo de la plataforma de gestión clínica, utilizando Lit (Web Components) para un frontend reactivo y eficiente, orquestado con microservicios en Java 17.",
        "Modernización de UI: Implementación de componentes reutilizables y optimización de la experiencia de usuario en herramientas de gestión de procesos médicos.",
        "Arquitectura y Monitorización: Despliegue en entornos contenerizados (Docker/Kubernetes) y observabilidad total del stack mediante Grafana."
      ]
    },
    {
      date: "JUNIO 2024 - SEPTIEMBRE 2025",
      role: "Programador Mid/Senior",
      company: "Tier1 S.A.",
      responsibilities: [
        "Planificación semanal de tareas y prioridades para el equipo de desarrollo.",
        "Análisis de incidencias críticas en producción y resolución eficiente bajo presión.",
        "Revisión y fusión de código en GitLab asegurando calidad, estándares y buenas prácticas.",
        "Mentoría constante a programadores juniors: revisión de código, orientación técnica y apoyo formativo.",
        "Despliegue y validación de actualizaciones en entornos de producción (releases, hotfixes, emergencias).",
        "Seguimiento y reporte del estado de incidencias y tareas directamente con responsables funcionales."
      ]
    },
    {
      date: "JUNIO 2022 - JUNIO 2024",
      role: "Programador Junior",
      company: "Tier1 S.A.",
      responsibilities: [
        "Desarrollo de personalizaciones sobre la plataforma Comerzzia (v4.6, v4.8.1 y v5.0).",
        "Implementación de módulos: Mule ESB, POS, Backoffice/OMS, tienda online, ISE y APIs REST.",
        "Adopción de arquitectura headless, microservicios contenedorizados con Docker y Kubernetes.",
        "Creación de adaptadores Mule para integración entre POS y sistemas centrales.",
        "Personalización del motor de promociones, fidelización y CRM Involve CRM.",
        "Integración con ERP y sistemas externos mediante APIs y colas de mensajería.",
        "Automatización de pipelines CI/CD y despliegue continuo."
      ]
    }
  ],
  education: [
    {
      date: "2020 - 2022",
      title: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "Centro FP Superior de la Cámara de Comercio de Sevilla"
    }
  ],
  skills: {
    languages: [
      { name: "Java (11, 17, 21)", icon: "FaJava" },
      { name: "Jakarta EE & Open Liberty", icon: "FaServer" },
      { name: "Spring Boot", icon: "SiSpring" },
      { name: "Node.js", icon: "FaNodeJs" }
    ],
    frontend: [
      { name: "React", icon: "FaReact" },
      { name: "Lit (Web Components)", icon: "FaCode" }, // Lit icon missing in standard sets sometimes, using Code
      { name: "JavaScript (ES6+)", icon: "SiJavascript" },
      { name: "HTML5 & CSS3", icon: "FaHtml5" }
    ],
    mobile: [
      { name: "Flutter (Dart)", icon: "FaMobileAlt" }
    ],
    architecture: [
      { name: "Microservicios", icon: "FaNetworkWired" },
      { name: "APIs REST", icon: "FaServer" },
      { name: "Arquitectura Hexagonal", icon: "FaCubes" },
      { name: "Event-Driven", icon: "FaBolt" }
    ],
    cloud: [
      { name: "Kubernetes (K8s)", icon: "SiKubernetes" },
      { name: "Docker & Podman", icon: "SiDocker" },
      { name: "Helm Charts", icon: "SiHelm" }
    ],
    database: [
      { name: "Oracle Database", icon: "SiOracle" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "SQL Server", icon: "SiMicrosoftsqlserver" }
    ],
    devops: [
      { name: "Jenkins", icon: "SiJenkins" },
      { name: "GitLab CI", icon: "SiGitlab" },
      { name: "Maven", icon: "SiApachemaven" },
      { name: "Git", icon: "FaGitAlt" }
    ],
    testing: [
      { name: "JUnit 5", icon: "SiJunit5" },
      { name: "Mockito", icon: "SiJunit5" }, // Reuse for now
      { name: "Selenium", icon: "SiSelenium" },
      { name: "Clean Code", icon: "FaCheckCircle" }
    ]
  },
  complementaryEducation: [
    {
      title: "Aplicaciones web con Web Components, Lit Element y Stenciljs",
      issuer: "Udemy",
      date: "Oct. 2025",
      id: "UC-488720f6-9d51-46f9-96c4-2ff578756438",
      url: "https://www.udemy.com/certificate/UC-488720f6-9d51-46f9-96c4-2ff578756438/"
    },
    {
      title: "Apache Kafka con Java, Spring framework, Elasticsearch y AWS",
      issuer: "Udemy",
      date: "Ago. 2025",
      id: "UC-4fde04fa-b09e-4216-a757-cac772210845",
      url: "https://www.udemy.com/certificate/UC-4fde04fa-b09e-4216-a757-cac772210845/"
    },
    {
      title: "Construye aplicaciones web Spring Framework 6 y Spring Boot 3",
      issuer: "Udemy",
      date: "Ago. 2025",
      id: "UC-36c04b0c-66ac-4603-9b54-1332e42c1c53",
      url: "https://www.udemy.com/certificate/UC-36c04b0c-66ac-4603-9b54-1332e42c1c53/"
    },
    {
      title: "Conecta tu aplicación Spring Boot con otros microservicios (OpenFeign)",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Curso de Jira: Funcionalidades y gestión de proyectos Agile",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Curso de Selenium con Java para principiantes",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Curso de técnicas de Refactoring y Clean Code",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
      issuer: "Udemy",
      date: "Feb. 2025",
      id: "UC-b17d5af2-f0d7-470a-9a7e-523ad5fa9663",
      url: "https://www.udemy.com/certificate/UC-b17d5af2-f0d7-470a-9a7e-523ad5fa9663/"
    },
    {
      title: "Dominando ChatGPT con la API de OpenAI",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Incluye seguridad en tus microservicios con Spring Cloud Gateway",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Introducción a los microservicios con Spring Cloud",
      issuer: "OpenWebinars",
      date: "Feb. 2025",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Curso Maestro de Python: De cero a programador todoterreno",
      issuer: "Udemy",
      date: "Dic. 2024",
      id: "UC-10d33536-34e5-4611-b5aa-a5cae157db97",
      url: "https://www.udemy.com/certificate/UC-10d33536-34e5-4611-b5aa-a5cae157db97/"
    },
    {
      title: "Curso de Testing en Java con JUnit 5",
      issuer: "OpenWebinars",
      date: "Jun. 2024",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Curso de jQuery",
      issuer: "OpenWebinars",
      date: "Jun. 2024",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "Programación asíncrona con promises en JavaScript",
      issuer: "OpenWebinars",
      date: "Jun. 2024",
      url: "https://openwebinars.net/certificados/"
    },
    {
      title: "JavaScript Moderno Guía Definitiva Construye +20 Proyectos",
      issuer: "Udemy",
      date: "Mar. 2024",
      id: "UC-7598eca0-704d-4590-ad33-35e9ad75d56f",
      url: "https://www.udemy.com/certificate/UC-7598eca0-704d-4590-ad33-35e9ad75d56f/"
    }
  ],
  projects: [
    {
      title: "Programa de Cribado de Cáncer (SAS)",
      company: "NTT DATA",
      description: "Desarrollo full-stack de la plataforma de gestión para la detección precoz del cáncer de cérvix. Orquestación de procesos clínicos y administrativos mediante microservicios y frontend reactivo en Lit.",
      tags: ["Java 17", "Lit", "Microservicios", "SAS"]
    },
    {
      title: "Evolución Diraya (Gestor de Procesos)",
      company: "NTT DATA",
      description: "Ingeniería de backend para el núcleo del sistema sanitario andaluz. Optimización de la interoperabilidad entre centros de salud y hospitales mediante arquitecturas contenerizadas (K8s/Docker).",
      tags: ["Backend", "K8s", "Docker", "Interoperabilidad"]
    },
    {
      title: "Migración Eroski a Tier1",
      company: "Tier1 S.A.",
      description: "Implementación y adaptación de la plataforma a múltiples tiendas y procesos.",
      tags: ["Migración", "Retail"]
    },
    {
      title: "Solución de gestión Bricodepot",
      company: "Tier1 S.A.",
      description: "Desarrollo e integración de herramientas para almacenes y retail.",
      tags: ["Gestión", "Almacenes"]
    },
    {
      title: "Integración Global IskayPet",
      company: "Tier1 S.A.",
      description: "Unificación de gestión de tiendas y campañas de fidelización con analítica avanzada.",
      tags: ["Integración", "Fidelización", "Analítica"]
    },
    {
      title: "Optimización Promociones E.Leclerc",
      company: "Tier1 S.A.",
      description: "Implementación de herramientas para e-commerce y mejora en la preparación de pedidos.",
      tags: ["E-commerce", "Promociones"]
    }
  ]
};
