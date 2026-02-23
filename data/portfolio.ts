export const portfolio = {
  personal: {
    name: 'Nehmya Biruk',
    title: 'Full-Stack Developer & AI/ML Engineer',
    tagline: 'Building intelligent applications that solve real-world problems',
    email: 'mimneh@gmail.com',
    phone: '+251 901723123',
    location: 'Addis Ababa, Ethiopia',
    linkedin: 'https://linkedin.com/in/nehmya-biruk',
    github: 'https://github.com/nehmyabiruk',
  },

  about: {
    bio: `I'm a Full-Stack Developer and AI/ML Engineer with a strong background in Computer Science. 
    I specialize in building scalable web applications and developing machine learning solutions that 
    transform data into actionable insights. My expertise spans both frontend and backend technologies, 
    combined with advanced AI/ML capabilities.`,
    bio2: `I have successfully completed intensive training programs in AI/ML and Data Engineering from 
    10 Academy, giving me the latest knowledge in cutting-edge technologies. I'm passionate about 
    developing innovative solutions and continuously learning new technologies to stay ahead in this 
    fast-paced field.`,
  },

  services: [
    {
      icon: '💻',
      title: 'Full-Stack Web Development',
      description: 'Building responsive, scalable web applications using modern frameworks and technologies like React, Next.js, Node.js, and PostgreSQL.',
    },
    {
      icon: '🤖',
      title: 'AI/ML Solutions',
      description: 'Developing machine learning models for predictive analytics, NLP, computer vision, and implementing AI-powered features in applications.',
    },
    {
      icon: '📊',
      title: 'Data Engineering',
      description: 'Designing and building data pipelines, data warehouses, and ETL processes for efficient data processing and analytics.',
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Creating robust APIs, microservices, and server-side solutions with focus on performance, security, and scalability.',
    },
  ],

  skills: [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL'] },
    { category: 'ML/AI', items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jupyter', 'VS Code'] },
  ],

  experience: [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Ltd',
      period: '2024 - Present',
      description: 'Developing and maintaining web applications for various clients. Working with React, Next.js, and Node.js.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'Digital Innovation Hub',
      period: '2023 - 2024',
      description: 'Contributed to the development of scalable web applications and learned best practices in software development.',
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2022 - 2023',
      description: 'Developed multiple web projects for clients, focusing on responsive design and optimal performance.',
    },
    {
      title: 'Intern - Web Development',
      company: 'StartUp Tech',
      period: '2021 - 2022',
      description: 'Assisted in developing frontend features and learned modern web development practices.',
    },
  ],

  projects: [
    {
      title: 'AI Student Registration System',
      description: 'Intelligent student registration and enrollment system with AI-powered course recommendations.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'ML Models'],
      github: 'https://github.com/nehmyabiruk/student-registration-ai',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/st-3iggUiKTsDv0p5sCX8aUL4uS8V5laz.png',
    },
    {
      title: 'AI Rental Management System',
      description: 'A comprehensive platform for managing rental properties with AI-powered features for price optimization and demand forecasting.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TensorFlow'],
      github: 'https://github.com/nehmyabiruk/ai-rental-management',
      live: 'https://rent-management-system-tau.vercel.app/',
      image: '/images/projects/rental-system.jpg',
    },
    {
      title: 'EthioMart Amharic NER',
      description: 'Named Entity Recognition system for Amharic language using deep learning for e-commerce product categorization.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Amharic Language'],
      github: 'https://github.com/Nehmyabiruk/EthioMart-Amharic-NER',
      image: '/images/projects/ethiomart-ner.jpg',
    },
    {
      title: 'Credit Risk Model',
      description: 'Machine learning model for predicting credit scores and assessing loan eligibility based on financial data.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      github: 'https://github.com/Nehmyabiruk/credit-risk-model',
      image: '/images/projects/credit-scoring.jpg',
    },
    {
      title: 'Credtrust-Complaint-chatBot',
      description: 'delivering a Retrieval-Augmented Generation (RAG)-powered chatbot for CredTrust Financial. The chatbot processes CFPB complaint data across Credit Cards, Personal Loans, Buy Now Pay Later (BNPL), Savings Accounts, and Money Transfers, providing actionable insights.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/Nehmyabiruk/credtrust-complaint-chatbot.',
      image: '/images/projects/brent-price.jpg',
    },
    {
      title: 'Time Series Portfolio Optimization',
      description: 'Portfolio optimization system using time series analysis and modern portfolio theory for investment strategy.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Optimization Libraries'],
      github: 'https://github.com/Nehmyabiruk/Time-Series-Forecasting-and-Portfolio-Optimization',
      image: '/images/projects/portfolio-opt.jpg',
    },

    {
      title: 'CredTrust Complaint Chatbot',
      description: 'AI-powered chatbot for handling customer complaints and support requests using NLP and sentiment analysis.',
      technologies: ['Python', 'NLP', 'FastAPI', 'React'],
      github: 'https://github.com/nehmyabiruk/credtrust-chatbot',
      image: '/images/projects/credtrust-chatbot.jpg',
    },
    {
      title: 'MoonLight Energy Solutions',
      description: 'Web platform for solar energy management and optimization with real-time monitoring and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/Nehmyabiruk/MoonLight-Energy-solutions-data',
      live: 'https://moonlight-energy.vercel.app/',
      image: '/images/projects/moonlight-energy.jpg',
    },
    {
      title: 'Fraud Detection System',
      description: 'Machine learning system for detecting fraudulent transactions using ensemble methods and anomaly detection.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
      github: 'https://github.com/nehmyabiruk/fraud-detection',
      image: '/images/projects/fraud-detection.jpg',
    },

    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for real-time data visualization and business intelligence analytics.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/nehmyabiruk/data-dashboard',
      live: 'https://data-dashboard.vercel.app/',
      image: '/images/projects/data-dashboard.jpg',
    },
  ],

  certifications: [
    {
      title: 'AI/ML & Data Engineering 2024-25',
      issuer: '10 Academy',
      date: '2024-2025',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cer-LCsa8kKypdtzVvnCpCHVZRtDoOr4hu.png',
      link: 'https://drive.google.com/file/d/1Jcg8OEWnz13WoplgkeMsiuid6UZbObRF/view?usp=drivesdk',
      skills: ['Machine Learning', 'Data Engineering', 'Python', 'TensorFlow'],
    },
    {
      title: 'Data Science Learning',
      issuer: '10 Academy',
      date: '2025',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da-VFEZJsUMGRjyecZrZWDqIIu2wH2hLb.png',
      link: 'https://drive.google.com/file/d/1wwYD5462HXUuoYOpm2JrMMchmxanHvL7/view?usp=drivesdk',
      skills: ['Data Preprocessing', 'Exploratory Data Analysis', 'Model Evaluation', 'Data Visualization'],
    },
    {
      title: 'AI Mastermind',
      issuer: 'Generative AI Training Program',
      date: '2024',
      image: '/images/certificates/ai-mastermind.jpg',
      link: 'https://drive.google.com/file/d/1wwYD5462HXUuoYOpm2JrMMchmxanHvL7/view?usp=drivesdk',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Applications'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University (Expected Graduation: 2025)',
      description: 'Strong foundation in computer science principles, algorithms, and software engineering.',
    },
  ],
}

export type Portfolio = typeof portfolio
