import aboutimg from "../assets/about.svg";
import Sectiontitle from "./Sectiontitle";

const About = () => {
    return (
        <div className="bg-white py-20" id="about">
            <div className="align-elements grid md: grid-cols-2 items-center gap-16">
                <img src={aboutimg} alt="This is aout me."  className="h-64 w-full"/>
                <div>
                    <Sectiontitle text="code & coffee" />
                    <p className=" text-slate-800 mt-8 leading-loose">
                        Hello, I am Shwet Patel. I am currently persuing my B.Tech at DAIICT in ICT program. 
                        Of course i like to code and apart from that i like to read fiction books, listen to music and playing cricket.
                    </p>
                    <p className=" text-slate-800 mt-3 leading-loose">
                        I am good in implementing Data structures and algorithms in an efficient way. 
                        I am passionate about developing responsive websites from scratch using my knowledge 
                        about latest technology in domain of wed development.
                    </p>
                    <p className=" text-slate-800 mt-3 leading-loose">
                    As of now i don't have any profesional working experience. Perhaps you can help me out.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;