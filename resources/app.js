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
  init3DArt(); // Initialize 3D Art model viewer
});

// Floating Arrow Navigation
function initFloatingArrow() {
  const floatingArrow = document.getElementById('floating-arrow');
  const arrowIcon = floatingArrow.querySelector('i');
  const sections = ['about-me', 'projects', '3d-art', 'blog', 'contact'];
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
        imgSrc: "resources/images/starstrike64.png",
        title: "StarStrike 64",
        description: "Nintendo 64 shmup/rails shooter mecha game. Written in C, using LibDragon SDK/Tiny3D.",
        link: "https://github.com/parkerallan/starstrike64"
    },
    {
        imgSrc: "resources/images/exporter.png",
        title: "Playstation 1 Blender Exporter",
        description: "Blender addon that exports models and animation data for PSY-Q or PsyQo PlayStation 1 development",
        link: "https://github.com/parkerallan/PS1-Blender-Exporter"
    },
    {
        imgSrc: "resources/images/drift.png",
        title: "Drift64 Demo",
        description: "Car selection demo rendered using Nintendo 64 hardware. Written in C, using LibDragon SDK/Tiny3D.",
        link: "https://youtu.be/LnZYQuai8as"
    },
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
      icon: "fas fa-gamepad",
      title: "Dream World is Live!",
      excerpt: "My first large-scale Unity project and lessons learned.",
      date: "November 15th, 2025",
      link: "/blog/dreamworld-is-live/"
    },
    {
      icon: "fas fa-rocket",
      title: "Blog is Now Live!",
      excerpt: "This is where I plan to share insights into my projects and more.",
      date: "July 4th, 2025",
      link: "/blog/blog-is-live/"
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

// 3D Art Model Viewer
function init3DArt() {
  const modelViewer = document.getElementById('character-model');
  const modelSelect = document.getElementById('model-select');
  const animationSelect = document.getElementById('animation-select');
  const outfitSelect = document.getElementById('outfit-select');

  if (!modelViewer) return;

  // ============================================
  // MODEL CONFIGURATION - Add new models here!
  // ============================================
  const modelsConfig = {
    'osaka': {
      name: 'Ayumu Kasuga "Osaka"',
      file: 'resources/models/osaka.glb',
      defaultAnimation: 'Idle',
      camera: {
        orbit: '0deg 75deg 4m',
        minOrbit: 'auto auto 8m',
        maxOrbit: 'auto auto 8m'
      },
      outfits: {
        'summer': {
          label: 'Summer Outfit',
          show: ['summerskirt', 'summershirt', 'tie2'],
          hide: ['winterskirt', 'wintershirt', 'tie3']
        },
        'winter': {
          label: 'Winter Outfit',
          show: ['winterskirt', 'wintershirt', 'tie3'],
          hide: ['summerskirt', 'summershirt', 'tie2']
        }
      },
      defaultOutfit: 'winter'
    }
    // Add more models here:
    // 'modelName': {
    //   name: 'Display Name',
    //   file: 'resources/models/filename.glb',
    //   defaultAnimation: 'Idle',
    //   camera: { orbit: '0deg 75deg 4m', minOrbit: 'auto auto 2m', maxOrbit: 'auto auto 8m' },
    //   outfits: {
    //     'outfitKey': { label: 'Display Name', show: ['material1'], hide: ['material2'] }
    //   },
    //   defaultOutfit: 'outfitKey'
    // }
  };

  let currentModelConfig = null;

  // Initialize model selector dropdown
  function initModelSelector() {
    modelSelect.innerHTML = '';
    Object.entries(modelsConfig).forEach(([key, config], index) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = config.name;
      if (index === 0) option.selected = true;
      modelSelect.appendChild(option);
    });

    // Load the first model
    const firstModelKey = Object.keys(modelsConfig)[0];
    loadModel(firstModelKey);
  }

  // Load a model by key
  function loadModel(modelKey) {
    currentModelConfig = modelsConfig[modelKey];
    if (!currentModelConfig) return;

    // Set camera position
    modelViewer.setAttribute('camera-orbit', currentModelConfig.camera.orbit);
    modelViewer.setAttribute('min-camera-orbit', currentModelConfig.camera.minOrbit);
    modelViewer.setAttribute('max-camera-orbit', currentModelConfig.camera.maxOrbit);

    // Load the model file
    modelViewer.src = currentModelConfig.file;

    // Update outfit dropdown
    updateOutfitDropdown();
  }

  // Update outfit dropdown based on current model
  function updateOutfitDropdown() {
    outfitSelect.innerHTML = '';
    
    if (!currentModelConfig || !currentModelConfig.outfits) {
      outfitSelect.style.display = 'none';
      return;
    }

    outfitSelect.style.display = 'block';
    Object.entries(currentModelConfig.outfits).forEach(([key, outfit]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = outfit.label;
      if (key === currentModelConfig.defaultOutfit) option.selected = true;
      outfitSelect.appendChild(option);
    });
  }

  // Handle model load event
  modelViewer.addEventListener('load', () => {
    console.log('3D Model loaded:', currentModelConfig?.name);
    
    // Update animation dropdown from model
    const availableAnimations = modelViewer.availableAnimations;
    
    if (availableAnimations && availableAnimations.length > 0) {
      animationSelect.innerHTML = '';
      
      availableAnimations.forEach((animName) => {
        const option = document.createElement('option');
        option.value = animName;
        option.textContent = animName;
        
        if (animName === currentModelConfig?.defaultAnimation) {
          option.selected = true;
        }
        
        animationSelect.appendChild(option);
      });
      
      // Set default animation
      if (currentModelConfig?.defaultAnimation) {
        modelViewer.animationName = currentModelConfig.defaultAnimation;
      }
    }

    // Log available materials for debugging
    if (modelViewer.model && modelViewer.model.materials) {
      console.log('Available materials:', modelViewer.model.materials.map(m => m.name));
      
      // Apply default outfit
      if (currentModelConfig?.defaultOutfit) {
        updateMeshVisibility(currentModelConfig.defaultOutfit);
      }
    }
  });

  // Handle model selection change
  modelSelect.addEventListener('change', (event) => {
    loadModel(event.target.value);
  });

  // Handle animation selection
  animationSelect.addEventListener('change', (event) => {
    modelViewer.animationName = event.target.value;
    modelViewer.play();
  });

  // Handle outfit selection
  outfitSelect.addEventListener('change', (event) => {
    updateMeshVisibility(event.target.value);
  });

  // Helper function to update alpha value on a material
  function updateAlphaValue(material, alpha) {
    if (!material) return;
    if (alpha === 1) {
      material.setAlphaMode('OPAQUE');
    } else {
      material.setAlphaMode('BLEND');
      const pbr = material.pbrMetallicRoughness;
      const baseColor = pbr.baseColorFactor;
      baseColor[3] = alpha;
      pbr.setBaseColorFactor(baseColor);
    }
  }

  // Function to update mesh visibility based on outfit selection
  function updateMeshVisibility(outfitKey) {
    if (!modelViewer.model || !currentModelConfig?.outfits) return;

    const outfit = currentModelConfig.outfits[outfitKey];
    if (!outfit) return;

    // Show materials for this outfit
    outfit.show.forEach(materialName => {
      const material = modelViewer.model.getMaterialByName(materialName);
      updateAlphaValue(material, 1);
    });

    // Hide materials not in this outfit
    outfit.hide.forEach(materialName => {
      const material = modelViewer.model.getMaterialByName(materialName);
      updateAlphaValue(material, 0);
    });

    console.log('Outfit changed to:', outfitKey);
  }

  // Handle model errors
  modelViewer.addEventListener('error', (event) => {
    console.error('Error loading 3D model:', event);
  });

  // Initialize
  initModelSelector();
}