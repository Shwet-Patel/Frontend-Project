import { skills } from "../data";
import Sectiontitle from "./Sectiontitle";
import Skillcard from "./Skillcard";

const Skills = () => {
    return (
        <div className=" py-20 align-elements" id="skills">
            <Sectiontitle text = "Tech stack"/>
            <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    skills.map((skill) => {
                        return <Skillcard key = {skill.id} {...skill}/>
                    })
                }
            </div>
        </div>
    );
}

export default Skills;