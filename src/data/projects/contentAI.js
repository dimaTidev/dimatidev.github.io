import { person_daronRus, person_dimati } from "../persons/persons";
import { stackCSharp, stackJavaScript, stackNextjs, stackReact, stackUnity } from "../etc/stack";
import { platformMobile, platformPC } from "../etc/platforms";
import { FixImagePath } from "@/lib/utils/imagePathUtils";

const imagePath = FixImagePath("/data/projects/contentAI");

export const projectContentAI = {
    id: { 
        current: "contentai" 
    }, 
    title: "ContentAI",
    description: `An app for generating images for AI influencers. Utilizes ComfyUI on the backend gives flexibility in diffusion workflows.`,
    orderRank: 99,
    team:[
        {
            person: person_dimati,
            position: "Senior software developer"
        },
        {
            person: person_daronRus,
            position: "Backend developer"
        }
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
        
    // ],
    galleryScreenshots: [
        { asset:{ url: `${imagePath}/gallery/1.jpg` }},
        { asset:{ url: `${imagePath}/gallery/2.jpg` }},
        { asset:{ url: `${imagePath}/gallery/3.jpg` }},
        { asset:{ url: `${imagePath}/gallery/4.jpg` }},
        { asset:{ url: `${imagePath}/gallery/5.jpg` }},
        { asset:{ url: `${imagePath}/gallery/6.jpg` }},
        { asset:{ url: `${imagePath}/gallery/7.jpg` }},
        { asset:{ url: `${imagePath}/gallery/8.jpg` }},
    ],
    techStack:[
        stackUnity,
        stackCSharp
    ],
    platforms:[
        platformMobile,
    ],
    // callOut: undefined,
    postImages: [
        {
            image:{ asset:{ url: `${imagePath}/postImages/workflows.png` }},
            alt: "comfyUI"
        },
        {
            image:{ asset:{ url: `${imagePath}/postImages/unityEditor.png` }},
            alt: "unityEditor"
        },
    ],
    postRaw: [{children: [{text: 
    `## What problem I tried to solve

    The idea came when I tried to make an AI influencer for Instagram using ComfyUI. I found sometimes it would be handy to have generations portable on mobile. And I started expanding the idea. 

    The decision was to stick with ComfyUI due to familiarity and possible customizations and extensions.

    <br/>

    <Image alt="comfyUI" width="800" height="450"/> 

    ComfyUI

    <br/>

    So the generation work is done on a backend with ComfyUI. On the other hand, the app is built on Unity3d UIToolkit which is very close to HTML and CSS.

    <br/>

    <Image alt="unityEditor" width="800" height="450"/> 

    Unity editor and UIToolkit UI
    `}] }],
}   