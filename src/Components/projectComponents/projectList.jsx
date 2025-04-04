import ProjectCard, { ProjectCardLoading } from "./projectCard";

export function ProjectListLoading(){
    const allProjects = Array.from(Array(6).keys());
    return (
        <>
            {allProjects.map((el, id) => {
                return <ProjectCardLoading key={id}/>
            })}
        </>
    )
}

export default async function ProjectList({ allProjects = []}){
    const projectsToDraw = allProjects.map((projectData, id) => {        
        return <ProjectCard key={id} projectData={projectData}/>;
    });

    return (
        <>
            {projectsToDraw}
        </>
    )
}