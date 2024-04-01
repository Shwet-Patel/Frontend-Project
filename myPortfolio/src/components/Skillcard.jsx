const Skillcard = (skill) => {
    const {icon,title,text} = skill;

    return(
        <div>
            <span>{icon}</span>
            <h4 className="mt-6 font-bold">{title}</h4>
            <h2 className="mt-2 text-slate-500">{text}</h2>
        </div>

    );
}

export default Skillcard