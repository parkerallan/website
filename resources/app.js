const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

document.addEventListener("DOMContentLoaded", () => {
  populateProjects(); // Call populateProjects once DOM is loaded
});

function populateProjects(){
  const projects = [
    {
        imgSrc: "resources/images/echo.png",
        title: "Project Echo",
        description: "Social media platform using Django. Create posts and interact with others.",
        link: "https://github.com/parkerallan/SDEV-435-81"
    },
    {
        imgSrc: "resources/images/jetdefender.png",
        title: "Jet Defender",
        description: "SHMUP-style game where the player must shoot down incoming threats. Written in 6502 using the CA65 assembler.",
        link: "https://github.com/parkerallan/jet-defender"
    },
    {
        imgSrc: "resources/images/supermario.png",
        title: "Super Mario Clone",
        description: "WIP recreation of the first Super Mario Bros. game for the Nintendo Gameboy. Uses C and GBDK.",
        link: "https://github.com/parkerallan/SMB_gb"
    },
    {
        imgSrc: "resources/images/data.jpg",
        title: "Wildfire Predictions",
        description: "Predicting wildfire growth using autoencoder deep learning models. Shoutout Team Deep Green",
        link: "https://github.com/parkerallan/FutureMakers-2022-Team-Deep-Green"
    },
  ];

  const hiddenProjects = [
    {
      imgSrc: "resources/images/stocks.png",
      title: "Tech Stock Tracker",
      description:
        "Shows data charts/tables on top 5 tech stocks. Uses Streamlit, Y!Finance API, and Pandas.",
      link: "https://github.com/parkerallan/tech-stock-app/",
    },
    {
      imgSrc: "resources/images/blog.png",
      title: "Ruby on Rails Blog",
      description:
        "CRUD app. Uses stimulus reflex for websocket features and gems like Devise and Optimism.",
      link: "https://github.com/parkerallan/ror-blog-app/",
    },
  ];

  const createCard = (project) => `
    <div class="card">
      <img class="project-image" src="${project.imgSrc}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p class="subtext">${project.description}</p>
      <hr />
      <p class="subtext"><a class="view-text" href="${project.link}" target="_blank">View Here</a></p>
    </div>
  `;

  // Populate main project container
  const projectContainer = document.getElementById("projects-container");
  projectContainer.innerHTML = projects.map(createCard).join("");

  // Populate hidden content container
  const hiddenContent = document.getElementById("hidden-content");
  hiddenContent.innerHTML = hiddenProjects.map(createCard).join("");
}

function viewMore() {
  const btn = document.getElementById("viewBtn")
  const moreProjects = document.getElementById("content");
  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "inline";
    btn.innerHTML = "View Less   <i class='fas fa-arrow-circle-up'></i>";
  } else {
    moreProjects.style.display = "none";
    btn.innerHTML = "View Older Projects   <i class='fas fa-arrow-circle-down'></i>";
  }
}