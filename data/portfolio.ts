export const portfolio = {
  personal: {
    name: 'Nehmya Biruk',
    title: 'AI/ML Engineer',
    tagline: 'Building intelligent AI and machine learning systems that solve real-world problems',
    email: 'mimneh@gmail.com',
    phone: '+251 901723123',
    location: 'Addis Ababa, Ethiopia',
    linkedin: 'https://linkedin.com/in/nehmya-biruk',
    github: 'https://github.com/nehmyabiruk',
  },

  about: {
    bio: `I'm an AI/ML Engineer focused on building and deploying intelligent systems that solve real-world problems. I specialize in developing end-to-end machine learning and AI solutions, from data processing and feature engineering to model development, evaluation, deployment, and monitoring.My work spans predictive modeling, time-series forecasting, LLM applications, Retrieval-Augmented Generation (RAG), and AI-powered developer tools. I work with Python, Scikit-learn, XGBoost, TensorFlow, FastAPI, PostgreSQL, pgvector, LangChain, and modern LLM technologies to turn data and models into practical, production-ready applications.`,

    bio2: `I'm particularly interested in the intersection of machine learning and modern generative AI—building systems that are not only accurate, but also reliable, scalable, explainable, and useful in real-world environments.I'm continuously expanding my expertise in AI engineering, MLOps, LLM systems, and intelligent automation, with the goal of contributing to ambitious AI/ML teams and building technology that creates measurable impact.`
  },


  services: [
    {
      icon: '🤖 ',
      title: 'Artificial Intelligence & Generative AI',
      description: 'Building intelligent AI systems using Large Language Models, RAG, AI agents, embeddings, vector databases, prompt engineering, and intelligent automation to solve complex real-world problems.',
    },
    {
      icon: '🧠',
      title: 'Machine Learning Engineering',
      description: 'Designing and deploying machine learning solutions for prediction, classification, forecasting, anomaly detection, and decision-making using modern ML algorithms and frameworks.',
    },
    {
      icon: '🔍',
      title: 'LLM & RAG Systems',
      description: 'Developing context-aware AI applications that connect LLMs with private and domain-specific knowledge using retrieval, semantic search, embeddings, vector databases, and advanced RAG architectures.',
    },
    {
      icon: '⚙️',
      title: 'Production AI Engineering',
      description: 'Taking AI from prototype to production by building reliable APIs, model-serving systems, evaluation pipelines, monitoring, and scalable AI infrastructure using technologies such as Python, FastAPI, PostgreSQL, Docker, and cloud platforms.',
    },
  ],

  skills: [
    { category: 'Generative AI', items: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Embeddings', 'Semantic Search', 'Vector Databases', 'pgvector', 'LLM Evaluation'] },
    { category: 'Machine Learning', items: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Classification', 'Regression', 'Time-Series Forecasting', 'Feature Engineering', 'Model Evaluation', 'SHAP', 'Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'AI Engineering', items: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Docker', 'Model Serving', 'Model Deployment', 'Cloud Deployment', 'Git', 'GitHub'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Development Tools', items: ['Jupyter', 'VS Code', 'Git', 'Docker'] },
  ],

  experience: [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Ltd',
      period: '2024 - Present',
      description: 'Developing and maintaining web applications for various clients. Working with React, Next.js, and Node.js.',
    },
    {
      title: 'Freelance Developer',
      company: 'Amen Pictures',
      period: '2023 - Present',
      description: 'Designed and developed a production web application for Amen Pictures, focusing on responsive design, performance, and a seamless user experience.',
    },
    {
      title: 'AI/ML Engineer — Independent Projects',
      company: 'Independent',
      period: '2024 - Present',
      description: 'Building end-to-end AI/ML and Generative AI systems, including predictive models, time-series forecasting, LLM/RAG applications, and AI-powered developer tools.',
    },
    {
      title: 'AI/ML Training & Projects',
      company: 'Kifiya / TenX Academy',
      period: '2024 - Present',
      description: 'Completed practical AI/ML training and applied machine learning concepts including data preprocessing, feature engineering, model development, evaluation, and deployment through hands-on projects.',
    },
    {
      title: 'Independent AI/ML Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      description: 'Developing practical AI/ML projects to build production-oriented experience across machine learning, Generative AI, RAG systems, model evaluation, and intelligent applications.',
    },
  ],

  projects: [
    {
      title: 'AI/ML Copilot',
      category: 'Generative AI',
      description: 'An AI-powered developer assistant that uses LLMs, RAG, embeddings, semantic search, and vector databases to understand codebases and provide context-aware answers.',
      stats: ['LLM', 'RAG', 'pgvector', 'FastAPI'],
      technologies: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'pgvector', 'Sentence Transformers'],
      live: 'https://ai-ml-copilot-frontend.onrender.com/',
      github: 'https://github.com/Nehmyabiruk/ai-ml-copilot',
      image: '/images/projects/ai-ml-copiolt.png',
    },
    {
      title: 'Model Regression Detector',
      category: 'AI/ML Engineering',
      description: 'An automated ML evaluation and regression detection system designed to identify performance degradation between model versions using configurable evaluation metrics and intelligent analysis.',
      stats: ['Automated Evaluation', 'Regression Detection', 'ML Monitoring', 'XGBoost'],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pydantic', 'Pytest', 'FastAPI'],
      live: 'https://model-regression-detector-frontend.onrender.com/',
      github: 'https://github.com/Nehmyabiruk/model-regression-detector',
      image: '/images/projects/model-regression.png',
    },
    {
      title: 'Credit Risk Model',
      category: 'Machine Learning',
      description: 'An explainable machine learning system for predicting credit risk, comparing multiple classification algorithms and providing model interpretability for risk-based decisions.',
      stats: ['ROC-AUC 0.9807', 'PR-AUC 0.9462', '4+ ML Models', 'XGBoost'],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'NumPy', 'FastAPI'],
      live: 'https://credit-risk-predictor-frontend-dn0q.onrender.com/',
      github: 'https://github.com/Nehmyabiruk/credit-risk-predictor',
      image: '/images/projects/credit-risk.png',
    },
    {
      title: 'Ethiopian Commodity Price Prediction',
      category: 'AI/ML & Forecasting',
      description: 'A machine learning forecasting system for predicting Ethiopian commodity prices using historical market data, feature engineering, and time-series modeling to support data-driven market decisions.',
      stats: ['R² 0.9061', 'MAPE 7.12%', 'MAE 329.32', '3 Models Compared'],
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Time-Series', 'Weather API'],
      live: 'https://ethiopia-commodity-price-prediction.onrender.com/',
      github: 'https://github.com/Nehmyabiruk/ethiopia-commodity-price-prediction',
      image: '/images/projects/commodity-price.png',
    },
    {
      title: 'Amen Pictures USA',
      description: 'Full-stack web platform built for a US-based photography studio, featuring a modern, responsive interface and a robust backend for managing client bookings and gallery content.',
      technologies: ['React JS', 'TypeScript'],
      github: 'https://github.com/Nehmyabiruk/v0-personal-portfolio-website',
      live: 'https://photo-booking-website-vjra-r0b8b5p8l-mimneh-3704s-projects.vercel.app/',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eRkkCoMvoCUbsgPV7FWGMWgHgBofmV.png',
    },
    {
      title: 'AI Student Registration System',
      description: 'Intelligent student registration and enrollment system with AI-powered course recommendations.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'ML Models'],
      github: 'https://github.com/nehmyabiruk/student-registration-ai',
      live: 'https://studregg.42web.io/',
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
      link: 'https://drive.google.com/file/d/1_MDK8B2XO3wQDuAQ72sgZaVT6UKWZmzt/view?usp=drives',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Applications'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Unity University',
      period: '2021 - 2025',
      description: 'Built a strong foundation in computer science, algorithms, software engineering, databases, and artificial intelligence, graduating with a 3.53 CGPA and 3.70 major GPA while developing a strong focus on AI and machine learning.',
    },
  ]
}

export type Portfolio = typeof portfolio
