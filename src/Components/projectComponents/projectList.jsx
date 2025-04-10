'use client';
// Since githubPages is static site hosting service we must convert the page into use client
// TODO: once hosting changed remove use client and make it back to a server component
// https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

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

export default function ProjectList({ allProjects = []}){
    const projectsToDraw = allProjects.map((projectData, id) => {        
        return <ProjectCard key={id} projectData={projectData}/>;
    });

    return (
        <>
            {projectsToDraw}
        </>
    )
}