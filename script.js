document.addEventListener('DOMContentLoaded', function() {
    // Fetch projects from JSON file
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        const projectsContainer = document.getElementById('projects-container');
  
        // Loop through each project in the JSON data
        data.projects.forEach((project, index) => {
          // Create HTML structure for each project
          const projectHtml = `
            <div class="w-full mb-6 md:w-1/2 xl:w-1/3 p-6" data-aos="fade-up" data-aos-offset="200" data-aos-delay="${index * 100}">
              <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src="${project.image}" alt="${project.title} Project Screenshot" class="w-full h-64 object-cover object-center mb-4 transform transition hover:scale-105 duration-700 ease-in-out" />
                <div class="p-6">
                  <h3 class="text-lg font-bold mb-2 text-white">${project.title}</h3>
                  <p class="text-gray-300 mb-4">
                    ${project.description}
                  </p>
                  <div class="relative" data-aos="flip-up">
                    <a href="${project.link}" title="${project.linkTitle}"
                        class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        role="button">
                      ${project.linkTitle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          // Append the project HTML to the container
          projectsContainer.innerHTML += projectHtml;
        });
      })
      .catch(error => console.error('Error fetching projects:', error));
  
    // Initialize AOS once after projects and blogs are dynamically loaded
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  });
  