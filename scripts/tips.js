const resources = [
     {
        name: "Brigham Young University",
        url: "https://byupathway.edu",
        description: "Bachelor's of Software Development."
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/",
        description: "Comprehensive documentation for web technologies."
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "A Q&A site for programmers."
    },
    {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description: "A website dedicated to CSS and web design."
    },
    {
      name: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/",
      description: "Learn to code for free."
    },
    {
      name: "Scrimba",
      url: "https://scrimba.com/",
      description: "Learn to code with interactive tutorials."
    },
    {
      name: "Wes Bos Courses",
      url: "https://wesbos.com/courses",
      description: "High-quality web development courses."
    },
    {
      name: "Traversy Media",
      url: "https://www.traversymedia.com/",
      description: "Web development tutorials and courses."
    },
    {
      name: "Google Developers",
      url: "https://developers.google.com/",
      description: "Resources for building on Google platforms."
    },
    {
      name: "A List Apart",
      url: "https://alistapart.com/",
      description: "Web design articles and insights."
    },
    {
      name: "Smashing Magazine",
      url: "https://www.smashingmagazine.com/",
      description: "Web design and development articles."
    },
    {
      name: "Codepen",
      url: "https://codepen.io/",
      description: "Online code editor and social community."
    },
    {
      name: "Frontend Masters",
      url: "https://frontendmasters.com/",
      description: "In-depth frontend engineering courses."
    },
    {
      name: "Udemy",
      url: "https://www.udemy.com/",
      description: "Online learning platform with a wide range of courses."
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/",
      description: "Online learning platform with courses from top universities."
    },
    {
      name: "EdX",
      url: "https://www.edx.org/",
      description: "Online learning platform with courses from various institutions."
    },
];

const resourcesList = document.getElementById("resources-list");

resources.forEach(resource => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <a href="${resource.url}" target="_blank">${resource.name}</a>
        <p>${resource.description}</p>
    `;
    resourcesList.appendChild(listItem);
});

const tipForm = document.getElementById("tip-form");

tipForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("tip-name").value;
    const tip = document.getElementById("tip-text").value;

    localStorage.setItem("tip-name", name);
    localStorage.setItem("tip-text", tip);

    alert("Thank you for sharing your tip!");

    document.getElementById("tip-name").value = "";
    document.getElementById("tip-text").value = "";
});

window.addEventListener("load", function() {
    const savedName = localStorage.getItem("tip-name");
    const savedTip = localStorage.getItem("tip-text");

    if (savedName && savedTip) {
  
  
        console.log(`Previous Tip: Name - ${savedName}, Tip - ${savedTip}`);
    }
});
