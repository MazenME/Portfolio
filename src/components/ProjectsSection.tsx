import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center font-display">
            <span className="text-accent mr-4">04.</span>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-pink mx-auto mb-6 rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className={`project-card rounded-xl overflow-hidden h-64 border border-slate/50 hover:border-${project.borderColor}/50`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="project-info p-4 bg-dark/70  absolute bottom-0 w-full">
                <h3 className="text-xl font-bold text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-gray mb-3">{project.stack}</p>
                <div className="flex justify-between items-center">
                  <a href={project.Link} target="_blank" className="text-xs font-mono text-accent">
                    View Project →
                  </a>
                  <span className="text-xs font-mono text-pink">
                    {project.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/MazenME"
            className="px-6 py-3 bg-transparent border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition btn-hover shadow-lg flex items-center mx-auto"
          >
            View All Projects <span className="ml-2 ">✨</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// Dummy project data (you can move it to JSON or API later)
const projects = [
  {
    title: "Movies Explorer",
    image:
      "/assets/image0.png",
    stack: "React, Bootstrap, Axios, Auth",
    tag: "Featured",
    Link:"https://mazen-me.github.io/Movies/#/home/Home",
    borderColor: "accent",
  },
  {
    title: "Todo List",
    image:
      "/assets/image1.png",
    stack: "React.js, TypeScript, Tailwind CSS, Strapi",
    tag: "Open Source",
    Link:"https://github.com/MazenME/TodoList",
    borderColor: "pink",
  },
  {
    title: "Products Listing",
    image:
      "/assets/image2.png",
    stack: "React, Recoil, Tailwind Css, Pagination",
    tag: "Task Project",
    borderColor: "teal",
  },
//   {
//     title: "Weather Application",
//     image:
//       "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=500&q=80",
//     stack: "JavaScript, API Integration",
//     tag: "Featured",
//     borderColor: "orange",
//   },
//   {
//     title: "Blog Platform",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
//     stack: "React, Strapi, GraphQL",
//     tag: "Open Source",
//     borderColor: "accent",
//   },
//   {
//     title: "Recipe Finder",
//     image:
//       "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=80",
//     stack: "Vue.js, API Integration",
//     tag: "Personal Project",
//     borderColor: "pink",
//   },
];
