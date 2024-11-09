

import ProjectCard from "../components/ProjectCard"


const projects = [
    {
    title: 'Calculator',
    description: 'A simple calculator application built with TypeScript.',
    githubLink:" https://github.com/sanastudent/simple-calculator.git",
    imageUrl :"/calculator.jpg",
  },
  {
    title: 'ATM',
    description: "An interactive ATM simulation project built with TypeScript.",
    githubLink:" https://github.com/sanastudent/MY_ATM.git",
    imageUrl :"/atm.jpg",
  },
  {
    title: 'ToDoApp',
    description: "A TypeScript-based To-Do app for managing daily tasks efficiently.",
    githubLink:"https://github.com/sanastudent/To_Do_List.git",
    imageUrl :"/todo.jpg",
  },
  {
    title: 'Currency converter',
    description: "A TypeScript project for converting currencies with real-time rates.",
    githubLink:" https://github.com/sanastudent/Currency_converter.git",
    imageUrl :"/currency.jpg",
  },

  {
    title: 'word counter',
    description: "A TypeScript project for converting currencies with real-time rates.",
    githubLink:" https://github.com/sanastudent/WORD_COUNTER.git",
    imageUrl :"/word.jpg",
  },
  {
    title: 'number guessing',
    description: "A TypeScript project for converting currencies with real-time rates.",
    githubLink:" https://github.com/sanastudent/NUMBER_GUESSING.git",
    imageUrl :"/numbergu.jpg",
  },


];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-emerald-800">My Projects Collection</h1>
      <p className="mb-9 font-semibold from-neutral-800">This collection features a series of interactive applications built using TypeScript, each designed to showcase fundamental
      programming concepts and the benefits of strong typing, maintainability, and scalability.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;