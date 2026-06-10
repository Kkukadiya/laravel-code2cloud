import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Cloud, 
  Phone, 
  Users,
  Headphones,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Database,
  Settings,
  BarChart,
  MessageSquare,
  Lightbulb,
  Target,
  FileCode,
  Layers,
  Monitor,
  Bot,
  Brain,
  Workflow,
  Cpu,
  Sparkles
} from 'lucide-react';

// Services Data
const servicesData = {
  'web-development': {
    icon: Code,
    title: 'Web Development',
    subtitle: 'Custom Web Development Services That Drive Measurable Growth',
    description: 'Codes2cloud is a custom web development company building fast, secure and SEO-ready websites and web applications for clients across the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'From corporate websites and SaaS platforms to enterprise web applications and headless commerce, our web development team delivers responsive, accessible and high-performance experiences engineered on React, Next.js, Node.js, Laravel and WordPress — optimised for Core Web Vitals, search visibility and conversions.',
    expertise: [
      'Expertise in HTML, CSS, JavaScript, and responsive designs ensures aesthetic and functional interfaces.',
      'Proficiency in server-side languages like PHP, Node.js, Python, and databases like MySQL and MongoDB allows for robust, scalable application architecture.',
      'Custom solutions tailored to your specific business requirements and industry standards.'
    ],
    solutions: [
      { title: 'E-commerce Sites', desc: 'Designed for online shopping and payment system integration with seamless checkout experiences.' },
      { title: 'Content Management Systems', desc: 'Allows users to create, manage and modify website content with ease.' },
      { title: 'Customer Portals', desc: 'Allows customers to view, download and upload private information such as invoices or documents.' },
      { title: 'SaaS Platforms', desc: 'Scalable software-as-a-service applications with subscription management.' },
      { title: 'Enterprise Applications', desc: 'Complex business applications designed for large-scale operations.' },
      { title: 'Progressive Web Apps', desc: 'Web apps that deliver native app-like experiences in the browser.' },
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understanding your business goals and requirements' },
      { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and architecture' },
      { step: '03', title: 'Design', desc: 'Crafting intuitive UI/UX designs' },
      { step: '04', title: 'Development', desc: 'Building with clean, maintainable code' },
      { step: '05', title: 'Testing', desc: 'Rigorous quality assurance and testing' },
      { step: '06', title: 'Launch', desc: 'Deployment and ongoing support' },
    ],
    features: [
      { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed and efficiency' },
      { icon: Shield, title: 'Secure', desc: 'Built with security best practices' },
      { icon: Globe, title: 'SEO Optimized', desc: 'Designed for search engine visibility' },
      { icon: Monitor, title: 'Responsive', desc: 'Perfect on all devices' },
    ]
  },
  'mobile-apps': {
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS, Android & Cross-Platform Mobile App Development Services',
    description: 'Codes2cloud builds high-performance native and cross-platform mobile apps for startups, SMEs and enterprises across the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'From concept and UX to App Store and Play Store launch, our mobile app developers engineer scalable iOS and Android products using Swift, Kotlin, React Native and Flutter — integrated with secure APIs, payments, real-time data and analytics for measurable user growth.',
    expertise: [
      'Expert development in Swift, Kotlin, React Native, and Flutter for cross-platform solutions.',
      'Deep understanding of mobile UX patterns and platform-specific guidelines.',
      'Integration with backend services, APIs, and third-party tools for seamless functionality.'
    ],
    solutions: [
      { title: 'iOS Applications', desc: 'Native apps built with Swift for Apple devices.' },
      { title: 'Android Applications', desc: 'Native apps using Kotlin for the Android ecosystem.' },
      { title: 'Cross-Platform Apps', desc: 'Single codebase apps using React Native or Flutter.' },
      { title: 'Enterprise Mobile Apps', desc: 'Secure business applications for internal use.' },
      { title: 'E-commerce Apps', desc: 'Mobile shopping experiences with payment integration.' },
      { title: 'On-Demand Apps', desc: 'Service booking and delivery applications.' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    process: [
      { step: '01', title: 'Strategy', desc: 'Define app goals and target audience' },
      { step: '02', title: 'Wireframing', desc: 'Create app flow and structure' },
      { step: '03', title: 'UI Design', desc: 'Design beautiful interfaces' },
      { step: '04', title: 'Development', desc: 'Build robust mobile apps' },
      { step: '05', title: 'Testing', desc: 'Device testing and QA' },
      { step: '06', title: 'Deployment', desc: 'App store submission and launch' },
    ],
    features: [
      { icon: Zap, title: 'High Performance', desc: 'Smooth and responsive apps' },
      { icon: Shield, title: 'Secure', desc: 'Data protection built-in' },
      { icon: Users, title: 'User-Centric', desc: 'Intuitive user experiences' },
      { icon: Settings, title: 'Scalable', desc: 'Built to grow with you' },
    ]
  },
  'design': {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-Centred UI/UX Design Services That Convert',
    description: 'A specialist UI/UX design agency crafting intuitive, accessible and conversion-driven digital experiences for SaaS, mobile and enterprise clients worldwide.',
    heroDescription: 'Our designers blend user research, journey mapping, wireframing, prototyping and visual design in Figma to deliver interfaces that look beautiful and perform — built to WCAG accessibility standards and validated with real users across the USA, UK, UAE, Canada and Australia.',
    expertise: [
      'Deep expertise in user research, usability testing, and human-centered design principles.',
      'Proficiency in Figma, Sketch, Adobe XD, and prototyping tools.',
      'Strong understanding of accessibility standards and inclusive design practices.'
    ],
    solutions: [
      { title: 'User Research', desc: 'Understanding user needs through research and analytics.' },
      { title: 'Wireframing', desc: 'Creating structural blueprints for digital products.' },
      { title: 'UI Design', desc: 'Crafting beautiful, intuitive interfaces.' },
      { title: 'Prototyping', desc: 'Interactive prototypes for testing and validation.' },
      { title: 'Design Systems', desc: 'Scalable component libraries for consistency.' },
      { title: 'Usability Testing', desc: 'Validating designs with real users.' },
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer'],
    process: [
      { step: '01', title: 'Research', desc: 'User interviews and competitive analysis' },
      { step: '02', title: 'Define', desc: 'Create personas and user journeys' },
      { step: '03', title: 'Ideate', desc: 'Brainstorm and sketch solutions' },
      { step: '04', title: 'Design', desc: 'Create high-fidelity designs' },
      { step: '05', title: 'Prototype', desc: 'Build interactive prototypes' },
      { step: '06', title: 'Test', desc: 'Validate with real users' },
    ],
    features: [
      { icon: Users, title: 'User Research', desc: 'Data-driven design decisions' },
      { icon: Layers, title: 'Design Systems', desc: 'Consistent brand experiences' },
      { icon: Target, title: 'Conversion Focus', desc: 'Designed to convert visitors' },
      { icon: Lightbulb, title: 'Innovation', desc: 'Creative problem solving' },
    ]
  },
  'cloud-solutions': {
    icon: Cloud,
    title: 'Cloud Solutions',
    subtitle: 'AWS, Azure & GCP Cloud Consulting and DevOps Services',
    description: 'Secure, scalable cloud infrastructure, migration and DevOps automation for businesses across the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'Codes2cloud helps organisations modernise on AWS, Microsoft Azure and Google Cloud — covering cloud migration, multi-region architecture, Kubernetes, CI/CD pipelines, infrastructure-as-code, FinOps and 24/7 managed cloud services that cut downtime and cloud spend.',
    expertise: [
      'Expert cloud architecture design on AWS, Azure, and Google Cloud Platform.',
      'DevOps practices including CI/CD pipelines, containerization, and infrastructure as code.',
      'Cloud security, compliance, and cost optimization strategies.'
    ],
    solutions: [
      { title: 'Cloud Migration', desc: 'Seamlessly move your infrastructure to the cloud.' },
      { title: 'Cloud Architecture', desc: 'Design scalable and resilient cloud solutions.' },
      { title: 'DevOps Services', desc: 'Automate deployment and operations.' },
      { title: 'Managed Cloud', desc: '24/7 monitoring and management of cloud resources.' },
      { title: 'Cloud Security', desc: 'Protect your cloud infrastructure and data.' },
      { title: 'Cost Optimization', desc: 'Reduce cloud spending without sacrificing performance.' },
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    process: [
      { step: '01', title: 'Assessment', desc: 'Evaluate current infrastructure' },
      { step: '02', title: 'Strategy', desc: 'Plan cloud adoption roadmap' },
      { step: '03', title: 'Architecture', desc: 'Design cloud solution' },
      { step: '04', title: 'Migration', desc: 'Execute migration plan' },
      { step: '05', title: 'Optimize', desc: 'Fine-tune performance' },
      { step: '06', title: 'Manage', desc: 'Ongoing support and monitoring' },
    ],
    features: [
      { icon: Zap, title: 'Scalable', desc: 'Grow resources on demand' },
      { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' },
      { icon: Database, title: 'Reliable', desc: 'High availability infrastructure' },
      { icon: Settings, title: 'Automated', desc: 'Streamlined operations' },
    ]
  },
  'voip-services': {
    icon: Phone,
    title: 'VOIP Services',
    subtitle: 'Enterprise VOIP, SIP Trunking & Cloud Telephony Solutions',
    description: 'Reliable, cost-effective business VOIP and unified communications solutions deployed for call centres, BPOs and enterprises in the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'From cloud PBX and SIP trunking to predictive dialers, WebRTC contact-centre platforms and CRM-integrated softphones, our VOIP engineers deliver crystal-clear voice, video and messaging that scales globally while reducing telecom costs.',
    expertise: [
      'Extensive experience in deploying enterprise VOIP systems and PBX solutions.',
      'Integration with CRM systems, call center software, and unified communications platforms.',
      'Expertise in SIP trunking, WebRTC, and cloud-based telephony solutions.'
    ],
    solutions: [
      { title: 'Business Phone Systems', desc: 'Modern phone systems for businesses of all sizes.' },
      { title: 'Call Center Solutions', desc: 'Complete contact center infrastructure.' },
      { title: 'Unified Communications', desc: 'Voice, video, and messaging in one platform.' },
      { title: 'SIP Trunking', desc: 'Cost-effective voice connectivity.' },
      { title: 'Video Conferencing', desc: 'HD video meetings and collaboration.' },
      { title: 'Mobile Integration', desc: 'Take your office phone anywhere.' },
    ],
    technologies: ['Asterisk', 'FreePBX', 'Twilio', 'WebRTC', 'SIP', 'VoIP.ms'],
    process: [
      { step: '01', title: 'Consultation', desc: 'Understand communication needs' },
      { step: '02', title: 'Design', desc: 'Plan system architecture' },
      { step: '03', title: 'Setup', desc: 'Configure and install systems' },
      { step: '04', title: 'Integration', desc: 'Connect with existing tools' },
      { step: '05', title: 'Training', desc: 'Team onboarding and training' },
      { step: '06', title: 'Support', desc: '24/7 ongoing support' },
    ],
    features: [
      { icon: Globe, title: 'Global Reach', desc: 'Connect worldwide affordably' },
      { icon: Headphones, title: '24/7 Support', desc: 'Always available assistance' },
      { icon: Shield, title: 'Secure', desc: 'Encrypted communications' },
      { icon: Zap, title: 'HD Quality', desc: 'Crystal-clear voice quality' },
    ]
  },
  'consultancy': {
    icon: Users,
    title: 'IT Consultancy',
    subtitle: 'Strategic IT Consulting & Digital Transformation Services',
    description: 'Independent IT consulting and digital transformation advisory for growing businesses and enterprises across the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'Our senior consultants help CXOs align technology with business goals — covering IT strategy, cloud roadmap, software modernisation, process automation, vendor evaluation and architecture reviews that turn IT spend into measurable competitive advantage.',
    expertise: [
      'Deep industry knowledge across fintech, healthcare, e-commerce, and enterprise sectors.',
      'Expertise in digital transformation, process automation, and technology modernization.',
      'Strong track record of helping businesses optimize their IT investments and operations.'
    ],
    solutions: [
      { title: 'Technology Strategy', desc: 'Align IT with business goals and objectives.' },
      { title: 'Digital Transformation', desc: 'Modernize operations with digital solutions.' },
      { title: 'Process Automation', desc: 'Streamline workflows and reduce manual tasks.' },
      { title: 'Technology Audit', desc: 'Assess and optimize your current systems.' },
      { title: 'Vendor Selection', desc: 'Choose the right technology partners.' },
      { title: 'IT Roadmap', desc: 'Plan your technology journey strategically.' },
    ],
    technologies: ['Agile', 'ITIL', 'TOGAF', 'SAFe', 'Lean', 'Six Sigma'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understand business challenges' },
      { step: '02', title: 'Analysis', desc: 'Assess current state' },
      { step: '03', title: 'Strategy', desc: 'Develop recommendations' },
      { step: '04', title: 'Roadmap', desc: 'Create implementation plan' },
      { step: '05', title: 'Execution', desc: 'Support implementation' },
      { step: '06', title: 'Review', desc: 'Measure outcomes and iterate' },
    ],
    features: [
      { icon: Lightbulb, title: 'Strategic Insight', desc: 'Expert technology guidance' },
      { icon: Target, title: 'Goal-Oriented', desc: 'Business-aligned solutions' },
      { icon: Users, title: 'Collaborative', desc: 'Partnership approach' },
      { icon: BarChart, title: 'Results-Driven', desc: 'Measurable outcomes' },
    ]
  },
  'ai-automation': {
    icon: Bot,
    title: 'AI Automation',
    subtitle: 'AI Automation & Intelligent Workflow Services',
    description: 'AI-powered automation, chatbots and intelligent agents that eliminate repetitive work for teams across the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'We design and deploy production-grade AI automation — LLM-powered chatbots, RPA workflows, document processing agents and CRM/ERP integrations using OpenAI, Anthropic, LangChain, n8n and Zapier — so your team spends less time on manual work and more on growth.',
    expertise: [
      'Hands-on experience building AI agents, RPA workflows, and intelligent chatbots that integrate with your existing stack.',
      'Deep knowledge of LLM orchestration, prompt engineering, and tool-use patterns with OpenAI, Anthropic, and open-source models.',
      'Proven delivery of automations across sales, support, finance, and operations that reduce manual hours and error rates.'
    ],
    solutions: [
      { title: 'AI Chatbots & Assistants', desc: 'Conversational agents for support, sales, and internal knowledge bases.' },
      { title: 'Workflow Automation', desc: 'Connect SaaS tools and automate multi-step business processes end to end.' },
      { title: 'Document Processing', desc: 'Extract, classify, and route information from invoices, contracts, and forms.' },
      { title: 'Sales & Marketing Automation', desc: 'Lead scoring, outreach, and CRM enrichment powered by AI.' },
      { title: 'Customer Support AI', desc: 'Ticket triage, smart replies, and AI-assisted agents for faster resolution.' },
      { title: 'Custom AI Agents', desc: 'Goal-driven agents that plan, use tools, and complete tasks autonomously.' },
    ],
    technologies: ['OpenAI', 'LangChain', 'n8n', 'Zapier', 'Make', 'Python', 'Node.js', 'Pinecone'],
    process: [
      { step: '01', title: 'Audit', desc: 'Map current workflows and automation opportunities' },
      { step: '02', title: 'Design', desc: 'Blueprint the automation and AI architecture' },
      { step: '03', title: 'Integrate', desc: 'Connect APIs, data sources, and tools' },
      { step: '04', title: 'Build', desc: 'Develop agents, prompts, and workflow logic' },
      { step: '05', title: 'Test', desc: 'Validate accuracy, safety, and edge cases' },
      { step: '06', title: 'Scale', desc: 'Monitor, optimize, and expand coverage' },
    ],
    features: [
      { icon: Workflow, title: 'End-to-End', desc: 'Full process automation' },
      { icon: Zap, title: 'Faster Operations', desc: 'Hours back to your team' },
      { icon: Shield, title: 'Reliable', desc: 'Guardrails and oversight built-in' },
      { icon: Sparkles, title: 'Adaptive', desc: 'Learns and improves over time' },
    ]
  },
  'ai-ml': {
    icon: Brain,
    title: 'AI / ML Development',
    subtitle: 'Custom AI & Machine Learning Development Services',
    description: 'End-to-end AI and machine learning development — from predictive models and computer vision to generative AI and MLOps — for clients in the USA, UK, UAE, Canada and Australia.',
    heroDescription: 'Codes2cloud builds production-ready AI/ML systems including custom LLM apps, RAG pipelines, recommendation engines, demand forecasting and computer vision — engineered on PyTorch, TensorFlow, Hugging Face, AWS SageMaker and Vertex AI with full MLOps, monitoring and responsible-AI guardrails.',
    expertise: [
      'Strong foundation in supervised, unsupervised, and deep learning across tabular, text, image, and time-series data.',
      'Production MLOps experience: training pipelines, model serving, versioning, and continuous evaluation.',
      'Applied expertise in LLMs, RAG architectures, fine-tuning, and computer vision for real-world business problems.'
    ],
    solutions: [
      { title: 'Predictive Analytics', desc: 'Forecast demand, churn, and revenue with custom ML models.' },
      { title: 'Recommendation Engines', desc: 'Personalized product, content, and search recommendations.' },
      { title: 'Computer Vision', desc: 'Image classification, object detection, OCR, and quality inspection.' },
      { title: 'Natural Language Processing', desc: 'Sentiment, summarization, classification, and entity extraction.' },
      { title: 'Generative AI & LLMs', desc: 'Custom GPT apps, RAG systems, and fine-tuned domain models.' },
      { title: 'MLOps & Deployment', desc: 'Robust pipelines for training, serving, and monitoring models in production.' },
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Hugging Face', 'scikit-learn', 'AWS SageMaker', 'Vertex AI', 'MLflow'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Define problem, success metrics, and ROI' },
      { step: '02', title: 'Data Prep', desc: 'Collect, clean, and engineer features' },
      { step: '03', title: 'Modeling', desc: 'Train and evaluate candidate models' },
      { step: '04', title: 'Validation', desc: 'Test on real-world data and bias checks' },
      { step: '05', title: 'Deployment', desc: 'Ship to production with scalable serving' },
      { step: '06', title: 'Monitor', desc: 'Track drift, retrain, and improve' },
    ],
    features: [
      { icon: Brain, title: 'Custom Models', desc: 'Built for your data and goals' },
      { icon: Cpu, title: 'Production-Ready', desc: 'Scalable serving and MLOps' },
      { icon: BarChart, title: 'Measurable ROI', desc: 'Tied to business outcomes' },
      { icon: Shield, title: 'Responsible AI', desc: 'Fair, explainable, and secure' },
    ]
  },
};

// All services overview for the main services page
const allServices = [
  {
    slug: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    features: ['React & Next.js', 'Node.js Backend', 'E-commerce Solutions', 'CMS Development'],
  },
  {
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
  },
  {
    slug: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that grow with your business needs.',
    features: ['AWS & Azure', 'DevOps', 'Migration', 'Optimization'],
  },
  {
    slug: 'voip-services',
    icon: Phone,
    title: 'VOIP Services',
    description: 'Enterprise-grade voice over IP solutions for seamless business communication worldwide.',
    features: ['Business Phone Systems', 'Call Center Solutions', 'Unified Communications', 'SIP Trunking'],
  },
  {
    slug: 'consultancy',
    icon: Users,
    title: 'IT Consultancy',
    description: 'Expert guidance on technology strategy, digital transformation, and IT optimization.',
    features: ['Technology Strategy', 'Digital Transformation', 'Process Automation', 'IT Roadmap'],
  },
  {
    slug: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description: 'Automate repetitive workflows with AI agents, chatbots, and intelligent process automation.',
    features: ['AI Chatbots', 'Workflow Automation', 'Document Processing', 'Custom AI Agents'],
  },
  {
    slug: 'ai-ml',
    icon: Brain,
    title: 'AI / ML Development',
    description: 'Custom machine learning models, predictive analytics, and generative AI built for production.',
    features: ['Predictive Analytics', 'Computer Vision', 'NLP & LLMs', 'MLOps & Deployment'],
  },
];

// Service Detail Page Component
const ServiceDetailPage = ({ service }: { service: typeof servicesData['web-development'] }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Same style as About page */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6 animate-fade-in">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
                {service.title}
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="coral" size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="py-12 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                  Our Expertise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {service.subtitle}
                </h2>
                <div className="space-y-4">
                  {service.expertise.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-accent/5 to-teal/5 p-8 rounded-3xl border border-accent/20">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground text-center mb-4">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-background rounded-lg text-sm font-medium text-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                What We Build
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                We deliver comprehensive solutions tailored to your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <FileCode className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                How We Work
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg">
                A proven methodology that ensures successful project delivery every time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="font-display text-6xl font-bold text-accent/10 absolute top-4 right-4 group-hover:text-accent/20 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

// Main Services Page Component
const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Same style as About page */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6 animate-fade-in">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
                Comprehensive Digital
                <span className="text-accent"> Solutions</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                From concept to launch, we provide end-to-end digital services tailored to your business needs. Partner with us to transform your digital presence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="coral" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '100+', label: 'Expert Team' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                What We Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core Services
              </h2>
              <p className="text-muted-foreground text-lg">
                We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                  Why Choose Us
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  We Deliver Excellence in Every Project
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  With years of experience and a passion for innovation, we help businesses transform their digital presence and achieve remarkable results.
                </p>
                <div className="space-y-4">
                  {[
                    'Discovery-first approach to understand your unique needs',
                    '100% project delivery record with no unfinished work',
                    'Full-stack expertise across all modern technologies',
                    'Transparent communication and agile methodology',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-accent/5 to-teal/5 p-8 rounded-3xl border border-accent/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Zap, label: 'Fast Delivery', value: '2x Faster' },
                      { icon: Shield, label: 'Secure Code', value: '100% Safe' },
                      { icon: Users, label: 'Expert Team', value: '100+ Devs' },
                      { icon: Globe, label: 'Global Reach', value: '20+ Countries' },
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 bg-background/50 rounded-xl">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="font-display text-2xl font-bold text-foreground">{item.value}</div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

// Main Services Component with routing
const Services = () => {
  const { slug } = useParams();
  
  // If there's a slug, show the specific service page
  if (slug && servicesData[slug as keyof typeof servicesData]) {
    return <ServiceDetailPage service={servicesData[slug as keyof typeof servicesData]} />;
  }
  
  // Otherwise show the services overview page
  return <ServicesOverviewPage />;
};

export default Services;
