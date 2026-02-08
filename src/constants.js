// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import RLogo from './assets/tech_logo/R.png';
import SQLLogo from './assets/tech_logo/SQL.png';
import ExcelLogo from './assets/tech_logo/excel.png';
import powerbiLogo from './assets/tech_logo/powerbi.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import edaLogo from './assets/tech_logo/eda1.png';
import machineLogo from './assets/tech_logo/machine.png';
import aiLogo from './assets/tech_logo/ai.png';
import databricksLogo from './assets/tech_logo/databricks.png';


// Experience Section Logo's
import ibmLogo from './assets/company_logo/ibm2.png';
import ApanaLogo from './assets/company_logo/apanatime.png';
import infosysLogo from './assets/company_logo/infosys.png';

// Education Section Logo's
import CareLogo from './assets/education_logo/care.png';
import JohnLogo from './assets/education_logo/School.png';

// Project Section Logo's
import retailLogo from './assets/work_logo/retail-project.png';
import adharLogo from './assets/work_logo/adhar-project.png';
import employeeLogo from './assets/work_logo/salary.png';
import SCMLogo from './assets/work_logo/SCM.png';
import BankLogo from './assets/work_logo/bank.png';


export const SkillsInfo = [
    {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'SQL', logo: SQLLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'R', logo: RLogo },
    ],
  },
  {
  title: 'Data Analysis',
  skills: [
    { name: 'Powerbi', logo: powerbiLogo },
    { name: 'Excel', logo: ExcelLogo },
    { name: 'Exploratory Data Analysis (EDA)', logo: edaLogo },
    { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Web Technologies & Applied AI (Beginner)',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Machine Learning', logo: machineLogo },
      { name: 'GenAi & DL', logo: aiLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Jupyternotebook', logo: jupyterLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Databricks', logo: databricksLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: infosysLogo,
      role: "AI Intern",
      company: "Infosys Springboard",
      date: "Feb 2026 - Present",
      desc: "Working on the development of an AI-driven code review system that automatically analyzes student code submissions. The project focuses on detecting common coding issues, enforcing basic coding standards, and generating feedback to support learning in academic and coding training programs.",
      skills: [
       "Python",
       "Code Analysis",
       "AI Concepts",
       "Problem Solving",
      ],
    },
    {
      id: 1,
      img: ApanaLogo,
      role: "Data Analyst Intern",
      company: "Apana Time",
      date: "Oct 2025 - Jan 2026",
      desc: "As a Data Analytics Intern, I supported business intelligence initiatives by performing data cleaning, transformation, analysis, and visualization using Python, SQL, Power BI, and Excel. I actively contributed to creating insightful dashboards, improving data quality, and communicating findings to stakeholders in a collaborative work environment.",
      skills: [
        "Python",
        "Excel",
        "Powerbi",
        "SQL",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      id: 2,
      img: ibmLogo,
      role: "AIML Intern",
      company: "IBMskillsbuild",
      date: "June 2025 - July 2025",
      desc: "Worked on applying data preprocessing, exploratory data analysis, and machine learning techniques using Python to extract meaningful insights from business datasets. Built and evaluated predictive models to support data-driven decision-making, improve business understanding, and translate complex data into clear, actionable outcomes.",
      skills: [
        "Python",
        "Streamlit",
        "Machine Learning",
        "Exploratory Data Analysis (EDA)",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: CareLogo,
      school: "CARE College Of Engineering",
      date: "Oct 2022 - April 2026",
      grade: "8.73 CGPA",
      desc: "I am currently pursuing my Bachelor’s degree in Computer Science and Engineering from CARE College of Engineering. Throughout my academic journey, I have built a strong foundation in core computer science subjects including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering. Along with technical knowledge, I have actively developed strong communication, teamwork, problem-solving, and leadership skills through academic projects, presentations, and collaborative activities. I have also participated in technical workshops and events, which have contributed significantly to my technical growth and professional development.",
      degree: "Bachelor's Of Engineering - CSE",
    },
    {
      id: 1,
      img: JohnLogo,
      school: "St John's Vestry Anglo Indian Hr.Sec.School",
      date: "May 2019 - May 2022",
      grade: "76.8%",
      desc: "I completed my class 12 education from St.John's Vestry School, Trichy, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "Class XII",
    },
    {
      id: 1,
      img: JohnLogo,
      school: "St John's Vestry Anglo Indian Hr.Sec.School",
      date: "June 2019 - May 2020",
      grade: "78.5%",
      desc:"I completed my class 10 education from St.John's Vestry School, Trichy.",
      degree: "Class X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Retail Sales Performance Analysis Dashboard",
      description:"Analyzed promotional campaigns conducted by AtliQ Mart across 50+ supermarkets in South India during Diwali 2023 and Sankranti 2024. The objective was to evaluate the effectiveness of different promotions on AtliQ-branded FMCG products and provide actionable insights to the Sales Director. The analysis focused on identifying high-performing and underperforming promotions, understanding sales uplift, and supporting data-driven decision-making for future promotional strategies.",
      image: retailLogo,
      tags: ["Python", "Excel", "Powerbi", "SQL"],
      github: "https://github.com/sri-varshini12/Retail_industry_project.git",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Aadhaar-dataset-Analysis",
      description:"Performed an in-depth analysis of Aadhaar enrollment and update datasets as part of the UIDAI Hackathon. The project focused on identifying trends, regional patterns, and demographic insights related to Aadhaar registrations and updates across India. The analysis helped derive meaningful insights from large-scale public data to support better understanding of Aadhaar adoption and operational performance.",
      image: adharLogo,
      tags: ["Excel", "POWERBI", "PowerQuery"],
      github: "https://github.com/sri-varshini12/UIDAI_Aadhaar_Analysis.git",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 2,
      title: "Employee Salary Prediction Using ML",
      description:"A data-driven and intelligent machine learning application designed to predict employee salaries based on key professional and organizational factors. The system leverages Python and TensorFlow to build a robust regression model, trained on over 65,000 real-world records. Advanced data preprocessing, feature selection, and statistical analysis were applied to ensure high prediction accuracy. The solution provides meaningful business insights to support HR teams in strategic decision-making, making it a valuable tool for workforce planning and compensation analysis.",
      image: employeeLogo,
      tags: ["Python", "Machine Learning", "Data cleaning", "Streamlit","TensorFlow"],
      github: "https://github.com/sri-varshini12/SD_Salary_pred.git",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 3,
      title: "Banking risk Analysis",
      description:"A comprehensive data analytics project focused on identifying and understanding financial risk patterns within customer data. The system analyzes over 3,000 customer records with 25 financial attributes using advanced exploratory data analysis, correlation techniques, and statistical evaluation. The project delivers actionable insights for customer risk segmentation and supports informed financial decision-making, helping institutions improve risk management strategies and business outcomes.",
      image: SCMLogo,
      tags: ["DataAnalysis", "Python", "EDA", "Powerbi"],
      github: "https://github.com/sri-varshini12/Banking_analysis.git",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 4,
      title: "Supply Chain Management Analysis",
      description: "A comprehensive data analytics project designed to optimize supply chain operations through data-driven insights. The project integrates Python, SQL, and Power BI to perform large-scale data cleaning, transformation, analysis, and visualization. Interactive dashboards and analytical reports were developed following data visualization best practices and key supply chain performance metrics, enabling stakeholders to monitor performance, identify bottlenecks, and support strategic business decisions.",
      image: BankLogo,
      tags: ["Data Cleaning", "Python", "SQL", "Powerbi", "Python Lib"],
      github: "https://github.com/sri-varshini12/SCM.git",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
  ];  