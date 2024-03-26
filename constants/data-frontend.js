const techStackIconBaseURL = "https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/"
const userData = {
  githubUsername: "souyang",
  linkedin: "https://www.linkedin.com/in/xi-ouyang/",
  name: "Simon Ouyang",
  designation: "Senior Engineer",
  avatarUrl: "/avatar.jpeg",
  email: "simonouyang@gmail.com",
  phone: "+1 4244759376",
  address: "Los Angeles, California, USA",

  favouriteCertifications: [
    {
      title: "Certified Jenkins Engineer",
      link: "https://certificates.cloudbees.com/fc894af2-c74f-485f-8466-39561d474596",
      imageUrl: "/certificates/jenkins.png"
    },
    {
      title: "Enterprise Blockchain Professional",
      link: "https://www.credential.net/1847ea65-047f-453b-926a-d27fdfef2608",
      imageUrl: "/certificates/enterprise-blockchain-professional.png"
    },
    {
      title: "Certified Scrum Master",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1436305-csm",
      imageUrl: "/certificates/scrum-master.png"
    },
  ],
  techstacks: [
    {
      id:"javascript",
      name: "JavaScript",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/JavaScript.svg`,
    },
    {
      id: "typescript",
      name: "TypeScript",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/TypeScript.svg`,
    },
    {
      id: "nodejs",
      name: "NodeJS",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/NodeJS-Dark.svg`,
    },
    {
      id: "html",
      name: "HTML",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/HTML.svg`,
    },
    {
      id: "css",
      name: "CSS",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/CSS.svg`,
    },
    {
      id: "sass",
      name: "Sass",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Sass.svg`,
    },
    {
      id: "react",
      name: "React",
      imageUrl: `${techStackIconBaseURL}/React-Dark.svg`,
    },
    {
      id: "nextjs",
      name: "NextJS",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/NextJS-Dark.svg`,
    },
    {
      id: "gatsby",
      name: "GatsbyJS",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Gatsby.svg`,
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Redux.svg`,
    },
    {
      id: "materialui",
      name: "Material UI",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/MaterialUI-Dark.svg`,
    },
    {
      id: "tailwindcss",
      name: "TailwindCSS",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/TailwindCSS-Dark.svg`,
    },
    {
     id: "shadcnui",
     name: "ShadcnUI",
     tag: "Frontend",
     imageUrl: `${techStackIconBaseURL}/shadcnui.svg`, 
    },
    {
      id: "vercel",
      name: "Vercel",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Vercel-Dark.svg`,
    },
    {
      id: "vite",
      name: "Vite",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Vite-Dark.svg`,     
    },
    {
      id: "webpack",
      name: "Webpack",
      tag: "Frontend",
      imageUrl: `${techStackIconBaseURL}/Webpack-Dark.svg`,     
    },
    {
      id: "express",
      name: "ExpressJS",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/ExpressJS-Dark.svg`,
    },
    {
      id: "graphql",
      name: "GraphQL",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/GraphQL-Dark.svg`,
    },
    {
      id: "prisma",
      name: "Prisma",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/Prisma.svg`,
    },
    {
      id: "sequelize",
      name: "Sequelize",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/Sequelize-Dark.svg`,
    },
    {
      id: "mysql",
      name: "MySQL",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/MySQL-Dark.svg`,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/PostgreSQL-Dark.svg`,
    },
    
    {
      id: "mongodb",
      name: "MongoDB",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/MongoDB.svg`,
    },

    {
      id: "redis",
      name: "Redis",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/Redis-Dark.svg`,     
    },
    {
      id: "rabbitmq",
      name: "RabbitMQ",
      imageUrl: `${techStackIconBaseURL}/RabbitMQ-Dark.svg`,     
    },
    {
      id: "kafka",
      name: "Kafka",
      tag: "Backend",
      imageUrl: `${techStackIconBaseURL}/Kafka.svg`,
    }, {
      id: "aws",
      name: "AWS",
      tag: "Fullstack",
      imageUrl: `${techStackIconBaseURL}/AWS-Dark.svg`,
    }, {
      id: "azure",
      name: "Azure",
      tag: "Fullstack",
      imageUrl: `${techStackIconBaseURL}/Azure-Dark.svg`,
    },
    {
      id: "docker",
      name: "Docker",
      tag: "Fullstack",
      imageUrl: `${techStackIconBaseURL}/Docker.svg`,
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      tag: "Fullstack",
      imageUrl: `${techStackIconBaseURL}/Kubernetes.svg`,
    },
    {
      id: "jenkins",
      name: "Jenkins",
      tag: "Fullstack",
      imageUrl: `${techStackIconBaseURL}/Jenkins-Dark.svg`,
    }
  ],
  favouriteProjects: [
    {
      title: "Notes AI",
      link: "https://notesai.vercel.app/notes",
      imageUrl: "/projects/notesai.png",
    },
    {
      title: "Suzi AI",
      link: "https://suzi-ai.vercel.app/",
      imageUrl: "/projects/AI-Summarizer.png",
    },
    {
      title: "Prompt Network",
      link: "https://promptnetwork.vercel.app/",
      imageUrl: "/projects/Prompt-Network.png",
    },
  ],
  projects: [
    {
      title: "Notes AI",
      link: "https://notesai.vercel.app",
      imageUrl: "/projects/notesai.png",
    },
    {
      title: "Suzi AI",
      link: "https://suzi-ai.vercel.app/",
      imageUrl: "/projects/AI-Summarizer.png",
    },
    {
      title: "Prompt Network",
      link: "https://promptnetwork.vercel.app",
      imageUrl: "/projects/Prompt-Network.png",
    },
    {
      title: "BuddyCircle- realtime chat app",
      link: "https://buddy-circle.vercel.app",
      imageUrl: "/projects/buddy-circle.png",
    },
    {
      title: "Financial Dashboard",
      link: "https://datav-dashboard.netlify.app",
      imageUrl: "/projects/financial-dashboard.png",
    },
    {
      title: "ReturnBear",
      link: "https://numi-canada.portals.returnbear.com/",
      imageUrl: "/projects/returnbear.png",
    },
    {
      title: "Pet Name AI Generator",
      link: "https://pet-name-generator-ckd0.onrender.com/",
      imageUrl: "/projects/pet-name-generator.png",
    },
    {
      title: "MySupply Platform",
      link: "https://www.patheon.com/us/en/insights-resources/fact-sheets/mysupply-platform-an-end-to-end-digital-supply-chain-platform.html",
      imageUrl: "/projects/mysupply-platform.png",
    },
    {
      title: "Spin - mobile money transfer",
      link: "https://spinbyoxxo.com.mx/",
      imageUrl: "/projects/Spin.png",
    },
  ],
  certificates: [
    {
      title: "Enterprise Blockchain Professional",
      link: "https://www.credential.net/1847ea65-047f-453b-926a-d27fdfef2608",
      imageUrl: "/certificates/enterprise-blockchain-professional.png"
    },
    {
      title: "Certified Scrum Product Owner",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1438962-cspo",
      imageUrl: "/certificates/scrum-product-owner.png"
    },
    {
      title: "Certified Scrum Master",
      link: "https://certification.scrumalliance.org/accounts/1241022-xi-ouyang/certifications/1436305-csm",
      imageUrl: "/certificates/scrum-master.png"
    },
    {
      title: "Team Kanban Practitioner",
      link: "https://edu.kanban.university/user/78370/9/qualification-certificate/WGkgT3V5YW5nOlNpbW9uQDY2MDg6MTYzMjAxNjY3OA==",
      imageUrl: "/certificates/kanban.png"
    },
    {
      title: "Certified Jenkins Engineer",
      link: "https://certificates.cloudbees.com/fc894af2-c74f-485f-8466-39561d474596",
      imageUrl: "/certificates/jenkins.png"
    },
    {
      title: "Certified Python Developer for Big Data",
      link: "https://www.edureka.co/my-certificate/791122bd54499049775047642e107fd4?utm_source=linkedin&utm_medium=cert&utm_campaign=linkedincert",
      imageUrl: "/certificates/python.png"
    },
    {
      title: "Oracle Certified Java EE 5 Web Service Developer",
      link: "https://drive.google.com/file/d/1E0fYbame7e1VkW1_9ugU5lxIuCMGkTpU/view?usp=sharing",
      imageUrl: "/certificates/javaEE.png"
    },
    {
      title: "Cloudera Certified Developer for Apache Hadoop",
      link: "https://drive.google.com/file/d/1udc12KuhXXWlWgqHlHoifGbOLgzMJ8Z4/view?usp=sharing",
      imageUrl: "/certificates/hadoop.png"
    },
    {
      title: "Sun Certified Programmer for Java 5",
      link: "https://drive.google.com/file/d/0B4Z2LFqnx6n0VjFKemRycXRIVFMwTGhyODZLQnV5d182N2VB/view?usp=sharing&resourcekey=0-sLVxFRSycOtNuD4Qbz2-Ew",
      imageUrl: "/certificates/java.png"
    },
  ],
  about: {
    title:
      "Seasoned in catalyzing start-ups and venture initiatives, I excel in designing, developing, and deploying web/mobile apps across diverse sectors such as E-commerce, Healthcare, Biotech, and Energy.",
    description: [
      `I am proficient in building responsive websites and mobile applications using React.js, React Native, Next.js, Node.js, and I am well versed in JavaScript, TypeScript, and CSS. I am also familiar with popular frameworks such as Bootstrap, Tailwind, and Material UI. I am a quick learner and can pick up new technologies quickly. I love to learn new technologies.`,
      `In addition to my technical skills, I'm recognized for promoting teamwork and collaboration within teams. I prioritize transparent communication with both leadership and clients to ensure project success.`
    ],
    currentCompany: "Boston Consulting Group",
    currentCompanyUrl: "https://bcg.com",
  },
  experience: [
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Led the architectural design and implementation of balance management and money transfer features for a mobile payment app, resulting in averaging 6 million daily active users and 42 million monthly transactions.",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Directed and implemented the branded consumer return portal for startup Return Bear, slashing up to 70% shipping cost reduction and shortening refund process from two weeks to 30 minutes for millions of consumers in five retailers",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Oversaw and incorporated observability tools including Amplitude and Google Analytics for Ascension informing data-driven decisions to improve the user experience, resulting in 30% increase on customer engagement.",
    },
    {
      title: "Founding Engineer",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Optimized supply chain platform for Thermofisher by replacing manual forecast submission and review with automated processes, leveraging D3.js for data visualization, achieved a 25% increase in forecast submission productivity.",
    },
    {
      title: "BCG X Hackathon Winner",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://bcg.com",
      desc: "Attained a top 3 placement in the BCG X Generative AI Hackathon, showcasing the `SMS AI Assistant` project to 100+ engineers in BCG X Generative AI Team.",
    },
    {
      title: "Scrum Master (Part Time)",
      company: "Boston Consulting Group",
      year: "2019.4 - Present",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Volunteered as Scrum Master for an 8-week project and boosted team productivity by 25% by implementing Agile best practices and removed impediments to the team’s progress",
    },
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Led and revamped the transformation of core monolithic system features into 8 microservices, elevating scalability and resilience in tax processing application. Accomplished a 60% reduction in deployment time, 40% reduction in feature releases.",
    },
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Improved website load times by implementing performance optimization techniques, resulting in a 30% reduction in page load speed and enhanced user satisfaction and 40% decrease in above-the-fold render time for key web pages.",
    },  
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Proposed and established error, user event and performance metric tracking in AWS and reduced QA bug by 30% and shortened production bug triage time by 60% in one month.",
    }, 
    {
        title: "Tech Lead and Senior Engineer",
        company: "Revenue Solutions Inc.",
        year: "2012.12 - 2019.4",
        companyLink: "https://www.rsidelivers.com/",
        desc: "Proposed and established error, user event and performance metric tracking in AWS and reduced QA bug by 30% and shortened production bug triage time by 60% in one month.",
    }, 
    {
      title: "Tech Lead and Senior Engineer",
      company: "Revenue Solutions Inc.",
      year: "2012.12 - 2019.4",
      companyLink: "https://www.rsidelivers.com/",
      desc: "Owned feature migrations from on-premises infrastructure to AWS and reduce cost on infrastructure maintenance by 30%.",
  },    
  {
    title: "Tech Lead and Senior Engineer",
    company: "Revenue Solutions Inc.",
    year: "2012.12 - 2019.4",
    companyLink: "https://www.rsidelivers.com/",
    desc: "Collaborated with DevOps team and integrated SonarQube and Selenium into the existing Jenkins-based CI/CD pipeline, resulting in 80% reduction in production bugs in consecutive 3 sprints.",
},     
    {
      title: "Master of Computer Science",
      company: "Rochester Institute of Technology",
      year: "2009 - 2012",
      companyLink: "https://www.rit.edu",
      desc: "Major in Computer Science with GPA of 3.87.",
    },
    {
      title: "Software Engineer",
      company: "HSBC Global Technology",
      year: "2007.6 - 2009.7",
      companyLink: "https://www.hsbc.com.cn/en-cn/",
      desc: "Executed design and development of web services for wealth management team specialized mutual fund processing, stock order processing, serving millions of investors in HongKong and Mainland China.",
    }, 
  ],
  socialLinks: {
    instagram: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/xi-ouyang/",
    github: "https://github.com/souyang",
  },
};

export default userData;
