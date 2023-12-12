function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* MOBILE PROJECT TAB */

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.project-nav:first-child').classList.add('project-active');
  document.querySelectorAll('.project-nav').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelectorAll('.project-nav').forEach(function(innerLink) {
        innerLink.classList.remove('project-active');
      });
      link.classList.add('project-active');
    });
  });
});


/* CODEGEN TAB */

let mobile_currentTab = 1; // Initialize current tab index

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#codegen-tab-mobile");
  tabs.forEach((tab, index) => {
    if (index !== 0) {
      tab.classList.add("mobile-hide-tab");
    }
  });
});




function togglecurretClass(element) {
  var links = document.querySelectorAll('.click-dot a');
  
  const tabs = document.querySelectorAll("#codegen-tab-mobile");
  tabs.forEach(tab => tab.classList.add("mobile-hide-tab"));
  
  links.forEach(function(link) {
    link.classList.remove('current');
  });
  element.classList.add('current');

  console.log(element);

  

}

/* PROJECT TAB */

/* const picaiContainer_mobile = document.querySelector('.picai-container-mobile');
picaiContainer_mobile.style.display = "none";
 */

/* function projectTab(direction) {
  const codegenContainer = document.querySelector('.codegen-container-mobile');
  const picaiContainer_mobile = document.querySelector('.picai-container-mobile');

  if (direction === 'left') {
    codegenContainer.style.display = 'block';
    picaiContainer_mobile.style.display = 'none';
  } else if (direction === 'right') {
    codegenContainer.style.display = 'none';
    picaiContainer_mobile.style.display = 'block';

  }
} */


/* ------------------------------------------------- */



/* TECH SLIDER */



let techTab = 1; // Initialize current tab index

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".stack-nav");
  tabs.forEach((tab, index) => {
    if (index !== 0) {
      tab.classList.add("hide-tab");
    }
  });
});


function techSlide(direction) {
  const tabs = document.querySelectorAll('.stack-nav');

  tabs.forEach(tab => tab.classList.add("hide-tab")); // Hide all tabs

  if (direction === 'left') {
    techTab = (techTab === 1) ? 2 : 1;
  } else if (direction === 'right') {
    techTab = (techTab === 2) ? 1 : 2;
  }

  tabs[techTab - 1].classList.remove('hide-tab'); // Show the selected tab
}
