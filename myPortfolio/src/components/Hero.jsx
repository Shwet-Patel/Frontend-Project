import { TbMail, TbMailAi, TbMailBolt, TbMailCheck, TbMailCode, TbMailFilled, TbMailbox } from "react-icons/tb";
import heroimg from "../assets/hero.svg";
import { FaLinkedin , FaGithubSquare, FaInstagramSquare, FaMailBulk, FaMailchimp } from "react-icons/fa";

const Hero = () => {
    return(
        <div className=" bg-emerald-100 py-24">
            <div className="align-elements grid md:grid-cols-2 items-center gap-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-wider">Hi,</h1>
                    <h1 className="text-7xl font-bold tracking-wider">I'm <span className=" text-emerald-700">Shwet</span></h1>
                    <p className="mt-4 text-3xl  text-slate-500 tracking-wide capitalize">Front-end Developer</p>
                    <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize">Turning ideas into reality</p>
                    <div className="flex flex-row mt-4 gap-x-4">
                        <a href="https://github.com/Shwet-Patel">
                            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-500"/> 
                        </a>
                        <a href="https://www.linkedin.com/in/shwet-patel-b86338281/">
                            <FaLinkedin className="h-8 w-8  text-slate-500 hover:text-black duration-500"/>
                        </a>
                        <a href="mailto:shwetpatel2712@gmail.com">
                            <TbMailFilled className="h-8 w-8  text-slate-500 hover:text-black duration-500"/>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src={heroimg} alt="It's me" className="h-80 lg:h-96" />
                </div>
                
            </div>
        </div>
    );
}

export default Hero;