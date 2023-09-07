import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Unit Converter",
    image: projectOne,
    description: (
      <>
        <p>
          A simple unit converter that is created using HTML, CSS, and JavaScript.
        </p>
      </>
    ),
    github: "https://github.com/chriscervantes2415/WD76_EXERCISE13_CERVANTES",
    demo: "https://chriscervantes2415.github.io/WD76_EXERCISE13_CERVANTES/",
  },
  2: {
    title: "Sorsogon Tours",
    image: projectTwo,
    description: (
      <>
        <p>
          A travel booking website where users can explore different packages for travel in Sorsogon.
        </p>
      </>
    ),
    github: "https://github.com/chriscervantes2415/MP1_WD76_Cervantes",
    demo: "https://chriscervantes2415.github.io/MP1_WD76_Cervantes/",
  },
  3: {
    title: "Laptop Haven",
    image: projectThree,
    description: (
      <>
        <p>
          An E-commerce website for different kinds of laptops.
        </p>
      </>
    ),
    github: "https://github.com/chriscervantes2415/MP2_WD76_Cervantes_De-Guzman",
    demo: "https://chriscervantes2415.github.io/MP2_WD76_Cervantes_De-Guzman/",
  },
};

export default projects;
