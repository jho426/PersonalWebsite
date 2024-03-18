const ExperienceData = [
  {
    title: "Siemens",
    position: "Software Engineer Intern",
    date: "Jan 2024 – Present",
    description:
      "Siemens is a company dedicated to designing, developing, and manufacturing a wide range of complex systems and technological solutions",
    descriptionText: [
      "Developed a new sensor visibility module to improve battery manufacturing efficiency for clients, using Golang",
      "Designed Cassandra DB schema and models to optimize performance and reduce storage requirements",
      "Built a Kafka consumer to ingest and perform ETL operations on real-time sensor data, using Python",
      "Implemented controllers and services for REST API infrastructure to deliver sensor data to the frontend, using Gin",
    ],
    showDropDown: false,
    tools: ["Go", "Python", "Docker", "Kafka", "Cassandra"],
    link: "https://www.siemens.com/global/en.html",
  },
  {
    title: "UW Blueprint",
    position: "Project Developer",
    date: "Jan 2024 – Present ",
    description:
      "UW Blueprint is a club at the University of Waterloo dedicated to building technology for social good, partnering with non-profits to provide technology services such as websites and mobile applications",
    descriptionText: [
      "Built a web app for Feeding Canadian Kids to manage food donations and deliveries, using TypeScript, React, and Chakra UI",
      "Integrated GraphQL API in backend architecture to allow users to create and edit donation requests, using Flask",
      "Implemented functionalities to support 3 distinct user roles, dynamically adjusting feature visibility based on the role",
    ],
    showDropDown: false,
    tools: ["Typescript", "React", "Chakra UI", "GraphQL", "Flask", "MongoDB"],
    link: "https://uwblueprint.org/students",
  },
  {
    title: "Artemis",
    position: "Software Engineer Intern",
    date: "May 2023 – Aug 2023",
    description:
      "Artemis is a company dedicated to building an AI-powered data integration and analysis platform.",
    descriptionText: [
      "Spearheaded production frontend and backend features for the platform",
      "Developed a chain-of-thought chatbot model and prompt generator, using OpenAI API",
      "Built REST APIs to streamline communication between MongoDB database, Python backend, and React frontend",
      "Integrated Redis caching to reduce site API calls and decrease site load times",
      "Deployed platform features with Azure, using CircleCI, Docker, and Kubernetes in a CI/CD pipeline",
    ],
    showDropDown: false,
    tools: [
      "React Native",
      "Python",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
      "Redis",
    ],
    link: "https://www.artemisdata.io/",
  },
  {
    title: "Kiwii",
    position: "Full Stack Developer",
    date: "May 2022 – Aug 2022",
    description:
      "Kiwii is a small startup dedicated to helping restaurants around the GTA digitalize.",
    descriptionText: [
      "Designed and developed interactive digital menus for 5 restaurants, serving 6000+ users",
      "Implemented device responsive interfaces adhering to brand guidelines, using React, Tailwind,and MUI",
      "Built backend infrastructure to enable real-time site edits and promotional updates for clients, using Firebase",
    ],
    showDropDown: false,
    tools: ["React", "JavaScript", "HTML/CSS", "Firebase", "Figma"],
    link: "https://kiwiimenu.ca/",
  },
  {
    title: "Markville App Development",
    position: "Full Stack Developer",
    date: "Sep 2020 – Aug 2022",
    description:
      "Markville App Development is a club I created at my High School where students collaborate together to develop and launch mobile applications on the IOS App store and Google Play Store!",
    descriptionText: [
      "Spearheaded the development life cycle and launch of 3 mobile applications, receiving 2000+ downloads",
      "Designed and built 25 pages with widget-based architecture to meet client needs, using Figma and Flutter",
      "Organized beta testing and oversaw app store releases with TestFlight, reaching 27,000 impressions",
    ],
    showDropDown: false,
    tools: ["Java", "Dart", "Flutter", "XCode", "Android Studio"],
    link: "https://markville.dev/",
  },
];

export default ExperienceData;
