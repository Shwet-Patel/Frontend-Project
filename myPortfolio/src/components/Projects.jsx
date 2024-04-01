import {projects} from "../data";
import Sectiontitle from "../components/Sectiontitle";
import Projectscard from "./Projectscard";

const Projects = () => {
    return (
        <div className="align-elements py-20" id="projects">
            <Sectiontitle text="Web creations" />
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => {
                    return <Projectscard  key={project.id} {...project}/>
                })}
            </div>
        </div>
    );
}

export default Projects;