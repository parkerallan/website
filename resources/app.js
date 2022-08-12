const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

//handler for web/mobile section
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

//handler for AI/embedded section
/*function viewMore() {
  const btn = document.getElementById("viewBtn")
  const moreProjects = document.getElementById("content2");
  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "inline";
    btn.innerHTML = "View Less   <i class='fas fa-arrow-circle-up'></i>";
  } else {
    moreProjects.style.display = "none";
    btn.innerHTML = "View Older Projects   <i class='fas fa-arrow-circle-down'></i>";
  }
}*/