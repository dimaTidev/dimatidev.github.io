import { person_daronRus, person_dimati, person_eugenyiriev, person_nastya } from "../persons/persons";
import { stackJavaScript, stackNextjs, stackNodeJs as stackNodejs, stackReact } from "../etc/stack";
import { platformPC } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/forgeflow");

export const projectForgeflow = {
    id: { 
        current: "forgeflow" 
    }, 
    title: "Forgeflow",
    description: `Forgeflow is a no-code automation platform that allows users to visually create and automate workflows across various applications. It offers a user-friendly interface for building complex automations without coding knowledge, enabling businesses to streamline processes and enhance productivity.`,
    orderRank: 97,
    team:[
        {
            person: person_dimati,
            position: "Technical Lead\nFull-stack developer"
        },
        {
            person: person_daronRus,
            position: "Research engineer"
        },
        {
            person: person_nastya,
            position: "Frontend developer"
        },
        {
            person: person_eugenyiriev,
            position: "Full-stack developer"
        },
    ],
    previewImage:{
        asset:{ url: `${imagePath}/preview.jpg` }
    },
    // previewAnimation:{
    //     asset:{
    //         url: "next.svg"
    //     }
    // },
    // videoLinks: [
    //     `https://www.youtube.com/embed/ObzeMGdZ3Vo`,
    // ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/1.jpg` }},
        { asset:{ url: `${imagePath}/gallery/2.jpg` }},
        { asset:{ url: `${imagePath}/gallery/7.jpg` }},
        { asset:{ url: `${imagePath}/gallery/5.jpg` }},
        { asset:{ url: `${imagePath}/gallery/6.jpg` }},
        { asset:{ url: `${imagePath}/gallery/0.jpg` }},
    ],
    techStack:[
        stackNextjs,
        stackReact,
        stackNodejs,
        stackJavaScript
    ],
    platforms:[
        platformPC,
    ],
    callOut: "Currently is under development 🚀",
    postImages: [
        {
            image:{ asset:{ url: `${imagePath}/postImages/notion_0.jpg` }},
            alt: "notion tasks"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/notion_1.jpg` }},
            alt: "notion tasks 2"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/nodesExecutionOrder.jpg` }},
            alt: "nodes execution"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/nodesDataOrder.jpg` }},
            alt: "nodes data order"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/draggableTags.gif` }},
            alt: "draggable tags"
        },
    ],
    postRaw: [{children: [{text: 
    `This project was a challenge and helped me grow as a leader and organizer.
    
    <br/>
    ## Challenges:
    Being a leader is not easy. I had to clearly share my vision, plan tasks, organize sprints, assign work based on skills, keep everyone busy, and track the progress. 
    
    The biggest lesson I learned is that I can't spend too much time on deep coding tasks because I need to manage the team, so I need to pick up tasks for myself carefully and not jump into something long playing.

    To manage tasks, I built a custom Notion board, which gave us more flexibility than Jira.
    <Image alt="notion tasks" width="800" height="450"/> 
    Task management in Notion
    <Image alt="notion tasks 2" width="800" height="450"/> 
    Task management in Notion

    <br/>
    Another challenge was in development, particularly workflow execution. A workflow can have many connected nodes, and we needed a way to run them in the right order, even if we started from a random node. Well, I implemented modified BFS and DFS algorithms to achieve the correct execution order even if we start the execution from a random node in the tree.
    <Image alt="nodes execution" width="800" height="450"/> 
    Nodes execution order test
    <Image alt="nodes data order" width="800" height="450"/> 
    Nodes data order test

     <br/>
    We also had to handle variable tags on nodes. To do this, I learned more about regex and used it to create draggable and reorderable tags.
    <Image alt="draggable tags" width="800" height="450"/>
    Variable tags interactions

     <br/>
    I also set up a GitHub pipeline to run automatic tests, build the project, and deploy it to a server.
    `}] }],
}   