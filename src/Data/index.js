export default {
  about: [
    {
      id: 1,
      abouttext:
        "I am an Entry Level Full Stack Software Engineer. I love creating something new with nothing but my imagination and my ability to code. Tech has been my passion ever since I was a young boy",
    },
    {
      id: 2,
      abouttext:
        "I am the type of person who would try to be good at everything. Therefore I have many hobbies. Some of my hobbies are: Teaching others how to code, Trading stocks, Working out, and Coding, of course",
    },
    {
      id: 3,
      abouttext:
        "I am proficient with languages like Java, JavaScript, Python, Dart, HTML/CSS, and SQL",
    },
    {
      id: 4,
      abouttext:
        "I am proficient with frameworks like React, React Native, and Flutter",
    },
  ],

  aboutImage: "../assets/profile_pic.png",
  ShowAboutImage: true,

  projects: [
    {
      id: 1,
      title: "fit-pal",
      service: "Website",
      technologies: "React, Material UI, Firebase, Youtube API",
      description:
        "My three teammates and I managed to put together a serverless web application that allows users to sign in and track their workouts. The frontend of the application is created using React Framework and designed using Material UI components. The backend solely depends on Firebase Real Time Database. The authentication made possible using Firebase Auth. Also, made use of the Youtube API to have a separate page for users to see how the workouts are done correctly. The search bar that looks for videos has a sctrict mode that will not allow users to search for anything else other than the workout videos",
      imageSrc:
        "https://github.com/Temurbekk/portfolio/blob/master/src/Assets/Projects/fit-pal.png?raw=true",
      url: "https://my-workout-tracker-8763c.web.app/",
    },
    {
      id: 2,
      title: "tracked",
      service: "Mobile App",
      technologies: "Flutter, Firebase",
      description:
        "My two college classmates I and managed to create our very first Cross Platform Mobile Application using the Flutter SDK. The application's main goal is to track DOE assets. The technologies that local schools lend to their students and staff. This app is used to track those technologies. The app uses Firestore as a server to store all the data. It also uses Firebase auth to authenticate users and depending on what school the user works at, application will show only the data from that school. You do not have access to the technologies that are owned by a different school",
      imageSrc:
        "https://github.com/Temurbekk/portfolio/blob/master/src/Assets/Projects/tracked.png?raw=true",
      url: "https://ajilk.com/tracked/",
    },
    {
      id: 3,
      title: "portfolio",
      service: "Website",
      technologies: "React, Bulma",
      description:
        "This is my personal portfolio site. It is created to highlight some of the projects I am most proud of. Also it includes some of my most recent experiences that revolve around Software Engineering. The site also gives some introduction on who I am and what I do. I did not want to add too much information on this website. It is for an introduction only. If you wish to contact me to learn more, There is a contact page that will directly email me. It will guarantee that I receive your message and respond as soon as possible",
      imageSrc:
        "https://github.com/Temurbekk/portfolio/blob/master/src/Assets/Projects/Portfolio.png?raw=true",
      url: "https://temur.dev/",
    },
    {
      id: 4,
      title: "Covid 404",
      service: "Website",
      technologies: "React, Grommet, APIs",
      description:
        "This serverless web application was created for the Brooklyn College Hackathon. The application uses various Covid-19 APIs to fetch which countries are most affected by the virus, What news are going around regarding Covid-19, and list of restaurants that do food delivery near the user. This is created with an idea that the website will have everything people need to stay at home. The website uses React for the frontend and uses Grommet styled components to style the whole website",
      imageSrc:
        "https://raw.githubusercontent.com/Temurbekk/portfolio/master/src/Assets/Projects/Covid-404.png",
      url: "https://github.com/Temurbekk/Covid-404",
    },
    {
      id: 5,
      title: "Student Dashboard",
      service: "Web App",
      technologies: "React, Spring Boot, Bulma",
      description:
        "Created a fullstack web application that performs the CRUD operation. The website is designed for the registrar to add a student, update student's information, look up student's information, and delete a student. The frontend is written in React. It is styled using the Bulma library. The backend is written in Spring framework using Object Relational Mapping",
      imageSrc:
        "https://github.com/Temurbekk/portfolio/blob/master/src/Assets/Projects/Student-Dashboard.png?raw=true",
      url: "https://github.com/Temurbekk/Student-Dashboard",
    },
    {
      id: 6,
      title: "Registrar Database",
      service: "Java to MySQL interpreter",
      technologies: "Java, MySQL",
      description:
        "This interpreter was created for my Database class at my College. It uses Java to get the input from the user and translates that into MySQL query. The input is taken using a Scanner class in Java. A registrar is allowed to perform a CRUD operation on a student. Registrar can add a student, look up student's information, update student's information, and delete a student",
      imageSrc:
        "https://github.com/Temurbekk/portfolio/blob/master/src/Assets/Projects/registrar-db.jpeg?raw=true",
      url: "https://github.com/Temurbekk/Registrar-Database",
    },
  ],

  experiences: [
    {
      id: 1,
      title: "StableBio",
      job: "Software Engineer Intern",
      technologies: "React Native, Material UI",
      description:
        "Worked alongside with the CEO and the CTO of the company to create a cross-platform mobile application using React Native. Created the user interface according to the CEO's design. Implemented navigation and responsiveness or the application. User APIs to fetch medical stats",
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5ae9b1b45417fcbd24516e44/1548834623748-WX3Q8ZT3W4CVYRGM1G4N/ke17ZwdGBToddI8pDm48kAO3tlx4zAn9kqiOyDBfKg0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcJjo5ZxlmN4Z7QydhlY1d2whRJ3xkybXHe2YAZiHo5XjVnbcm0RsvzpMjNAekx_K6/IMG_3691.jpeg",
      url: "https://www.stablebio.com/",
    },
    {
      id: 2,
      title: "Keko Box",
      job: "Software Engineer Intern",
      technologies: "React, TypeScript, Go, Buffalo, PostgreSQL, Auth0",
      description:
        "Implemented many frontend and backend components. For the frontend: implemented a logout functionality, Created a component to show recently unfulfilled orders as well as recently fulfilled orders by the client. For the backend: implemented endpoints to accept fulfilled and unfulfilled orders",
      imageSrc:
        "https://static1.squarespace.com/static/5bb124000b77bded2a903f2b/t/5d025b32b3126d0001c196c2/1594922257848/",
      url: "https://www.kekobox.com/",
    },
    {
      id: 3,
      title: "Errunds",
      job: "Software Engineer Intern",
      technologies: "React, Material UI, Apollo GraphQL",
      description:
        "Worked alongside with another intern to create the admin site for the company to manage their businesses and customers. Used React functional components to create the web app. Used Material UI to design and make it responsive. Fetched data from the backend using Apollo GraphQL",
      imageSrc:
        "data:image/jpeg;base64,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",
      url: "https://errundsonline.com/",
    },
    {
      id: 4,
      title: "ACME PRO ACADEMY",
      job: "Course Instructor",
      technologies: "Java, MySQL, Unix, Selenium",
      description:
        "Teaching 5 students in a small course to become QA engineers. Taught them the fundamentals and as well as Object Oriented aspects of Java. Taught them fundamentals and advanced techniques in MySQL. Taught them a whole month of Selenium for automation testing",
      imageSrc:
        "https://i.pinimg.com/originals/ee/ae/12/eeae128c67a6f0a902a27bc8e9af7bea.png",
    },
  ],
  social: [
    {
      name: "Github",
      url: "https://github.com/Temurbekk",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/temursabirov/",
    },
  ],
};
