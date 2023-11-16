import React from "react";
import passwordGeneratorImage from "src/assets/images/password generator-logos.jpeg";
import weatherDashboardImage from "src/assets/images/weather dashboard-logos.jpeg";
import dirtyShoesImage from "src/assets/images/dirty shoes-logos.jpeg";
import noteTakerImage from "src/assets/images/note taker-logos.jpeg";
import theTechBlogImage from "src/assets/images/the tech blog-logos.jpeg";
import myFirstPortfolioImage from "src/assets/images/my first portfolio-logos.jpeg";

function Portfolio() {
  const projects = [
    {
      link: "https://zlyda1993.github.io/studious-octo-parakeet/",
      id: 1,
      title: "Password Generator",
      image: passwordGeneratorImage,
      description: "Finish writing an application to generate a new password using prompts.",
    },
    {
      link: "https://zlyda1993.github.io/jubilant-octo-tribble/",
      id: 2,
      title: "Weather Dashboard",
      image: weatherDashboardImage,
      description: "Set up a dashboard that uses a third party API to bring in the weather for the current day and five days in the future."
    },
    {
      link: "https://philipthomas05.github.io/UNCC-Bootcamp-Project-1/",
      id: 3,
      title: "Dirty Shoes",
      image: dirtyShoesImage,
      description: "An application that helps you find trails based on your region within North Carolina.",
    },
    {
      link: "https://agile-stream-34363-76875d60fa6c.herokuapp.com/",
      id: 4,
      title: "Note Taker",
      image: noteTakerImage,
      description: "An app to take notes and also delete them.",
    },
    {
      link: "https://cryptic-retreat-19540-00658701978c.herokuapp.com/",
      id: 5,
      title: "The Tech Blog",
      image: theTechBlogImage,
      description: "A blog page that allows you to create an account, make posts and leave comments on each post.",
    },
    {
      link: "https://zlyda1993.github.io/refactored-tribble/",
      id: 6,
      title: "My first Portfolio",
      image: myFirstPortfolioImage,
      description: "First attempt at making a portfolio, but it still show cases some of my earlier work with coding."
    }
  ];
    return (
      <div>
        <h1>Recent Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map((project) => (
            <div key={project.id} style={{ margin: '10px', width: '300px' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Portfolio;