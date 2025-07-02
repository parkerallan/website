const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

document.addEventListener("DOMContentLoaded", () => {
  populateProjects(); // Call populateProjects once DOM is loaded
  populateBlog(); // Call populateBlog once DOM is loaded
  initFloatingArrow(); // Initialize floating arrow navigation
});

// Floating Arrow Navigation
function initFloatingArrow() {
  const floatingArrow = document.getElementById('floating-arrow');
  const arrowIcon = floatingArrow.querySelector('i');
  const sections = ['about-me', 'projects', 'blog', 'contact'];
  let currentSectionIndex = 0;

  function updateArrowDirection() {
    if (currentSectionIndex >= sections.length) {
      arrowIcon.className = 'fas fa-chevron-up';
    } else {
      arrowIcon.className = 'fas fa-chevron-down';
    }
  }

  floatingArrow.addEventListener('click', () => {
    if (currentSectionIndex < sections.length) {
      // Moving down through sections
      const targetSection = document.getElementById(sections[currentSectionIndex]);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex++;
      updateArrowDirection();
    } else {
      // At the end, go back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentSectionIndex = 0;
      updateArrowDirection();
    }
  });

  // Show/hide arrow based on scroll position
  window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop >= heroBottom - 100) {
      // Reset when scrolling back up manually
      if (scrollTop < 100 && currentSectionIndex >= sections.length) {
        currentSectionIndex = 0;
        updateArrowDirection();
      }
    }
  });

  // Initialize arrow direction
  updateArrowDirection();
}

function populateProjects(){
  const projects = [
    {
        imgSrc: "resources/images/albums.png",
        title: "My Music",
        description: "House and Trance music I've created for my upcoming Unity 3D action game. (Vol. 2 soon!)",
        link: "https://youtube.com/playlist?list=PLbIqer7yaFcPsQwOmXr_i0f4ITx2gcwjx&feature=shared"
    },
    {
        imgSrc: "resources/images/echo.png",
        title: "'Echo'",
        description: "Social media platform using Django. Create posts and interact with others.",
        link: "https://github.com/parkerallan/echo"
    },
    {
        imgSrc: "resources/images/jetdefender.png",
        title: "Jet Defender",
        description: "SHMUP-style game where the player must shoot down incoming threats. 6502 ASM using the CA65 assembler.",
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
      title: "Blog POC",
      description:
        "Ruby on Rails CRUD app. Uses stimulus reflex for websocket features and gems like Devise and Optimism.",
      link: "https://github.com/parkerallan/ror-blog-app/",
    },
  ];

  const createCard = (project) => `
    <div class="card">
      <img class="project-image" src="${project.imgSrc}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p class="subtext">${project.description}</p>
      <hr />
      <p class="subtext"><a class="view-text" href="${project.link}" target="_blank">View Here <i class="fas fa-external-link-alt"></i></a></p>
    </div>
  `;

  // Populate main project container
  const projectContainer = document.getElementById("projects-container");
  projectContainer.innerHTML = projects.map(createCard).join("");

  // Populate hidden content container
  const hiddenContent = document.getElementById("hidden-content");
  hiddenContent.innerHTML = hiddenProjects.map(createCard).join("");
}

function populateBlog() {
  const blogArticles = [
    {
      icon: "fas fa-code",
      title: "Building Modern Web Applications",
      excerpt: "Exploring the latest frameworks and best practices for creating scalable web applications...",
      date: "Dec 15, 2024",
      link: "#"
    },
    {
      icon: "fas fa-bug",
      title: "Advanced Testing Strategies",
      excerpt: "Deep dive into automation testing, TDD, and quality assurance methodologies...",
      date: "Nov 28, 2024",
      link: "#"
    },
    {
      icon: "fas fa-database",
      title: "Database Optimization Techniques",
      excerpt: "Performance tuning and optimization strategies for modern database systems...",
      date: "Nov 10, 2024",
      link: "#"
    },
    {
      icon: "fas fa-rocket",
      title: "DevOps and CI/CD Pipelines",
      excerpt: "Setting up efficient deployment workflows and continuous integration practices...",
      date: "Oct 22, 2024",
      link: "#"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Web Security Best Practices",
      excerpt: "Essential security measures and vulnerability prevention for web applications...",
      date: "Oct 5, 2024",
      link: "#"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design Principles",
      excerpt: "Creating adaptive user interfaces that work seamlessly across all devices...",
      date: "Sep 18, 2024",
      link: "#"
    }
  ];

  const createBlogCard = (article) => `
    <article class="blog-item">
      <div class="blog-icon">
        <i class="${article.icon}"></i>
      </div>
      <div class="blog-content">
        <h3>${article.title}</h3>
        <p class="blog-excerpt">${article.excerpt}</p>
        <div class="blog-meta">
          <span class="blog-date">${article.date}</span>
          <a href="${article.link}" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </article>
  `;

  // Populate blog container
  const blogContainer = document.getElementById("blog-list");
  blogContainer.innerHTML = blogArticles.map(createBlogCard).join("");
}

function viewMore() {
  const btn = document.getElementById("viewBtn")
  const moreProjects = document.getElementById("content");
  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "inline";
    btn.innerHTML = "View Less   <i class='fas fa-arrow-circle-up'></i>";
    
    // Scroll down slightly to show the additional projects
    setTimeout(() => {
      const hiddenContent = document.getElementById("hidden-content");
      hiddenContent.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100); // Small delay to allow content to render
  } else {
    moreProjects.style.display = "none";
    btn.innerHTML = "View Older Projects   <i class='fas fa-arrow-circle-down'></i>";
    
    // Scroll back up to the main projects section
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      projectsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  }
}