import PortfolioItem from "../components/PortfolioItem";
import { projects } from "../constants";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8 bg-primary text-accent">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-secondary font-bold text-center mb-8">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
